export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Vocês atendem em domicílio?',
    answer:
      'Não realizamos reparos na residência do cliente. Buscamos o aparelho em Resende e entregamos após o serviço, sem taxa.',
  },
  {
    question: 'A busca e a entrega são gratuitas?',
    answer:
      'Sim. A busca e a entrega são realizadas sem taxa em Resende, conforme as condições de atendimento combinadas.',
  },
  {
    question: 'Vocês consertam todas as marcas?',
    answer:
      'Trabalhamos com diferentes marcas e modelos. A disponibilidade do reparo depende do aparelho, do defeito e da avaliação técnica.',
  },
  {
    question: 'Quanto custa o conserto?',
    answer:
      'O valor depende do modelo do aparelho, do defeito e do componente necessário. Solicite um orçamento para receber uma avaliação.',
  },
  {
    question: 'Quanto tempo demora o reparo?',
    answer:
      'O prazo depende do diagnóstico, da disponibilidade das peças e da complexidade do serviço. O prazo será informado após a avaliação.',
  },
  {
    question: 'O aparelho tem garantia?',
    answer:
      'Os serviços possuem garantia conforme as condições aplicáveis ao reparo, incluindo a garantia legal e as condições contratuais informadas pela SOUZA TECH.',
  },
  {
    question: 'Como solicitar um orçamento?',
    answer:
      'Preencha o formulário do site ou entre em contato diretamente pelo WhatsApp.',
  },
]
