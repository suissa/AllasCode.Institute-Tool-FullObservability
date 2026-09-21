# RFC-FO-0008 — Configuration Contract

**Status:** Draft Standard

## Scope
Language-neutral semantic authority.

## Normative requirements

### FO-CONFIG-001
Configuration MUST represent service identity, enabled signals, storage mode and exporters.

### FO-CONFIG-002
Storage modes MUST include sqlite, postgres and full.

### FO-CONFIG-003
Invalid mandatory configuration MUST fail explicitly.

### FO-CONFIG-004
Secrets MUST NOT be required inline in canonical configuration.

## Implementation boundary
Technology choices belong to `implementation/` and MUST preserve these semantics.
