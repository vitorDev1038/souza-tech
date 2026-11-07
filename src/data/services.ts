import { Smartphone, Battery, Zap, Wrench, Search, type LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  icon: LucideIcon
  name: string
  description: string
}

export const services: Service[] = [
  {
    id: 'troca-tela',
    icon: Smartphone,
    name: 'Troca de Tela',
    description:
      'Reparo ou substituição de telas danificadas, conforme avaliação do aparelho.',
  },
  {
    id: 'troca-bateria',
    icon: Battery,
    name: 'Troca de Bateria',
    description:
      'Substituição de baterias com problemas de autonomia, desempenho ou funcionamento.',
  },
  {
    id: 'troca-conector',
    icon: Zap,
    name: 'Troca de Conector',
    description:
      'Reparo ou substituição do conector de carregamento, conforme diagnóstico.',
  },
  {
    id: 'reparos-diversos',
    icon: Wrench,
    name: 'Reparos Diversos',
    description:
      'Avaliação e manutenção de outros componentes do aparelho.',
  },
  {
    id: 'diagnostico',
    icon: Search,
    name: 'Diagnóstico Técnico',
    description:
      'Análise do problema apresentado para identificar possíveis soluções.',
  },
]

export const serviceOptions = [
  'Troca de tela',
  'Troca de bateria',
  'Troca de conector',
  'Reparos diversos',
  'Diagnóstico técnico',
  'Não sei qual é o problema',
  'Outro serviço',
]

export const brandOptions = [
  'Apple',
  'Samsung',
  'Motorola',
  'Xiaomi',
  'Outra marca',
]

export const pickupLocationOptions = [
  'Residência',
  'Trabalho',
  'Outro local em Resende',
]
