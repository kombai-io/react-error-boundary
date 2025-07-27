import React, { ErrorInfo } from "react";
import { ErrorWithComponentStack } from "./types";
import { ErrorBoundary } from "./ErrorBoundary";

declare global {
  interface Window {
    sendError?: (error: unknown) => void;
  }
}

export function ErrorPage(props: { error: Error }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
          padding: "40px",
          maxWidth: "800px",
          width: "100%",
          maxHeight: "80vh",
          overflow: "auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "32px",
            }}
          >
            ⚠️
          </div>
          <h1
            style={{
              color: "#e53e3e",
              fontSize: "32px",
              fontWeight: "700",
              margin: "0",
            }}
          >
            Something went wrong
          </h1>
        </div>

        <div
          style={{
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              color: "#2d3748",
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>🔴</span>
            Error Message
          </h2>
          <div
            style={{
              backgroundColor: "#fed7d7",
              border: "1px solid #feb2b2",
              borderRadius: "8px",
              padding: "16px",
              color: "#742a2a",
              fontSize: "14px",
              fontWeight: "500",
              textAlign: "left",
              overflow: "auto",
              whiteSpace: "pre",
            }}
          >
            {props.error.message || "No error message available"}
          </div>
        </div>

        {props.error.stack && (
          <div>
            <h2
              style={{
                color: "#2d3748",
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>📋</span>
              Stack Trace
            </h2>
            <div
              style={{
                backgroundColor: "#f7fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "16px",
                fontSize: "12px",
                fontFamily: "Monaco, Menlo, 'Ubuntu Mono', monospace",
                color: "#4a5568",
                lineHeight: "1.5",
                overflow: "auto",
                maxHeight: "300px",
                whiteSpace: "pre",
              }}
            >
              {props.error.stack}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function onError(error: Error, info: ErrorInfo) {
  if (window.sendError) {
    const errorWithComponentStack = error as ErrorWithComponentStack;
    errorWithComponentStack.componentStack = info.componentStack;
    window.sendError(errorWithComponentStack);
  }
}

export function ErrorBoundaryReporter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary
      FallbackComponent={(props) => <ErrorPage error={props.error} />}
      onError={onError}
    >
      {children}
    </ErrorBoundary>
  );
}
