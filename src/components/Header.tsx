import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { Logo } from './Logo'
import { company, whatsappLink } from '../config/company'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Garantia', href: '#garantia' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Orçamento', href: '#orcamento' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    closeMenu()
    const target = document.querySelector(href)
    if (target) {
      const headerHeight = 72
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-black/95 backdrop-blur-md border-b border-brand-dark-border shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="flex-shrink-0"
              aria-label="SOUZA TECH — ir para o início"
            >
              <Logo size="sm" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2 text-sm font-medium text-brand-gray hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={whatsappLink('Olá, SOUZA TECH! Gostaria de entrar em contato.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-brand-gray hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                aria-label="Contato via WhatsApp"
              >
                <MessageCircle size={16} />
                <span>{company.whatsappDisplay}</span>
              </a>
              <a
                href="#orcamento"
                onClick={(e) => handleNavClick(e, '#orcamento')}
                className="btn-primary text-sm"
              >
                Solicitar orçamento
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-brand-gray hover:text-white hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menu de navegação"
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-brand-black-2 border-l border-brand-dark-border
                    transform transition-transform duration-300 ease-in-out lg:hidden
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-brand-dark-border">
            <Logo size="sm" />
            <button
              type="button"
              onClick={closeMenu}
              className="p-2 rounded-lg text-brand-gray hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fechar menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-1 p-4 flex-1" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 text-base font-medium text-brand-gray hover:text-white rounded-xl hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile CTAs */}
          <div className="p-4 border-t border-brand-dark-border flex flex-col gap-3">
            <a
              href={whatsappLink('Olá, SOUZA TECH! Gostaria de entrar em contato.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full text-sm"
            >
              <MessageCircle size={18} />
              Falar pelo WhatsApp
            </a>
            <a
              href="#orcamento"
              onClick={(e) => handleNavClick(e, '#orcamento')}
              className="btn-primary w-full text-sm"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
