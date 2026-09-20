# Semantic RFC → TypeScript reference implementation

The TypeScript implementation is generated conceptually from the semantic contract, not the reverse.

## Transformation

1. Read each stable requirement from `docs/RFCs/*/semantic.md`.
2. Select the smallest TypeScript abstraction capable of preserving the invariant.
3. Record the mapping in `implementation/bindings.yml`.
4. Annotate the real source with `@satisfies REQUIREMENT-ID`.
5. Write executable verification annotated with `@test REQUIREMENT-ID`.
6. Use `@evidence` only for an assertion that proves an emitted observable artifact.
7. Generate the implemented manifest from normalized semantic text plus real annotations.

## Current mappings

- FO-STORE-001/005 → `ObservationStore`: storage-neutral interface; application instrumentation does not know SQLite/Postgres/full backend APIs.
- FO-EXPORT-004 → `ObservabilityExporter`: common fan-out contract.
- FO-REALTIME-001/002 → `RealtimeChannel`: transport-neutral contract.
- RFC-FO-0006 WebSocket profile → `WebSocketRealtimeChannel`: default TypeScript binding; it is not the semantic API. gRPC streaming can implement the same interface.
- FO-INSTR-001/002/004 → `Observable`: TypeScript decorator is ergonomic binding to runtime observation.
- FO-SAFE-001/002 → `redactAttributes`: redaction occurs before storage/export fan-out.
- FO-SAFE-003 is implemented by guarded store/export calls in `FullObservabilityRuntime`, but remains unverified until its executable failure-isolation test is annotated.
- SQLite, PostgreSQL, full DB routing, OTLP/Grafana and configuration requirements remain partial/not implemented until their real adapters and tests exist.

No manifest should be promoted merely because this document says a mapping exists.
