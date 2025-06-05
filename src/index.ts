"use client";

import { ErrorBoundaryReporter } from "./ErrorBoundaryReporter";

export { ErrorBoundaryReporter as ErrorBoundary };
export { ErrorBoundary as RawErrorBoundary } from "./ErrorBoundary";
export * from "./ErrorBoundaryContext";
export * from "./useErrorBoundary";
export * from "./withErrorBoundary";

// TypeScript types
export * from "./types";

export default ErrorBoundaryReporter;
