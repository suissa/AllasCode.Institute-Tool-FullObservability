# RFC-0003 — Observation Context and OpenTelemetry Interoperability

Status: Draft

A conforming implementation MUST carry trace_id, span_id, trace flags, trace state and baggage where available. Implementations SHOULD support W3C Trace Context and W3C Baggage propagation. Logs and events produced inside an active span SHOULD contain the active trace_id and span_id. OpenTelemetry interoperability MUST NOT depend on a specific storage mode.
