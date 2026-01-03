// src/components/sections/Instructors.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Instructor = {
  name: string;
  role: string;
  photo: string;
  href?: string;
};

const defaultInstructors: Instructor[] = [
  {
    name: "Eliseu Pimentel",
    role: "Excel & Power BI",
    photo: "/instructors/eliseu.jpg",
    href: "/sobre-nos",
  },
  {
    name: "Ana Silva",
    role: "Windows Server & Azure",
    photo: "/instructors/ana.png",
    href: "/sobre-nos",
  },
  {
    name: "Milton Barros",
    role: "CCNA & Redes",
    photo: "/instructors/Milton.jpg",
    href: "/sobre-nos",
  },
  {
    name: "Ezequiel Gomes",
    role: "CCNA & Redes",
    photo: "/instructors/Ezequiel.jpg",
    href: "/sobre-nos",
  },
  {
    name: "Rosario Capuita",
    role: "CCNA & Redes",
    photo: "/instructors/rosario.jpg",
    href: "/sobre-nos",
  },
  {
    name: "Adilson Carixe",
    role: "Excel & Power BI",
    photo: "/instructors/Adilson.jpg",
    href: "/sobre-nos",
  },
];

export default function Instructors({
  instructors = defaultInstructors,
  title = "Conheça os nossos Instrutores",
  badge = "Nossos Especialistas",
  description = "Especialistas com experiência prática e foco em aprendizagem aplicada e resultados.",
  ctaLabel = "Ver mais detalhes",
  ctaHref = "/sobre-nos",
}: {
  instructors?: Instructor[];
  title?: string;
  badge?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const [index, setIndex] = useState(0);

  // responsivo simples: 1 / 2 / 4 cards visíveis
  const visible = useMemo(() => {
    if (typeof window === "undefined") return 4;
    const w = window.innerWidth;
    if (w < 640) return 1;
    if (w < 1024) return 2;
    return 4;
  }, []);

  const maxIndex = Math.max(0, instructors.length - visible);

  const pageItems = instructors.slice(index, index + visible);

  const prev = () => setIndex((v) => Math.max(0, v - 1));
  const next = () => setIndex((v) => Math.min(maxIndex, v + 1));

  return (
    <section className="relative bg-white py-14 sm:py-16 lg:py-20 overflow-hidden">
      {/* fundo suave */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_15%_25%,rgba(0,156,249,0.08),transparent_60%),radial-gradient(900px_520px_at_85%_30%,rgba(0,169,157,0.06),transparent_62%)]" />

      <div className="container-max relative">
        {/* Header central */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center rounded-xl bg-brand-primary/10 px-4 py-2 text-xs sm:text-sm font-semibold text-brand-primary">
            {badge}
          </div>

          <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl text-neutral-900 tracking-tight">
            {title.split("Instrutores")[0]}
            <span className="text-brand-primary">Instrutores</span>
            {title.includes("Instrutores") ? "" : ""}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            {description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pageItems.map((t) => (
            <div
              key={t.name + t.role}
              className="group relative rounded-[26px] bg-white ring-1 ring-black/5
              shadow-[0_18px_55px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              {/* moldura */}
              <div className="p-5">
                <div className="relative rounded-[22px] overflow-hidden bg-[#F2F4F8] ring-1 ring-black/5">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={800}
                    height={900}
                    className="w-full h-[300px] object-cover"
                  />

                  {/* mini botão share (como no print) */}
                  <button
                    type="button"
                    className="absolute right-3 bottom-3 grid place-items-center size-10 rounded-xl
                    bg-white/95 ring-1 ring-black/10 shadow-[0_10px_25px_rgba(0,0,0,0.12)]
                    hover:scale-[1.03] transition"
                    aria-label="Ações do instrutor"
                  >
                    <ShareIcon />
                  </button>

                  {/* overlay hover suave */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.08))]" />
                </div>

                <div className="mt-4 px-1">
                  <div className="font-heading text-lg text-neutral-900">
                    {t.name}
                  </div>
                  <div className="text-sm text-neutral-600 mt-1">{t.role}</div>
                </div>
              </div>

              {/* linha animada no hover */}
              <div className="h-[2px] w-0 bg-[linear-gradient(90deg,rgba(0,156,249,0.0),rgba(0,156,249,0.9),rgba(0,169,157,0.75),rgba(0,169,157,0.0))] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Footer da secção (setas + linha + botão) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          {/* setas */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              disabled={index === 0}
              className="grid place-items-center size-12 rounded-full bg-white ring-1 ring-black/10
              shadow-[0_12px_30px_rgba(0,0,0,0.08)]
              hover:bg-[#F2F4F8] transition disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Anterior"
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={index >= maxIndex}
              className="grid place-items-center size-12 rounded-full bg-white ring-1 ring-black/10
              shadow-[0_12px_30px_rgba(0,0,0,0.08)]
              hover:bg-[#F2F4F8] transition disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Próximo"
            >
              <ArrowRight />
            </button>
          </div>

          {/* linha */}
          <div className="hidden sm:block flex-1 h-px bg-neutral-200" />

          {/* botão */}
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold
            text-white bg-brand-primary shadow-brand hover:opacity-95 transition"
          >
            {ctaLabel}
            <span className="ml-2">
              <ArrowRightSmall />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---- icons ---- */
function ShareIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-brand-primary"
    >
      <path
        d="M16 6a2.5 2.5 0 1 0-2.4-3 2.5 2.5 0 0 0 2.4 3ZM6 14a2.5 2.5 0 1 0-2.4-3A2.5 2.5 0 0 0 6 14Zm10 10a2.5 2.5 0 1 0-2.4-3A2.5 2.5 0 0 0 16 24Z"
        fill="currentColor"
      />
      <path
        d="M8 12l6-4M8 12l6 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-neutral-900"
    >
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

function ArrowRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-neutral-900"
    >
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

function ArrowRightSmall() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-white"
    >
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
