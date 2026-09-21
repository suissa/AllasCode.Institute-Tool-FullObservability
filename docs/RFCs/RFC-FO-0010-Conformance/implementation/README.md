# RFC-FO-0010 — TypeScript transformation

**Semantic authority:** ../semantic.md

Descriptive only; not conformance evidence.

Transformation: `semantic statement → requirement ID → TypeScript component → executable test → generated semantic lock`.

## FO-CONF-001
Semantic: semantic.md MUST remain the language-neutral authority.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-CONF-001` and test `@test FO-CONF-001`.

## FO-CONF-002
Semantic: Each language port MUST prove applicable requirements with executable tests.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-CONF-002` and test `@test FO-CONF-002`.

## FO-CONF-003
Semantic: Wire-incompatible changes MUST introduce a new protocol or format version.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-CONF-003` and test `@test FO-CONF-003`.

## FO-CONF-004
Semantic: Conformance manifests MUST NOT claim unverified implementation.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-CONF-004` and test `@test FO-CONF-004`.
