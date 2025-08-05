// Type declarations for modules without type definitions

// React and React DOM
declare module 'react' {
  import * as React from 'react';
  export = React;
  export as namespace React;
}

declare module 'react-dom/client' {
  import * as ReactDOMClient from 'react-dom/client';
  export = ReactDOMClient;
}

// Testing libraries
declare module '@testing-library/react' {
  export function render(component: React.ReactElement): any;
  export const screen: {
    getByText(text: string | RegExp): HTMLElement;
    getByRole(role: string, options?: any): HTMLElement;
    getAllByRole(role: string, options?: any): HTMLElement[];
    queryByText(text: string | RegExp): HTMLElement | null;
    getByLabelText(text: string | RegExp): HTMLElement;
    queryByRole(role: string, options?: any): HTMLElement | null;
  };
  export const fireEvent: {
    click(element: Element | null): void;
    change(element: Element, options: any): void;
    submit(element: Element): void;
    [key: string]: any;
  };
}

declare module '@testing-library/jest-dom/extend-expect' {}

declare namespace jest {
  interface Matchers<R> {
    toBeInTheDocument(): R;
    toHaveClass(className: string): R;
    toHaveStyle(style: Record<string, any>): R;
    toHaveBeenCalled(): R;
    toHaveBeenCalledWith(...args: any[]): R;
    toBe(expected: any): R;
    toEqual(expected: any): R;
    toBeGreaterThan(expected: number): R;
    not: Matchers<R>;
  }
  
  interface MockInstance<T, Y extends any[]> {
    mockClear(): void;
    mockReset(): void;
    mockImplementation(fn: (...args: Y) => T): MockInstance<T, Y>;
    mockReturnValue(val: T): MockInstance<T, Y>;
    mockReturnValueOnce(val: T): MockInstance<T, Y>;
    mock: {
      calls: Y[];
      instances: T[];
      invocationCallOrder: number[];
      results: { type: string; value: T }[];
    };
  }
}

declare module '@testing-library/jest-dom' {
  global {
    namespace jest {
      interface Matchers<R> {
        toBeInTheDocument(): R;
        toHaveClass(className: string): R;
        toHaveStyle(style: Record<string, any>): R;
      }
    }
  }
}

// Vitest
declare module 'vitest' {
  export function describe(name: string, fn: () => void): void;
  export function it(name: string, fn: () => void): void;
  export function expect<T>(actual: T): jest.Matchers<void>;
  export const vi: {
    fn(): jest.MockInstance<any, any[]>;
    fn<T extends (...args: any[]) => any>(implementation?: T): jest.MockInstance<ReturnType<T>, Parameters<T>>;
    mockImplementation(implementation: (...args: any[]) => any): any;
    mockClear(): void;
  };
  export function beforeEach(fn: () => void): void;
}

// Vite and plugins
declare module 'vite' {
  export function defineConfig(config: any): any;
}

declare module '@vitejs/plugin-react' {
  export default function react(options?: any): any;
}

declare module 'vitest/config' {
  export function defineConfig(config: any): any;
}

// Node.js modules
declare module 'path' {
  export function resolve(...paths: string[]): string;
}

// Global variables
declare const __dirname: string;

// JSX Runtime
declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}