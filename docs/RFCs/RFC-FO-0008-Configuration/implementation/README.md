# RFC-FO-0008 — TypeScript transformation

**Semantic authority:** ../semantic.md

Descriptive only; not conformance evidence.

Transformation: `semantic statement → requirement ID → TypeScript component → executable test → generated semantic lock`.

## FO-CONFIG-001
Semantic: Configuration MUST represent service identity, enabled signals, storage mode and exporters.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-CONFIG-001` and test `@test FO-CONFIG-001`.

## FO-CONFIG-002
Semantic: Storage modes MUST include sqlite, postgres and full.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-CONFIG-002` and test `@test FO-CONFIG-002`.

## FO-CONFIG-003
Semantic: Invalid mandatory configuration MUST fail explicitly.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-CONFIG-003` and test `@test FO-CONFIG-003`.

## FO-CONFIG-004
Semantic: Secrets MUST NOT be required inline in canonical configuration.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-CONFIG-004` and test `@test FO-CONFIG-004`.
