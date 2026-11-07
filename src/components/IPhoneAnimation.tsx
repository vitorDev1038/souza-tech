/**
 * IPhoneAnimation — iPhone 3D realista girando com CSS
 * Animação pure CSS, sem dependências externas.
 */
export function IPhoneAnimation() {
  return (
    <div className="relative flex items-center justify-center" style={{ perspective: '1000px' }}>
      {/* Glow externo */}
      <div
        className="absolute inset-0 blur-3xl opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 50% 50%, #007BFF 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Wrapper da rotação 3D */}
      <div
        style={{
          animation: 'iphoneSpin 8s ease-in-out infinite',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
        aria-hidden="true"
      >
        {/* Corpo do iPhone */}
        <div
          style={{
            width: 200,
            height: 410,
            borderRadius: 44,
            background: 'linear-gradient(160deg, #2a2a2e 0%, #1a1a1e 40%, #0f0f12 100%)',
            boxShadow: `
              inset 0 0 0 1.5px rgba(255,255,255,0.12),
              inset 2px 2px 8px rgba(255,255,255,0.06),
              0 30px 80px rgba(0,0,0,0.8),
              0 0 40px rgba(0,123,255,0.15),
              4px 4px 0 rgba(255,255,255,0.04)
            `,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Reflexo lateral esquerdo */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 3,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.15) 100%)',
              borderRadius: '44px 0 0 44px',
            }}
          />

          {/* Tela */}
          <div
            style={{
              position: 'absolute',
              top: 12,
              left: 7,
              right: 7,
              bottom: 12,
              borderRadius: 38,
              background: 'linear-gradient(135deg, #0a0f1e 0%, #05070b 60%, #0d1520 100%)',
              overflow: 'hidden',
            }}
          >
            {/* Dynamic Island */}
            <div
              style={{
                position: 'absolute',
                top: 14,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 28,
                borderRadius: 20,
                background: '#000',
                zIndex: 10,
                boxShadow: '0 0 0 1px rgba(255,255,255,0.05)',
              }}
            />

            {/* Conteúdo da tela */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                padding: '60px 20px 30px',
              }}
            >
              {/* Logo mark na tela */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: 'linear-gradient(135deg, rgba(0,123,255,0.3) 0%, rgba(0,212,255,0.1) 100%)',
                  border: '1px solid rgba(0,123,255,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(0,123,255,0.3)',
                }}
              >
                <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
                  <rect x="8" y="2" width="16" height="26" rx="3" stroke="#007BFF" strokeWidth="1.5" />
                  <circle cx="16" cy="24" r="1.5" fill="#007BFF" />
                  <path d="M16 9 L14 14 H16.5 L13.5 20" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* App name */}
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: 'white', fontSize: 13, fontWeight: 700, fontFamily: 'Inter, sans-serif', letterSpacing: 1 }}>
                  SOUZA TECH
                </p>
                <p style={{ color: 'rgba(191,199,209,0.7)', fontSize: 10, fontFamily: 'Inter, sans-serif', marginTop: 3 }}>
                  Assistência Técnica
                </p>
              </div>

              {/* Barra de status animada */}
              <div style={{ width: '80%', display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
                {[1, 0.7, 0.5].map((opacity, i) => (
                  <div
                    key={i}
                    style={{
                      height: 4,
                      borderRadius: 4,
                      background: `rgba(0,123,255,${opacity * 0.5})`,
                      width: i === 0 ? '100%' : i === 1 ? '75%' : '55%',
                      animation: `pulse ${1.5 + i * 0.3}s ease-in-out infinite`,
                    }}
                  />
                ))}
              </div>

              {/* Badge de orçamento */}
              <div
                style={{
                  marginTop: 8,
                  padding: '6px 14px',
                  borderRadius: 20,
                  background: 'rgba(0,123,255,0.2)',
                  border: '1px solid rgba(0,123,255,0.4)',
                }}
              >
                <p style={{ color: '#007BFF', fontSize: 10, fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                  Solicitar orçamento
                </p>
              </div>
            </div>

            {/* Home indicator */}
            <div
              style={{
                position: 'absolute',
                bottom: 8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                borderRadius: 4,
                background: 'rgba(255,255,255,0.25)',
              }}
            />

            {/* Reflexo de tela */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Botão lateral direito (power) */}
          <div
            style={{
              position: 'absolute',
              right: -3,
              top: 100,
              width: 3,
              height: 36,
              borderRadius: '0 2px 2px 0',
              background: 'linear-gradient(180deg, #3a3a3e, #2a2a2e)',
            }}
          />

          {/* Botões volume esquerdo */}
          {[60, 100].map((top) => (
            <div
              key={top}
              style={{
                position: 'absolute',
                left: -3,
                top,
                width: 3,
                height: 28,
                borderRadius: '2px 0 0 2px',
                background: 'linear-gradient(180deg, #3a3a3e, #2a2a2e)',
              }}
            />
          ))}

          {/* Reflexo superior */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 60,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)',
              borderRadius: '44px 44px 0 0',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>

      {/* Sombra no chão */}
      <div
        style={{
          position: 'absolute',
          bottom: -20,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 140,
          height: 20,
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.5)',
          filter: 'blur(12px)',
          animation: 'shadowPulse 8s ease-in-out infinite',
        }}
        aria-hidden="true"
      />

      <style>{`
        @keyframes iphoneSpin {
          0%   { transform: rotateY(-25deg) rotateX(5deg); }
          25%  { transform: rotateY(10deg) rotateX(-3deg); }
          50%  { transform: rotateY(25deg) rotateX(5deg); }
          75%  { transform: rotateY(-10deg) rotateX(-3deg); }
          100% { transform: rotateY(-25deg) rotateX(5deg); }
        }
        @keyframes shadowPulse {
          0%, 100% { opacity: 0.5; transform: translateX(-50%) scaleX(0.9); }
          50%       { opacity: 0.3; transform: translateX(-50%) scaleX(1.1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes iphoneSpin { 0%, 100% { transform: rotateY(-10deg); } }
        }
      `}</style>
    </div>
  )
}
