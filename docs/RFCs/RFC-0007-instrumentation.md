# RFC-0007 — Decorators, Annotations and Instrumentation API

Status: Draft

Languages MAY use decorators, annotations, attributes, macros, middleware or explicit wrappers. Syntax is language-specific; semantics are not.

Implementations SHOULD expose equivalents of Observable, Trace, Log, Metric and Event. Instrumentation MUST preserve return values and thrown errors, record duration when tracing is enabled, correlate logs/events to active trace context when available, and never require CT-RAG-specific metadata.
