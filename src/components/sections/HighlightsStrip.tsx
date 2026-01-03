// src/components/sections/HighlightsStrip.tsx
export default function HighlightsStrip() {
  const items = [
    {
      title: "Formações Flexíveis",
      subtitle: "Horários ajustados ao teu ritmo",
      icon: <FlexibleIcon />,
      accent: "text-brand-secondary",
    },
    {
      title: "Sessões Gravadas",
      subtitle: "Reassiste sempre que precisares",
      icon: <RecordedIcon />,
      accent: "text-brand-primary",
    },
    {
      title: "Aulas ao Vivo",
      subtitle: "Interação em tempo real",
      icon: <LiveIcon />,
      accent: "text-brand-secondary",
    },
    {
      title: "Aprendizagem Prática",
      subtitle: "Exercícios e casos reais",
      icon: <PracticeIcon />,
      accent: "text-brand-primary",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#071f3f] py-10 sm:py-12">
      {/* fundo tipo print (diagonais + brilho) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.55]">
        <div className="absolute -left-40 top-[-120px] h-[420px] w-[520px] rotate-12 rounded-[80px] bg-white/[0.06]" />
        <div className="absolute -left-10 bottom-[-160px] h-[520px] w-[720px] rotate-12 rounded-[90px] bg-white/[0.05]" />
        <div className="absolute -right-56 top-[-80px] h-[520px] w-[620px] -rotate-12 rounded-[90px] bg-white/[0.06]" />
      </div>

      {/* gradientes brand */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-[55%] bg-[radial-gradient(700px_220px_at_20%_20%,rgba(0,156,249,0.26),transparent_60%)]" />
        <div className="absolute right-0 top-0 h-full w-[55%] bg-[radial-gradient(700px_220px_at_80%_30%,rgba(0,169,157,0.22),transparent_60%)]" />
      </div>

      {/* rabiscos decorativos (bem discreto) */}
      <div className="pointer-events-none absolute left-6 top-6 hidden lg:block">
        <ScribbleLeft />
      </div>
      <div className="pointer-events-none absolute right-8 top-10 hidden lg:block opacity-70">
        <ScribbleRight />
      </div>

      <div className="container-max relative">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="flex items-center gap-4">
              {/* icon badge */}
              <div className="grid place-items-center size-14 rounded-2xl bg-white/10 ring-1 ring-white/15">
                <span className={it.accent}>{it.icon}</span>
              </div>

              {/* text */}
              <div className="leading-tight">
                <div className="font-heading text-white text-lg font-extrabold tracking-tight">
                  {it.title}
                </div>
                <div className="mt-1 text-sm text-white/70">{it.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Icons (inline SVG) ---------------- */

function FlexibleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-current">
      <path
        d="M7 3h10a2 2 0 0 1 2 2v3H5V5a2 2 0 0 1 2-2Z"
        fill="currentColor"
        opacity="0.25"
      />
      <path
        d="M5 9h14v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M8 12h4M8 15h8M8 18h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RecordedIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-current">
      <path
        d="M4 6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M17 10l3-2v8l-3-2v-4Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M7 8h6M7 12h6M7 16h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LiveIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-current">
      <path
        d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H10l-4 3v-3H6a2 2 0 0 1-2-2V6Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M11 8.5V13.5L15 11l-4-2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PracticeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-current">
      <path
        d="M12 2a7 7 0 0 0-7 7c0 3.5 2.4 6.4 5.7 6.9V19H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-2.7v-3.1C16.6 15.4 19 12.5 19 9a7 7 0 0 0-7-7Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M10 9.2 11.6 11 14.4 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------------- Scribbles (decor) ---------------- */

function ScribbleLeft() {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60" fill="none">
      <path
        d="M8 42c10-12 15 8 25-4s15 6 26-4"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M10 22c9-10 14 8 23-2 9-10 14 6 24-2"
        stroke="rgba(255,255,255,0.16)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ScribbleRight() {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60" fill="none">
      <path
        d="M20 14c8 6 10-6 18 0 8 6 10-6 18 0"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M22 36c8 6 10-6 18 0 8 6 10-6 18 0"
        stroke="rgba(255,255,255,0.16)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
