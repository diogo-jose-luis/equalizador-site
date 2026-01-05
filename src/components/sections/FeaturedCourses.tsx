"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";

import { courses } from "@/data/courses";
import type { Course } from "@/types/course";

function getDurationLabel(course: Course) {
  return course.durationLabel ?? `• ${course.durationHours}h`;
}

function getCoverImage(course: Course) {
  return course.image || course.image2 || course.image3 || "/courses/placeholder.png";
}

function getLessonsCount(course: Course) {
  // no teu projeto já tens lessonsCount nalguns cursos
  // fallback: modules.length
  return (course.lessonsCount ?? course.modules?.length ?? 0) as number;
}

export default function FeaturedCourses() {
  const autoplay = useRef(
    Autoplay({
      delay: 2400,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const featured = useMemo(() => {
    // ✅ apenas cursos em destaque
    return courses.filter((c) => (c as any).destaque === true);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true,
    },
    [autoplay.current]
  );

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // 🔧 reInit quando a lista muda (para evitar embla "preso")
  useEffect(() => {
    emblaApi?.reInit();
  }, [emblaApi, featured.length]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Se não houver destaque, podes simplesmente não renderizar a secção
  if (!featured.length) return null;

  return (
    <section id="treinamentos" className="relative bg-[#F2F4F8] py-14 sm:py-20">
      <div className="container-max relative">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-xl bg-brand-primary/10 px-4 py-2 text-xs font-semibold text-brand-primary">
            Cursos em destaque
          </div>

          <h2 className="mt-4 font-heading text-3xl sm:text-4xl text-neutral-900 tracking-tight">
            Explora os <span className="text-brand-primary">treinamentos</span>{" "}
            em destaque
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            Programas práticos, orientados ao mercado e com foco em resultados —
            desde certificações IT até formações offshore e produtividade.
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-10">
          <div className="overflow-hidden bg-[#F2F4F8]" ref={emblaRef}>
            <div className="-ml-6 flex">
              {featured.map((course) => (
                <div
                  key={course.id ?? course.slug}
                  className="pl-6 flex-[0_0_86%] sm:flex-[0_0_56%] lg:flex-[0_0_36%] xl:flex-[0_0_32%]"
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </div>

          {/* bottom controls */}
          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={scrollPrev}
                disabled={!canPrev}
                className={clsx(
                  "grid place-items-center size-11 rounded-full ring-1 transition",
                  "ring-black/10 bg-white hover:bg-black/[0.03]",
                  !canPrev && "opacity-40 cursor-not-allowed"
                )}
                aria-label="Anterior"
              >
                <ArrowLeft />
              </button>

              <button
                type="button"
                onClick={scrollNext}
                disabled={!canNext}
                className={clsx(
                  "grid place-items-center size-11 rounded-full ring-1 transition",
                  "ring-black/10 bg-white hover:bg-black/[0.03]",
                  !canNext && "opacity-40 cursor-not-allowed"
                )}
                aria-label="Seguinte"
              >
                <ArrowRight />
              </button>

              <div className="hidden sm:block h-px w-40 bg-black/10 ml-2" />
            </div>

            <Link
              href="/treinamentos"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white
              bg-brand-primary shadow-brand hover:opacity-95 transition"
            >
              Ver todos os cursos
              <span className="ml-2">
                <ArrowRightSmall />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }: { course: Course }) {
  const cover = getCoverImage(course);
  const duration = getDurationLabel(course);
  const lessons = getLessonsCount(course);

  return (
    <article className="group h-full min-h-[460px] flex flex-col rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_18px_50px_rgba(0,0,0,0.10)] overflow-hidden">
      {/* image */}
      <div className="relative aspect-[16/10] bg-black/[0.04]">
        <Image
          src={cover}
          alt={course.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 82vw, (max-width: 1024px) 52vw, 24vw"
        />

        {/* top tags */}
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-xl bg-brand-primary text-white text-[11px] font-semibold px-3 py-1 shadow">
            {duration}
          </span>
          <span className="rounded-xl bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-semibold text-neutral-900 ring-1 ring-black/5">
            {course.category}
          </span>
        </div>
      </div>

      {/* body */}
      <div className="p-5 flex flex-col flex-1">
        {/* rating */}
        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <Stars value={course.rating ?? 5} />
          <span className="text-neutral-500">
            ({(course.students ?? 0).toLocaleString("pt-PT")})
          </span>
        </div>

        <h3 className="mt-3 font-heading text-lg text-neutral-900 leading-snug group-hover:text-brand-primary transition line-clamp-2">
          {course.title}
        </h3>

        {/* meta */}
        <div className="mt-4 flex items-center gap-4 text-sm text-neutral-600">
          <div className="inline-flex items-center gap-2">
            <UsersMini />
            <span>{course.students ?? 0} formandos</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <BookMini />
            <span>{lessons} módulos</span>
          </div>
        </div>

        {/* footer */}
        <div className="mt-auto pt-5">
          <div className="mb-4 border-t border-dashed border-black/10" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="size-9 shrink-0 rounded-full bg-[linear-gradient(135deg,rgba(0,156,249,0.25),rgba(0,169,157,0.22))] ring-1 ring-black/5" />
              <div className="text-xs leading-tight min-w-0">
                <div className="font-semibold text-neutral-900">Equalizador</div>
                <div className="text-neutral-500">Treinamento</div>
              </div>
            </div>

            <div className="text-sm font-extrabold text-brand-primary whitespace-nowrap">
              {course.price ?? "Sob consulta"}
            </div>
          </div>

          {/* ✅ CTA opcional: levar ao curso */}
          <div className="mt-4">
            <Link
              href={`/treinamentos/${course.slug}`}
              className="inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white
              bg-brand-primary shadow-brand hover:opacity-95 transition"
            >
              Ver detalhes <span className="ml-2"><ArrowRightSmall /></span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

/* --- UI helpers / icons --- */

function Stars({ value }: { value: number }) {
  const full = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className={clsx(i < full ? "text-[#FFA41B]" : "text-neutral-300")}
        >
          <path
            d="M12 2l3 6.6 7 .9-5 4.7 1.3 6.8L12 18.9 5.7 21l1.3-6.8-5-4.7 7-.9L12 2Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}

function ArrowLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-neutral-900">
      <path
        d="M15 6l-6 6 6 6"
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-neutral-900">
      <path
        d="M9 6l6 6-6 6"
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
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

function UsersMini() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neutral-500">
      <path
        d="M16 11c1.7 0 3-1.6 3-3.5S17.7 4 16 4s-3 1.6-3 3.5S14.3 11 16 11ZM8 11c1.7 0 3-1.6 3-3.5S9.7 4 8 4 5 5.6 5 7.5 6.3 11 8 11Z"
        fill="currentColor"
      />
      <path
        d="M8 13c-2.3 0-7 1.2-7 3.5V20h14v-3.5C15 14.2 10.3 13 8 13Zm8 0c-.3 0-.6 0-1 .1 1.2.8 2 2 2 3.4V20h7v-3.5c0-2.3-4.7-3.5-8-3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BookMini() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neutral-500">
      <path
        d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2V5Z"
        fill="currentColor"
        opacity="0.25"
      />
      <path
        d="M6 3h14v16H6a2 2 0 0 0-2 2V5a2 2 0 0 1 2-2Zm0 0v16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
