import { z } from 'zod'

export const step1Schema = z.object({
  brand: z.string().min(1, 'Selecione a marca do aparelho'),
  model: z.string().min(2, 'Informe o modelo do aparelho'),
  service: z.string().min(1, 'Selecione o serviço desejado'),
})

export const step2Schema = z.object({
  problemDescription: z
    .string()
    .min(10, 'Descreva o problema com pelo menos 10 caracteres')
    .max(1000, 'A descrição deve ter no máximo 1000 caracteres'),
})

const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/

export const step3Schema = z.object({
  name: z.string().min(3, 'Informe seu nome completo'),
  whatsapp: z.string().regex(phoneRegex, 'Informe um WhatsApp válido. Ex: (24) 99999-9999'),
  neighborhood: z.string().min(2, 'Informe seu bairro'),
  address: z.string().min(5, 'Informe o endereço para busca e entrega'),
  pickupLocation: z.string().min(1, 'Selecione o local de busca'),
  notes: z.string().max(500, 'As observações devem ter no máximo 500 caracteres').optional(),
})

export type Step1Data = z.infer<typeof step1Schema>
export type Step2Data = z.infer<typeof step2Schema>
export type Step3Data = z.infer<typeof step3Schema>
