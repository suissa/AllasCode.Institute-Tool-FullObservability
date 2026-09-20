# RFC-0009 — Privacy, Redaction and Failure Isolation

Status: Draft

Implementations MUST support attribute redaction before persistence or export. Common sensitive names SHOULD include authorization, password, secret, token and cookie. By default exporter, storage and instrumentation failures MUST NOT change application behavior. Strict modes MAY be explicit. Queues and buffers MUST be bounded or protected by explicit resource limits. Implementations SHOULD support payload size limits.
