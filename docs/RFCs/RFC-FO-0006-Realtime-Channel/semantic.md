# RFC-FO-0006 — Realtime Observability Channel

**Status:** Draft Standard  
**Category:** Standards Track  
**Version:** 0.1.0  
**Last Updated:** 2026-09-20  

Normative keywords **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** define requirement strength.

## 1. Scope

This RFC defines transport-neutral realtime delivery of observability records.

## 2. Normative requirements

### FO-REALTIME-001 — Transport-neutral channel
A realtime-capable implementation MUST expose a transport-neutral realtime channel abstraction for observability records.

### FO-REALTIME-002 — Canonical payload preservation
Realtime delivery MUST preserve signal kind, emission time and the canonical observability payload.

### FO-REALTIME-003 — Backpressure isolation
A slow or disconnected realtime consumer MUST NOT block application execution indefinitely.

### FO-REALTIME-004 — Subscription semantics
If subscription filtering is supported, filtering MUST NOT mutate persisted telemetry.

### FO-REALTIME-005 — Pluggable security
When authentication or authorization is enabled for realtime delivery, the mechanism MUST be pluggable and MUST NOT alter signal semantics.

## 3. Non-normative implementation note

WebSocket is the default reference implementation because of browser compatibility and operational simplicity. gRPC streaming is an allowed alternative binding. Other realtime transports MAY be used when they preserve this RFC.

## 4. Machine-actionable requirement annotations

| Requirement | Class | Activation condition | Required evidence | Adversarial property |
|---|---|---|---|---|
| FO-REALTIME-001 | REQUIRED | realtime_enabled | realtime transport test | public API is hard-coupled to one transport |
| FO-REALTIME-002 | REQUIRED | realtime_enabled | envelope compatibility test | transport changes canonical payload semantics |
| FO-REALTIME-003 | REQUIRED | slow_consumer_exists | backpressure test | slow consumer blocks application indefinitely |
| FO-REALTIME-004 | REQUIRED | subscription_supported | subscription filter test | filtering mutates persisted telemetry |
| FO-REALTIME-005 | CONDITIONAL | auth_enabled | authorization test | transport security changes signal semantics |
