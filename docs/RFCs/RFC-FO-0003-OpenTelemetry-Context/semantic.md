# RFC-FO-0003 — OpenTelemetry Context and Propagation

**Status:** Draft Standard  
**Category:** Standards Track  
**Version:** 0.1.0  
**Last Updated:** 2026-09-20  

Normative keywords **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** define requirement strength.

## 1. Scope

This RFC defines the language-neutral semantic contract for opentelemetry context and propagation in FullObservability.

## 2. Normative requirements

### FO-OTEL-001
Logs and events emitted inside an active span MUST be correlatable with that span through trace_id and span_id or semantically equivalent identifiers.

### FO-OTEL-002
Implementations MUST support an OpenTelemetry-compatible context model and SHOULD support W3C Trace Context and W3C Baggage propagation.

### FO-OTEL-003
Canonical identifiers and timestamps MUST map to OpenTelemetry/OTLP without semantic loss.

### FO-OTEL-004
OpenTelemetry interoperability MUST NOT depend on the selected persistence mode.

## 3. Agent implementation guidance

An implementation Agent MUST treat semantic requirements as authoritative and technology choices as bindings. It MAY choose languages, libraries, protocols, database engines and deployment topology when those choices preserve every normative invariant.

## 4. Compatibility and evolution

Minor revisions MAY clarify wording without silently changing the meaning of stable requirement identifiers. Breaking semantic changes SHOULD receive new identifiers or a new major version.

## 5. Machine-actionable requirement annotations

| Requirement | Class | Activation condition | Required evidence | Adversarial property |
|---|---|---|---|---|
| FO-OTEL-001 | REQUIRED | active_trace_exists | context correlation test | semantic requirement violated |
| FO-OTEL-002 | REQUIRED | propagation_enabled | W3C propagation test | semantic requirement violated |
| FO-OTEL-003 | REQUIRED | always | OTLP mapping test | semantic requirement violated |
| FO-OTEL-004 | REQUIRED | always | storage-independence test | semantic requirement violated |
