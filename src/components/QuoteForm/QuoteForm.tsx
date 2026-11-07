import { useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, AlertCircle } from 'lucide-react'

import { company, whatsappLink } from '../../config/company'
import { brandOptions, serviceOptions, pickupLocationOptions } from '../../data/services'
import type { QuoteFormData, FormStep } from './types'
import { defaultFormData } from './types'
import { step1Schema, step2Schema, step3Schema } from './validation'
import { ProgressBar } from './ProgressBar'
import { PhotoUpload } from './PhotoUpload'
import { applyPhoneMask } from './usePhoneMask'

const TOTAL_STEPS = 4

// ---- Step 1: Device info ----
function Step1({
  data,
  onChange,
  errors,
}: {
  data: QuoteFormData
  onChange: (key: keyof QuoteFormData, value: string) => void
  errors: Record<string, string>
}) {
  return (
    <fieldset className="flex flex-col gap-5">
      <legend className="sr-only">Informações do aparelho</legend>

      {/* Brand */}
      <div>
        <label htmlFor="brand" className="label-field">
          Marca do celular <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <select
          id="brand"
          value={data.brand}
          onChange={(e) => onChange('brand', e.target.value)}
          className={`input-field ${errors.brand ? 'input-error' : ''}`}
          aria-required="true"
          aria-describedby={errors.brand ? 'brand-error' : undefined}
        >
          <option value="">Selecione a marca</option>
          {brandOptions.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
        {errors.brand && (
          <p id="brand-error" className="error-message" role="alert">
            <AlertCircle size={12} aria-hidden="true" />{errors.brand}
          </p>
        )}
      </div>

      {/* Model */}
      <div>
        <label htmlFor="model" className="label-field">
          Modelo do aparelho <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="model"
          value={data.model}
          onChange={(e) => onChange('model', e.target.value)}
          placeholder="Ex.: iPhone 13, Galaxy A14, Moto G..."
          className={`input-field ${errors.model ? 'input-error' : ''}`}
          aria-required="true"
          aria-describedby={errors.model ? 'model-error' : undefined}
          autoComplete="off"
        />
        {errors.model && (
          <p id="model-error" className="error-message" role="alert">
            <AlertCircle size={12} aria-hidden="true" />{errors.model}
          </p>
        )}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="label-field">
          Serviço desejado <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <select
          id="service"
          value={data.service}
          onChange={(e) => onChange('service', e.target.value)}
          className={`input-field ${errors.service ? 'input-error' : ''}`}
          aria-required="true"
          aria-describedby={errors.service ? 'service-error' : undefined}
        >
          <option value="">Selecione o serviço</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" className="error-message" role="alert">
            <AlertCircle size={12} aria-hidden="true" />{errors.service}
          </p>
        )}
      </div>
    </fieldset>
  )
}

// ---- Step 2: Problem description + photos ----
function Step2({
  data,
  onChange,
  onPhotosChange,
  errors,
}: {
  data: QuoteFormData
  onChange: (key: keyof QuoteFormData, value: string) => void
  onPhotosChange: (photos: File[]) => void
  errors: Record<string, string>
}) {
  return (
    <div className="flex flex-col gap-6">
      {/* Problem description */}
      <div>
        <label htmlFor="problemDescription" className="label-field">
          Descrição do problema <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <p className="text-xs text-brand-gray/60 mb-2">
          Conte o que aconteceu com seu celular. Não se preocupe se não souber o nome técnico do problema.
        </p>
        <textarea
          id="problemDescription"
          value={data.problemDescription}
          onChange={(e) => onChange('problemDescription', e.target.value)}
          placeholder="Conte o que aconteceu com seu celular... Ex.: O celular caiu e a tela trincou, está com uma mancha na tela e não consigo ver a imagem direito..."
          rows={5}
          className={`input-field resize-none ${errors.problemDescription ? 'input-error' : ''}`}
          aria-required="true"
          aria-describedby={errors.problemDescription ? 'problem-error' : undefined}
          maxLength={1000}
        />
        <div className="flex items-start justify-between mt-1">
          {errors.problemDescription ? (
            <p id="problem-error" className="error-message" role="alert">
              <AlertCircle size={12} aria-hidden="true" />{errors.problemDescription}
            </p>
          ) : (
            <span />
          )}
          <span className="text-xs text-brand-gray/40 ml-auto">
            {data.problemDescription.length}/1000
          </span>
        </div>
      </div>

      {/* Photo upload */}
      <PhotoUpload photos={data.photos} onChange={onPhotosChange} />

      <p className="text-xs text-brand-gray/50 bg-brand-dark-card border border-brand-dark-border rounded-lg p-3">
        As fotos são opcionais e ajudam a entender o problema. O envio das fotos não garante um orçamento definitivo.
        A avaliação técnica será realizada após a busca do aparelho.
      </p>
    </div>
  )
}

// ---- Step 3: Customer data ----
function Step3({
  data,
  onChange,
  errors,
}: {
  data: QuoteFormData
  onChange: (key: keyof QuoteFormData, value: string) => void
  errors: Record<string, string>
}) {
  return (
    <fieldset className="flex flex-col gap-5">
      <legend className="sr-only">Seus dados de contato</legend>

      {/* Name */}
      <div>
        <label htmlFor="customerName" className="label-field">
          Nome completo <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="customerName"
          value={data.name}
          onChange={(e) => onChange('name', e.target.value)}
          placeholder="Seu nome"
          className={`input-field ${errors.name ? 'input-error' : ''}`}
          aria-required="true"
          aria-describedby={errors.name ? 'name-error' : undefined}
          autoComplete="name"
        />
        {errors.name && (
          <p id="name-error" className="error-message" role="alert">
            <AlertCircle size={12} aria-hidden="true" />{errors.name}
          </p>
        )}
      </div>

      {/* WhatsApp */}
      <div>
        <label htmlFor="whatsapp" className="label-field">
          WhatsApp <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <input
          type="tel"
          id="whatsapp"
          value={data.whatsapp}
          onChange={(e) => onChange('whatsapp', applyPhoneMask(e.target.value))}
          placeholder="(24) 99999-9999"
          className={`input-field ${errors.whatsapp ? 'input-error' : ''}`}
          aria-required="true"
          aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
          autoComplete="tel"
          inputMode="tel"
          maxLength={15}
        />
        {errors.whatsapp && (
          <p id="whatsapp-error" className="error-message" role="alert">
            <AlertCircle size={12} aria-hidden="true" />{errors.whatsapp}
          </p>
        )}
      </div>

      {/* Neighborhood */}
      <div>
        <label htmlFor="neighborhood" className="label-field">
          Bairro <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="neighborhood"
          value={data.neighborhood}
          onChange={(e) => onChange('neighborhood', e.target.value)}
          placeholder="Seu bairro em Resende"
          className={`input-field ${errors.neighborhood ? 'input-error' : ''}`}
          aria-required="true"
          aria-describedby={errors.neighborhood ? 'neighborhood-error' : undefined}
          autoComplete="address-level3"
        />
        {errors.neighborhood && (
          <p id="neighborhood-error" className="error-message" role="alert">
            <AlertCircle size={12} aria-hidden="true" />{errors.neighborhood}
          </p>
        )}
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="label-field">
          Endereço para busca e entrega <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="address"
          value={data.address}
          onChange={(e) => onChange('address', e.target.value)}
          placeholder="Rua, número e complemento"
          className={`input-field ${errors.address ? 'input-error' : ''}`}
          aria-required="true"
          aria-describedby={errors.address ? 'address-error' : undefined}
          autoComplete="street-address"
        />
        {errors.address && (
          <p id="address-error" className="error-message" role="alert">
            <AlertCircle size={12} aria-hidden="true" />{errors.address}
          </p>
        )}
      </div>

      {/* Pickup location */}
      <div>
        <label htmlFor="pickupLocation" className="label-field">
          Local da busca <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <select
          id="pickupLocation"
          value={data.pickupLocation}
          onChange={(e) => onChange('pickupLocation', e.target.value)}
          className={`input-field ${errors.pickupLocation ? 'input-error' : ''}`}
          aria-required="true"
          aria-describedby={errors.pickupLocation ? 'pickup-error' : undefined}
        >
          <option value="">Selecione o local</option>
          {pickupLocationOptions.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
        {errors.pickupLocation && (
          <p id="pickup-error" className="error-message" role="alert">
            <AlertCircle size={12} aria-hidden="true" />{errors.pickupLocation}
          </p>
        )}
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="label-field">
          Observações <span className="text-brand-gray/50 font-normal">(opcional)</span>
        </label>
        <textarea
          id="notes"
          value={data.notes}
          onChange={(e) => onChange('notes', e.target.value)}
          placeholder="Horários preferidos, informações adicionais..."
          rows={3}
          className="input-field resize-none"
          maxLength={500}
        />
      </div>

      <p className="text-xs text-brand-gray/50 bg-brand-dark-card border border-brand-dark-border rounded-lg p-3">
        Suas informações serão utilizadas exclusivamente para o atendimento solicitado. Não solicitamos CPF, documentos pessoais, senhas ou dados financeiros.
      </p>
    </fieldset>
  )
}

// ---- Step 4: Review ----
function Step4({ data }: { data: QuoteFormData }) {
  const rows = [
    { label: 'Marca', value: data.brand },
    { label: 'Modelo', value: data.model },
    { label: 'Serviço', value: data.service },
    { label: 'Problema', value: data.problemDescription },
    { label: 'Fotos', value: data.photos.length > 0 ? `${data.photos.length} foto(s) selecionada(s)` : 'Nenhuma foto' },
    { label: 'Nome', value: data.name },
    { label: 'WhatsApp', value: data.whatsapp },
    { label: 'Bairro', value: data.neighborhood },
    { label: 'Endereço', value: data.address },
    { label: 'Local da busca', value: data.pickupLocation },
    { label: 'Observações', value: data.notes || 'Nenhuma' },
  ]

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-brand-gray">
        Confira os dados antes de continuar para o WhatsApp.
      </p>

      <dl className="flex flex-col gap-0 border border-brand-dark-border rounded-xl overflow-hidden">
        {rows.map(({ label, value }, i) => (
          <div
            key={label}
            className={`flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 px-4 py-3 ${
              i % 2 === 0 ? 'bg-brand-dark-card' : 'bg-brand-black-2'
            }`}
          >
            <dt className="text-xs font-semibold text-brand-gray/60 uppercase tracking-wider sm:w-32 flex-shrink-0">
              {label}
            </dt>
            <dd className="text-sm text-white break-words">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-4">
        <p className="text-sm text-brand-gray flex items-start gap-2">
          <span aria-hidden="true">📱</span>
          <span>
            Ao clicar em <strong className="text-white">"Continuar para o WhatsApp"</strong>, uma mensagem com seus dados
            será preparada. <strong className="text-white">Você precisará enviar a mensagem no WhatsApp</strong> para
            concluir sua solicitação de orçamento.
          </span>
        </p>
      </div>
    </div>
  )
}

// ---- Main component ----
interface QuoteFormProps {
  initialService?: string
}

export function QuoteForm({ initialService = '' }: QuoteFormProps) {
  const [step, setStep] = useState<FormStep>(1)
  const [formData, setFormData] = useState<QuoteFormData>({
    ...defaultFormData,
    service: initialService,
  })
  const [stepErrors, setStepErrors] = useState<Record<string, string>>({})

  const updateField = useCallback((key: keyof QuoteFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
    setStepErrors((prev) => {
      const next = { ...prev }
      delete next[key]
      return next
    })
  }, [])

  const updatePhotos = useCallback((photos: File[]) => {
    setFormData((prev) => ({ ...prev, photos }))
  }, [])

  function validateStep(): boolean {
    try {
      if (step === 1) {
        step1Schema.parse({ brand: formData.brand, model: formData.model, service: formData.service })
      } else if (step === 2) {
        step2Schema.parse({ problemDescription: formData.problemDescription })
      } else if (step === 3) {
        step3Schema.parse({
          name: formData.name,
          whatsapp: formData.whatsapp,
          neighborhood: formData.neighborhood,
          address: formData.address,
          pickupLocation: formData.pickupLocation,
          notes: formData.notes,
        })
      }
      setStepErrors({})
      return true
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'errors' in err) {
        const zodErr = err as { errors: { path: string[]; message: string }[] }
        const errors: Record<string, string> = {}
        zodErr.errors.forEach((e) => {
          if (e.path[0]) errors[e.path[0]] = e.message
        })
        setStepErrors(errors)
      }
      return false
    }
  }

  function goNext() {
    if (!validateStep()) return
    setStep((s) => Math.min(s + 1, TOTAL_STEPS) as FormStep)
  }

  function goBack() {
    setStepErrors({})
    setStep((s) => Math.max(s - 1, 1) as FormStep)
  }

  function buildWhatsAppMessage(): string {
    const lines = [
      `Olá, SOUZA TECH! Gostaria de solicitar um orçamento.`,
      ``,
      `*Nome:* ${formData.name}`,
      `*Marca:* ${formData.brand}`,
      `*Modelo:* ${formData.model}`,
      `*Serviço:* ${formData.service}`,
      `*Problema:* ${formData.problemDescription}`,
      `*Bairro:* ${formData.neighborhood}`,
      `*Local da busca:* ${formData.pickupLocation}`,
      `*Endereço:* ${formData.address}`,
      formData.notes ? `*Observações:* ${formData.notes}` : '',
      ``,
      `Aguardo atendimento. Obrigado!`,
    ].filter((l) => l !== undefined)

    return lines.join('\n')
  }

  function handleSendWhatsApp() {
    const message = buildWhatsAppMessage()
    const url = whatsappLink(message)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const stepTitles: Record<FormStep, string> = {
    1: 'Informações do aparelho',
    2: 'Descrição do problema',
    3: 'Seus dados',
    4: 'Revisão e envio',
  }

  return (
    <section
      id="orcamento"
      className="section-padding bg-brand-black"
      aria-labelledby="quote-form-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge mb-5">Orçamento</span>
          <h2 id="quote-form-heading" className="section-title">
            Solicite seu{' '}
            <span className="gradient-text">orçamento</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Conte para nós o que aconteceu com seu celular. Vamos analisar as informações e entrar em contato.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-brand-dark-card border border-brand-dark-border rounded-2xl p-6 md:p-8 shadow-xl shadow-black/20">
            {/* Progress */}
            <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />

            {/* Step title */}
            <h3 className="text-lg font-semibold text-white mb-6">{stepTitles[step]}</h3>

            {/* Step content */}
            <div aria-live="polite" aria-atomic="true">
              {step === 1 && (
                <Step1 data={formData} onChange={updateField} errors={stepErrors} />
              )}
              {step === 2 && (
                <Step2 data={formData} onChange={updateField} onPhotosChange={updatePhotos} errors={stepErrors} />
              )}
              {step === 3 && (
                <Step3 data={formData} onChange={updateField} errors={stepErrors} />
              )}
              {step === 4 && (
                <Step4 data={formData} />
              )}
            </div>

            {/* Navigation */}
            <div className={`flex gap-3 mt-8 ${step > 1 ? 'justify-between' : 'justify-end'}`}>
              {step > 1 && (
                <button
                  type="button"
                  onClick={goBack}
                  className="btn-secondary text-sm"
                >
                  <ChevronLeft size={16} aria-hidden="true" />
                  Voltar
                </button>
              )}

              {step < TOTAL_STEPS && (
                <button
                  type="button"
                  onClick={goNext}
                  className="btn-primary text-sm ml-auto"
                >
                  Continuar
                  <ChevronRight size={16} aria-hidden="true" />
                </button>
              )}

              {step === TOTAL_STEPS && (
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="btn-whatsapp text-sm ml-auto"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Continuar para o WhatsApp
                </button>
              )}
            </div>
          </div>

          {/* Privacy note */}
          <p className="text-center text-xs text-brand-gray/40 mt-4">
            Seus dados são utilizados apenas para atendimento.{' '}
            <span className="text-brand-gray/60">SOUZA TECH — {company.region}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
