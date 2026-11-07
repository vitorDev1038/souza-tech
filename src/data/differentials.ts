import { Truck, UserCheck, Clock, Eye, ShieldCheck, type LucideIcon } from 'lucide-react'

export interface Differential {
  icon: LucideIcon
  title: string
  description: string
}

export const differentials: Differential[] = [
  {
    icon: Truck,
    title: 'Busca e entrega em Resende',
    description:
      'Buscamos seu aparelho e entregamos após o reparo, sem taxa em Resende.',
  },
  {
    icon: UserCheck,
    title: 'Atendimento personalizado',
    description:
      'Cada aparelho é avaliado conforme o problema apresentado.',
  },
  {
    icon: Clock,
    title: 'Praticidade',
    description:
      'Você não precisa se deslocar até a assistência para levar ou buscar seu celular.',
  },
  {
    icon: Eye,
    title: 'Transparência',
    description:
      'Você recebe orientações sobre o serviço solicitado e o orçamento antes de autorizar o reparo.',
  },
  {
    icon: ShieldCheck,
    title: 'Cuidado com seu aparelho',
    description:
      'Trabalhamos com atenção durante todo o processo de manutenção.',
  },
]
