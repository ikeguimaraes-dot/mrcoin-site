import { NextResponse } from 'next/server';
import { PROPOSAL_COOKIE, proposalToken } from '@/lib/proposal-auth';

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (origin) {
    try {
      if (new URL(origin).host !== request.headers.get('host')) {
        return NextResponse.json({ error: 'Origem inválida.' }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: 'Origem inválida.' }, { status: 403 });
    }
  }

  const password = process.env.PROPOSAL_PASSWORD;
  if (!password) return NextResponse.json({ error: 'A proposta está temporariamente indisponível.' }, { status: 503 });

  let supplied = '';
  try {
    const body = await request.json();
    supplied = typeof body.password === 'string' ? body.password : '';
  } catch {
    return NextResponse.json({ error: 'Dados inválidos.' }, { status: 400 });
  }

  if (supplied !== password) return NextResponse.json({ error: 'Senha incorreta.' }, { status: 401 });

  const response = NextResponse.json({ success: true });
  response.cookies.set(PROPOSAL_COOKIE, proposalToken(password), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/proposta',
    maxAge: 60 * 60 * 24 * 30,
  });
  return response;
}
