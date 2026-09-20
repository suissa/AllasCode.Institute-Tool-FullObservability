# RFC-0008 — Configuration Contract

Status: Draft

Canonical configuration fields include service identity, signal enablement, storage.mode = sqlite|postgres|full, and exporters.otlp / exporters.websocket. Unknown mandatory fields MUST fail validation. Unsupported optional capabilities SHOULD produce an explicit diagnostic. Secrets MUST NOT be required inline in configuration.
