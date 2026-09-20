# RFC-0001 — FullObservability Scope and Principles

Status: Draft

## Purpose
FullObservability provides one portable observability abstraction for traces, spans, logs, metrics and events.

## Non-goals
The core MUST NOT require or define causal inference, causal edges, graph databases, vector databases, embeddings, semantic retrieval or CT-RAG-specific data structures.

## Principles
1. OpenTelemetry alignment before proprietary protocol design.
2. Storage is pluggable.
3. Persistence and streaming are independent concerns.
4. Instrumentation MUST NOT change application business semantics.
5. Observability failures MUST be isolated from application failures unless explicitly configured otherwise.
6. Language implementations MUST preserve the normative contracts in these RFCs.
