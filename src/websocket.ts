import type {TelemetryRecord} from './types.js'; import type {RealtimeChannel} from './realtime.js';
export interface WebSocketPeer{send(data:string):void;readyState:number}
/** Default binding for RFC-FO-0006; WebSocket is implementation, not semantic contract. */
export class WebSocketRealtimeChannel implements RealtimeChannel{
 private peers=new Set<WebSocketPeer>(); addPeer(peer:WebSocketPeer){this.peers.add(peer);return()=>this.peers.delete(peer)}
 /** @satisfies FO-REALTIME-002 @satisfies FO-REALTIME-003 */
 async publish(records:readonly TelemetryRecord[]){for(const record of records){const data=JSON.stringify({protocol:'fullobservability.v1',signal:record.signal,emittedAtUnixNano:(BigInt(Date.now())*1000000n).toString(),payload:JSON.parse(JSON.stringify(record,(_k,v)=>typeof v==='bigint'?v.toString():v))});for(const peer of this.peers)if(peer.readyState===1)try{peer.send(data)}catch{}}}
 async forceFlush(){} async shutdown(){this.peers.clear()}
}
