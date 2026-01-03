// src/components/sections/Testimonials.tsx
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating?: number; // 1..5
};

const data: Testimonial[] = [
  {
    name: "Maria F.",
    role: "Formanda (Excel)",
    avatar: "/instructors/maria.jpg",
    rating: 5,
    text:
      "A metodologia é muito prática. Saí do curso a conseguir montar dashboards e explicar os indicadores ao meu chefe com confiança.",
  },
  {
    name: "Carlos K.",
    role: "Formando (Power BI)",
    avatar: "/instructors/eliseu.png",
    rating: 5,
    text:
      "Gostei do acompanhamento. As aulas são diretas, com exercícios e troubleshooting. Foi o que eu precisava para evoluir rápido.",
  },
  {
    name: "Sara S.",
    role: "Responsavel RH (Empresa)",
    avatar: "/instructors/sara.jpg",
    rating: 5,
    text:
      "A formação corporativa foi bem organizada e com foco nos nossos objetivos. Houve melhorias reais na performance da equipa.",
  },
  {
    name: "Eva P.",
    role: "CCNA Formando",
    avatar: "/instructors/eva.png",
    rating: 5,
    text:
      "Conteúdo atualizado, exemplos reais e boa orientação. Recomendo para quem quer aprender de verdade e aplicar no trabalho.",
  },
];

export default function Testimonials({
  title = "O que os nossos formandos dizem",
  badge = "Testemunhos",
  description = "Resultados reais, feedback direto e experiências que mostram o impacto da Equalizador.",
  items = data,
}: {
  title?: string;
  badge?: string;
  description?: string;
  items?: Testimonial[];
}) {
  const [i, setI] = useState(0);

  const safeItems = items?.length ? items : data;

  const current = safeItems[i];

  const next = () => setI((v) => (v + 1) % safeItems.length);
  const prev = () => setI((v) => (v - 1 + safeItems.length) % safeItems.length);

  // mostra 2 cards à direita (como no print)
  const rightCards = useMemo(() => {
    const a = safeItems[(i + 1) % safeItems.length];
    const b = safeItems[(i + 2) % safeItems.length];
    return [a, b];
  }, [i, safeItems]);

  return (
    <section className="relative bg-[#F7F9FC] py-14 sm:py-16 lg:py-20 overflow-hidden">
      {/* fundo suave */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_15%_35%,rgba(0,156,249,0.10),transparent_60%),radial-gradient(900px_520px_at_85%_45%,rgba(0,169,157,0.08),transparent_62%)]" />

      {/* detalhe decorativo (direita) */}
      <div className="pointer-events-none absolute right-10 top-40 hidden lg:block opacity-60">
        <Sunburst />
      </div>

      <div className="container-max relative">
        {/* header central */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center rounded-xl bg-brand-primary/10 px-4 py-2 text-xs sm:text-sm font-semibold text-brand-primary">
            {badge}
          </div>

          <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl text-neutral-900 tracking-tight">
            {title.split("formandos")[0]}
            <span className="text-brand-primary">formandos</span>
            {title.includes("formandos") ? title.split("formandos")[1] : ""}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            {description}
          </p>

          {/* “bolinha + ponto” como no screenshot */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="size-7 rounded-full ring-2 ring-brand-primary/25 bg-white" />
            <span className="size-2 rounded-full bg-brand-primary" />
          </div>
        </div>

        {/* layout: esquerda (painel) + 2 cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12 items-stretch">
          {/* Painel esquerdo (nav) */}
          <div className="lg:col-span-4">
            <div className="relative h-full rounded-[26px] bg-[#071f3f] text-white overflow-hidden ring-1 ring-black/10 shadow-[0_28px_90px_rgba(7,31,63,0.25)]">
              {/* brilho */}
              <div className="absolute inset-0 bg-[radial-gradient(700px_420px_at_20%_30%,rgba(0,156,249,0.22),transparent_60%),radial-gradient(600px_420px_at_80%_40%,rgba(0,169,157,0.16),transparent_62%)]" />
              {/* watermark vertical */}
              <div className="pointer-events-none absolute left-5 top-10 opacity-[0.12] rotate-[-90deg] origin-left">
                <div className="font-heading text-5xl tracking-[0.22em]">
                  TESTEMUNHOS
                </div>
              </div>

              <div className="relative p-7 sm:p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 ring-1 ring-white/15 px-3 py-2">
                    <span className="font-semibold">Equalizador</span>
                    <span className="size-1.5 rounded-full bg-brand-secondary" />
                    <span className="text-white/80 text-sm">Reviews</span>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <AvatarStack />
                    <div>
                      <div className="text-sm text-white/85">
                        <b className="text-white">(300+)</b> Avaliações
                      </div>
                      <div className="mt-1 flex items-center gap-1">
                        <Stars count={5} />
                        <span className="text-sm text-white/80 ml-2">5.0</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl bg-white/8 ring-1 ring-white/12 p-4">
                    <div className="text-sm text-white/85 leading-relaxed">
                      “{current.text}”
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <div className="relative size-11 rounded-full overflow-hidden ring-1 ring-white/20 bg-white/10">
                        <Image
                          src={current.avatar}
                          alt={current.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="leading-tight">
                        <div className="font-semibold">{current.name}</div>
                        <div className="text-xs text-white/75">
                          {current.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* nav arrows */}
                <div className="mt-6 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={prev}
                    className="grid place-items-center size-12 rounded-full bg-white/10 ring-1 ring-white/15
                    hover:bg-white/15 transition"
                    aria-label="Anterior"
                  >
                    <ArrowLeft className="text-white" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="grid place-items-center size-12 rounded-full bg-white/10 ring-1 ring-white/15
                    hover:bg-white/15 transition"
                    aria-label="Próximo"
                  >
                    <ArrowRight className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cards à direita */}
          <div className="lg:col-span-8 grid gap-6 md:grid-cols-2">
            {rightCards.map((t) => (
              <div
                key={t.name + t.role + t.text}
                className="rounded-[26px] bg-white ring-1 ring-black/5
                shadow-[0_18px_55px_rgba(0,0,0,0.08)] p-7 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <QuoteIcon />
                  <div className="flex items-center gap-1">
                    <Stars count={t.rating ?? 5} />
                  </div>
                </div>

                <p className="mt-5 text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {t.text}
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <div className="relative size-12 rounded-full overflow-hidden ring-1 ring-black/10 bg-[#F2F4F8]">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={90}
                      height={90}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="leading-tight">
                    <div className="font-semibold text-neutral-900">{t.name}</div>
                    <div className="text-xs text-neutral-600">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- small components / icons ---- */
function QuoteIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="text-brand-primary">
      <path
        d="M10 7H6a3 3 0 0 0-3 3v6h7V7Zm11 0h-4a3 3 0 0 0-3 3v6h7V7Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, idx) => (
        <svg
          key={idx}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className={idx < count ? "text-[#F59E0B]" : "text-neutral-200"}
        >
          <path
            d="M12 2l3 6 6 .8-4.4 4.2 1 6-5.6-3-5.6 3 1-6L3 8.8 9 8l3-6Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}

function ArrowLeft({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M11 5 4 12l7 7M20 12H4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={className}>
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

function AvatarStack() {
  const imgs = ["/instructors/maria.jpg", "/instructors/eva.png", "/instructors/sara.jpg", "/instructors/eliseu.png"];
  return (
    <div className="flex -space-x-2">
      {imgs.map((src, idx) => (
        <span
          key={src}
          className="relative inline-block size-9 rounded-full overflow-hidden ring-2 ring-[#071f3f] bg-white/10"
          style={{ zIndex: 10 - idx }}
        >
          <Image src={src} alt="Avatar" width={72} height={72} className="w-full h-full object-cover" />
        </span>
      ))}
    </div>
  );
}

function Sunburst() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <g opacity="0.35">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI) / 6;
          const x1 = 60 + Math.cos(a) * 18;
          const y1 = 60 + Math.sin(a) * 18;
          const x2 = 60 + Math.cos(a) * 48;
          const y2 = 60 + Math.sin(a) * 48;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="text-brand-secondary"
            />
          );
        })}
        <circle cx="60" cy="60" r="10" fill="currentColor" className="text-brand-secondary" />
      </g>
    </svg>
  );
}
