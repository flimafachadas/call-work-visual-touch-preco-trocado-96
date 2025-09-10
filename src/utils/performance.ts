// Performance utilities with production safety

type LogLevel = 'log' | 'warn' | 'error';

class ProductionSafeLogger {
  private static isDevelopment = process.env.NODE_ENV === 'development';

  static log(message: string, ...args: any[]): void {
    if (this.isDevelopment) {
      console.log(message, ...args);
    }
  }

  static warn(message: string, ...args: any[]): void {
    if (this.isDevelopment) {
      console.warn(message, ...args);
    }
  }

  static error(message: string, ...args: any[]): void {
    // Always log errors, even in production
    console.error(message, ...args);
  }

  static conditionalLog(level: LogLevel, condition: boolean, message: string, ...args: any[]): void {
    if (condition && this.isDevelopment) {
      console[level](message, ...args);
    }
  }
}

// Debounce utility
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// Throttle utility
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let isThrottled = false;
  
  return (...args: Parameters<T>) => {
    if (!isThrottled) {
      func(...args);
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, delay);
    }
  };
}

// Memoization utility
export function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map();
  
  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

// Safe async operation wrapper
export async function safeAsync<T>(
  operation: () => Promise<T>,
  fallback?: T,
  errorMessage?: string
): Promise<T | undefined> {
  try {
    return await operation();
  } catch (error) {
    ProductionSafeLogger.error(errorMessage || 'Async operation failed:', error);
    return fallback;
  }
}

// Export the logger
export { ProductionSafeLogger as Logger };