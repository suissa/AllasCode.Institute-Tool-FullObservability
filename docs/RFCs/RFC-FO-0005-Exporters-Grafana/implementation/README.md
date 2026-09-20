# RFC-FO-0005 — TypeScript transformation

**Semantic authority:** ../semantic.md

Descriptive only; not conformance evidence.

Transformation: `semantic statement → requirement ID → TypeScript component → executable test → generated semantic lock`.

## FO-EXPORT-001
Semantic: Production implementations MUST support standard OTLP export.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-EXPORT-001` and test `@test FO-EXPORT-001`.

## FO-EXPORT-002
Semantic: OTLP gRPC MAY be provided as an implementation binding.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-EXPORT-002` and test `@test FO-EXPORT-002`.

## FO-EXPORT-003
Semantic: Grafana integration MUST use standard protocols or collectors.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-EXPORT-003` and test `@test FO-EXPORT-003`.

## FO-EXPORT-004
Semantic: Multiple exporters MUST receive semantically equivalent records.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-EXPORT-004` and test `@test FO-EXPORT-004`.
