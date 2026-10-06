import { z } from 'zod';
export const leadSchema = z.object({
 name: z.string().trim().min(2,'Informe seu nome.').max(100),
 company: z.string().trim().min(2,'Informe sua empresa.').max(150),
 email: z.string().trim().email('Informe um e-mail válido.').max(254),
 phone: z.string().trim().max(25).refine(v => /^\+?[\d\s().-]+$/.test(v) && v.replace(/\D/g,'').length >= 10 && v.replace(/\D/g,'').length <= 13,'Informe um telefone com DDD.'),
 employees: z.enum(['1–10','11–50','51–200','201–500','Mais de 500'], { errorMap: () => ({message:'Selecione o tamanho do time.'}) }),
 website: z.string().max(200).optional().default(''),
 interest: z.enum(['empresa','parceria']).default('empresa'),
});
export type Lead = z.infer<typeof leadSchema>;
