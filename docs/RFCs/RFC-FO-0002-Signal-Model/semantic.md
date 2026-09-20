# RFC-FO-0002 — Signal Model

**Status:** Draft Standard  
**Category:** Standards Track  
**Version:** 0.1.0  
**Last Updated:** 2026-09-20  

Normative keywords **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** define requirement strength.

## 1. Scope

This RFC defines the language-neutral semantic contract for signal model in FullObservability.

## 2. Normative requirements

### FO-SIGNAL-001
Trace and span records MUST preserve OpenTelemetry-representable trace identifiers, span identifiers, timestamps, status and attributes.

### FO-SIGNAL-002
Log records MUST preserve timestamp, body, severity when present, attributes and active trace/span correlation when available.

### FO-SIGNAL-003
Metric records MUST represent counter, up-down counter, gauge or histogram semantics.

### FO-SIGNAL-004
Event records MUST be observational records and MUST NOT imply causality.

### FO-SIGNAL-005
All canonical signal records MUST be serializable without loss of their normative fields.

## 3. Agent implementation guidance

An implementation Agent MUST treat semantic requirements as authoritative and technology choices as bindings. It MAY choose languages, libraries, protocols, database engines and deployment topology when those choices preserve every normative invariant.

## 4. Compatibility and evolution

Minor revisions MAY clarify wording without silently changing the meaning of stable requirement identifiers. Breaking semantic changes SHOULD receive new identifiers or a new major version.

## 5. Machine-actionable requirement annotations

| Requirement | Class | Activation condition | Required evidence | Adversarial property |
|---|---|---|---|---|
| FO-SIGNAL-001 | REQUIRED | always | schema fixtures | semantic requirement violated |
| FO-SIGNAL-002 | REQUIRED | always | schema fixtures | semantic requirement violated |
| FO-SIGNAL-003 | REQUIRED | always | schema fixtures | semantic requirement violated |
| FO-SIGNAL-004 | REQUIRED | always | schema fixtures | semantic requirement violated |
| FO-SIGNAL-005 | REQUIRED | always | roundtrip test | semantic requirement violated |
