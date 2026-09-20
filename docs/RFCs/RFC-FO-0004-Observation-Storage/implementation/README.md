# RFC-FO-0004 — TypeScript transformation

**Semantic authority:** ../semantic.md

Descriptive only; not conformance evidence.

Transformation: `semantic statement → requirement ID → TypeScript component → executable test → generated semantic lock`.

## FO-STORE-001
Semantic: ObservationStore MUST be backend-neutral.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-STORE-001` and test `@test FO-STORE-001`.

## FO-STORE-002
Semantic: sqlite mode MUST persist all enabled signals in SQLite.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-STORE-002` and test `@test FO-STORE-002`.

## FO-STORE-003
Semantic: postgres mode MUST persist all enabled signals in PostgreSQL.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-STORE-003` and test `@test FO-STORE-003`.

## FO-STORE-004
Semantic: full mode MUST route signals through replaceable specialized adapters.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-STORE-004` and test `@test FO-STORE-004`.
