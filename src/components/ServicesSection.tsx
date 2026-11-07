import { ArrowRight } from 'lucide-react'
import { services } from '../data/services'

interface ServiceCardProps {
  service: (typeof services)[number]
  onRequestQuote: (serviceId: string) => void
}

function ServiceCard({ service, onRequestQuote }: ServiceCardProps) {
  const Icon = service.icon
  return (
    <article className="card group flex flex-col gap-4 hover:shadow-lg hover:shadow-brand-blue/5">
      <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue/15 transition-colors duration-300">
        <Icon size={22} className="text-brand-blue" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <h3 className="text-base font-semibold text-white mb-2">{service.name}</h3>
        <p className="text-sm text-brand-gray leading-relaxed">{service.description}</p>
      </div>
      <button
        type="button"
        onClick={() => onRequestQuote(service.id)}
        className="flex items-center gap-2 text-sm font-medium text-brand-blue hover:text-white transition-colors duration-200 group/btn w-fit"
        aria-label={`Solicitar orçamento para ${service.name}`}
      >
        <span>Solicitar orçamento</span>
        <ArrowRight
          size={14}
          className="transform group-hover/btn:translate-x-1 transition-transform duration-200"
          aria-hidden="true"
        />
      </button>
    </article>
  )
}

interface ServicesSectionProps {
  onRequestQuote: (serviceId: string) => void
}

export function ServicesSection({ onRequestQuote }: ServicesSectionProps) {
  return (
    <section
      id="servicos"
      className="section-padding bg-brand-black-2"
      aria-labelledby="services-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge mb-5">Serviços</span>
          <h2 id="services-heading" className="section-title">
            Assistência técnica para{' '}
            <span className="gradient-text">o seu celular</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Reparos realizados com cuidado, atenção e compromisso com a qualidade.
          </p>
          <p className="text-xs text-brand-gray/50 mt-3">
            * A disponibilidade do reparo depende do modelo do aparelho, do defeito e da avaliação técnica.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onRequestQuote={onRequestQuote}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
