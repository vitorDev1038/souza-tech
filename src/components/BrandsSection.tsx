/* Brand SVG logos as inline components — no external dependency needed */

function AppleLogo() {
  return (
    <svg viewBox="0 0 32 32" width="36" height="36" fill="currentColor" aria-hidden="true">
      <path d="M22.77 17.3c-.04-3.63 2.96-5.37 3.09-5.46-1.68-2.46-4.3-2.8-5.23-2.84-2.22-.23-4.34 1.32-5.47 1.32-1.13 0-2.87-1.29-4.72-1.26-2.42.04-4.65 1.41-5.89 3.57-2.52 4.37-.65 10.85 1.81 14.4 1.2 1.74 2.63 3.69 4.5 3.62 1.81-.08 2.49-1.17 4.68-1.17 2.19 0 2.81 1.17 4.72 1.13 1.95-.03 3.18-1.77 4.37-3.52.34-.5.65-1.02.89-1.56-3.48-1.34-3.75-5.23-3.75-5.23zM19.15 7.63c.99-1.2 1.66-2.87 1.48-4.53-1.43.06-3.15.95-4.17 2.15-.92 1.06-1.72 2.76-1.5 4.39 1.58.12 3.2-.81 4.19-2.01z"/>
    </svg>
  )
}

function SamsungLogo() {
  return (
    <svg viewBox="0 0 120 32" width="100" height="28" fill="currentColor" aria-hidden="true">
      <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" letterSpacing="-0.5">SAMSUNG</text>
    </svg>
  )
}

function MotorolaLogo() {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" fill="currentColor" aria-hidden="true">
      <path d="M20 2C10.06 2 2 10.06 2 20s8.06 18 18 18 18-8.06 18-18S29.94 2 20 2zm0 3.6c7.95 0 14.4 6.45 14.4 14.4S27.95 34.4 20 34.4 5.6 27.95 5.6 20 12.05 5.6 20 5.6zm-5.5 6.4v10.5h3.2v-7.5l2.3 7.5h2l2.3-7.5V22.5h3.2V12h-4.5l-2.0 6.5L18.7 12H14.5z"/>
    </svg>
  )
}

function XiaomiLogo() {
  return (
    <svg viewBox="0 0 80 32" width="70" height="28" fill="currentColor" aria-hidden="true">
      <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700">Xiaomi</text>
    </svg>
  )
}

function OtherBrandsIcon() {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="16" cy="16" r="13" />
      <path d="M16 10v6M16 18h.01" strokeLinecap="round" />
    </svg>
  )
}

const brandsData = [
  { name: 'Apple', Logo: AppleLogo },
  { name: 'Samsung', Logo: SamsungLogo },
  { name: 'Motorola', Logo: MotorolaLogo },
  { name: 'Xiaomi', Logo: XiaomiLogo },
  { name: 'Outras marcas', Logo: OtherBrandsIcon },
]

export function BrandsSection() {
  return (
    <section
      id="marcas"
      className="section-padding bg-brand-black-2"
      aria-labelledby="brands-heading"
    >
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="badge mb-5">Marcas atendidas</span>
          <h2 id="brands-heading" className="section-title">
            Seu celular é de qual{' '}
            <span className="gradient-text">marca?</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Atendemos diferentes marcas e modelos de smartphones. Informe o modelo do seu aparelho
            para que possamos avaliar o serviço solicitado.
          </p>
        </div>

        {/* Brands display */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {brandsData.map(({ name, Logo }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center gap-3 px-6 py-5 bg-brand-dark-card border border-brand-dark-border rounded-xl min-w-[130px] text-brand-gray hover:text-white hover:border-brand-blue/30 transition-all duration-300 group"
            >
              <div className="opacity-60 group-hover:opacity-90 transition-opacity duration-300">
                <Logo />
              </div>
              <span className="text-xs font-medium tracking-wide">{name}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-brand-gray/50 mt-8">
          A disponibilidade do reparo depende do modelo, do defeito e da avaliação técnica.
          A SOUZA TECH não é assistência autorizada por fabricantes.
        </p>
      </div>
    </section>
  )
}
