// Extend the Window interface to include MSStream
export {}; // This makes the file a module

declare global {
  interface Window {
    MSStream?: any; // MSStream is specific to iOS and not in TypeScript's default types
  }
}
