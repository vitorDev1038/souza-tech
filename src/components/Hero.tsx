import { ArrowRight, MapPin, Truck } from 'lucide-react'
import { company } from '../config/company'

function scrollToSection(id: string) {
  const el = document.querySelector(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-black"
      aria-label="Apresentação SOUZA TECH"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(to right, #007BFF 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,123,255,0.08) 0%, transparent 70%)',
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent" />
      </div>

      <div className="section-container relative z-10 w-full pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-4xl mx-auto text-center">

          {/* Location badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <span className="badge">
              <MapPin size={14} className="text-brand-blue" aria-hidden="true" />
              {company.region}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6 animate-fade-in-up">
            Seu celular quebrou?{' '}
            <span className="gradient-text">A gente resolve.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-brand-gray max-w-2xl mx-auto mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Assistência técnica de celulares com praticidade, cuidado e qualidade.
          </p>
          <p className="text-base sm:text-lg text-brand-gray/80 max-w-xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            Buscamos seu aparelho em{' '}
            <span className="text-white font-semibold">Resende</span> e entregamos pronto, sem taxa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <button
              type="button"
              onClick={() => scrollToSection('#orcamento')}
              className="btn-primary w-full sm:w-auto text-base px-8 py-4"
            >
              Solicitar orçamento
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('#servicos')}
              className="btn-secondary w-full sm:w-auto text-base px-8 py-4"
            >
              Conhecer nossos serviços
            </button>
          </div>

          {/* Trust indicators */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="flex items-center gap-2.5 text-sm text-brand-gray">
              <div className="w-8 h-8 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                <Truck size={15} className="text-brand-blue" aria-hidden="true" />
              </div>
              <span>Busca e entrega <strong className="text-white">sem taxa</strong> em Resende</span>
            </div>

            <div className="hidden sm:block w-px h-6 bg-brand-dark-border" aria-hidden="true" />

            <div className="flex items-center gap-2.5 text-sm text-brand-gray">
              <div className="w-8 h-8 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#007BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span>Garantia de <strong className="text-white">3 meses</strong> nos reparos</span>
            </div>

            <div className="hidden sm:block w-px h-6 bg-brand-dark-border" aria-hidden="true" />

            <div className="flex items-center gap-2.5 text-sm text-brand-gray">
              <div className="w-8 h-8 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#007BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span>Orçamento <strong className="text-white">sem compromisso</strong></span>
            </div>
          </div>
        </div>

        {/* Hero phone illustration */}
        <div className="mt-16 flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            {/* Glow */}
            <div
              className="absolute inset-0 blur-3xl opacity-30"
              style={{ background: 'radial-gradient(circle, #007BFF 0%, transparent 70%)' }}
              aria-hidden="true"
            />
            {/* Phone mockup */}
            <div className="relative bg-brand-dark-card border border-brand-dark-border rounded-[2.5rem] w-48 h-96 flex flex-col items-center justify-center shadow-2xl shadow-brand-blue/10">
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-brand-black rounded-full" aria-hidden="true" />
              {/* Screen content */}
              <div className="flex flex-col items-center gap-4 px-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#007BFF" strokeWidth="1.5" aria-hidden="true">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <circle cx="12" cy="18" r="1" fill="#007BFF" stroke="none" />
                    <path d="M12 7 L10 11 H12.5 L10 16" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold text-white">SOUZA TECH</p>
                  <p className="text-[10px] text-brand-gray mt-0.5">Assistência Técnica</p>
                </div>
                {/* Decorative bars */}
                <div className="w-full flex flex-col gap-1.5" aria-hidden="true">
                  <div className="h-1.5 bg-brand-blue/30 rounded-full w-full" />
                  <div className="h-1.5 bg-brand-blue/20 rounded-full w-3/4" />
                  <div className="h-1.5 bg-brand-blue/10 rounded-full w-1/2" />
                </div>
              </div>
              {/* Home bar */}
              <div className="absolute bottom-3 w-20 h-1 bg-brand-dark-border rounded-full" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Slogan bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-brand-dark-border bg-brand-black/50 backdrop-blur-sm py-3 hidden md:block">
        <p className="text-center text-xs text-brand-gray/60 font-medium tracking-widest uppercase">
          {company.slogan}
        </p>
      </div>
    </section>
  )
}
