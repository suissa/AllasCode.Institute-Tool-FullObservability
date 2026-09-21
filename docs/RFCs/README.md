# FullObservability RFC Index

Each RFC follows the canonical FullAgenticStack structure:

```text
RFC-FO-XXXX-Name/
├── semantic.md
├── implementation/
│   ├── README.md
│   ├── bindings.yml
│   └── technology.yml
└── implemented/
    ├── manifest.yml
    ├── tests.yml
    └── evidence.yml
```

`semantic.md` is normative. `implementation/` is descriptive. `implemented/` is the verifiable semantic-lock chain and MUST NOT claim implementation without source/test/evidence.

- RFC-FO-0001 — Core Scope
- RFC-FO-0002 — Signal Model
- RFC-FO-0003 — OpenTelemetry Context and Propagation
- RFC-FO-0004 — Observation Storage and Modes
- RFC-FO-0005 — Exporters, OTLP and Grafana
- RFC-FO-0006 — Realtime Observability Channel
- RFC-FO-0007 — Instrumentation API
- RFC-FO-0008 — Configuration Contract
- RFC-FO-0009 — Privacy, Redaction and Failure Isolation
- RFC-FO-0010 — Cross-language Conformance
