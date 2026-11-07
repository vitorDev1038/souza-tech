import { differentials } from '../data/differentials'

export function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      className="section-padding bg-brand-black"
      aria-labelledby="differentials-heading"
    >
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="badge mb-5">Diferenciais</span>
          <h2 id="differentials-heading" className="section-title">
            Mais praticidade{' '}
            <span className="gradient-text">para você</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentials.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="card group hover:shadow-lg hover:shadow-brand-blue/5 flex gap-4"
              >
                <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue/15 transition-colors duration-300">
                  <Icon size={20} className="text-brand-blue" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{item.title}</h3>
                  <p className="text-sm text-brand-gray leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
