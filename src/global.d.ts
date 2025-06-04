import { ErrorWithComponentStack } from "./types";

declare global {
  interface Window {
    sendError?: (error: ErrorWithComponentStack) => void;
  }
}

export {};