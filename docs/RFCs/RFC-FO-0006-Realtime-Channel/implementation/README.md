# RFC-FO-0006 — Realtime Channel Implementation Profile

**Pairs with:** ../semantic.md

The semantic contract is transport-neutral.

Default reference binding:
- WebSocket

Alternative binding:
- gRPC streaming

A language port MAY implement either or both. The public FullObservability API SHOULD depend on a RealtimeChannel abstraction rather than a WebSocket-specific type.
