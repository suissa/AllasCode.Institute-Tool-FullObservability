# RFC-FO-0010 — Cross-language Conformance

**Status:** Draft Standard  
**Semantic version:** 1.0.0

This document is the sole normative authority for conformance. It defines observable invariants without requiring a particular language, runtime, storage engine, or transport.

## Normative requirements

### FO-CONF-001 — Semantic authority
The semantic contract MUST be language- and technology-neutral. Implementation profiles MAY select technologies but MUST NOT redefine or weaken a semantic requirement.

### FO-CONF-002 — Executable proof
Each implementation claiming conformance MUST map every applicable requirement to source and executable tests. A requirement MUST remain unverified when either mapping is missing or its tests have not passed.

### FO-CONF-003 — Versioned incompatibility
A wire-format or externally observable protocol change that breaks compatibility MUST use a new explicit protocol or format version. Compatible extensions MUST preserve interpretation of existing messages.

### FO-CONF-004 — No unverified claims
A conformance manifest MUST derive status from source mappings, test mappings, evidence assertions, and semantic freshness. Documentation alone MUST NOT promote a requirement to implemented or verified.

## Verification and semantic drift

A semantic statement is identified by its stable requirement ID and a content hash of its normalized normative text. A change to that text invalidates prior verification for the changed requirement until source, tests, and evidence are re-evaluated. Generated manifests are outputs, never authoritative inputs.

## Implementation boundary

Language-specific bindings, technology profiles, and generated artifacts belong outside this document. An implementation may add stricter guarantees, but it MUST preserve every applicable invariant above.
