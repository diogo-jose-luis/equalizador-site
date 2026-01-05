import { notFound } from "next/navigation";
import { getCourseBySlug, courses } from "@/data/courses";
import Header from "@/components/layout/Header";
import PageBanner from "@/components/sections/PageBanner";
import Footer from "@/components/sections/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treinamento",
  description:
    "Formações práticas e atualizadas em Tecnologias de Informação, Networking, Cloud, Segurança, Offshore e muito mais.",
  alternates: { canonical: "/treinamentos" },
};


type Props = { params: { slug: string } };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

const chipLink =
  "inline-flex items-center justify-center rounded-full px-3.5 py-2 text-sm font-semibold " +
  "text-neutral-900 bg-black/[0.02] ring-1 ring-black/10 hover:bg-black/[0.04] transition no-underline";

export default function CoursePage({ params }: Props) {
  const course = getCourseBySlug(params.slug);
  if (!course) return notFound();

  return (
    <>
      <Header />

      <PageBanner
        title={course.title}
        description={course.description}
        images={[
          { src: course.image, alt: "Treinamento profissional" },
          { src: course.image2, alt: "Formação em sala e online" },
        ]}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Treinamentos" }]}
      />

      {/* Secção principal */}

      {/* Secção principal */}
      <section className="bg-[#F7F9FC] border-t border-black/5">
        <div className="container-max py-10">
          {/* NAV INTERNA */}
          <div className="mb-6 rounded-[22px] bg-white ring-1 ring-black/5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="text-sm text-neutral-600">Navegação rápida</div>
                <div className="mt-1 font-heading text-lg text-neutral-900 truncate">
                  {course.shortTitle ?? course.title}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {course.file_url ? (
                  <a
                    href={course.file_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold
          ring-1 ring-black/10 bg-white hover:bg-black/[0.03] transition"
                  >
                    <DownloadIcon />
                    <span className="ml-2">Download PDF</span>
                  </a>
                ) : null}

                <a href="#publico-alvo" className={chipLink}>
                  Público-alvo
                </a>
                <a href="#pre-requisitos" className={chipLink}>
                  Pré-requisitos
                </a>
                <a href="#objetivos" className={chipLink}>
                  Objetivos
                </a>
                <a href="#modulos" className={chipLink}>
                  Módulos
                </a>
                <a href="#avaliacao" className={chipLink}>
                  Avaliação & Acreditação
                </a>
              </div>
            </div>
          </div>

          {/* GRID PRINCIPAL */}
          <div className="grid gap-6 lg:grid-cols-12">
            {/* LEFT */}
            <div className="lg:col-span-8 space-y-6">
              {/* Público-alvo */}
              <section
                id="publico-alvo"
                className="scroll-mt-28 rounded-[26px] bg-white ring-1 ring-black/5 shadow-[0_18px_55px_rgba(0,0,0,0.08)] overflow-hidden"
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(0,156,249,0.12),rgba(0,169,157,0.10))] px-3 py-1 text-xs font-semibold text-neutral-900 ring-1 ring-black/5">
                        <TargetIcon />
                        Público-alvo
                      </div>
                      <h2 className="mt-3 font-heading text-2xl text-neutral-900">
                        Para quem é este curso?
                      </h2>
                    </div>

                    <div className="hidden sm:flex items-center gap-2">
                      <BadgePill>{course.category}</BadgePill>
                      <BadgePill>{course.durationHours}h</BadgePill>
                    </div>
                  </div>

                  <p className="mt-4 text-neutral-700 leading-relaxed">
                    {course.targetAudience}
                  </p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
                <div className="p-6 sm:p-7">
                  <div className="grid gap-3 sm:grid-cols-3">
                    <MiniStat
                      label="Duração"
                      value={`${course.durationHours} horas`}
                      icon={<ClockIcon />}
                    />
                    <MiniStat
                      label="Módulos"
                      value={String(
                        course.modules.length ?? course.modules.length ?? 0
                      )}
                      icon={<BookIcon />}
                    />
                    <MiniStat
                      label="Formandos"
                      value={(course.students ?? 0).toLocaleString("pt-PT")}
                      icon={<UsersIcon />}
                    />
                  </div>
                </div>
              </section>

              {/* Pré-requisitos */}
              <section
                id="pre-requisitos"
                className="scroll-mt-28 rounded-[26px] bg-white ring-1 ring-black/5 shadow-[0_18px_55px_rgba(0,0,0,0.08)] overflow-hidden"
              >
                <div className="p-6 sm:p-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(0,156,249,0.12),rgba(0,169,157,0.10))] px-3 py-1 text-xs font-semibold text-neutral-900 ring-1 ring-black/5">
                    <CheckListIcon />
                    Pré-requisitos
                  </div>

                  <h2 className="mt-3 font-heading text-2xl text-neutral-900">
                    O que precisas ter antes de começar
                  </h2>

                  <ul className="mt-4 space-y-2">
                    {course.prerequisites.map((x) => (
                      <li
                        key={x}
                        className="flex gap-3 rounded-2xl bg-black/[0.02] ring-1 ring-black/5 p-4"
                      >
                        <span className="mt-0.5 text-brand-primary">
                          <CheckIcon />
                        </span>
                        <span className="text-neutral-700">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Objetivos */}
              <section
                id="objetivos"
                className="scroll-mt-28 rounded-[26px] bg-white ring-1 ring-black/5 shadow-[0_18px_55px_rgba(0,0,0,0.08)] overflow-hidden"
              >
                <div className="p-6 sm:p-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(0,156,249,0.12),rgba(0,169,157,0.10))] px-3 py-1 text-xs font-semibold text-neutral-900 ring-1 ring-black/5">
                    <SparkIcon />
                    Objetivos
                  </div>

                  <h2 className="mt-3 font-heading text-2xl text-neutral-900">
                    O que vais conseguir ao final
                  </h2>

                  <div className="mt-4 grid gap-3">
                    {course.objectives.map((x) => (
                      <div
                        key={x}
                        className="rounded-2xl bg-white ring-1 ring-black/5 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                      >
                        <div className="flex gap-3">
                          <div className="mt-0.5 text-brand-primary">
                            <ArrowBulletIcon />
                          </div>
                          <p className="text-neutral-700">{x}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Módulos */}
              <section
                id="modulos"
                className="scroll-mt-28 rounded-[26px] bg-white ring-1 ring-black/5 shadow-[0_18px_55px_rgba(0,0,0,0.08)] overflow-hidden"
              >
                <div className="p-6 sm:p-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(0,156,249,0.12),rgba(0,169,157,0.10))] px-3 py-1 text-xs font-semibold text-neutral-900 ring-1 ring-black/5">
                    <LayersIcon />
                    Módulos
                  </div>

                  <h2 className="mt-3 font-heading text-2xl text-neutral-900">
                    Estrutura do curso
                  </h2>

                  <div className="mt-5 space-y-4">
                    {course.modules.map((m) => (
                      <div
                        key={m.code}
                        className="rounded-[22px] ring-1 ring-black/5 bg-white overflow-hidden"
                      >
                        <div className="p-5 sm:p-6 flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <div className="inline-flex items-center gap-2">
                              <span className="rounded-xl bg-brand-primary text-white text-xs font-bold px-3 py-1">
                                {m.code}
                              </span>
                              <h3 className="font-heading text-lg text-neutral-900">
                                {m.title}
                              </h3>
                            </div>
                            {m.summary ? (
                              <p className="mt-2 text-sm text-neutral-600">
                                {m.summary}
                              </p>
                            ) : null}
                          </div>

                          <span className="hidden sm:inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-black/10 bg-black/[0.02] text-neutral-700">
                            Conteúdo prático
                          </span>
                        </div>

                        {m.lessons?.length ? (
                          <div className="px-5 sm:px-6 pb-6">
                            {m.lessons.map((l) => (
                              <div key={l.title} className="mt-4">
                                <div className="text-sm font-semibold text-neutral-800">
                                  {l.title}
                                </div>
                                <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                                  {l.bullets.map((b) => (
                                    <li
                                      key={b}
                                      className="rounded-2xl bg-black/[0.02] ring-1 ring-black/5 px-4 py-3 text-sm text-neutral-700"
                                    >
                                      {b}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Avaliação */}
              {course.assessment ? (
                <section
                  id="avaliacao"
                  className="scroll-mt-28 rounded-[26px] bg-white ring-1 ring-black/5 shadow-[0_18px_55px_rgba(0,0,0,0.08)] overflow-hidden"
                >
                  <div className="p-6 sm:p-7">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(0,156,249,0.12),rgba(0,169,157,0.10))] px-3 py-1 text-xs font-semibold text-neutral-900 ring-1 ring-black/5">
                      <ShieldIcon />
                      Avaliação & Acreditação
                    </div>

                    <h2 className="mt-3 font-heading text-2xl text-neutral-900">
                      Como funciona a avaliação e o certificado
                    </h2>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {course.assessment.exams?.length ? (
                        <div className="rounded-[22px] ring-1 ring-black/5 bg-white p-5">
                          <div className="text-sm font-semibold text-neutral-900">
                            Exames & Avaliações
                          </div>
                          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                            {course.assessment.exams.map((x) => (
                              <li key={x} className="flex gap-2">
                                <span className="text-brand-primary mt-0.5">
                                  <CheckIcon />
                                </span>
                                <span>{x}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {course.assessment.accreditation?.length ? (
                        <div className="rounded-[22px] ring-1 ring-black/5 bg-white p-5">
                          <div className="text-sm font-semibold text-neutral-900">
                            Acreditação
                          </div>
                          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                            {course.assessment.accreditation.map((x) => (
                              <li key={x} className="flex gap-2">
                                <span className="text-brand-primary mt-0.5">
                                  <CheckIcon />
                                </span>
                                <span>{x}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </section>
              ) : null}

              {/* Download (anchor final opcional) */}
              <section id="download" className="scroll-mt-28">
                {course.file_url ? (
                  <div className="rounded-[26px] bg-[linear-gradient(135deg,rgba(0,156,249,0.12),rgba(0,169,157,0.10))] ring-1 ring-black/5 p-6 sm:p-7">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <div className="text-sm font-semibold text-neutral-900">
                          Programa completo em PDF
                        </div>
                        <div className="mt-1 text-sm text-neutral-600">
                          Baixa o programa e partilha com a tua equipa.
                        </div>
                      </div>
                      <a
                        href={course.file_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white
                  bg-brand-primary shadow-brand hover:opacity-95 transition"
                      >
                        <DownloadIcon />
                        <span className="ml-2">Baixar PDF</span>
                      </a>
                    </div>
                  </div>
                ) : null}
              </section>
            </div>

            {/* RIGHT */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-4">
                <div className="rounded-[26px] bg-white ring-1 ring-black/5 shadow-[0_18px_55px_rgba(0,0,0,0.08)] p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-sm text-neutral-600">Curso</div>
                      <div className="mt-1 font-heading text-xl text-neutral-900 leading-snug">
                        {course.shortTitle ?? course.title}
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      <div className="text-xs text-neutral-500">Preço</div>
                      <div className="mt-1 text-lg font-extrabold text-brand-primary whitespace-nowrap">
                        {course.price ?? "Sob consulta"}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <SidePill
                      label="Duração"
                      value={`${course.durationHours}h`}
                    />
                    <SidePill label="Categoria" value={course.category} />
                    <SidePill
                      label="Módulos"
                      value={String(
                        course.modules.length ?? course.modules?.length ?? 0
                      )}
                    />
                    <SidePill
                      label="Rating"
                      value={`${course.rating ?? 5}/5`}
                    />
                  </div>

                  <a
                    className="mt-6 w-full rounded-2xl px-5 py-3 text-sm font-semibold text-white bg-brand-primary shadow-brand hover:opacity-95 transition my-4 inline-flex items-center justify-center text-center"
                    href={`https://wa.me/244935689669?text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20o%20curso%20de%20${encodeURIComponent(course.title)}.`}
                    target="_blank"
                  >
                    Inscrever / Pedir informações
                  </a>

                  {course.file_url ? (
                    <a
                      href={course.file_url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 w-full inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold
                ring-1 ring-black/10 bg-white hover:bg-black/[0.03] transition"
                    >
                      <DownloadIcon />
                      <span className="ml-2">Baixar programa (PDF)</span>
                    </a>
                  ) : null}

                  <div className="mt-5 rounded-2xl bg-black/[0.02] ring-1 ring-black/5 p-4 text-sm text-neutral-700">
                    <span className="font-semibold text-neutral-900">
                      Dica:
                    </span>{" "}
                    Se tiveres dúvidas sobre o nível ideal, fala connosco e
                    indicamos a trilha certa.
                  </div>
                </div>

                {/* Atalhos rápidos também no aside */}
                <div className="rounded-[26px] bg-white ring-1 ring-black/5 p-5">
                  <div className="text-sm font-semibold text-neutral-900">
                    Atalhos
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a href="#publico-alvo" className={chipLink}>
                      Público-alvo
                    </a>
                    <a href="#pre-requisitos" className={chipLink}>
                      Pré-requisitos
                    </a>
                    <a href="#objetivos" className={chipLink}>
                      Objetivos
                    </a>
                    <a href="#modulos" className={chipLink}>
                      Módulos
                    </a>
                    <a href="#avaliacao" className={chipLink}>
                      Avaliação
                    </a>
                    {course.file_url ? (
                      <a href="#download" className={chipLink}>
                        Download PDF
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function BadgePill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-black/10 bg-black/[0.02] text-neutral-700">
      {children}
    </span>
  );
}

function MiniStat({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-black/[0.02] ring-1 ring-black/5 p-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
        <span className="text-brand-primary">{icon}</span>
        {label}
      </div>
      <div className="mt-1 text-sm text-neutral-700">{value}</div>
    </div>
  );
}

function SidePill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-black/[0.02] ring-1 ring-black/5 p-4">
      <div className="text-xs text-neutral-500">{label}</div>
      <div className="mt-1 text-sm font-semibold text-neutral-900 line-clamp-1">
        {value}
      </div>
    </div>
  );
}

/* --------- icons (minimalistas) --------- */
function DownloadIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M12 3v10m0 0 4-4m-4 4-4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 17v3h16v-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ArrowBulletIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M10 8l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function TargetIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M12 2a10 10 0 1 0 10 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 8a4 4 0 1 0 4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 12l9-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function CheckListIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M9 6h12M9 12h12M9 18h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3.5 6h.01M3.5 12h.01M3.5 18h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
function SparkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function LayersIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M12 3 2 9l10 6 10-6-10-6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M2 15l10 6 10-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M12 2 20 6v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M12 7v6l4 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
function BookIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M4 5a2 2 0 0 1 2-2h14v18H6a2 2 0 0 0-2 2V5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 7h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M16 11c1.7 0 3-1.6 3-3.5S17.7 4 16 4s-3 1.6-3 3.5S14.3 11 16 11ZM8 11c1.7 0 3-1.6 3-3.5S9.7 4 8 4 5 5.6 5 7.5 6.3 11 8 11Z"
        fill="currentColor"
      />
      <path
        d="M8 13c-2.3 0-7 1.2-7 3.5V20h14v-3.5C15 14.2 10.3 13 8 13Zm8 0c-.3 0-.6 0-1 .1 1.2.8 2 2 2 3.4V20h7v-3.5c0-2.3-4.7-3.5-8-3.5Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}
