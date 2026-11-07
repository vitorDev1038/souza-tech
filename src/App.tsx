import { useState, useCallback } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ServicesSection } from './components/ServicesSection'
import { HowItWorks } from './components/HowItWorks'
import { BrandsSection } from './components/BrandsSection'
import { DifferentialsSection } from './components/DifferentialsSection'
import { WarrantySection } from './components/WarrantySection'
import { QuoteForm } from './components/QuoteForm'
import { FAQSection } from './components/FAQSection'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { services } from './data/services'

/**
 * Maps a service ID to its display name for pre-filling the quote form.
 */
function serviceIdToName(id: string): string {
  return services.find((s) => s.id === id)?.name ?? ''
}

export default function App() {
  const [preselectedService, setPreselectedService] = useState('')

  const handleRequestQuote = useCallback((serviceId: string) => {
    const name = serviceIdToName(serviceId)
    setPreselectedService(name)
    // Scroll to form
    const el = document.querySelector('#orcamento')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-blue focus:text-white focus:rounded-lg focus:font-semibold"
      >
        Pular para o conteúdo principal
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <ServicesSection onRequestQuote={handleRequestQuote} />
        <HowItWorks />
        <BrandsSection />
        <DifferentialsSection />
        <WarrantySection />
        <QuoteForm initialService={preselectedService} />
        <FAQSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
