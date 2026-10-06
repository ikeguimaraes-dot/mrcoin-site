import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { ArrowUpRight, Check, Coins, Rocket, Users } from 'lucide-react';
import { Logo } from '@/components/header';
import ProposalLogin from '@/components/proposal-login';
import { hasProposalAccess, PROPOSAL_COOKIE } from '@/lib/proposal-auth';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Proposta comercial | mrcoin',
  robots: { index: false, follow: false, nocache: true },
};

export default function ProposalPage() {
  const authorized = hasProposalAccess(cookies().get(PROPOSAL_COOKIE)?.value);
  if (!authorized) return <ProposalLogin/>;

  return <main className="proposal-page"><header className="proposal-header"><Logo/><span>PROPOSTA COMERCIAL</span></header><section className="proposal-hero"><span className="eyebrow">CULTURA FORTE COMEÇA PELAS PESSOAS</span><h1>Reconhecimento que<br/>vira valor. <em>De verdade.</em></h1><p>Uma proposta para transformar reconhecimento, aprendizado e engajamento em uma experiência diária para todo o time.</p></section><section className="proposal-pricing"><div className="proposal-price-card featured"><Rocket/><span>IMPLEMENTAÇÃO</span><strong><small>R$</small> 5.000</strong><p>Investimento único para preparar a operação, configurar a experiência e colocar a mrcoin em funcionamento na empresa.</p></div><div className="proposal-price-card"><Users/><span>PLATAFORMA</span><strong><small>R$</small> 10</strong><p>Por funcionário, por mês, para acesso ao ecossistema de reconhecimento e benefícios da mrcoin.</p></div><div className="proposal-price-card"><Coins/><span>COINS</span><strong><small>R$</small> 2.000</strong><p>Investimento mínimo mensal em coins para reconhecer o time e movimentar as recompensas.</p></div></section><section className="proposal-includes"><div><span className="eyebrow">O QUE SUA EMPRESA RECEBE</span><h2>Uma estrutura completa para reconhecer e engajar.</h2></div><ul><li><Check/>Carteira digital de coins para cada colaborador</li><li><Check/>Distribuição de reconhecimento pelo time</li><li><Check/>Catálogo de benefícios reais</li><li><Check/>Cursos, ranking e roleta de recompensas</li><li><Check/>Transferência de coins entre colegas</li><li><Check/>Experiência personalizada para a cultura da empresa</li></ul></section><section className="proposal-summary"><span>INVESTIMENTO</span><h2>R$ 5.000 de implementação</h2><p>+ R$ 10 por funcionário/mês + compra mínima mensal de R$ 2.000 em coins.</p><a className="button" href="mailto:ricardo.orkestri@oscpaulistana.com.br?subject=Quero avançar com a proposta mrcoin">Quero avançar com a mrcoin <ArrowUpRight size={18}/></a></section><footer className="proposal-footer"><Logo/><span>Proposta confidencial · mrcoin</span></footer></main>;
}
