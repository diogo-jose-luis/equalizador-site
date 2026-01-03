// src/components/sections/MissionVisionValues.tsx
const items = [
  {
    title: "Missão",
    subtitle: "O que entregamos ao mercado",
    iconBg: "bg-brand-primary",
    icon: <MissionIcon />,
    text:
      "Preparar estudantes universitários para o mercado de trabalho, potenciar técnicos de TI do mercado. Prestar serviços de consultoria e implementações na área de TI a empresas do mercado nacional e estrangeiro.",
  },
  {
    title: "Visão",
    subtitle: "Onde queremos chegar",
    iconBg: "bg-brand-secondary",
    icon: <VisionIcon />,
    text:
      "Implementar um laboratório técnico, devidamente equipado com tecnologias de última geração do mercado mundial, onde empresas enviam os seus técnicos para serem treinados e/ou capacitados.",
  },
  {
    title: "Valores",
    subtitle: "Como trabalhamos",
    iconBg: "bg-brand-primary",
    icon: <ValuesIcon />,
    text:
      "A nossa prioridade consiste na prestação de um serviço altamente qualificado, contando com a colaboração de técnicos certificados e com experiência no mercado de trabalho.",
  },
];

export default function MissionVisionValues() {
  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 lg:-mt-16 pb-10 sm:pb-12">
      <div className="container-max">
        {/* wrapper flutuante */}
        <div className="relative rounded-[34px] bg-[#F2F4F8] p-6 sm:p-8 lg:p-10 ring-1 ring-black/5 shadow-[0_30px_80px_rgba(0,0,0,0.12)] overflow-hidden">
          {/* glow suave */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_320px_at_20%_20%,rgba(0,156,249,0.10),transparent_60%),radial-gradient(700px_320px_at_85%_40%,rgba(0,169,157,0.08),transparent_62%)]" />

          {/* header pequeno (opcional, discreto) */}
          <div className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center rounded-xl bg-white/70 ring-1 ring-black/5 px-4 py-2 text-xs sm:text-sm font-semibold text-neutral-800">
                Quem somos
                <span className="ml-2 size-1.5 rounded-full bg-brand-secondary" />
              </div>
              <div className="mt-3 font-heading text-xl sm:text-2xl text-neutral-900">
                Missão, Visão e Valores
              </div>
            </div>

            {/* detalhe linha */}
            <div className="hidden sm:block h-[2px] w-44 rounded-full bg-[linear-gradient(90deg,rgba(0,156,249,0.0),rgba(0,156,249,0.65),rgba(0,169,157,0.55),rgba(0,169,157,0.0))]" />
          </div>

          {/* cards */}
          <div className="relative grid gap-5 sm:gap-6 lg:grid-cols-3">
            {items.map((it) => (
              <div
                key={it.title}
                className="group rounded-[26px] bg-white ring-1 ring-black/5 p-6 sm:p-7
                transition hover:-translate-y-0.5
                hover:bg-[linear-gradient(135deg,rgba(0,156,249,0.10),rgba(0,169,157,0.08))]
                hover:ring-brand-primary/20"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`grid place-items-center size-12 rounded-2xl text-white ${it.iconBg}
                    shadow-[0_10px_20px_rgba(0,0,0,0.08)]`}
                  >
                    {it.icon}
                  </div>

                  <div className="min-w-0">
                    <div className="font-heading text-lg text-neutral-900">
                      {it.title}
                    </div>
                    <div className="text-sm text-neutral-600">
                      {it.subtitle}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-neutral-700">
                  {it.text}
                </p>

                {/* detalhe hover */}
                <div className="mt-5 h-px w-0 bg-brand-primary/60 transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Icons (inline SVG) ---- */
function MissionIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
      <path
        d="M12 2l3 6 7 .9-5 4.6 1.3 6.5L12 17.8 5.7 20 7 13.5 2 8.9 9 8l3-6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function VisionIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
      <path
        d="M12 5c5.5 0 9.5 5.3 9.5 7s-4 7-9.5 7S2.5 13.7 2.5 12 6.5 5 12 5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ValuesIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
      <path
        d="M12 21s7-4.2 7-11V6l-7-3-7 3v4c0 6.8 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m9 12 2 2 4-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
