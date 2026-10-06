import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';
const fraunces=Fraunces({subsets:['latin'],display:'swap',variable:'--font-fraunces'});
const manrope=Manrope({subsets:['latin'],display:'swap',variable:'--font-manrope'});
const title='mrcoin | Reconhecimento e recompensas para empresas';
const description='Reconheça seu time com coins que viram benefícios reais. Conecte reconhecimento, aprendizado e recompensas na sua empresa com a mrcoin.';
export const metadata: Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),title,description,alternates:{canonical:'/'},openGraph:{title,description,locale:'pt_BR',type:'website',siteName:'mrcoin'},twitter:{card:'summary_large_image',title,description},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR" className={`${fraunces.variable} ${manrope.variable}`}><body>{children}</body></html>}
