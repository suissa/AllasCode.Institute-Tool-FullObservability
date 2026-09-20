import type {TelemetryRecord} from './types.js';
export interface ObservabilityExporter { export(records:readonly TelemetryRecord[]):Promise<void>; forceFlush():Promise<void>; shutdown():Promise<void>; }
export class ConsoleExporter implements ObservabilityExporter { async export(records:readonly TelemetryRecord[]){for(const r of records) console.log(JSON.stringify(r,(_k,v)=>typeof v==='bigint'?v.toString():v))} async forceFlush(){} async shutdown(){} }
