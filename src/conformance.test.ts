import test from 'node:test';
import assert from 'node:assert/strict';
import { deriveConformanceStatus, hashSemanticStatement, isCompatibleProtocolChange } from './conformance.js';

/** @test FO-CONF-001 */
test('semantic statement hashing is stable for whitespace and changes with meaning', () => {
  assert.equal(hashSemanticStatement('MUST preserve semantics'), hashSemanticStatement('  MUST preserve semantics  '));
  assert.notEqual(hashSemanticStatement('MUST preserve semantics'), hashSemanticStatement('MUST weaken semantics'));
});

/** @test FO-CONF-002 @test FO-CONF-004 */
test('conformance remains unverified when source, tests, evidence, or freshness is missing', () => {
  const hash = hashSemanticStatement('requirement');
  const base = { sourceFound: true, testFound: true, evidenceFound: true, testsPassed: true, semanticHash: hash, verifiedAgainst: hash };
  assert.equal(deriveConformanceStatus(base), 'verified');
  assert.equal(deriveConformanceStatus({ ...base, sourceFound: false }), 'partial');
  assert.equal(deriveConformanceStatus({ ...base, testFound: false }), 'partial');
  assert.equal(deriveConformanceStatus({ ...base, evidenceFound: false }), 'partial');
  assert.equal(deriveConformanceStatus({ ...base, testsPassed: false }), 'partial');
  assert.equal(deriveConformanceStatus({ ...base, verifiedAgainst: 'stale-hash' }), 'partial');
  assert.equal(deriveConformanceStatus({ ...base, sourceFound: false, testFound: false, evidenceFound: false }), 'not_implemented');
});

/** @test FO-CONF-003 */
test('breaking protocol changes require a new major version; compatible changes retain major version', () => {
  assert.equal(isCompatibleProtocolChange({ previousVersion: '1.2.0', nextVersion: '2.0.0', breaking: true }), true);
  assert.equal(isCompatibleProtocolChange({ previousVersion: '1.2.0', nextVersion: '1.3.0', breaking: false }), true);
  assert.equal(isCompatibleProtocolChange({ previousVersion: '1.2.0', nextVersion: '1.2.1', breaking: false }), true);
  assert.equal(isCompatibleProtocolChange({ previousVersion: '1.2.0', nextVersion: '1.3.0', breaking: true }), false);
  assert.equal(isCompatibleProtocolChange({ previousVersion: '1.2.0', nextVersion: '2.0.0', breaking: false }), false);
  assert.equal(isCompatibleProtocolChange({ previousVersion: 'v1', nextVersion: '2', breaking: true }), false);
});
