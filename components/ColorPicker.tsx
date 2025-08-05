import React, { useState, useRef, useEffect, useCallback } from 'react';
import exampleImage from 'figma:asset/4e5cee7de39ca9871c52640c0e1426bd599b80d8.png';

interface ColorPickerProps {
  currentColor: string;
  onColorChange: (color: string) => void;
  isOpen: boolean;
  onClose: () => void;
  fieldKey: string;
}

// Predefined color swatches for "Created in this file" section
const predefinedSwatches = [
  '#3B82F6', '#1E40AF', '#1E3A8A', '#312E81',
  '#F1F5F9', '#E2E8F0', '#CBD5E1', '#94A3B8',
  '#F8FAFC', '#F1F0F4', '#E5E7EB', '#D1D5DB',
  '#FCA5A5', '#F87171', '#EF4444', '#DC2626',
  '#B91C1C', '#991B1B', '#7F1D1D', '#450A0A',
  '#FED7AA', '#FDBA74', '#FB923C', '#F97316',
  '#EA580C', '#C2410C', '#9A3412', '#7C2D12',
  '#FEF3C7', '#FDE68A', '#FCD34D', '#FBBF24',
  '#F59E0B', '#D97706', '#B45309', '#92400E',
  '#BBF7D0', '#86EFAC', '#4ADE80', '#22C55E',
  '#16A34A', '#15803D', '#166534', '#14532D'
];

// Convert hex to HSV
function hexToHsv(hex: string): { h: number; s: number; v: number } {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  if (delta !== 0) {
    if (max === r) h = ((g - b) / delta) % 6;
    else if (max === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
  }
  h = Math.round(h * 60);
  if (h < 0) h += 360;

  const s = max === 0 ? 0 : delta / max;
  const v = max;

  return { h, s: s * 100, v: v * 100 };
}

// Convert HSV to hex
function hsvToHex(h: number, s: number, v: number): string {
  s /= 100;
  v /= 100;

  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;

  let r = 0, g = 0, b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();
}

export function ColorPicker({ currentColor, onColorChange, isOpen, onClose, fieldKey }: ColorPickerProps) {
  const [hsv, setHsv] = useState(() => hexToHsv(currentColor));
  const [hexInput, setHexInput] = useState(currentColor.replace('#', ''));
  const [isDragging, setIsDragging] = useState(false);
  const [dragType, setDragType] = useState<'saturation' | 'hue' | 'brightness' | null>(null);
  
  const saturationRef = useRef<HTMLDivElement>(null);
  const hueRef = useRef<HTMLDivElement>(null);
  const brightnessRef = useRef<HTMLDivElement>(null);

  // Update HSV when currentColor prop changes
  useEffect(() => {
    const newHsv = hexToHsv(currentColor);
    setHsv(newHsv);
    setHexInput(currentColor.replace('#', ''));
  }, [currentColor]);

  // Handle mouse events for dragging
  const handleMouseDown = useCallback((type: 'saturation' | 'hue' | 'brightness', event: React.MouseEvent) => {
    event.preventDefault();
    setIsDragging(true);
    setDragType(type);
    handleMouseMove(type, event);
  }, []);

  const handleMouseMove = useCallback((type: 'saturation' | 'hue' | 'brightness', event: React.MouseEvent | MouseEvent) => {
    let rect: DOMRect | undefined;
    let newHsv = { ...hsv };

    switch (type) {
      case 'saturation':
        rect = saturationRef.current?.getBoundingClientRect();
        if (rect) {
          const x = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
          const y = Math.max(0, Math.min(rect.height, event.clientY - rect.top));
          newHsv.s = (x / rect.width) * 100;
          newHsv.v = ((rect.height - y) / rect.height) * 100;
        }
        break;
      case 'hue':
        rect = hueRef.current?.getBoundingClientRect();
        if (rect) {
          const x = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
          newHsv.h = (x / rect.width) * 360;
        }
        break;
      case 'brightness':
        rect = brightnessRef.current?.getBoundingClientRect();
        if (rect) {
          const x = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
          newHsv.v = (x / rect.width) * 100;
        }
        break;
    }

    setHsv(newHsv);
    const newHex = hsvToHex(newHsv.h, newHsv.s, newHsv.v);
    setHexInput(newHex.replace('#', ''));
    onColorChange(newHex);
  }, [hsv, onColorChange]);

  // Global mouse events for dragging
  useEffect(() => {
    if (!isDragging || !dragType) return;

    const handleGlobalMouseMove = (event: MouseEvent) => {
      handleMouseMove(dragType, event);
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
      setDragType(null);
    };

    document.addEventListener('mousemove', handleGlobalMouseMove);
    document.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, dragType, handleMouseMove]);

  // Handle hex input change
  const handleHexInputChange = (value: string) => {
    setHexInput(value);
    if (/^[0-9A-Fa-f]{6}$/.test(value)) {
      const hex = `#${value}`;
      const newHsv = hexToHsv(hex);
      setHsv(newHsv);
      onColorChange(hex);
    }
  };

  // Handle swatch selection
  const handleSwatchSelect = (color: string) => {
    const newHsv = hexToHsv(color);
    setHsv(newHsv);
    setHexInput(color.replace('#', ''));
    onColorChange(color);
  };

  if (!isOpen) return null;

  const saturationStyle = {
    background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, hsl(${hsv.h}, 100%, 50%))`
  };

  const hueStyle = {
    background: 'linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)'
  };

  const brightnessColor = hsvToHex(hsv.h, hsv.s, 100);
  const brightnessStyle = {
    background: `linear-gradient(to right, #000, ${brightnessColor})`
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-[9999] bg-black/20"
        onClick={onClose}
      />
      
      {/* Color Picker Modal */}
      <div className="absolute right-0 top-full mt-2 z-[10000] bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden" style={{ width: '280px' }}>
        {/* Main Color Area */}
        <div className="p-4">
          <div 
            ref={saturationRef}
            className="relative w-full h-48 rounded-xl cursor-crosshair mb-4 border border-gray-200"
            style={saturationStyle}
            onMouseDown={(e) => handleMouseDown('saturation', e)}
          >
            {/* Saturation/Brightness Indicator */}
            <div 
              className="absolute w-4 h-4 border-2 border-white rounded-full shadow-lg transform -translate-x-2 -translate-y-2 pointer-events-none"
              style={{
                left: `${hsv.s}%`,
                top: `${100 - hsv.v}%`,
                boxShadow: '0 0 0 1px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)'
              }}
            />
          </div>

          {/* Hue Slider */}
          <div className="mb-4">
            <div 
              ref={hueRef}
              className="relative w-full h-4 rounded-full cursor-pointer border border-gray-200"
              style={hueStyle}
              onMouseDown={(e) => handleMouseDown('hue', e)}
            >
              <div 
                className="absolute w-5 h-5 bg-white border-2 border-gray-300 rounded-full shadow-lg transform -translate-x-2.5 -translate-y-0.5 pointer-events-none"
                style={{ 
                  left: `${(hsv.h / 360) * 100}%`,
                  boxShadow: '0 0 0 1px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)'
                }}
              />
            </div>
          </div>

          {/* Brightness Slider */}
          <div className="mb-4">
            <div 
              ref={brightnessRef}
              className="relative w-full h-4 rounded-full cursor-pointer border border-gray-200"
              style={brightnessStyle}
              onMouseDown={(e) => handleMouseDown('brightness', e)}
            >
              <div 
                className="absolute w-5 h-5 bg-white border-2 border-gray-300 rounded-full shadow-lg transform -translate-x-2.5 -translate-y-0.5 pointer-events-none"
                style={{ 
                  left: `${hsv.v}%`,
                  boxShadow: '0 0 0 1px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)'
                }}
              />
            </div>
          </div>

          {/* Input Fields */}
          <div className="flex gap-2 mb-4">
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">Hex</label>
              <div className="flex">
                <span className="inline-flex items-center px-2 text-sm text-gray-500 bg-gray-50 border border-r-0 border-gray-300 rounded-l-lg">#</span>
                <input
                  type="text"
                  value={hexInput}
                  onChange={(e) => handleHexInputChange(e.target.value.toUpperCase())}
                  className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
                  maxLength={6}
                />
              </div>
            </div>
            <div className="w-16">
              <label className="block text-xs font-medium text-gray-700 mb-1">%</label>
              <input
                type="text"
                value="100"
                readOnly
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded-lg bg-gray-50 text-gray-500 font-mono"
              />
            </div>
          </div>
        </div>

        {/* Color Swatches Section */}
        <div className="border-t border-gray-200 p-4">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Created in this file</h4>
          <div className="grid grid-cols-8 gap-1">
            {predefinedSwatches.map((color, index) => (
              <button
                key={index}
                onClick={() => handleSwatchSelect(color)}
                className="w-6 h-6 rounded border border-gray-200 hover:scale-110 transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Current Color Display */}
        <div className="border-t border-gray-100 px-4 py-3 bg-gray-50">
          <div className="flex items-center gap-3">
            <div 
              className="w-8 h-8 rounded-lg border border-gray-200 shadow-sm"
              style={{ backgroundColor: currentColor }}
            />
            <div className="flex-1">
              <div className="text-xs font-medium text-gray-900 font-mono">{currentColor}</div>
              <div className="text-xs text-gray-500">Current Color</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}