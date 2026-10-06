const testimonials = [
  { company: 'Meet & Eat', role: 'Gestão de Operações & Pessoas', quote: 'Antes, a rotação de equipe na operação era nosso maior gargalo. Com a mrcoin, transformamos o reconhecimento diário em um hábito de liderança. Nosso turnover caiu 28% nos primeiros quatro meses, e o time passou a vestir a camisa com um orgulho que não víamos há tempos.' },
  { company: 'Madonna Cucina', role: 'Diretoria Executiva', quote: 'A gamificação da mrcoin nos ajudou a conectar a cultura da casa diretamente com o dia a dia da brigada. O engajamento nos padrões de qualidade disparou, e os benefícios reais trouxeram um clima de parceria incrível para a cozinha e o salão.' },
  { company: 'Freneze', role: 'Liderança de RH', quote: 'Quando atrelamos a conclusão dos módulos no app ao ganho de coins, o índice de conclusão dos cursos subiu para mais de 90%. O resultado foi uma equipe mais alinhada, segura na execução e com senso de evolução contínua.' },
  { company: 'Mr. Muu', role: 'Gerência Geral', quote: 'A mrcoin trouxe previsibilidade para nosso orçamento de incentivos. O time se sente valorizado porque a recompensa é tangível e imediata. O sentimento de pertencimento aumentou e a equipe trabalha com mais energia e sinergia.' },
  { company: 'Ciao', role: 'Gestão de Unidade', quote: 'A mrcoin permitiu que os gerentes valorizassem atitudes exemplares no momento exato em que acontecem. Isso fortaleceu a cultura de feedback positivo e refletiu diretamente na qualidade do atendimento.' },
  { company: 'Fuego', role: 'Coordenação de RH', quote: 'A motivação e a retenção de talentos atingiram um novo patamar. Ranking e conquistas criaram uma competição saudável, na qual todo esforço extra é enxergado e recompensado.' },
  { company: 'The Forge', role: 'Diretoria de Operações', quote: 'Integrar a cultura de reconhecimento da mrcoin mudou o clima organizacional. O turnover despencou, o engajamento com as metas disparou e reter os melhores profissionais ficou muito mais simples.' },
];

function Cards() {
  return <>{testimonials.map(item => <article className="testimonial-card" key={`${item.company}-${item.role}`}><span className="quote-mark" aria-hidden="true">“</span><blockquote>{item.quote}</blockquote><footer><strong>{item.company}</strong><span>{item.role}</span></footer></article>)}</>;
}

export default function Testimonials() {
  return <section className="testimonials" aria-labelledby="testimonials-title"><div className="container testimonial-heading"><span className="eyebrow">QUEM VIVE A CULTURA SENTE A DIFERENÇA</span><h2 id="testimonials-title">Resultados contados<br/>por quem está no dia a dia.</h2></div><div className="testimonial-window"><div className="testimonial-track"><Cards/><div aria-hidden="true" className="testimonial-copy"><Cards/></div></div></div></section>;
}
