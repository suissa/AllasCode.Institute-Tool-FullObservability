# RFC-0010 — Conformance and Cross-language Portability

Status: Draft

The RFC suite is the source of language-neutral behavior. TypeScript is the reference implementation, not the specification.

Every language port MUST prove signal schema compatibility, trace/span propagation, log/event correlation, storage-mode semantics, WebSocket envelope compatibility, configuration compatibility, redaction-before-output, failure isolation, and preservation of application return/error semantics. Portable JSON fixtures SHOULD live under conformance/. Wire-incompatible changes require a new protocol/version identifier.
