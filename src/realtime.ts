import type {TelemetryRecord} from "./types.js";
export interface RealtimeEnvelope { protocol:"fullobservability.v1"; signal:TelemetryRecord["signal"]; emittedAtUnixNano:string; payload:unknown; }
/** @satisfies FO-REALTIME-001 @satisfies FO-REALTIME-002 */
export interface RealtimeChannel { publish(records:readonly TelemetryRecord[]):Promise<void>; forceFlush():Promise<void>; shutdown():Promise<void>; }
