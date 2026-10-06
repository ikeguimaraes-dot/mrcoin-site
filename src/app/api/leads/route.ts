import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { leadSchema } from '@/lib/lead-schema';
export const runtime = 'nodejs';
export async function POST(request: Request) {
 if (Number(request.headers.get('content-length')) > 10000) return NextResponse.json({error:'Solicitação muito grande.'},{status:413});
 const origin = request.headers.get('origin');
 if (origin) {
  try { if (new URL(origin).host !== request.headers.get('host')) return NextResponse.json({error:'Origem inválida.'},{status:403}); }
  catch { return NextResponse.json({error:'Origem inválida.'},{status:403}); }
 }
 let body: unknown;
 try { const raw = await request.text(); if(raw.length>10000) return NextResponse.json({error:'Solicitação muito grande.'},{status:413}); body=JSON.parse(raw); } catch { return NextResponse.json({error:'Dados inválidos.'},{status:400}); }
 const parsed = leadSchema.safeParse(body);
 if(!parsed.success) return NextResponse.json({error:'Confira os campos e tente novamente.',fields:parsed.error.flatten().fieldErrors},{status:400});
 if(parsed.data.website) return NextResponse.json({success:true});
 const apiKey=process.env.RESEND_API_KEY, from=process.env.LEAD_FROM_EMAIL, to=process.env.LEAD_TO_EMAIL;
 if(!apiKey || !from || !to) return NextResponse.json({error:'O contato está temporariamente indisponível. Tente novamente mais tarde.'},{status:503});
 const lead=parsed.data;
 try {
 const {error}=await new Resend(apiKey).emails.send({from,to,replyTo:lead.email,subject:lead.interest==='parceria'?'Novo interesse em parceria — mrcoin':'Novo contato comercial — mrcoin',text:`Nome: ${lead.name}\nEmpresa: ${lead.company}\nE-mail: ${lead.email}\nTelefone: ${lead.phone}\nFuncionários: ${lead.employees}\nInteresse: ${lead.interest}`});
 if(error) return NextResponse.json({error:'Não foi possível enviar agora. Tente novamente.'},{status:502});
 return NextResponse.json({success:true});
 } catch { return NextResponse.json({error:'Não foi possível enviar agora. Tente novamente.'},{status:502}); }
}
