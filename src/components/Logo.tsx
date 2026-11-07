/**
 * Logo component — SOUZA TECH
 * Usa a logo oficial em /public/Logo 3D Souza Tech com Smartphone.png
 */

const LOGO_SRC = '/logo.png'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 48,
  md: 64,
  lg: 88,
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const height = sizeMap[size]

  return (
    <img
      src={LOGO_SRC}
      alt="SOUZA TECH — Assistência Técnica de Celulares"
      height={height}
      style={{ height, width: 'auto', objectFit: 'contain' }}
      className={className}
      draggable={false}
    />
  )
}
