# RFC-0004 — ObservationStore and Storage Modes

Status: Draft

Every implementation MUST expose an ObservationStore abstraction with writeSpan, writeLog, writeMetric, writeEvent, flush and shutdown equivalents.

Canonical modes:
- sqlite: all enabled signals stored in SQLite.
- postgres: all enabled signals stored in PostgreSQL.
- full: each signal MAY be routed to a specialized observability backend through adapters.

Application instrumentation MUST NOT depend on backend-specific APIs. Stores MUST document buffering, batching, retry and durability behavior.
