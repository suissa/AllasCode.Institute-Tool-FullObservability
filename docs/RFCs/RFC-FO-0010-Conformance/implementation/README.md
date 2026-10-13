# RFC-FO-0010 — TypeScript reference transformation

**Semantic authority:** ../semantic.md  
**Role:** descriptive mapping; not conformance evidence.

The reference mapping is requirement-driven. Source annotations use `@satisfies FO-CONF-NNN`; executable tests use `@test FO-CONF-NNN`. An `@evidence FO-CONF-NNN` annotation is valid only when a test assertion checks emitted or persisted evidence, not merely a return value or documentation.

| Requirement | TypeScript mapping | Verification rule |
|---|---|---|
| FO-CONF-001 | `src/conformance.ts` semantic hashing | Tests prove stable normalization and hash drift when meaning changes |
| FO-CONF-002 | `src/conformance.ts` status derivation | Missing source, test, evidence, or passing result cannot be verified |
| FO-CONF-003 | `src/conformance.ts` protocol-version compatibility predicate | Breaking changes require a higher major version; malformed versions fail closed |
| FO-CONF-004 | `src/conformance.ts` status derivation and `implemented/manifest.yml` | Stale semantic hashes prevent verified status |

Run `npm run check` for the TypeScript build and executable tests. The manifest remains `not_implemented` until generated metadata and real evidence are available. This branch does not claim full RFC conformance merely because the status primitive has tests.
