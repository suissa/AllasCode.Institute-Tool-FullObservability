export type AttributeValue = string | number | boolean | null;
export type Attributes = Record<string, AttributeValue>;
export interface SpanRecord { signal:"span"; traceId:string; spanId:string; parentSpanId?:string; name:string; kind:"internal"|"server"|"client"|"producer"|"consumer"; startTimeUnixNano:bigint; endTimeUnixNano:bigint; status:"unset"|"ok"|"error"; attributes:Attributes; }
export interface LogRecord { signal:"log"; timestampUnixNano:bigint; severityNumber?:number; severityText?:string; body:unknown; traceId?:string; spanId?:string; attributes:Attributes; }
export interface MetricRecord { signal:"metric"; name:string; description?:string; unit?:string; kind:"counter"|"up_down_counter"|"gauge"|"histogram"; value:number; timestampUnixNano:bigint; attributes:Attributes; }
export interface EventRecord { signal:"event"; name:string; timestampUnixNano:bigint; body?:unknown; traceId?:string; spanId?:string; attributes:Attributes; }
export type TelemetryRecord = SpanRecord|LogRecord|MetricRecord|EventRecord;
