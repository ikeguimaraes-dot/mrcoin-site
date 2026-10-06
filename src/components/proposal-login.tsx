'use client';

import { useState } from 'react';
import { ArrowUpRight, LoaderCircle, LockKeyhole } from 'lucide-react';

export default function ProposalLogin() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const password = new FormData(event.currentTarget).get('password');
    setStatus('loading');
    setMessage('');
    try {
      const response = await fetch('/api/proposta/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Não foi possível acessar.');
      window.location.reload();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Não foi possível acessar.');
    }
  }

  return <main className="proposal-gate"><div className="proposal-gate-card"><span className="proposal-lock"><LockKeyhole size={25}/></span><span className="eyebrow">PROPOSTA COMERCIAL MRCOIN</span><h1>Conteúdo exclusivo<br/>para sua empresa.</h1><p>Digite a senha enviada pela equipe mrcoin para visualizar a proposta.</p><form onSubmit={submit}><label htmlFor="proposal-password">Senha de acesso</label><input id="proposal-password" name="password" type="password" autoComplete="current-password" required autoFocus placeholder="Digite sua senha"/><button className="button" disabled={status==='loading'}>{status==='loading'?<><LoaderCircle className="spinner" size={18}/>Verificando...</>:<>Acessar proposta <ArrowUpRight size={18}/></>}</button>{status==='error'?<span className="field-error" role="alert">{message}</span>:null}</form><a href="/" className="secondary-link">Voltar para o site</a></div></main>;
}
