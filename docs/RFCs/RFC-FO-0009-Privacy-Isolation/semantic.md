# RFC-FO-0009 — Privacy, Redaction and Failure Isolation

**Status:** Draft Standard

## Scope
Language-neutral semantic authority.

## Normative requirements

### FO-SAFE-001
Sensitive attributes MUST be redacted before persistence or export.

### FO-SAFE-002
Common secret-bearing attribute names SHOULD be protected by default.

### FO-SAFE-003
Observability failures MUST NOT change application behavior by default.

### FO-SAFE-004
Queues and buffers MUST have explicit resource bounds.

## Implementation boundary
Technology choices belong to `implementation/` and MUST preserve these semantics.
