import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { whatsappLink } from '../config/company'

const WA_MESSAGE = 'Olá, SOUZA TECH! Gostaria de solicitar um orçamento.'

function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Show after a short delay
    const showTimer = setTimeout(() => setIsVisible(true), 1500)
    // Show tooltip after button appears
    const tooltipTimer = setTimeout(() => {
      if (!isDismissed) setIsTooltipOpen(true)
    }, 3000)
    // Auto-hide tooltip
    const hideTooltip = setTimeout(() => setIsTooltipOpen(false), 7000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(tooltipTimer)
      clearTimeout(hideTooltip)
    }
  }, [isDismissed])

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2"
      aria-label="Contato rápido pelo WhatsApp"
    >
      {/* Tooltip / CTA bubble */}
      {isTooltipOpen && (
        <div
          className="relative bg-brand-dark-card border border-brand-dark-border rounded-xl p-3 pr-8 shadow-lg max-w-[220px] animate-fade-in"
          role="tooltip"
        >
          <button
            type="button"
            onClick={() => { setIsTooltipOpen(false); setIsDismissed(true) }}
            className="absolute top-1.5 right-1.5 p-1 rounded text-brand-gray/60 hover:text-white transition-colors"
            aria-label="Fechar aviso"
          >
            <X size={12} />
          </button>
          <p className="text-xs text-white font-medium mb-0.5">Precisa de ajuda?</p>
          <p className="text-xs text-brand-gray">Fale com a SOUZA TECH agora.</p>
        </div>
      )}

      {/* Floating button */}
      <a
        href={whatsappLink(WA_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:bg-[#1ebe5a] hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
        aria-label="Falar com a SOUZA TECH pelo WhatsApp"
      >
        <WhatsAppIcon size={28} />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" aria-hidden="true" />
      </a>
    </div>
  )
}
