import { useState, useRef } from 'react'
import { Upload, X, ImageIcon, AlertCircle } from 'lucide-react'

const ACCEPTED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
const MAX_FILES = 5
const MAX_SIZE_MB = 5

interface PhotoUploadProps {
  photos: File[]
  onChange: (photos: File[]) => void
}

export function PhotoUpload({ photos, onChange }: PhotoUploadProps) {
  const [error, setError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function validateAndAdd(files: FileList | null) {
    if (!files) return
    setError(null)

    const newFiles: File[] = []
    const errors: string[] = []

    Array.from(files).forEach((file) => {
      if (!ACCEPTED_TYPES.includes(file.type)) {
        errors.push(`"${file.name}" não é um formato aceito.`)
        return
      }
      if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        errors.push(`"${file.name}" excede ${MAX_SIZE_MB}MB.`)
        return
      }
      newFiles.push(file)
    })

    if (errors.length > 0) {
      setError(errors[0])
    }

    const combined = [...photos, ...newFiles].slice(0, MAX_FILES)
    onChange(combined)
  }

  function removePhoto(index: number) {
    onChange(photos.filter((_, i) => i !== index))
    setError(null)
  }

  return (
    <div>
      <p className="label-field">
        Fotos do aparelho{' '}
        <span className="text-brand-gray/50 font-normal">(opcional)</span>
      </p>
      <p className="text-xs text-brand-gray/60 mb-3">
        Envie fotos que ajudem a entender o problema. Máximo {MAX_FILES} imagens, até {MAX_SIZE_MB}MB cada.
        Formatos aceitos: JPG, PNG, WEBP.
      </p>

      {/* Drop zone */}
      {photos.length < MAX_FILES && (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault()
            setIsDragging(false)
            validateAndAdd(e.dataTransfer.files)
          }}
          className={`w-full border-2 border-dashed rounded-xl p-6 flex flex-col items-center gap-3 transition-all duration-200 cursor-pointer
            ${isDragging
              ? 'border-brand-blue bg-brand-blue/10 text-white'
              : 'border-brand-dark-border bg-brand-dark-card text-brand-gray hover:border-brand-blue/40 hover:bg-brand-blue/5'
            }`}
          aria-label="Clique ou arraste para adicionar fotos"
        >
          <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
            <Upload size={20} className="text-brand-blue" aria-hidden="true" />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium">Clique ou arraste as fotos aqui</p>
            <p className="text-xs text-brand-gray/60 mt-1">
              {photos.length}/{MAX_FILES} imagens adicionadas
            </p>
          </div>
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_TYPES.join(',')}
        multiple
        className="sr-only"
        aria-label="Selecionar fotos"
        onChange={(e) => validateAndAdd(e.target.files)}
      />

      {/* Error */}
      {error && (
        <p className="error-message mt-2" role="alert">
          <AlertCircle size={12} aria-hidden="true" />
          {error}
        </p>
      )}

      {/* Previews */}
      {photos.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3" aria-label="Fotos adicionadas">
          {photos.map((file, index) => (
            <div key={index} className="relative group rounded-lg overflow-hidden aspect-square bg-brand-dark-card border border-brand-dark-border">
              <img
                src={URL.createObjectURL(file)}
                alt={`Foto ${index + 1}: ${file.name}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => removePhoto(index)}
                  className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                  aria-label={`Remover foto ${index + 1}`}
                >
                  <X size={14} />
                </button>
              </div>
              <div className="absolute bottom-1 left-1 right-1 flex items-center gap-1 bg-black/50 rounded px-1.5 py-0.5">
                <ImageIcon size={10} className="text-white/70" aria-hidden="true" />
                <span className="text-[10px] text-white/70 truncate">{file.name}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
