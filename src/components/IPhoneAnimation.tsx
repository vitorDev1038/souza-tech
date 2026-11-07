/**
 * IPhoneAnimation — iPhone 3D girando com CSS
 * Compatível com mobile (iOS Safari / Chrome Android)
 */
export function IPhoneAnimation() {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: 230, height: 470 }}
      aria-hidden="true"
    >
      {/* Glow azul atrás */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: '-40px',
          background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(0,123,255,0.30) 0%, transparent 70%)',
          filter: 'blur(24px)',
        }}
      />

      {/* Corpo do iPhone */}
      <div
        style={{
          width: 200,
          height: 410,
          borderRadius: 44,
          position: 'relative',
          animation: 'iphoneSpin 7s ease-in-out infinite',
          willChange: 'transform',
          transform: 'perspective(900px) rotateY(-22deg) rotateX(4deg)',
          background: 'linear-gradient(160deg, #2c2c30 0%, #1c1c20 45%, #0f0f12 100%)',
          boxShadow: `
            inset 0 0 0 1.5px rgba(255,255,255,0.13),
            0 32px 80px rgba(0,0,0,0.85),
            0 0 50px rgba(0,123,255,0.15)
          `,
          /* SEM overflow:hidden aqui — causava borda reta */
        }}
      >
        {/* Tela — overflow:hidden só aqui dentro */}
        <div
          style={{
            position: 'absolute',
            top: 10, left: 6, right: 6, bottom: 10,
            borderRadius: 38,
            background: 'linear-gradient(150deg, #0c1220 0%, #05070b 60%, #0d1520 100%)',
            overflow: 'hidden',
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: 'absolute',
              top: 14, left: '50%',
              transform: 'translateX(-50%)',
              width: 82, height: 28,
              borderRadius: 20,
              background: '#000',
            }}
          />

          {/* Conteúdo */}
          <div
            style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 12,
              padding: '58px 20px 28px',
            }}
          >
            {/* Ícone */}
            <div
              style={{
                width: 64, height: 64, borderRadius: 16,
                background: 'linear-gradient(135deg, rgba(0,123,255,0.3) 0%, rgba(0,212,255,0.1) 100%)',
                border: '1px solid rgba(0,123,255,0.45)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 22px rgba(0,123,255,0.35)',
              }}
            >
              <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
                <rect x="8" y="2" width="16" height="26" rx="3" stroke="#007BFF" strokeWidth="1.5" />
                <circle cx="16" cy="24" r="1.5" fill="#007BFF" />
                <path d="M16 9 L14 14 H16.5 L13.5 20" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Nome */}
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: '#fff', fontSize: 13, fontWeight: 700, fontFamily: 'Inter,sans-serif', letterSpacing: 1 }}>
                SOUZA TECH
              </p>
              <p style={{ color: 'rgba(191,199,209,0.7)', fontSize: 10, fontFamily: 'Inter,sans-serif', marginTop: 3 }}>
                Assistência Técnica
              </p>
            </div>

            {/* Barras animadas */}
            <div style={{ width: '80%', display: 'flex', flexDirection: 'column', gap: 6, marginTop: 6 }}>
              {[1, 0.65, 0.45].map((op, i) => (
                <div
                  key={i}
                  style={{
                    height: 4, borderRadius: 4,
                    background: `rgba(0,123,255,${op * 0.55})`,
                    width: i === 0 ? '100%' : i === 1 ? '74%' : '52%',
                    animation: `barPulse ${1.4 + i * 0.35}s ease-in-out infinite`,
                  }}
                />
              ))}
            </div>

            {/* Badge */}
            <div
              style={{
                marginTop: 8, padding: '6px 14px', borderRadius: 20,
                background: 'rgba(0,123,255,0.18)',
                border: '1px solid rgba(0,123,255,0.4)',
              }}
            >
              <p style={{ color: '#007BFF', fontSize: 10, fontWeight: 600, fontFamily: 'Inter,sans-serif' }}>
                Solicitar orçamento
              </p>
            </div>
          </div>

          {/* Home indicator */}
          <div
            style={{
              position: 'absolute', bottom: 8, left: '50%',
              transform: 'translateX(-50%)',
              width: 80, height: 4, borderRadius: 4,
              background: 'rgba(255,255,255,0.22)',
            }}
          />

          {/* Reflexo de tela */}
          <div
            style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '38%',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Botão power — direita */}
        <div
          style={{
            position: 'absolute', right: -3, top: 104,
            width: 3, height: 36,
            borderRadius: '0 3px 3px 0',
            background: '#3a3a3e',
          }}
        />

        {/* Botões volume — esquerda (volume + e volume -) */}
        {[70, 112].map((top) => (
          <div
            key={top}
            style={{
              position: 'absolute', left: -3, top,
              width: 3, height: 28,
              borderRadius: '3px 0 0 3px',
              background: '#3a3a3e',
            }}
          />
        ))}
      </div>

      {/* Sombra no chão */}
      <div
        style={{
          position: 'absolute', bottom: -14, left: '50%',
          width: 130, height: 16,
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.5)',
          filter: 'blur(10px)',
          animation: 'shadowPulse 7s ease-in-out infinite',
          transform: 'translateX(-50%)',
        }}
      />

      <style>{`
        @keyframes iphoneSpin {
          0%   { transform: perspective(900px) rotateY(-22deg) rotateX(4deg); }
          25%  { transform: perspective(900px) rotateY(8deg)   rotateX(-2deg); }
          50%  { transform: perspective(900px) rotateY(22deg)  rotateX(4deg); }
          75%  { transform: perspective(900px) rotateY(-8deg)  rotateX(-2deg); }
          100% { transform: perspective(900px) rotateY(-22deg) rotateX(4deg); }
        }
        @keyframes shadowPulse {
          0%, 100% { opacity: 0.55; transform: translateX(-50%) scaleX(0.88); }
          50%       { opacity: 0.28; transform: translateX(-50%) scaleX(1.1); }
        }
        @keyframes barPulse {
          0%, 100% { opacity: 0.55; }
          50%       { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes iphoneSpin {
            0%, 100% { transform: perspective(900px) rotateY(-10deg); }
          }
        }
      `}</style>
    </div>
  )
}
