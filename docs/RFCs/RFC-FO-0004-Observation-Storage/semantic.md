# RFC-FO-0004 — Observation Storage and Modes

**Status:** Draft Standard

## Scope
Language-neutral semantic authority.

## Normative requirements

### FO-STORE-001
ObservationStore MUST be backend-neutral.

### FO-STORE-002
sqlite mode MUST persist all enabled signals in SQLite.

### FO-STORE-003
postgres mode MUST persist all enabled signals in PostgreSQL.

### FO-STORE-004
full mode MUST route signals through replaceable specialized adapters.

## Implementation boundary
Technology choices belong to `implementation/` and MUST preserve these semantics.
