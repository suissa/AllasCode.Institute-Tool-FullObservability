import type { Attributes, TelemetryRecord } from './types.js';

const DEFAULT_DENY = new Set([
  'authorization', 'password', 'passwd', 'secret', 'token', 'cookie', 'set-cookie',
  'apikey', 'accesskey', 'privatekey', 'credential', 'clientsecret', 'cpf',
  'creditcard', 'ssn',
]);
const MAX_DEPTH = 20;
const REDACTED = '[REDACTED]';

function normalizedKey(key: string): string {
  return key.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function isSensitiveKey(key: string, deny: ReadonlySet<string>): boolean {
  const normalized = normalizedKey(key);
  if ([...deny].some(item => normalizedKey(item) === normalized)) return true;
  return /(authorization|password|passwd|secret|token|cookie|apikey|accesskey|privatekey|credential|cpf|creditcard|ssn)/.test(normalized);
}

/**
 * Recursively removes common credential and personal-data fields before telemetry
 * is persisted or exported. Cycles and excessive nesting are bounded safely.
 */
export function redactValue(value: unknown, deny: ReadonlySet<string> = DEFAULT_DENY): unknown {
  const seen = new WeakSet<object>();
  const visit = (input: unknown, depth: number): unknown => {
    if (depth > MAX_DEPTH) return '[TRUNCATED]';
    if (input === null || typeof input !== 'object') return input;
    if (seen.has(input)) return '[CIRCULAR]';
    seen.add(input);
    if (Array.isArray(input)) return input.map(item => visit(item, depth + 1));
    const output: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(input as Record<string, unknown>)) {
      output[key] = isSensitiveKey(key, deny) ? REDACTED : visit(child, depth + 1);
    }
    return output;
  };
  return visit(value, 0);
}

/** @satisfies FO-SAFE-001 @satisfies FO-SAFE-002 */
export function redactAttributes(attributes: Attributes, deny: ReadonlySet<string> = DEFAULT_DENY): Attributes {
  return redactValue(attributes, deny) as Attributes;
}

/** Redact all user-controlled payloads and attributes in a telemetry record. */
export function redactRecord<T extends TelemetryRecord>(record: T, deny: ReadonlySet<string> = DEFAULT_DENY): T {
  const output = { ...record, attributes: redactAttributes(record.attributes, deny) } as T;
  if ('body' in output) {
    (output as T & { body: unknown }).body = redactValue(output.body, deny);
  }
  return output;
}
