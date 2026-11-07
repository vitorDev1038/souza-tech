import type { FormStep } from './types'

interface ProgressBarProps {
  currentStep: FormStep
  totalSteps: number
}

const stepLabels: Record<number, string> = {
  1: 'Aparelho',
  2: 'Problema',
  3: 'Seus dados',
  4: 'Revisão',
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="mb-8">
      {/* Step labels */}
      <div className="flex justify-between mb-3">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={`flex flex-col items-center gap-1 flex-1 ${
              step < currentStep ? 'text-brand-blue' : step === currentStep ? 'text-white' : 'text-brand-gray/40'
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300 ${
                step < currentStep
                  ? 'bg-brand-blue border-brand-blue text-white'
                  : step === currentStep
                  ? 'bg-transparent border-brand-blue text-brand-blue'
                  : 'bg-transparent border-brand-dark-border text-brand-gray/40'
              }`}
              aria-current={step === currentStep ? 'step' : undefined}
            >
              {step < currentStep ? (
                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="3 8 6.5 11.5 13 4.5" />
                </svg>
              ) : (
                step
              )}
            </div>
            <span className="text-[10px] font-medium hidden sm:block">{stepLabels[step]}</span>
          </div>
        ))}
      </div>

      {/* Progress track */}
      <div className="relative h-1 bg-brand-dark-border rounded-full overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full transition-all duration-500 ease-out"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
          role="progressbar"
          aria-valuenow={currentStep}
          aria-valuemin={1}
          aria-valuemax={totalSteps}
          aria-label={`Etapa ${currentStep} de ${totalSteps}`}
        />
      </div>

      <p className="text-xs text-brand-gray/60 mt-2 text-right">
        Etapa {currentStep} de {totalSteps}
      </p>
    </div>
  )
}
