import { useState, useEffect } from 'react';

interface MobileDetection {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
  screenHeight: number;
  orientation: 'portrait' | 'landscape';
  isTouchDevice: boolean;
  isIOS: boolean;
  isAndroid: boolean;
  hasNotch: boolean;
}

export function useMobile(): MobileDetection {
  const [detection, setDetection] = useState<MobileDetection>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    screenWidth: 1200,
    screenHeight: 800,
    orientation: 'landscape',
    isTouchDevice: false,
    isIOS: false,
    isAndroid: false,
    hasNotch: false,
  });

  useEffect(() => {
    const updateDetection = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobile = width <= 768;
      const isTablet = width > 768 && width <= 1024;
      const isDesktop = width > 1024;
      const orientation = width > height ? 'landscape' : 'portrait';
      
      // Touch device detection
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Platform detection
      const userAgent = navigator.userAgent.toLowerCase();
      const isIOS = /iphone|ipad|ipod/.test(userAgent);
      const isAndroid = /android/.test(userAgent);
      
      // Notch detection (rough approximation)
      const hasNotch = isIOS && (
        (width === 375 && height === 812) || // iPhone X, 11 Pro
        (width === 414 && height === 896) || // iPhone XR, 11, 12, 13
        (width === 428 && height === 926) || // iPhone 12/13/14 Pro Max
        (width === 393 && height === 852) || // iPhone 14/15
        (width === 430 && height === 932)    // iPhone 14/15 Pro Max
      );

      setDetection({
        isMobile,
        isTablet,
        isDesktop,
        screenWidth: width,
        screenHeight: height,
        orientation,
        isTouchDevice,
        isIOS,
        isAndroid,
        hasNotch,
      });
    };

    // Initial detection
    updateDetection();

    // Listen for resize and orientation changes
    window.addEventListener('resize', updateDetection);
    window.addEventListener('orientationchange', updateDetection);

    return () => {
      window.removeEventListener('resize', updateDetection);
      window.removeEventListener('orientationchange', updateDetection);
    };
  }, []);

  return detection;
}

// Utility functions for common mobile checks
export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
};

export const isTabletDevice = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth > 768 && window.innerWidth <= 1024;
};

export const isDesktopDevice = () => {
  if (typeof window === 'undefined') return true;
  return window.innerWidth > 1024;
};

export const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};