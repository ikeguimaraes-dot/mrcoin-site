'use client';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { motion, MotionConfig, useInView, useReducedMotion } from 'framer-motion';
import { Pause, Play } from 'lucide-react';
const MotionContext = createContext(false);
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [paused, setPaused] = useState(false);
  return <MotionConfig reducedMotion="user"><MotionContext.Provider value={paused}>{children}<button className="motion-toggle" onClick={() => setPaused(!paused)} aria-label={paused ? 'Ativar animações' : 'Pausar animações'} title={paused ? 'Ativar animações' : 'Pausar animações'}>{paused ? <Play size={14}/> : <Pause size={14}/>}</button></MotionContext.Provider></MotionConfig>;
}
export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
 const reduced = useReducedMotion();
 return <motion.div className={className} initial={{ opacity: 1, y: 0 }} whileInView={reduced ? {} : { y: [18, 0], opacity: [.65, 1] }} viewport={{ once: true, amount: .15 }} transition={{ duration: .65, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}
export function Breathing({ children }: { children: React.ReactNode }) {
 const reduced = useReducedMotion(); const paused = useContext(MotionContext); const ref = useRef<HTMLDivElement>(null); const visible = useInView(ref);
 return <motion.div ref={ref} className="breathing" animate={reduced || paused || !visible ? { y: 0, scale: 1 } : { y: [0,-9,0], scale: [1,1.015,1] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>{children}</motion.div>;
}
export function Count({ value }: { value: number }) {
 const ref = useRef<HTMLSpanElement>(null); const visible = useInView(ref, { once: true }); const reduced = useReducedMotion(); const [number, setNumber] = useState(value);
 useEffect(() => { if (!visible || reduced) return; let frame: number; const start = performance.now(); const tick = (now: number) => { const p = Math.min((now-start)/1100, 1); setNumber(Math.round(value*(1-Math.pow(1-p,3)))); if(p<1) frame=requestAnimationFrame(tick); }; frame=requestAnimationFrame(tick); return () => cancelAnimationFrame(frame); }, [visible,reduced,value]);
 return <span ref={ref}><span className="sr-only">{value}</span><span aria-hidden="true">{number.toLocaleString('pt-BR')}</span></span>;
}

export function CoinParticles() {
 const reduced=useReducedMotion(); const paused=useContext(MotionContext); const ref=useRef<HTMLDivElement>(null); const visible=useInView(ref);
 return <div ref={ref} className="coin-particles" aria-hidden="true">{[0,1].map(i=><motion.span key={i} className={`decor-coin ${i===0?'coin-one':'coin-two'}`} animate={reduced||paused||!visible?{y:0}:{y:[0,i===0?-12:9,0]}} transition={{duration:8+i*2,repeat:Infinity,ease:'easeInOut'}} >m</motion.span>)}</div>;
}
