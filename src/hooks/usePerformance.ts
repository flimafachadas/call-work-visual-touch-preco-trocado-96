
import { useEffect, useRef, useCallback } from 'react';
import { APP_CONFIG } from '@/constants/app';

interface PerformanceMetrics {
  renderTime: number;
  componentName: string;
  timestamp: number;
  memoryUsage?: number;
}

class PerformanceTracker {
  private static metrics: PerformanceMetrics[] = [];
  private static readonly isDevelopment = process.env.NODE_ENV === 'development';
  private static cleanupInterval: NodeJS.Timeout | null = null;

  static {
    // Inicializar limpeza automática em desenvolvimento
    if (this.isDevelopment && typeof window !== 'undefined') {
      this.startMemoryCleanup();
    }
  }

  private static startMemoryCleanup(): void {
    this.cleanupInterval = setInterval(() => {
      this.cleanupOldMetrics();
    }, APP_CONFIG.PERFORMANCE.MEMORY_CLEANUP_INTERVAL);
  }

  private static cleanupOldMetrics(): void {
    const cutoffTime = Date.now() - APP_CONFIG.PERFORMANCE.MEMORY_CLEANUP_INTERVAL;
    this.metrics = this.metrics.filter(metric => metric.timestamp > cutoffTime);
  }

  static addMetric(metric: PerformanceMetrics): void {
    if (!this.isDevelopment) return;
    
    this.metrics.push(metric);
    
    // Manter apenas as métricas mais recentes para otimizar memória
    if (this.metrics.length > APP_CONFIG.PERFORMANCE.MAX_METRICS) {
      this.metrics = this.metrics.slice(-APP_CONFIG.PERFORMANCE.MAX_METRICS);
    }
    
    // Log apenas se o tempo de render for significativo (apenas em dev)
    if (this.isDevelopment && metric.renderTime > APP_CONFIG.PERFORMANCE.RENDER_THRESHOLD) {
      console.log(`${metric.componentName} render: ${metric.renderTime.toFixed(2)}ms`);
    }
  }

  static getAverageRenderTime(componentName: string): number {
    const componentMetrics = this.metrics.filter(m => m.componentName === componentName);
    if (componentMetrics.length === 0) return 0;
    
    const total = componentMetrics.reduce((sum, metric) => sum + metric.renderTime, 0);
    return total / componentMetrics.length;
  }

  static getSlowComponents(threshold = APP_CONFIG.PERFORMANCE.SLOW_COMPONENT_THRESHOLD): Array<{ name: string; avgTime: number }> {
    const componentNames = [...new Set(this.metrics.map(m => m.componentName))];
    return componentNames
      .map(name => ({
        name,
        avgTime: this.getAverageRenderTime(name)
      }))
      .filter(component => component.avgTime > threshold)
      .sort((a, b) => b.avgTime - a.avgTime);
  }

  static clearMetrics(): void {
    this.metrics = [];
  }

  static destroy(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
      this.cleanupInterval = null;
    }
    this.clearMetrics();
  }
}

export const usePerformanceMonitoring = (componentName: string) => {
  const startTimeRef = useRef<number>();
  const isUnmountedRef = useRef(false);

  useEffect(() => {
    if (!PerformanceTracker['isDevelopment']) return;
    
    isUnmountedRef.current = false;
    startTimeRef.current = performance.now();
    
    return () => {
      isUnmountedRef.current = true;
      if (startTimeRef.current && !isUnmountedRef.current) {
        const endTime = performance.now();
        const renderTime = endTime - startTimeRef.current;
        
        // Adicionar informações de memória se disponível
        const memoryUsage = (performance as any).memory?.usedJSHeapSize;
        
        PerformanceTracker.addMetric({
          renderTime,
          componentName,
          timestamp: Date.now(),
          memoryUsage
        });
      }
    };
  }, [componentName]);

  // Cleanup na desmontagem do componente
  useEffect(() => {
    return () => {
      isUnmountedRef.current = true;
    };
  }, []);

  // Retornar utilitários memoizados
  return {
    getAverageRenderTime: useCallback(() => PerformanceTracker.getAverageRenderTime(componentName), [componentName]),
    getSlowComponents: useCallback(() => PerformanceTracker.getSlowComponents(), []),
    clearMetrics: useCallback(() => PerformanceTracker.clearMetrics(), [])
  };
};

// Hook otimizado para detectar re-renders excessivos
export const useRenderCount = (componentName: string) => {
  const renderCount = useRef(0);
  const warningShown = useRef(false);
  
  useEffect(() => {
    renderCount.current += 1;
    
    if (process.env.NODE_ENV === 'development' && 
        renderCount.current > 15 && 
        !warningShown.current) {
      console.warn(`${componentName} has rendered ${renderCount.current} times - consider optimization`);
      warningShown.current = true;
    }
  });

  return renderCount.current;
};

// Hook para monitorar uso de memória
export const useMemoryMonitoring = () => {
  const logMemoryUsage = useCallback(() => {
    if (process.env.NODE_ENV === 'development' && (performance as any).memory) {
      const memory = (performance as any).memory;
      console.log(`Memory usage: ${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`);
    }
  }, []);

  return { logMemoryUsage };
};
