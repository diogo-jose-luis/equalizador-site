// src/components/sections/About.tsx
import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="relative bg-white py-14 sm:py-20">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT: collage */}
          <div className="relative">
            {/* shapes suaves no fundo */}
            <div className="absolute -inset-6 -z-10">
              <div className="absolute left-6 top-10 h-40 w-40 rounded-full bg-brand-primary/10 blur-2xl" />
              <div className="absolute right-6 bottom-8 h-40 w-40 rounded-full bg-brand-secondary/10 blur-2xl" />
            </div>

            <div className="relative">
              {/* imagem 1 (vertical) */}
              <div className="relative w-[72%] sm:w-[62%] rounded-[28px] overflow-hidden ring-1 ring-black/5 shadow-[0_30px_80px_rgba(0,0,0,0.10)]">
                <Image
                  src="/about/students.png"
                  alt="Formação Equalizador"
                  width={900}
                  height={1200}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* imagem 2 (sobreposta) */}
              <div className="absolute -bottom-10 sm:-bottom-12 left-[34%] sm:left-[40%] w-[66%] sm:w-[64%]">
                <div className="relative rounded-[28px] overflow-hidden ring-1 ring-black/5 shadow-[0_30px_80px_rgba(0,0,0,0.12)] bg-white">
                  <div className="absolute inset-0 pointer-events-none ring-1 ring-white/60" />
                  <Image
                    src="/about/student.png"
                    alt="Consultoria e Treinamento"
                    width={900}
                    height={900}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              {/* badge stats */}
              <div className="absolute -top-4 sm:top-6 left-[56%] sm:left-[60%] z-20 rounded-2xl bg-white/95 backdrop-blur-md ring-1 ring-black/5 shadow-brand px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center size-10 rounded-2xl bg-brand-secondary/15 text-brand-secondary">
                    <HandshakeIcon />
                  </div>
                  <div className="leading-tight">
                    <div className="text-xl font-extrabold text-neutral-900">
                      10.000+
                    </div>
                    <div className="text-xs text-neutral-600">
                      Formandos impactados
                    </div>
                  </div>
                </div>
              </div>

              {/* pontinhos decorativos */}
              <div className="absolute -left-2 top-24 hidden sm:block">
                <Dots />
              </div>
            </div>
          </div>

          {/* RIGHT: content */}
          <div>
            <div className="inline-flex items-center rounded-xl bg-brand-primary/10 px-4 py-2 text-sm font-semibold text-brand-primary">
              Sobre a Equalizador
            </div>

            <h2 className="mt-5 font-heading text-3xl sm:text-4xl text-neutral-900 tracking-tight leading-[1.1]">
              Eleva o teu potencial com{" "}
              <span className="text-brand-primary">treinamentos</span> e{" "}
              <span className="text-brand-secondary">consultoria</span>
            </h2>

            <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-xl">
              A Equalizador Consultoria & Treinamento atua em Tecnologias de
              Informação com foco em aprendizagem prática, orientação
              estratégica e resultados reais para profissionais, estudantes e
              empresas.
            </p>

            {/* highlights (2 cards pequenos como no print) */}
            <div className="mt-7 grid sm:grid-cols-2 gap-4">
              <div className="flex gap-4 rounded-2xl bg-black/[0.02] ring-1 ring-black/5 p-4">
                <div className="grid place-items-center size-12 rounded-2xl bg-brand-primary/12 text-brand-primary">
                  <UsersIcon />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">
                    Mentores experientes
                  </div>
                  <div className="text-sm text-neutral-600 mt-1">
                    Acompanhamento e prática orientada.
                  </div>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-black/[0.02] ring-1 ring-black/5 p-4">
                <div className="grid place-items-center size-12 rounded-2xl bg-brand-secondary/12 text-brand-secondary">
                  <CertificateIcon />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">
                    Trilhas e certificações
                  </div>
                  <div className="text-sm text-neutral-600 mt-1">
                    Conteúdos alinhados ao mercado.
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white
                bg-brand-primary shadow-brand hover:opacity-95 transition"
              >
                Saber mais sobre nós
                <span className="ml-2">
                  <ArrowRightIcon />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* dá espaço para a imagem sobreposta não cortar */}
        <div className="h-14 sm:h-16" />
      </div>
    </section>
  );
}

/* ---- icons ---- */
function ArrowRightIcon() {
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

function HandshakeIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M8.5 13.2 11 15.7c1 1 2.6 1 3.6 0l4.1-4.1a2.5 2.5 0 0 0 0-3.6l-.6-.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3 11.5l4.2-4.2a2.5 2.5 0 0 1 3.6 0l.5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8.2 12.9 6 10.7"
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
      width="22"
      height="22"
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
      />
    </svg>
  );
}

function CertificateIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M7 4h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M9 8h6M9 11h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M14.5 16.5 16 21l1.5-1 1.5 1-1.5-4.5" fill="currentColor" />
    </svg>
  );
}

function Dots() {
  return (
    <div className="grid grid-cols-4 gap-2 opacity-70">
      {Array.from({ length: 12 }).map((_, i) => (
        <span key={i} className="size-2 rounded-full bg-brand-primary/40" />
      ))}
    </div>
  );
}
