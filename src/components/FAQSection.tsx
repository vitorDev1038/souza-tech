import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '../data/faq'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  const id = `faq-answer-${index}`
  const btnId = `faq-btn-${index}`

  return (
    <div className="border border-brand-dark-border rounded-xl overflow-hidden">
      <button
        type="button"
        id={btnId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-brand-dark-card hover:bg-brand-blue/5 transition-colors duration-200"
      >
        <span className={`text-sm font-semibold transition-colors duration-200 ${isOpen ? 'text-white' : 'text-brand-gray'}`}>
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-brand-blue flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={btnId}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-5 py-4 text-sm text-brand-gray leading-relaxed border-t border-brand-dark-border">
          {answer}
        </p>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section
      id="faq"
      className="section-padding bg-brand-black-2"
      aria-labelledby="faq-heading"
    >
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="badge mb-5">FAQ</span>
          <h2 id="faq-heading" className="section-title">
            Perguntas{' '}
            <span className="gradient-text">frequentes</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Tire suas dúvidas sobre o atendimento da SOUZA TECH.
          </p>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
