
import { useState, useCallback, useMemo, useRef, useEffect } from 'react';

interface UseOptimizedStateOptions<T> {
  initialValue: T;
  debounceMs?: number;
  equalityFn?: (prev: T, next: T) => boolean;
  onStateChange?: (newState: T, prevState: T) => void;
}

export function useOptimizedState<T>({
  initialValue,
  debounceMs = 0,
  equalityFn = (prev, next) => Object.is(prev, next),
  onStateChange
}: UseOptimizedStateOptions<T>) {
  const [state, setState] = useState<T>(initialValue);
  const prevStateRef = useRef<T>(initialValue);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const isMountedRef = useRef(true);

  const debouncedSetState = useCallback((newState: T | ((prev: T) => T)) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (!isMountedRef.current) return;
      
      setState(prevState => {
        const nextState = typeof newState === 'function' 
          ? (newState as (prev: T) => T)(prevState)
          : newState;

        if (!equalityFn(prevState, nextState)) {
          onStateChange?.(nextState, prevState);
          prevStateRef.current = nextState;
          return nextState;
        }

        return prevState;
      });
    }, debounceMs);
  }, [debounceMs, equalityFn, onStateChange]);

  const immediateSetState = useCallback((newState: T | ((prev: T) => T)) => {
    if (!isMountedRef.current) return;
    
    setState(prevState => {
      const nextState = typeof newState === 'function' 
        ? (newState as (prev: T) => T)(prevState)
        : newState;

      if (!equalityFn(prevState, nextState)) {
        onStateChange?.(nextState, prevState);
        prevStateRef.current = nextState;
        return nextState;
      }

      return prevState;
    });
  }, [equalityFn, onStateChange]);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const memoizedState = useMemo(() => state, [state]);

  return {
    state: memoizedState,
    setState: debounceMs > 0 ? debouncedSetState : immediateSetState,
    immediateSetState,
    debouncedSetState,
    previousState: prevStateRef.current
  };
}

// Hook otimizado para localStorage com tratamento de erros robusto
export function useLocalStorageState<T>(
  key: string, 
  initialValue: T,
  options?: Omit<UseOptimizedStateOptions<T>, 'initialValue'>
) {
  const getStoredValue = useCallback(() => {
    if (typeof window === 'undefined') return initialValue;
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  }, [key, initialValue]);

  const [storedValue, setStoredValue] = useState<T>(getStoredValue);

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    if (typeof window === 'undefined') return;
    
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      options?.onStateChange?.(valueToStore, storedValue);
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue, options]);

  const clearState = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.warn(`Error clearing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  return {
    state: storedValue,
    setState: setValue,
    clearState
  };
}
