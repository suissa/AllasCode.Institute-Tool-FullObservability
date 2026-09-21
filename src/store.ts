import type {EventRecord,LogRecord,MetricRecord,SpanRecord} from './types.js';

/** @satisfies FO-STORE-001 @satisfies FO-STORE-005 */
export interface ObservationStore {
  writeSpan(r:SpanRecord):Promise<void>;
  writeLog(r:LogRecord):Promise<void>;
  writeMetric(r:MetricRecord):Promise<void>;
  writeEvent(r:EventRecord):Promise<void>;
  flush():Promise<void>;
  shutdown():Promise<void>;
}
export class InMemoryObservationStore implements ObservationStore {
  spans:SpanRecord[]=[]; logs:LogRecord[]=[]; metrics:MetricRecord[]=[]; events:EventRecord[]=[];
  async writeSpan(r:SpanRecord){this.spans.push(r)}
  async writeLog(r:LogRecord){this.logs.push(r)}
  async writeMetric(r:MetricRecord){this.metrics.push(r)}
  async writeEvent(r:EventRecord){this.events.push(r)}
  async flush(){} async shutdown(){}
}
