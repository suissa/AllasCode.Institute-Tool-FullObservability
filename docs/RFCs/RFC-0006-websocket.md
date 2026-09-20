# RFC-0006 — Real-time WebSocket Streaming

Status: Draft

WebSocket is an exporter, not a persistence backend.

Envelope:
```json
{"protocol":"fullobservability.v1","signal":"span|log|metric|event","emitted_at_unix_nano":"uint64-string","payload":{}}
```

Servers SHOULD support subscription by signal. Filters MUST NOT modify persisted telemetry. Implementations MUST define bounded behavior for slow clients. Slow or disconnected clients MUST NOT block application execution indefinitely. Authentication and authorization MUST be pluggable.
