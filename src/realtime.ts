import type { TelemetryRecord } from "./types.js";

export interface RealtimeEnvelope {
  protocol: "fullobservability.v1";
  signal: TelemetryRecord["signal"];
  emittedAtUnixNano: string;
  payload: unknown;
}

export interface RealtimeChannel {
  publish(records: readonly TelemetryRecord[]): Promise<void>;
  forceFlush(): Promise<void>;
  shutdown(): Promise<void>;
}
