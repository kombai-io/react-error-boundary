"use client";

import { ErrorBoundaryReporter, ErrorPage } from "./ErrorBoundaryReporter";

export { ErrorBoundaryReporter as ErrorBoundary, ErrorPage };
export { ErrorBoundary as RawErrorBoundary } from "./ErrorBoundary";
export * from "./ErrorBoundaryContext";
export * from "./useErrorBoundary";
export * from "./withErrorBoundary";

// TypeScript types
export * from "./types";

export default ErrorBoundaryReporter;
