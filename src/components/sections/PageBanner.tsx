// src/components/sections/PageBanner.tsx
import Image from "next/image";
import Link from "next/link";

type BreadcrumbItem = { label: string; href?: string };
type BannerImage = { src: string; alt: string };

type PageBannerProps = {
  title: string;
  description?: string;
  images?: BannerImage[]; // até 2 imagens
  breadcrumb?: BreadcrumbItem[]; // ex: [{label:"Home", href:"/"},{label:"Sobre Nós"}]
};

type CSSVars = React.CSSProperties & {
  ["--delay"]?: string;
};


export default function PageBanner({
  title,
  description,
  images = [],
  breadcrumb = [{ label: "Home", href: "/" }, { label: title }],
}: PageBannerProps) {
  const imgA = images?.[0];
  const imgB = images?.[1];

  return (
    <section className="relative overflow-hidden">
      {/* Base (mais curto que o Hero) */}
      <div className="absolute inset-0 bg-[#071f3f]" />

      {/* Glow / gradientes (ligeiramente mais suave) */}
      <div className="absolute inset-0 bg-[radial-gradient(800px_420px_at_18%_45%,rgba(0,156,249,0.28),transparent_60%),radial-gradient(650px_420px_at_82%_35%,rgba(0,169,157,0.20),transparent_62%)]" />

      {/* micro-grain */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(1px_1px_at_20%_40%,rgba(255,255,255,0.22)_0,transparent_55%),radial-gradient(1px_1px_at_80%_25%,rgba(255,255,255,0.18)_0,transparent_55%),radial-gradient(1px_1px_at_55%_70%,rgba(255,255,255,0.16)_0,transparent_55%)]" />

      {/* Dots decorativos (direita) */}
      <div className="pointer-events-none absolute right-12 top-10 hidden md:block">
        <div className="grid grid-cols-6 gap-2 opacity-70">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-[rgba(255,255,255,0.22)]"
            />
          ))}
        </div>
      </div>

      <div className="container-max relative py-10 sm:py-12 lg:py-14">
        <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-12">
          {/* Esquerda: breadcrumb + texto */}
          <div>
            <nav
              className="flex items-center gap-2 text-sm text-white/75 hero-reveal"
             style={{ "--delay": "120ms" } as CSSVars}
            >
              {breadcrumb.map((b, idx) => {
                const last = idx == breadcrumb.length - 1;
                return (
                  <div
                    key={`${b.label}-${idx}`}
                    className="flex items-center gap-2"
                  >
                    {idx == 0 ? (
                      <span className="inline-flex items-center gap-2">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-white/80"
                        >
                          <path
                            d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    ) : null}

                    {b.href && !last ? (
                      <Link href={b.href} className="hover:text-white transition">
                        {b.label}
                      </Link>
                    ) : (
                      <span className={last ? "text-white/90" : ""}>
                        {b.label}
                      </span>
                    )}

                    {!last ? <span className="text-white/35">|</span> : null}
                  </div>
                );
              })}
            </nav>

            <h1
              className="mt-4 font-heading text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.08]
              hero-reveal"
              style={{ "--delay": "120ms" } as CSSVars}
            >
              {title}
            </h1>

            {description ? (
              <p
                className="mt-3 text-sm sm:text-base text-white/75 max-w-xl hero-reveal"
                style={{ "--delay": "240ms" } as CSSVars}
              >
                {description}
              </p>
            ) : null}

            <div
              className="mt-6 h-[2px] w-28 rounded-full bg-[linear-gradient(90deg,rgba(0,156,249,0.0),rgba(0,156,249,0.9),rgba(0,169,157,0.75),rgba(0,169,157,0.0))]
              hero-reveal"
              style={{ "--delay": "360ms" } as CSSVars}
            />
          </div>

          {/* Direita: imagens sobrepostas (opcional) */}
          <div className="relative">
            {/* bolhas */}
            <div className="hidden sm:block absolute right-4 top-2 size-10 rounded-full ring-2 ring-white/15" />
            <div className="hidden sm:block absolute right-20 top-24 size-2 rounded-full bg-brand-secondary/80" />
            <div className="hidden sm:block absolute right-8 top-44 size-16 rounded-full bg-white/5 ring-1 ring-white/10" />

            {!imgA && !imgB ? (
              <div
                className="ml-auto max-w-[520px] rounded-[28px] bg-white/5 ring-1 ring-white/15 p-6 sm:p-8
                hero-reveal hero-reveal-zoom"
                style={{ "--delay": "520ms" } as CSSVars}
              >
                <div className="flex items-center gap-4">
                  <div className="grid place-items-center size-12 rounded-2xl bg-brand-primary text-white">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2l3 5 5.5 1.2-3.8 4.2.6 5.6L12 16.9 6.7 18l.6-5.6L3.5 8.2 9 7l3-5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Equalizador</div>
                    <div className="text-white/70 text-sm">
                      Consultoria & Formação em TI
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative ml-auto max-w-[560px] min-h-[190px] sm:min-h-[220px]">
                {/* Card A (principal) */}
                {imgA ? (
                  <div
                    className="relative z-10 w-[78%] sm:w-[72%] rounded-[26px] overflow-hidden bg-white/5 ring-1 ring-white/15 shadow-brand
                    hero-reveal hero-reveal-zoom"
                    style={{ "--delay": "520ms" } as CSSVars}
                  >
                    <Image
                      src={imgA.src}
                      alt={imgA.alt}
                      width={900}
                      height={650}
                      className="w-full h-auto object-cover"
                      priority={false}
                    />
                  </div>
                ) : null}

                {/* Card B (sobreposto) */}
                {imgB ? (
                  <div
                    className="absolute right-0 bottom-0 z-20 w-[62%] sm:w-[56%] rounded-[22px] overflow-hidden bg-white/5 ring-1 ring-white/15 shadow-brand translate-y-4
                    hero-reveal hero-reveal-right"
                    style={{ "--delay": "680ms" } as CSSVars}
                  >
                    <Image
                      src={imgB.src}
                      alt={imgB.alt}
                      width={900}
                      height={650}
                      className="w-full h-auto object-cover"
                      priority={false}
                    />
                  </div>
                ) : null}

                <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[radial-gradient(closest-side,rgba(255,255,255,0.14),transparent)] blur-2xl" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
