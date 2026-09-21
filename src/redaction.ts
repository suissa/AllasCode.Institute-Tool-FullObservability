import type {Attributes} from './types.js';
const DEFAULT_DENY=new Set(['authorization','password','secret','token','cookie','set-cookie']);
/** @satisfies FO-SAFE-001 @satisfies FO-SAFE-002 */
export function redactAttributes(attributes:Attributes,deny:ReadonlySet<string>=DEFAULT_DENY):Attributes{const out:Attributes={};for(const [k,v] of Object.entries(attributes)) out[k]=deny.has(k.toLowerCase())?'[REDACTED]':v;return out}
