# RFC-FO-0007 — Instrumentation API

**Status:** Draft Standard

## Scope
Language-neutral semantic authority.

## Normative requirements

### FO-INSTR-001
Implementations MUST expose explicit or language-native instrumentation.

### FO-INSTR-002
Instrumentation MUST preserve return values and thrown errors.

### FO-INSTR-003
Tracing MUST record execution duration when enabled.

### FO-INSTR-004
Language-native decorators or annotations MAY provide ergonomic bindings.

## Implementation boundary
Technology choices belong to `implementation/` and MUST preserve these semantics.
