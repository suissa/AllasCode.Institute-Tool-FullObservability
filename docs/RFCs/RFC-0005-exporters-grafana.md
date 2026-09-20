# RFC-0005 — Exporters, OTLP and Grafana Compatibility

Status: Draft

A production-ready implementation SHOULD provide OTLP/HTTP, OTLP/gRPC where supported, WebSocket, and console or NDJSON diagnostics. Grafana compatibility SHOULD use standard protocols: FullObservability -> OTLP -> OpenTelemetry Collector or Grafana Alloy -> Grafana-compatible backends -> Grafana. FullObservability MUST NOT require a proprietary Grafana ingestion format. Signals MAY fan out to multiple exporters.
