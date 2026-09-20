# RFC-0002 — Signal Model

Status: Draft

A conforming implementation MUST support traces, spans, logs, metrics and events. Events are observational and MUST NOT imply causality.

Canonical records MUST preserve OpenTelemetry-compatible identifiers, timestamps and attributes. Logs and events MAY include trace_id and span_id. Metrics MUST expose a kind equivalent to counter, up_down_counter, gauge or histogram.
