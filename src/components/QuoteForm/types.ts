export interface QuoteFormData {
  // Step 1 — Device info
  brand: string
  model: string
  service: string

  // Step 2 — Problem description
  problemDescription: string
  photos: File[]

  // Step 3 — Customer data
  name: string
  whatsapp: string
  neighborhood: string
  address: string
  pickupLocation: string
  notes: string
}

export const defaultFormData: QuoteFormData = {
  brand: '',
  model: '',
  service: '',
  problemDescription: '',
  photos: [],
  name: '',
  whatsapp: '',
  neighborhood: '',
  address: '',
  pickupLocation: '',
  notes: '',
}

export type FormStep = 1 | 2 | 3 | 4
