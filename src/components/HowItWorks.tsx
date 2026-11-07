import { ClipboardList, PhoneCall, Truck, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Solicite seu orçamento',
    description: 'Informe o modelo do celular e o problema apresentado pelo formulário do site ou pelo WhatsApp.',
  },
  {
    number: '02',
    icon: PhoneCall,
    title: 'Receba o atendimento',
    description: 'Entramos em contato para entender o defeito e orientar sobre o atendimento.',
  },
  {
    number: '03',
    icon: Truck,
    title: 'Buscamos seu aparelho',
    description: 'Com o atendimento combinado, buscamos seu celular em Resende, sem taxa.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Reparo e entrega',
    description: 'Após o reparo e os testes, entregamos seu aparelho pronto.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="section-padding bg-brand-black"
      aria-labelledby="how-it-works-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge mb-5">Como funciona</span>
          <h2 id="how-it-works-heading" className="section-title">
            Seu celular reparado{' '}
            <span className="gradient-text">sem complicação</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Você cuida da sua rotina. A SOUZA TECH cuida do seu aparelho.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative flex flex-col items-center text-center lg:items-center">
                  {/* Step connector dot for mobile */}
                  {index < steps.length - 1 && (
                    <div
                      className="sm:hidden absolute top-12 left-1/2 w-px h-full -translate-x-1/2 bg-gradient-to-b from-brand-blue/30 to-transparent"
                      aria-hidden="true"
                    />
                  )}

                  {/* Icon circle */}
                  <div className="relative z-10 flex flex-col items-center mb-5">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-dark-card border-2 border-brand-blue/30 flex items-center justify-center shadow-md shadow-brand-blue/10">
                      <Icon size={26} className="text-brand-blue" aria-hidden="true" />
                    </div>
                    {/* Step number */}
                    <span className="mt-2 text-xs font-bold text-brand-blue/60 tracking-widest">{step.number}</span>
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-brand-gray leading-relaxed max-w-xs">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-xs text-brand-gray/50 mt-12">
          O aparelho é levado à estrutura de trabalho da SOUZA TECH para o reparo. A busca e a entrega são realizadas em Resende.
        </p>
      </div>
    </section>
  )
}
