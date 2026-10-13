import { createHash } from 'node:crypto';

export type ConformanceStatus = 'not_implemented' | 'partial' | 'verified';

export interface ConformanceInputs {
  sourceFound: boolean;
  testFound: boolean;
  evidenceFound: boolean;
  testsPassed: boolean;
  semanticHash: string;
  verifiedAgainst: string | null;
}

/** @satisfies FO-CONF-001 @satisfies FO-CONF-004 */
export function hashSemanticStatement(statement: string): string {
  const normalized = statement.replace(/\r\n/g, '\n').trim().replace(/[ \t]+/g, ' ');
  return createHash('sha256').update(normalized, 'utf8').digest('hex');
}

/** @satisfies FO-CONF-002 @satisfies FO-CONF-004 */
export function deriveConformanceStatus(input: ConformanceInputs): ConformanceStatus {
  if (!input.sourceFound && !input.testFound && !input.evidenceFound) return 'not_implemented';
  if (!input.sourceFound || !input.testFound || !input.evidenceFound || !input.testsPassed) return 'partial';
  if (!input.verifiedAgainst || input.verifiedAgainst !== input.semanticHash) return 'partial';
  return 'verified';
}

/** @satisfies FO-CONF-003 */
export function isCompatibleProtocolChange(input: {
  previousVersion: string;
  nextVersion: string;
  breaking: boolean;
}): boolean {
  const previous = parseVersion(input.previousVersion);
  const next = parseVersion(input.nextVersion);
  if (!previous || !next) return false;
  if (input.breaking) return next.major > previous.major;
  return next.major === previous.major && next.minor >= previous.minor;
}

function parseVersion(value: string): { major: number; minor: number; patch: number } | null {
  const match = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.exec(value);
  if (!match) return null;
  return { major: Number(match[1]), minor: Number(match[2]), patch: Number(match[3]) };
}
