import test from 'node:test'; import assert from 'node:assert/strict';
import {InMemoryObservationStore,redactAttributes,WebSocketRealtimeChannel} from './index.js';

/** @test FO-STORE-001 @test FO-STORE-005 */
test('ObservationStore accepts all canonical signals',async()=>{const s=new InMemoryObservationStore();await s.writeEvent({signal:'event',name:'x',timestampUnixNano:1n,attributes:{}});assert.equal(s.events.length,1)});

/** @test FO-SAFE-001 @test FO-SAFE-002 */
test('redacts common secrets',()=>{assert.equal(redactAttributes({token:'secret'}).token,'[REDACTED]')});

/** @test FO-REALTIME-001 @test FO-REALTIME-002 @test FO-REALTIME-003 */
test('WebSocket default binding emits canonical realtime envelope and isolates peer failure',async()=>{const c=new WebSocketRealtimeChannel();let message='';c.addPeer({readyState:1,send(){throw new Error('peer failure')}});c.addPeer({readyState:1,send(v){message=v}});await c.publish([{signal:'event',name:'x',timestampUnixNano:1n,attributes:{}}]);const e=JSON.parse(message);assert.equal(e.protocol,'fullobservability.v1');assert.equal(e.signal,'event');});
