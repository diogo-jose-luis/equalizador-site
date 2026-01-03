// src/components/sections/AboutFeaturedStrip.tsx
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Formação orientada ao mercado",
    desc: "Conteúdos práticos, alinhados a certificações e necessidades reais.",
    tone: "primary" as const,
    icon: <TargetIcon />,
  },
  {
    title: "Suporte e acompanhamento",
    desc: "Mentoria, feedback e apoio durante a tua jornada de aprendizagem.",
    tone: "secondary" as const,
    icon: <SupportIcon />,
  },
  {
    title: "Trilhas e certificações",
    desc: "CCNA, CCNP, Azure, Power BI, Segurança e muito mais.",
    tone: "purple" as const,
    icon: <CapIcon />,
  },
  {
    title: "Formação corporativa",
    desc: "Planos para empresas: turmas, calendário e metas por equipa.",
    tone: "blue" as const,
    icon: <BuildingIcon />,
  },
];

export default function AboutFeaturedStrip() {
  return (
    <section className="relative bg-[#F7F9FC] py-14 sm:py-16 lg:py-20 overflow-hidden">
      {/* suaves gradientes laterais */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_15%_35%,rgba(0,156,249,0.10),transparent_60%),radial-gradient(900px_520px_at_85%_45%,rgba(0,169,157,0.08),transparent_62%)]" />

      <div className="container-max relative">
        {/* Header central (como o screenshot) */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center rounded-xl bg-brand-primary/10 px-4 py-2 text-xs sm:text-sm font-semibold text-brand-primary">
            Programas de alto nível
          </div>

          <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl text-neutral-900 tracking-tight">
            Explora os nossos{" "}
            <span className="text-brand-primary">destaques</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            Formação e consultoria com foco em prática, performance e resultados
            reais — para pessoas e equipas.
          </p>
        </div>

        {/* Cards (4) */}
        <div className="mt-10 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="relative rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_18px_50px_rgba(0,0,0,0.08)]
              px-6 pt-10 pb-7 text-center"
            >
              {/* ícone circular no topo */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                <div className={iconWrapClass(f.tone)}>{f.icon}</div>
              </div>

              <div className="font-heading text-lg text-neutral-900">
                {f.title}
              </div>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>

              <div className="mt-5 h-px w-0 bg-brand-primary/60 mx-auto transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>

        {/* CTA strip (barra azul em baixo) */}
        <div className="mt-10 sm:mt-12">
          <div className="rounded-[28px] bg-[#0B5ED7] text-white overflow-hidden ring-1 ring-black/5 shadow-[0_28px_90px_rgba(11,94,215,0.22)]">
            <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
              {/* imagem */}
              <div className="lg:col-span-4 relative">
                <div className="absolute -left-10 -top-10 size-40 rounded-full bg-white/10 blur-2xl" />
                <div className="relative w-full max-w-[260px] mx-auto lg:mx-0">
                  <div className="rounded-[22px] overflow-hidden bg-white/10 ring-1 ring-white/20">
                    <Image
                      src="/about/student.png"
                      alt="Formanda"
                      width={600}
                      height={700}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* texto */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center rounded-xl bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold">
                  Treinamentos a sua altura
                </div>

                <h3 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl leading-[1.1]">
                  Encontra o teu{" "}
                  <span className="text-white/95">treinamento ideal</span>
                </h3>

                <p className="mt-3 text-white/80 text-sm sm:text-base max-w-2xl">
                  Diz-nos o teu objetivo (certificação, carreira, equipa) e nós
                  ajudamos a escolher a trilha certa.
                </p>
              </div>

              {/* divisor + botão */}
              <div className="lg:col-span-2 flex lg:flex-col items-center justify-between lg:justify-center gap-5">
                <div className="hidden lg:block h-24 w-px bg-white/25" />
                <Link
                  href="/treinamentos"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold
                  bg-[#00a99d] text-[#FFFFFF] hover:opacity-95 transition shadow-[0_12px_30px_rgba(245,158,11,0.25)]"
                >
                  Treinamentos
                  <span className="ml-2">
                    <ArrowRightIcon />
                  </span>
                </Link>
              </div>
            </div>

            {/* detalhe suave */}
            <div className="h-10 bg-[radial-gradient(800px_120px_at_80%_50%,rgba(255,255,255,0.16),transparent_60%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function iconWrapClass(tone: "primary" | "secondary" | "purple" | "blue") {
  const base =
    "grid place-items-center size-14 rounded-full text-white shadow-[0_18px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5";
  if (tone === "primary") return `${base} bg-brand-primary`;
  if (tone === "secondary") return `${base} bg-brand-secondary`;
  if (tone === "purple") return `${base} bg-[#7C3AED]`;
  return `${base} bg-[#2563EB]`;
}

/* ---- Icons (inline SVG) ---- */
function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M13 5l7 7-7 7M20 12H4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 16a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M12 12l6-6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 12v3a2 2 0 0 0 2 2h1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 19a3 3 0 0 0 6 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 8l9-5 9 5-9 5-9-5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7 11v5c0 1 2.5 3 5 3s5-2 5-3v-5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M21 10v6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 20V6a2 2 0 0 1 2-2h6v16H4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 8h6a2 2 0 0 1 2 2v10h-8V8Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 8h2M7 12h2M7 16h2M15 12h2M15 16h2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
