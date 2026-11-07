import { useState } from 'react'
import { ShieldCheck, X, AlertCircle, FileCheck, CheckCircle2 } from 'lucide-react'

function WarrantyModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="warranty-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative bg-brand-black-2 border border-brand-dark-border rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl shadow-black/50">
        {/* Header */}
        <div className="sticky top-0 bg-brand-black-2 border-b border-brand-dark-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck size={22} className="text-brand-blue" aria-hidden="true" />
            <h2 id="warranty-modal-title" className="text-base font-semibold text-white">
              Condições da Garantia
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-brand-gray hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-6 text-sm text-brand-gray leading-relaxed">

          {/* Legal warranty */}
          <section aria-labelledby="warranty-legal">
            <div className="flex items-center gap-2.5 mb-3">
              <FileCheck size={16} className="text-brand-blue flex-shrink-0" aria-hidden="true" />
              <h3 id="warranty-legal" className="font-semibold text-white">Garantia Legal</h3>
            </div>
            <p>
              Conforme o Código de Defesa do Consumidor, os serviços de reparo possuem garantia legal
              de <strong className="text-white">90 dias</strong> a partir da data de entrega.
              Essa garantia é assegurada por lei e não pode ser reduzida ou excluída.
            </p>
          </section>

          {/* Contractual warranty */}
          <section aria-labelledby="warranty-contractual">
            <div className="flex items-center gap-2.5 mb-3">
              <CheckCircle2 size={16} className="text-brand-blue flex-shrink-0" aria-hidden="true" />
              <h3 id="warranty-contractual" className="font-semibold text-white">Garantia Contratual SOUZA TECH</h3>
            </div>
            <p>
              A SOUZA TECH oferece garantia de <strong className="text-white">3 meses</strong> para
              os serviços realizados, cobrindo defeitos relacionados ao componente instalado ou ao
              serviço executado, conforme as condições aplicáveis ao reparo.
            </p>
          </section>

          {/* Supplier conditions */}
          <section aria-labelledby="warranty-supplier">
            <div className="flex items-center gap-2.5 mb-3">
              <AlertCircle size={16} className="text-amber-400 flex-shrink-0" aria-hidden="true" />
              <h3 id="warranty-supplier" className="font-semibold text-white">Condições do Fornecedor</h3>
            </div>
            <p>
              Para determinados serviços, especialmente aqueles que dependem da garantia do fornecedor
              do componente, podem ser necessárias condições específicas de conservação do aparelho
              e da peça instalada. Essas condições serão informadas no momento do orçamento.
            </p>
          </section>

          {/* Exclusions */}
          <section aria-labelledby="warranty-exclusions">
            <div className="flex items-center gap-2.5 mb-3">
              <AlertCircle size={16} className="text-brand-gray flex-shrink-0" aria-hidden="true" />
              <h3 id="warranty-exclusions" className="font-semibold text-white">Observações importantes</h3>
            </div>
            <ul className="flex flex-col gap-2 list-none">
              {[
                'A garantia não cobre danos causados por quedas, impactos ou mau uso após a entrega.',
                'A garantia não cobre danos causados por líquidos após a entrega.',
                'Reparos realizados por terceiros após o serviço da SOUZA TECH podem invalidar a garantia sobre o componente instalado.',
                'A garantia legal do consumidor é assegurada independentemente das condições contratuais e do fornecedor.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-gray/40 flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <p className="text-xs text-brand-gray/50 border-t border-brand-dark-border pt-4">
            Em caso de dúvidas sobre as condições da garantia, entre em contato com a SOUZA TECH pelo WhatsApp antes de autorizar o reparo.
          </p>
        </div>
      </div>
    </div>
  )
}

export function WarrantySection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section
        id="garantia"
        className="section-padding bg-brand-black-2"
        aria-labelledby="warranty-heading"
      >
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl border border-brand-blue/20 bg-gradient-to-br from-brand-dark-card to-brand-black-2 p-8 md:p-12 overflow-hidden">
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none"
                style={{ background: 'radial-gradient(circle at center, #007BFF, transparent 70%)' }}
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center">
                    <ShieldCheck size={30} className="text-brand-blue" aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="badge mb-4">Garantia</span>
                  <h2 id="warranty-heading" className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Seu reparo com{' '}
                    <span className="gradient-text">garantia</span>
                  </h2>
                  <p className="text-brand-gray mb-4 leading-relaxed">
                    A SOUZA TECH oferece <strong className="text-white">garantia de 3 meses</strong> para
                    os serviços realizados, conforme as condições aplicáveis ao reparo.
                  </p>
                  <p className="text-sm text-brand-gray/80 mb-6 leading-relaxed">
                    Para determinados serviços, especialmente aqueles que dependem da garantia do fornecedor,
                    podem ser necessárias condições específicas de conservação do aparelho e do componente instalado.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="btn-secondary text-sm"
                    aria-haspopup="dialog"
                  >
                    <ShieldCheck size={16} aria-hidden="true" />
                    Consultar condições da garantia
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <WarrantyModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  )
}
