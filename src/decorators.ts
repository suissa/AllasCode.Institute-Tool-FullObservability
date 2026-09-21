import type {Attributes} from './types.js'; import type {FullObservabilityRuntime} from './runtime.js';
let defaultRuntime:FullObservabilityRuntime|undefined; export function setDefaultRuntime(r:FullObservabilityRuntime){defaultRuntime=r}
/** @satisfies FO-INSTR-001 @satisfies FO-INSTR-002 @satisfies FO-INSTR-004 */
export function Observable(options:{name?:string;attributes?:Attributes}={}):MethodDecorator{return(_t,key,d:PropertyDescriptor)=>{const original=d.value as (...args:unknown[])=>unknown;d.value=async function(...args:unknown[]){if(!defaultRuntime)return original.apply(this,args);return defaultRuntime.observe(options.name??String(key),async()=>await original.apply(this,args),options.attributes)};return d}}
