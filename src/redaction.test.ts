import test from 'node:test';
import assert from 'node:assert/strict';
import { redactAttributes, redactValue, redactRecord } from './redaction.js';

/** @test FO-SAFE-001 @test FO-SAFE-002 */
test('redacts normalized and nested credential keys', () => {
  const input = {
    authorization: 'Bearer top-secret',
    access_token: 'abc',
    nested: { 'client-secret': 'def', safe: 'visible' },
    list: [{ password: 'pw' }],
  };
  assert.deepEqual(redactValue(input), {
    authorization: '[REDACTED]',
    access_token: '[REDACTED]',
    nested: { 'client-secret': '[REDACTED]', safe: 'visible' },
    list: [{ password: '[REDACTED]' }],
  });
});

/** @test FO-SAFE-001 */
test('redacts sensitive attributes without mutating input', () => {
  const input = { password: 'do-not-leak', requestId: 'req-1' };
  const output = redactAttributes(input);
  assert.deepEqual(output, { password: '[REDACTED]', requestId: 'req-1' });
  assert.equal(input.password, 'do-not-leak');
});

/** @test FO-SAFE-002 */
test('redacts body as well as attributes on telemetry records', () => {
  const record = {
    signal: 'log' as const,
    timestampUnixNano: 1n,
    body: { customer: { cpf: '123', name: 'Ada' } },
    attributes: { authorization: 'Bearer secret' },
  };
  const output = redactRecord(record);
  assert.deepEqual(output.body, { customer: { cpf: '[REDACTED]', name: 'Ada' } });
  assert.equal(output.attributes.authorization, '[REDACTED]');
});

/** @test FO-SAFE-003 */
test('bounds cyclic and deeply nested payloads', () => {
  const cyclic: Record<string, unknown> = {};
  cyclic.self = cyclic;
  assert.deepEqual(redactValue(cyclic), { self: '[CIRCULAR]' });
  let deep: unknown = 'end';
  for (let i = 0; i < 25; i++) deep = { child: deep };
  let current = redactValue(deep) as Record<string, unknown>;
  for (let i = 0; i < 20; i++) current = current.child as Record<string, unknown>;
  assert.equal(current.child, '[TRUNCATED]');
});
