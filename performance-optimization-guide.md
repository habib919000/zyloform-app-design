# Performance Optimization Guide for Zyloform React Form Builder

## 1. Tools for Profiling React Component Rendering

### 1.1 React DevTools Profiler
**Installation & Setup:**
```bash
# Install React DevTools Browser Extension
# Chrome: https://chrome.google.com/webstore/detail/react-developer-tools/
# Firefox: https://addons.mozilla.org/en-US/firefox/addon/react-devtools/

# For development builds, ensure React.StrictMode is enabled
```

**Profiling Your Components:**
```tsx
// App.tsx - Add Profiler wrapper for production monitoring
import { Profiler } from 'react';

function onRenderCallback(id: string, phase: string, actualDuration: number) {
  if (process.env.NODE_ENV === 'development') {
    console.log('Component:', id, 'Phase:', phase, 'Duration:', actualDuration);
  }
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <div className="App">
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        <Profiler id="CurrentPage" onRender={onRenderCallback}>
          {renderCurrentPage()}
        </Profiler>
      </div>
    </Profiler>
  );
}
```

### 1.2 Chrome DevTools Performance Tab
**Key Metrics to Monitor:**
```javascript
// Performance monitoring script
const performanceObserver = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === 'measure') {
      console.log(`${entry.name}: ${entry.duration}ms`);
    }
  });
});

performanceObserver.observe({ entryTypes: ['measure', 'navigation'] });

// Measure specific operations
performance.mark('colorChange-start');
// ... color change logic
performance.mark('colorChange-end');
performance.measure('colorChange', 'colorChange-start', 'colorChange-end');
```

### 1.3 Bundle Analyzer Tools
```bash
# Install webpack-bundle-analyzer
npm install --save-dev webpack-bundle-analyzer

# Add to package.json
"scripts": {
  "analyze": "npm run build && npx webpack-bundle-analyzer build/static/js/*.js"
}

# Alternative: source-map-explorer
npm install --save-dev source-map-explorer
"analyze": "npm run build && npx source-map-explorer 'build/static/js/*.js'"
```

### 1.4 React Performance Monitoring
```tsx
// hooks/usePerformance.ts
import { useEffect, useRef } from 'react';

export const usePerformance = (componentName: string) => {
  const renderStart = useRef<number>();
  
  useEffect(() => {
    renderStart.current = performance.now();
  });

  useEffect(() => {
    if (renderStart.current) {
      const renderTime = performance.now() - renderStart.current;
      if (renderTime > 16) { // More than one frame
        console.warn(`${componentName} render took ${renderTime}ms`);
      }
    }
  });
};

// Usage in ColorSettingsPage.tsx
export function ColorSettingsPage(props) {
  usePerformance('ColorSettingsPage');
  // ... rest of component
}
```

## 2. Common Performance Issues in Drag-and-Drop Interfaces

### 2.1 Frequent Re-renders During Drag Operations
**Problem Analysis for Your App:**
```tsx
// Current potential issue in ColorSettingsPage.tsx
const ColorSettingsPage = ({ onColorsChange }) => {
  const [colors, setColors] = useState(defaultColors);
  
  // This could cause re-renders on every color change
  const handleColorChange = (key: string, value: string) => {
    const newColors = { ...colors, [key]: value };
    setColors(newColors);
    onColorsChange(newColors); // Immediate callback
  };
};
```

**Optimized Solution:**
```tsx
// Optimized ColorSettingsPage with debounced updates
import { useMemo, useCallback, useRef } from 'react';
import { debounce } from 'lodash';

const ColorSettingsPage = ({ onColorsChange }) => {
  const [colors, setColors] = useState(defaultColors);
  const dragStateRef = useRef({ isDragging: false });
  
  // Debounce external callbacks during drag operations
  const debouncedOnColorsChange = useCallback(
    debounce((newColors) => {
      if (!dragStateRef.current.isDragging) {
        onColorsChange(newColors);
      }
    }, 100),
    [onColorsChange]
  );

  // Optimized color change handler
  const handleColorChange = useCallback((key: string, value: string) => {
    setColors(prev => {
      const newColors = { ...prev, [key]: value };
      debouncedOnColorsChange(newColors);
      return newColors;
    });
  }, [debouncedOnColorsChange]);

  // Drag state management
  const handleDragStart = useCallback(() => {
    dragStateRef.current.isDragging = true;
  }, []);

  const handleDragEnd = useCallback(() => {
    dragStateRef.current.isDragging = false;
    onColorsChange(colors); // Send final update
  }, [colors, onColorsChange]);
};
```

### 2.2 DOM Manipulation Performance
**Optimized Color Picker Component:**
```tsx
// components/OptimizedColorPicker.tsx
import { memo, useCallback, useMemo } from 'react';

interface OptimizedColorPickerProps {
  colors: ColorSettings;
  onColorChange: (key: string, value: string) => void;
  activeField?: string;
}

export const OptimizedColorPicker = memo<OptimizedColorPickerProps>(({
  colors,
  onColorChange,
  activeField
}) => {
  // Memoize color entries to prevent recreation
  const colorEntries = useMemo(() => 
    Object.entries(colors).map(([key, value]) => ({ key, value })),
    [colors]
  );

  // Memoize event handlers
  const handleColorClick = useCallback((key: string) => {
    // Only update if actually different
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      if (colors[key as keyof ColorSettings] !== newValue) {
        onColorChange(key, newValue);
      }
    };
  }, [colors, onColorChange]);

  return (
    <div className="color-picker-grid">
      {colorEntries.map(({ key, value }) => (
        <ColorSwatch
          key={key}
          colorKey={key}
          value={value}
          onChange={handleColorClick(key)}
          isActive={activeField === key}
        />
      ))}
    </div>
  );
});

// Memoized color swatch component
const ColorSwatch = memo<{
  colorKey: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isActive: boolean;
}>(({ colorKey, value, onChange, isActive }) => (
  <div className={`color-swatch ${isActive ? 'active' : ''}`}>
    <input
      type="color"
      value={value}
      onChange={onChange}
      aria-label={`${colorKey} color picker`}
    />
  </div>
));
```

### 2.3 Virtual Scrolling for Large Lists
```tsx
// components/VirtualizedFormList.tsx
import { FixedSizeList as List } from 'react-window';

interface VirtualizedFormListProps {
  forms: FormTemplate[];
  onFormSelect: (form: FormTemplate) => void;
  height: number;
}

export const VirtualizedFormList = ({ forms, onFormSelect, height }: VirtualizedFormListProps) => {
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={style}>
      <FormTemplateCard
        template={forms[index]}
        onClick={() => onFormSelect(forms[index])}
      />
    </div>
  );

  return (
    <List
      height={height}
      itemCount={forms.length}
      itemSize={120} // Height of each form template card
      overscanCount={5} // Render 5 extra items for smooth scrolling
    >
      {Row}
    </List>
  );
};
```

## 3. Optimizing Large Form Sets

### 3.1 Form Template Lazy Loading
```tsx
// hooks/useFormTemplates.ts
import { useState, useEffect, useCallback } from 'react';

interface UseFormTemplatesReturn {
  templates: FormTemplate[];
  loading: boolean;
  error: string | null;
  loadMore: () => void;
  hasMore: boolean;
}

export const useFormTemplates = (pageSize: number = 20): UseFormTemplatesReturn => {
  const [templates, setTemplates] = useState<FormTemplate[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const loadTemplates = useCallback(async (pageNum: number) => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API call - replace with actual API
      const startIndex = pageNum * pageSize;
      const endIndex = startIndex + pageSize;
      
      // Import form templates dynamically
      const { formTemplates } = await import('../data/FormTemplates');
      const pageTemplates = formTemplates.slice(startIndex, endIndex);
      
      if (pageNum === 0) {
        setTemplates(pageTemplates);
      } else {
        setTemplates(prev => [...prev, ...pageTemplates]);
      }
      
      setHasMore(pageTemplates.length === pageSize);
    } catch (err) {
      setError('Failed to load form templates');
    } finally {
      setLoading(false);
    }
  }, [pageSize]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      loadTemplates(nextPage);
    }
  }, [loading, hasMore, page, loadTemplates]);

  useEffect(() => {
    loadTemplates(0);
  }, [loadTemplates]);

  return { templates, loading, error, loadMore, hasMore };
};
```

### 3.2 Optimized Form Rendering
```tsx
// components/OptimizedFormRenderer.tsx
import { memo, useMemo } from 'react';

interface OptimizedFormRendererProps {
  template: FormTemplate;
  colors: ColorSettings;
  formData: Record<string, any>;
  onFieldChange?: (fieldName: string, value: any) => void;
}

export const OptimizedFormRenderer = memo<OptimizedFormRendererProps>(({
  template,
  colors,
  formData,
  onFieldChange
}) => {
  // Memoize styles to prevent recalculation
  const formStyles = useMemo(() => ({
    backgroundColor: colors.formBackgroundColor,
    borderColor: colors.formBackgroundBorderColor,
    color: colors.fieldLabelTextColor
  }), [colors.formBackgroundColor, colors.formBackgroundBorderColor, colors.fieldLabelTextColor]);

  const fieldStyles = useMemo(() => ({
    backgroundColor: colors.fieldBackgroundColor,
    borderColor: colors.fieldBorderColor,
    color: colors.inputTextColor
  }), [colors.fieldBackgroundColor, colors.fieldBorderColor, colors.inputTextColor]);

  // Memoize fields to prevent recreation
  const renderedFields = useMemo(() => 
    template.fields.map(field => (
      <OptimizedFormField
        key={field.id}
        field={field}
        value={formData[field.name] || ''}
        styles={fieldStyles}
        colors={colors}
        onChange={onFieldChange}
      />
    )),
    [template.fields, formData, fieldStyles, colors, onFieldChange]
  );

  return (
    <form style={formStyles} className="form-preview">
      <h2>{template.name}</h2>
      {renderedFields}
      <button
        type="submit"
        style={{
          backgroundColor: colors.buttonBG,
          borderColor: colors.buttonBorder,
          color: colors.buttonTextColor
        }}
      >
        Submit
      </button>
    </form>
  );
});

// Memoized form field component
const OptimizedFormField = memo<{
  field: FormField;
  value: any;
  styles: React.CSSProperties;
  colors: ColorSettings;
  onChange?: (fieldName: string, value: any) => void;
}>(({ field, value, styles, colors, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange?.(field.name, e.target.value);
  };

  if (field.type === 'textarea') {
    return (
      <div className="form-field">
        <label style={{ color: colors.fieldLabelTextColor }}>
          {field.label}
        </label>
        <textarea
          value={value}
          onChange={handleChange}
          placeholder={field.placeholder}
          style={{
            ...styles,
            '::placeholder': { color: colors.placeholderTextColor }
          }}
        />
      </div>
    );
  }

  return (
    <div className="form-field">
      <label style={{ color: colors.fieldLabelTextColor }}>
        {field.label}
      </label>
      <input
        type={field.type}
        value={value}
        onChange={handleChange}
        placeholder={field.placeholder}
        style={{
          ...styles,
          '::placeholder': { color: colors.placeholderTextColor }
        }}
      />
    </div>
  );
});
```

### 3.3 State Management Optimization
```tsx
// hooks/useFormBuilder.ts
import { useReducer, useCallback, useMemo } from 'react';

interface FormBuilderState {
  currentTemplate: FormTemplate | null;
  colors: ColorSettings;
  formData: Record<string, any>;
  activeColorField: string | null;
  isDirty: boolean;
}

type FormBuilderAction =
  | { type: 'SET_TEMPLATE'; payload: FormTemplate }
  | { type: 'UPDATE_COLOR'; payload: { key: string; value: string } }
  | { type: 'UPDATE_FORM_DATA'; payload: Record<string, any> }
  | { type: 'SET_ACTIVE_COLOR_FIELD'; payload: string | null }
  | { type: 'RESET' };

const formBuilderReducer = (state: FormBuilderState, action: FormBuilderAction): FormBuilderState => {
  switch (action.type) {
    case 'SET_TEMPLATE':
      return {
        ...state,
        currentTemplate: action.payload,
        formData: {}, // Reset form data when template changes
        isDirty: true
      };
    
    case 'UPDATE_COLOR':
      return {
        ...state,
        colors: {
          ...state.colors,
          [action.payload.key]: action.payload.value
        },
        isDirty: true
      };
    
    case 'UPDATE_FORM_DATA':
      return {
        ...state,
        formData: action.payload,
        isDirty: true
      };
    
    case 'SET_ACTIVE_COLOR_FIELD':
      return {
        ...state,
        activeColorField: action.payload
      };
    
    case 'RESET':
      return initialState;
    
    default:
      return state;
  }
};

const initialState: FormBuilderState = {
  currentTemplate: null,
  colors: defaultColors,
  formData: {},
  activeColorField: null,
  isDirty: false
};

export const useFormBuilder = () => {
  const [state, dispatch] = useReducer(formBuilderReducer, initialState);

  const actions = useMemo(() => ({
    setTemplate: (template: FormTemplate) =>
      dispatch({ type: 'SET_TEMPLATE', payload: template }),
    
    updateColor: (key: string, value: string) =>
      dispatch({ type: 'UPDATE_COLOR', payload: { key, value } }),
    
    updateFormData: (data: Record<string, any>) =>
      dispatch({ type: 'UPDATE_FORM_DATA', payload: data }),
    
    setActiveColorField: (field: string | null) =>
      dispatch({ type: 'SET_ACTIVE_COLOR_FIELD', payload: field }),
    
    reset: () => dispatch({ type: 'RESET' })
  }), []);

  return { state, actions };
};
```

## 4. Lazy Loading Strategies for Form Elements

### 4.1 Dynamic Component Loading
```tsx
// components/LazyComponentLoader.tsx
import { lazy, Suspense, useState, useEffect } from 'react';

const ColorSettingsPage = lazy(() => import('./pages/ColorSettingsPage'));
const FormTemplateSelector = lazy(() => import('./FormTemplateSelector'));
const ColorPicker = lazy(() => import('./ColorPicker'));

// Enhanced App.tsx with lazy loading
export function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'color-settings':
        return (
          <Suspense fallback={<PageSkeleton />}>
            <ColorSettingsPage 
              onColorsChange={handleColorsChange}
              onFormDataChange={handleFormDataChange}
              onExportJSON={handleExportJSON}
              onExportHTML={handleExportHTML}
            />
          </Suspense>
        );
      default:
        return <HomePage onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="App">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderCurrentPage()}
    </div>
  );
}

// Loading skeleton component
const PageSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  </div>
);
```

### 4.2 Progressive Form Loading
```tsx
// components/ProgressiveFormLoader.tsx
import { useState, useEffect, useCallback } from 'react';

interface ProgressiveFormLoaderProps {
  template: FormTemplate;
  onLoadComplete: () => void;
}

export const ProgressiveFormLoader = ({ template, onLoadComplete }: ProgressiveFormLoaderProps) => {
  const [loadedFields, setLoadedFields] = useState<FormField[]>([]);
  const [loadingIndex, setLoadingIndex] = useState(0);

  const loadNextBatch = useCallback(() => {
    const batchSize = 5; // Load 5 fields at a time
    const nextBatch = template.fields.slice(loadingIndex, loadingIndex + batchSize);
    
    setLoadedFields(prev => [...prev, ...nextBatch]);
    setLoadingIndex(prev => prev + batchSize);
    
    if (loadingIndex + batchSize >= template.fields.length) {
      onLoadComplete();
    }
  }, [template.fields, loadingIndex, onLoadComplete]);

  useEffect(() => {
    // Load first batch immediately
    loadNextBatch();
  }, []);

  useEffect(() => {
    // Continue loading batches with small delays
    if (loadingIndex < template.fields.length) {
      const timer = setTimeout(loadNextBatch, 100);
      return () => clearTimeout(timer);
    }
  }, [loadingIndex, template.fields.length, loadNextBatch]);

  return (
    <div className="progressive-form">
      {loadedFields.map(field => (
        <FormField key={field.id} field={field} />
      ))}
      {loadingIndex < template.fields.length && (
        <div className="loading-indicator">Loading more fields...</div>
      )}
    </div>
  );
};
```

### 4.3 Image and Asset Lazy Loading
```tsx
// components/LazyImage.tsx
import { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
}

export const LazyImage = ({ src, alt, placeholder, className }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`lazy-image-container ${className}`} ref={imgRef}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
        />
      )}
      {!isLoaded && placeholder && (
        <img src={placeholder} alt="" className="placeholder" />
      )}
    </div>
  );
};
```

## 5. Memory Leak Detection Techniques

### 5.1 React DevTools Memory Profiler
```tsx
// hooks/useMemoryMonitor.ts
import { useEffect, useRef } from 'react';

interface MemoryInfo {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

export const useMemoryMonitor = (componentName: string) => {
  const intervalRef = useRef<NodeJS.Timeout>();
  
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      intervalRef.current = setInterval(() => {
        if ('memory' in performance) {
          const memory = (performance as any).memory as MemoryInfo;
          const usedMB = Math.round(memory.usedJSHeapSize / 1048576);
          const totalMB = Math.round(memory.totalJSHeapSize / 1048576);
          
          console.log(`${componentName} Memory: ${usedMB}MB / ${totalMB}MB`);
          
          // Alert if memory usage is high
          if (usedMB > 100) {
            console.warn(`High memory usage in ${componentName}: ${usedMB}MB`);
          }
        }
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [componentName]);
};
```

### 5.2 Event Listener Cleanup
```tsx
// hooks/useEventListener.ts
import { useEffect, useRef } from 'react';

export const useEventListener = <T extends keyof WindowEventMap>(
  event: T,
  handler: (event: WindowEventMap[T]) => void,
  element: EventTarget = window
) => {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event: WindowEventMap[T]) => {
      savedHandler.current(event);
    };

    element.addEventListener(event, eventListener as EventListener);

    return () => {
      element.removeEventListener(event, eventListener as EventListener);
    };
  }, [event, element]);
};

// Usage in ColorPicker component
export const ColorPicker = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Properly cleanup escape key listener
  useEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  });

  // ... rest of component
};
```

### 5.3 Cleanup Pattern for Your Components
```tsx
// components/CleanupExample.tsx
import { useEffect, useRef, useCallback } from 'react';

export const ColorSettingsPage = (props) => {
  const abortControllerRef = useRef<AbortController>();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const observerRef = useRef<IntersectionObserver>();

  // Cleanup function
  const cleanup = useCallback(() => {
    // Cancel any pending API requests
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Clear timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Disconnect observers
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
  }, []);

  useEffect(() => {
    // Setup component
    abortControllerRef.current = new AbortController();
    
    return cleanup; // Cleanup on unmount
  }, [cleanup]);

  const handleAsyncOperation = async () => {
    try {
      const response = await fetch('/api/templates', {
        signal: abortControllerRef.current?.signal
      });
      // Handle response
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Fetch error:', error);
      }
    }
  };

  // ... rest of component
};
```

### 5.4 Memory Leak Detection Script
```javascript
// scripts/memoryLeakDetector.js
class MemoryLeakDetector {
  constructor() {
    this.baseline = null;
    this.measurements = [];
  }

  startMonitoring() {
    this.baseline = this.getMemoryUsage();
    console.log('Memory baseline:', this.baseline);
    
    setInterval(() => {
      const current = this.getMemoryUsage();
      this.measurements.push({
        timestamp: Date.now(),
        ...current
      });
      
      this.analyzeGrowth();
    }, 5000);
  }

  getMemoryUsage() {
    if ('memory' in performance) {
      const memory = performance.memory;
      return {
        used: Math.round(memory.usedJSHeapSize / 1048576),
        total: Math.round(memory.totalJSHeapSize / 1048576),
        limit: Math.round(memory.jsHeapSizeLimit / 1048576)
      };
    }
    return null;
  }

  analyzeGrowth() {
    if (this.measurements.length < 10) return;

    const recent = this.measurements.slice(-10);
    const growth = recent[recent.length - 1].used - recent[0].used;
    
    if (growth > 10) { // More than 10MB growth
      console.warn('Potential memory leak detected:', {
        growth: `${growth}MB`,
        current: recent[recent.length - 1]
      });
    }
  }

  generateReport() {
    return {
      baseline: this.baseline,
      current: this.getMemoryUsage(),
      measurements: this.measurements,
      avgGrowthRate: this.calculateAvgGrowthRate()
    };
  }

  calculateAvgGrowthRate() {
    if (this.measurements.length < 2) return 0;
    
    const first = this.measurements[0];
    const last = this.measurements[this.measurements.length - 1];
    const timeDiff = (last.timestamp - first.timestamp) / 1000 / 60; // minutes
    const memoryDiff = last.used - first.used;
    
    return memoryDiff / timeDiff; // MB per minute
  }
}

// Usage
const detector = new MemoryLeakDetector();
detector.startMonitoring();

// Generate report after 5 minutes
setTimeout(() => {
  console.log('Memory Report:', detector.generateReport());
}, 300000);
```

## 6. Performance Monitoring Dashboard

### 6.1 Custom Performance Hook
```tsx
// hooks/usePerformanceMetrics.ts
import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  renderTime: number;
  memoryUsage: number;
  componentMounts: number;
  errorCount: number;
}

export const usePerformanceMetrics = (componentName: string) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    renderTime: 0,
    memoryUsage: 0,
    componentMounts: 0,
    errorCount: 0
  });

  const updateMetrics = useCallback((updates: Partial<PerformanceMetrics>) => {
    setMetrics(prev => ({ ...prev, ...updates }));
  }, []);

  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      updateMetrics({ 
        renderTime: endTime - startTime,
        componentMounts: metrics.componentMounts + 1
      });
    };
  }, []);

  const logPerformance = useCallback(() => {
    console.log(`${componentName} Performance:`, metrics);
  }, [componentName, metrics]);

  return { metrics, updateMetrics, logPerformance };
};
```

### 6.2 Performance Monitoring Component
```tsx
// components/PerformanceMonitor.tsx
import { useEffect, useState } from 'react';

export const PerformanceMonitor = () => {
  const [stats, setStats] = useState({
    fps: 0,
    memory: 0,
    renderTime: 0
  });

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    
    const updateStats = () => {
      const currentTime = performance.now();
      frameCount++;
      
      if (currentTime - lastTime >= 1000) {
        const fps = frameCount;
        const memory = (performance as any).memory?.usedJSHeapSize / 1048576 || 0;
        
        setStats(prev => ({
          ...prev,
          fps,
          memory: Math.round(memory)
        }));
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(updateStats);
    };
    
    requestAnimationFrame(updateStats);
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="performance-monitor">
      <div>FPS: {stats.fps}</div>
      <div>Memory: {stats.memory}MB</div>
      <div>Render: {stats.renderTime}ms</div>
    </div>
  );
};
```

This comprehensive guide provides specific optimization strategies for your Zyloform React form builder, addressing the unique challenges of form rendering, color customization, and dynamic content updates while maintaining performance.