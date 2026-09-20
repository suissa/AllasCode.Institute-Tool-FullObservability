# RFC-FO-0007 — TypeScript transformation

**Semantic authority:** ../semantic.md

Descriptive only; not conformance evidence.

Transformation: `semantic statement → requirement ID → TypeScript component → executable test → generated semantic lock`.

## FO-INSTR-001
Semantic: Implementations MUST expose explicit or language-native instrumentation.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-INSTR-001` and test `@test FO-INSTR-001`.

## FO-INSTR-002
Semantic: Instrumentation MUST preserve return values and thrown errors.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-INSTR-002` and test `@test FO-INSTR-002`.

## FO-INSTR-003
Semantic: Tracing MUST record execution duration when enabled.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-INSTR-003` and test `@test FO-INSTR-003`.

## FO-INSTR-004
Semantic: Language-native decorators or annotations MAY provide ergonomic bindings.

TypeScript: implement the smallest abstraction preserving this invariant; annotate source `@satisfies FO-INSTR-004` and test `@test FO-INSTR-004`.
