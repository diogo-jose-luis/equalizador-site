// src/components/sections/Hero.tsx
"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { courses } from "@/data/courses";
import type { Course } from "@/types/course";

type CSSVars = React.CSSProperties & {
  ["--delay"]?: string;
};

type StarVars = React.CSSProperties & {
  ["--d"]?: string;
};

type CourseExtras = {
  description?: string;
  destaque?: boolean;
};
type CourseWithExtras = Course & CourseExtras;

function getCoverImage(course: Course) {
  return (
    course.image || course.image2 || course.image3 || "/courses/placeholder.png"
  );
}

export default function Hero() {
  const router = useRouter();

  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];

    // filtra por title/category/slug/description (se existir)
    const matched = courses.filter((c) => {
      const course = c as CourseWithExtras;

      const hay = [
        course.title,
        course.category,
        course.slug,
        course.description,
      ]
        .filter((v): v is string => typeof v === "string" && v.length > 0)
        .join(" ")
        .toLowerCase();

      return hay.includes(query);
    });

    // limita para ficar leve no hero
    return matched.slice(0, 8);
  }, [q]);

  const goToCourse = (course: Course) => {
    setOpen(false);
    setQ("");
    router.push(`/treinamentos/${course.slug}`);
  };

  const onSubmit = () => {
    // Se tiver sugestões, entra na primeira
    if (results.length) {
      goToCourse(
        results[Math.max(0, Math.min(activeIndex, results.length - 1))]
      );
      return;
    }
    // Se não tiver sugestões, podes redirecionar para /treinamentos (opcional)
    router.push("/treinamentos");
  };

  // fechar quando clicar fora
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // sempre que resultados mudam, corrige o índice ativo
  useEffect(() => {
    setActiveIndex(0);
  }, [q]);

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[#071f3f]" />

      {/* Glow / gradientes */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_30%,rgba(0,156,249,0.35),transparent_60%),radial-gradient(700px_500px_at_80%_35%,rgba(0,169,157,0.25),transparent_60%)]" />

      {/* Orb animado */}
      <div className="hero-orb" />

      {/* Estrelas */}
      <div className="hero-stars">
        <span style={{ left: "10%", top: "20%", "--d": "3.2s" } as StarVars} />
        <span style={{ left: "18%", top: "55%", "--d": "2.4s" } as StarVars} />
        <span style={{ left: "26%", top: "30%", "--d": "3.8s" } as StarVars} />
        <span style={{ left: "33%", top: "68%", "--d": "2.8s" } as StarVars} />
        <span style={{ left: "42%", top: "18%", "--d": "3.1s" } as StarVars} />
        <span style={{ left: "48%", top: "48%", "--d": "2.6s" } as StarVars} />
        <span style={{ left: "55%", top: "26%", "--d": "4.2s" } as StarVars} />
        <span style={{ left: "62%", top: "62%", "--d": "3.5s" } as StarVars} />
        <span style={{ left: "70%", top: "20%", "--d": "2.7s" } as StarVars} />
        <span style={{ left: "78%", top: "44%", "--d": "3.9s" } as StarVars} />
        <span style={{ left: "85%", top: "26%", "--d": "2.9s" } as StarVars} />
        <span style={{ left: "92%", top: "58%", "--d": "3.3s" } as StarVars} />
        <span style={{ left: "14%", top: "80%", "--d": "4.0s" } as StarVars} />
        <span style={{ left: "22%", top: "12%", "--d": "2.5s" } as StarVars} />
        <span style={{ left: "37%", top: "36%", "--d": "3.7s" } as StarVars} />
        <span style={{ left: "46%", top: "74%", "--d": "2.3s" } as StarVars} />
        <span style={{ left: "58%", top: "12%", "--d": "3.6s" } as StarVars} />
        <span style={{ left: "66%", top: "78%", "--d": "2.8s" } as StarVars} />
        <span style={{ left: "74%", top: "66%", "--d": "4.4s" } as StarVars} />
        <span style={{ left: "81%", top: "10%", "--d": "2.6s" } as StarVars} />
        <span style={{ left: "88%", top: "40%", "--d": "3.0s" } as StarVars} />
        <span style={{ left: "95%", top: "18%", "--d": "4.1s" } as StarVars} />
      </div>

      {/* micro-grain */}
      <div className="absolute inset-0 opacity-35 bg-[radial-gradient(1px_1px_at_20%_40%,rgba(255,255,255,0.25)_0,transparent_55%),radial-gradient(1px_1px_at_80%_25%,rgba(255,255,255,0.20)_0,transparent_55%),radial-gradient(1px_1px_at_55%_70%,rgba(255,255,255,0.18)_0,transparent_55%)]" />

      <div className="container-max relative pt-10 sm:pt-14 lg:pt-20 pb-24 sm:pb-28 lg:pb-32">
        <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-12">
          {/* Texto */}
          <div className="order-1">
            <div
              className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-4 py-2 hero-reveal"
              style={{ "--delay": "0ms" } as CSSVars}
            >
              <span className="text-sm text-white/85">
                Mais de <b className="text-white">10.000+</b> formandos
                impactados
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary" />
            </div>

            <h1
              className="mt-5 sm:mt-6 font-heading text-white text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] hero-reveal"
              style={{ "--delay": "120ms" } as CSSVars}
            >
              Eleva as tuas competências com{" "}
              <span className="relative inline-block">
                <span className="text-brand-primary">treinamentos</span>
                <span className="absolute -bottom-2 left-0 right-0 h-[10px] rounded-full bg-[linear-gradient(90deg,rgba(0,156,249,0.0),rgba(0,156,249,0.45),rgba(0,169,157,0.35),rgba(0,169,157,0.0))]" />
              </span>{" "}
              de alto nível
            </h1>

            <p
              className="mt-4 sm:mt-5 text-sm sm:text-lg text-white/75 max-w-xl hero-reveal"
              style={{ "--delay": "240ms" } as CSSVars}
            >
              Consultoria e formações em Tecnologias de Informação, com foco em
              resultados práticos para profissionais, estudantes e empresas.
            </p>

            {/* ✅ Autocomplete */}
            <div
              className="mt-7 sm:mt-8 w-full max-w-xl hero-reveal"
              style={{ "--delay": "360ms" } as CSSVars}
              ref={wrapRef}
            >
              <div className="relative">
                <div className="flex flex-col sm:flex-row items-stretch rounded-2xl bg-white shadow-brand ring-1 ring-black/5 overflow-hidden">
                  <input
                    ref={inputRef}
                    type="text"
                    value={q}
                    onChange={(e) => {
                      setQ(e.target.value);
                      setOpen(true);
                    }}
                    onFocus={() => setOpen(true)}
                    onKeyDown={(e) => {
                      if (!open) return;

                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        setActiveIndex((i) =>
                          Math.min(i + 1, results.length - 1)
                        );
                      } else if (e.key === "ArrowUp") {
                        e.preventDefault();
                        setActiveIndex((i) => Math.max(i - 1, 0));
                      } else if (e.key === "Enter") {
                        e.preventDefault();
                        onSubmit();
                      } else if (e.key === "Escape") {
                        setOpen(false);
                      }
                    }}
                    placeholder="Pesquisar treinamento (ex: CCNA, Power BI, Azure...)"
                    className="flex-1 px-4 py-4 text-sm sm:text-base outline-none text-neutral-900 placeholder:text-neutral-400"
                    aria-label="Pesquisar treinamento"
                    autoComplete="off"
                  />

                  <button
                    type="button"
                    onClick={onSubmit}
                    className="px-6 sm:px-8 py-4 font-semibold text-white bg-brand-primary hover:opacity-95 transition"
                  >
                    Pesquisar
                  </button>
                </div>

                {/* Dropdown */}
                {open && q.trim() && (
                  <div className="absolute left-0 right-0 mt-2 rounded-2xl bg-white shadow-[0_22px_60px_rgba(0,0,0,0.22)] ring-1 ring-black/10 overflow-hidden z-30">
                    {results.length ? (
                      <ul className="max-h-[340px] overflow-auto py-2">
                        {results.map((course, idx) => {
                          const active = idx === activeIndex;
                          return (
                            <li key={course.id ?? course.slug}>
                              <button
                                type="button"
                                onMouseEnter={() => setActiveIndex(idx)}
                                onClick={() => goToCourse(course)}
                                className={`w-full text-left px-3 py-2.5 flex items-center gap-3 transition ${
                                  active
                                    ? "bg-black/[0.04]"
                                    : "hover:bg-black/[0.03]"
                                }`}
                              >
                                <div className="relative size-10 rounded-xl overflow-hidden bg-black/[0.04] ring-1 ring-black/5 shrink-0">
                                  <Image
                                    src={getCoverImage(course)}
                                    alt={course.title}
                                    fill
                                    className="object-cover"
                                  />
                                </div>

                                <div className="min-w-0">
                                  <div className="text-sm font-semibold text-neutral-900 truncate">
                                    {course.title}
                                  </div>
                                  <div className="text-xs text-neutral-600 truncate">
                                    {course.category}
                                  </div>
                                </div>

                                <span className="ml-auto text-xs font-semibold text-brand-primary">
                                  Ver →
                                </span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <div className="p-4 text-sm text-neutral-600">
                        Sem resultados. Experimenta outro termo.
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div
              className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 text-white/85 hero-reveal"
              style={{ "--delay": "480ms" } as CSSVars}
            >
              <div className="flex items-center gap-3">
                <span className="grid place-items-center size-9 rounded-full bg-white/10 ring-1 ring-white/15">
                  ✓
                </span>
                <span className="font-medium">Mentores Especialistas</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid place-items-center size-9 rounded-full bg-white/10 ring-1 ring-white/15">
                  ✓
                </span>
                <span className="font-medium">Suporte e Acompanhamento</span>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="order-2 relative">
            <div
              className="absolute left-2 sm:left-6 top-3 sm:top-10 z-20 rounded-2xl bg-white/90 backdrop-blur-md shadow-brand ring-1 ring-black/5 p-4 sm:p-5 w-[200px] sm:w-[220px] hero-reveal hero-reveal-left"
              style={{ "--delay": "700ms" } as CSSVars}
            >
              <div className="flex items-center gap-3">
                <div className="grid place-items-center size-11 rounded-2xl bg-brand-primary text-white">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M16 11c1.66 0 3-1.57 3-3.5S17.66 4 16 4s-3 1.57-3 3.5S14.34 11 16 11Zm-8 0c1.66 0 3-1.57 3-3.5S9.66 4 8 4 5 5.57 5 7.5 6.34 11 8 11Zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h7v-3.5C24 14.17 18.33 13 16 13Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-neutral-900">
                    10K+
                  </div>
                  <div className="text-sm text-neutral-600">
                    Formandos ativos
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute right-6 top-10 size-10 rounded-full ring-2 ring-white/15" />
            <div className="hidden sm:block absolute right-20 top-32 size-2 rounded-full bg-brand-secondary/80" />
            <div className="hidden sm:block absolute right-10 top-48 size-16 rounded-full bg-white/5 ring-1 ring-white/10" />

            <div
              className="relative mx-auto max-w-[520px] hero-reveal hero-reveal-zoom"
              style={{ "--delay": "900ms" } as CSSVars}
            >
              <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(closest-side,rgba(255,255,255,0.18),transparent)] blur-2xl" />
              <div className="relative rounded-[40px] overflow-hidden ring-1 ring-white/15 bg-white/5">
                <Image
                  src="/banners/nos.png"
                  alt="Formadora"
                  width={900}
                  height={900}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
