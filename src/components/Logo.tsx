/**
 * Logo component for SOUZA TECH
 *
 * Displays the brand logo. If an official image file is provided at
 * /public/logo.png (or .svg / .webp), update the `src` prop below
 * and remove the SVG fallback.
 *
 * To use an image logo:
 *   1. Place the logo file in /public/ (e.g. logo.png)
 *   2. Replace the <svg> element below with:
 *      <img src="/logo.png" alt="SOUZA TECH" className={imageClass} />
 */

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  /** Show only the icon mark (for small spaces) */
  markOnly?: boolean
  className?: string
}

const sizeMap = {
  sm: { height: 32, fontSize: 14, subSize: 9 },
  md: { height: 40, fontSize: 18, subSize: 10 },
  lg: { height: 52, fontSize: 22, subSize: 12 },
}

export function Logo({ size = 'md', markOnly = false, className = '' }: LogoProps) {
  const { height, fontSize, subSize } = sizeMap[size]

  if (markOnly) {
    return (
      <svg
        width={height}
        height={height}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SOUZA TECH"
        className={className}
      >
        <rect width="48" height="48" rx="10" fill="#007BFF" />
        <text
          x="24"
          y="32"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="20"
          fontWeight="900"
          fill="white"
          textAnchor="middle"
        >
          ST
        </text>
      </svg>
    )
  }

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`} aria-label="SOUZA TECH">
      {/* Icon mark */}
      <svg
        width={height}
        height={height}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <rect width="48" height="48" rx="10" fill="#007BFF" />
        {/* Smartphone outline */}
        <rect x="14" y="9" width="20" height="30" rx="3" stroke="white" strokeWidth="2.2" fill="none" />
        <circle cx="24" cy="34" r="1.5" fill="white" />
        {/* Lightning bolt / tech accent */}
        <path d="M26 17 L22 24 H25.5 L22 31" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          style={{ fontSize, lineHeight: 1 }}
          className="font-black tracking-wider text-white uppercase"
        >
          SOUZA
          <span style={{ color: '#007BFF' }}> TECH</span>
        </span>
        <span
          style={{ fontSize: subSize, color: '#BFC7D1', letterSpacing: '0.1em', marginTop: 2 }}
          className="font-medium uppercase"
        >
          Assistência Técnica
        </span>
      </div>
    </div>
  )
}
