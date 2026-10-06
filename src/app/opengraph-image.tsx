import { ImageResponse } from 'next/og';
export const alt='mrcoin — Reconhecimento que vira valor. De verdade.';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{background:'#08090f',color:'#f5f1e8',width:'100%',height:'100%',display:'flex',flexDirection:'column',padding:'75px',justifyContent:'space-between'}}><div style={{fontSize:40,color:'#f7bc28'}}>mrcoin.</div><div style={{fontSize:76,letterSpacing:-3,lineHeight:1.1,display:'flex',flexDirection:'column'}}><span>Reconhecimento que vira valor.</span><span style={{color:'#f7bc28'}}>De verdade.</span></div><div style={{fontSize:23,color:'#aaa7b2'}}>Pessoas no centro. Benefícios reais. Evolução constante.</div></div>,size);}
