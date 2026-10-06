'use client';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
export function Logo() { return <a href="/" aria-label="mrcoin — início" className="logo"><span aria-hidden="true" className="logo-coin">m</span>mrcoin<span aria-hidden="true" className="logo-dot">.</span></a>; }
export default function Header() {
 const [open,setOpen]=useState(false);
 return <header className="header"><div className="container header-inner"><Logo/><nav aria-label="Navegação principal" className={open?'nav open':'nav'} id="main-nav"><a href="#como-funciona" onClick={()=>setOpen(false)}>Como funciona</a><a href="#experiencia" onClick={()=>setOpen(false)}>A experiência</a><a href="#parceiros" onClick={()=>setOpen(false)}>Para parceiros</a><a className="button button-small" href="#contato" onClick={()=>setOpen(false)}>Vamos conversar <ArrowUpRight size={16}/></a></nav><button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" aria-label={open?'Fechar menu':'Abrir menu'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header>;
}
