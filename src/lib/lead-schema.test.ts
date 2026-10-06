import { test } from 'node:test';
import assert from 'node:assert/strict';
import { leadSchema } from './lead-schema';
const valid={name:' Ana Silva ',company:'Empresa',email:'ana@example.com',phone:'(11) 99999-9999',employees:'11–50'};
test('normaliza um lead válido',()=>{const lead=leadSchema.parse(valid);assert.equal(lead.name,'Ana Silva');assert.equal(lead.website,'');assert.equal(lead.interest,'empresa');});
test('rejeita dados inválidos e tamanhos excessivos',()=>{for(const field of [{email:'invalid'},{phone:'123'},{phone:'abcdefghijk'},{employees:'999'},{name:'x'.repeat(101)},{company:''}])assert.equal(leadSchema.safeParse({...valid,...field}).success,false);});
test('preserva honeypot para bloqueio no servidor',()=>assert.equal(leadSchema.parse({...valid,website:'bot.example'}).website,'bot.example'));
