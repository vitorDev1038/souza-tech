import { MapPin, MessageCircle, Instagram, Facebook } from 'lucide-react'
import { Logo } from './Logo'
import { company, whatsappLink } from '../config/company'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Garantia', href: '#garantia' },
  { label: 'Solicitar orçamento', href: '#orcamento' },
]

function scrollToSection(href: string) {
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-black border-t border-brand-dark-border" aria-label="Rodapé">
      {/* Main footer */}
      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Logo size="md" />
            <p className="text-sm text-brand-gray leading-relaxed max-w-xs">
              {company.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-brand-gray">
              <MapPin size={14} className="text-brand-blue flex-shrink-0" aria-hidden="true" />
              <span>{company.region}</span>
            </div>
            <p className="text-xs text-brand-gray/60">
              Busca e entrega sem taxa em Resende.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {company.social.instagram ? (
                <a
                  href={company.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-brand-dark-card border border-brand-dark-border flex items-center justify-center text-brand-gray hover:text-white hover:border-brand-blue/40 transition-all duration-200"
                  aria-label="Instagram da SOUZA TECH"
                >
                  <Instagram size={16} aria-hidden="true" />
                </a>
              ) : (
                <span
                  className="w-9 h-9 rounded-lg bg-brand-dark-card border border-brand-dark-border flex items-center justify-center text-brand-gray/30 cursor-default"
                  title="Instagram — em breve"
                  aria-label="Instagram (em breve)"
                >
                  <Instagram size={16} aria-hidden="true" />
                </span>
              )}
              {company.social.facebook ? (
                <a
                  href={company.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-brand-dark-card border border-brand-dark-border flex items-center justify-center text-brand-gray hover:text-white hover:border-brand-blue/40 transition-all duration-200"
                  aria-label="Facebook da SOUZA TECH"
                >
                  <Facebook size={16} aria-hidden="true" />
                </a>
              ) : (
                <span
                  className="w-9 h-9 rounded-lg bg-brand-dark-card border border-brand-dark-border flex items-center justify-center text-brand-gray/30 cursor-default"
                  title="Facebook — em breve"
                  aria-label="Facebook (em breve)"
                >
                  <Facebook size={16} aria-hidden="true" />
                </span>
              )}
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-xs font-semibold text-brand-gray/60 uppercase tracking-wider mb-5">
              Navegação
            </h3>
            <nav aria-label="Links do rodapé">
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href) }}
                      className="text-sm text-brand-gray hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-xs font-semibold text-brand-gray/60 uppercase tracking-wider mb-5">
              Contato
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href={whatsappLink('Olá, SOUZA TECH! Gostaria de entrar em contato.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-brand-gray hover:text-white transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={16} className="text-[#25D366]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-white">{company.whatsappDisplay}</p>
                  <p className="text-xs text-brand-gray/60">WhatsApp</p>
                </div>
              </a>

              {/* Placeholder for future info */}
              {company.email && (
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-brand-dark-card border border-brand-dark-border flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-gray" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 7l10 7 10-7" />
                    </svg>
                  </div>
                  <p className="text-brand-gray">{company.email}</p>
                </div>
              )}

              {company.businessHours && (
                <div className="text-xs text-brand-gray/60 bg-brand-dark-card border border-brand-dark-border rounded-lg p-3">
                  <p className="font-medium text-brand-gray mb-1">Horário de atendimento</p>
                  <p>{company.businessHours}</p>
                </div>
              )}

              {!company.email && !company.businessHours && (
                <div className="text-xs text-brand-gray/40 bg-brand-dark-card border border-brand-dark-border rounded-lg p-3">
                  Horário de atendimento e e-mail serão disponibilizados em breve.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-dark-border">
        <div className="section-container py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-gray/50">
            <p>
              Os serviços estão sujeitos à avaliação técnica e à disponibilidade de peças.
            </p>
            <p className="flex-shrink-0">
              © {currentYear} {company.name}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
