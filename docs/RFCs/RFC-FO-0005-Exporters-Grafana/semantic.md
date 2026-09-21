# RFC-FO-0005 — Exporters, OTLP and Grafana

**Status:** Draft Standard

## Scope
Language-neutral semantic authority.

## Normative requirements

### FO-EXPORT-001
Production implementations MUST support standard OTLP export.

### FO-EXPORT-002
OTLP gRPC MAY be provided as an implementation binding.

### FO-EXPORT-003
Grafana integration MUST use standard protocols or collectors.

### FO-EXPORT-004
Multiple exporters MUST receive semantically equivalent records.

## Implementation boundary
Technology choices belong to `implementation/` and MUST preserve these semantics.
