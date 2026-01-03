// src/components/layout/Footer.tsx
"use client";

import Image from "next/image";
import clsx from "clsx";



const quickLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Treinamentos", href: "#treinamentos" },
  { label: "Batches", href: "#batches" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#061B3A] text-white">
      {/* backdrop texture + glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,.9)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute -left-28 top-12 size-[420px] rounded-full bg-brand-primary/18 blur-3xl" />
        <div className="absolute -right-28 bottom-0 size-[460px] rounded-full bg-brand-secondary/18 blur-3xl" />
      </div>

      <div className="container-max relative py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="grid place-items-center size-11 rounded-2xl bg-white/10 ring-1 ring-white/10">
                <Image
                  src="/logo-equalizador.png"
                  alt="Equalizador"
                  width={44}
                  height={44}
                  className="h-9 w-auto"
                />
              </div>
              <div className="leading-tight">
                <div className="font-heading font-extrabold uppercase tracking-tight">
                  Equalizador
                </div>
                <div className="text-xs text-white/70 -mt-0.5">
                  Consultoria & Treinamento
                </div>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-white/75 max-w-sm">
              Formação prática e certificações com foco no mercado — IT,
              Offshore e produtividade. Ajudamos profissionais e equipas a
              evoluir com qualidade.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <SocialIcon
                href="https://www.facebook.com/equalizador"
                label="Facebook"
              >
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com/_equalizador_ao/"
                label="Instagram"
              >
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon
                href="https://www.linkedin.com/company/equalizador-c-t/"
                label="LinkedIn"
              >
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon href="https://youtube.com" label="YouTube">
                <YoutubeIcon />
              </SocialIcon>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <FooterTitle>Quick Link</FooterTitle>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
                  >
                    <ChevronMini />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Need help */}
          <div>
            <FooterTitle>Precisa de ajuda?</FooterTitle>

            <div className="mt-5 space-y-4 text-sm">
              <a
                href="mailto:geral@equalizador.ao"
                className="flex items-start gap-3 text-white/80 hover:text-white transition"
              >
                <span className="mt-0.5 grid place-items-center size-9 rounded-2xl bg-white/10 ring-1 ring-white/10">
                  <MailIcon />
                </span>
                <span>geral@equalizador.ao</span>
              </a>

              <a
                href="tel:+244935689669"
                className="flex items-start gap-3 text-white/80 hover:text-white transition"
              >
                <span className="mt-0.5 grid place-items-center size-9 rounded-2xl bg-white/10 ring-1 ring-white/10">
                  <PhoneIcon />
                </span>
                <span>+(244) 935 689 669</span>
              </a>

              <div className="flex items-start gap-3 text-white/75">
                <span className="mt-0.5 grid place-items-center size-9 rounded-2xl bg-white/10 ring-1 ring-white/10">
                  <PinIcon />
                </span>
                <span className="leading-relaxed">
                  Avenida Pedro de Castro Van-Dúnem Loy, Gamek, Vila Eco-Campo,
                  n&apos; 76, Luanda.
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <FooterTitle>Newsletter</FooterTitle>

            <p className="mt-5 text-sm leading-relaxed text-white/75">
              Receba novidades de cursos, datas de turmas e promoções.
            </p>

            <form
              className="mt-5"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="flex items-stretch rounded-2xl bg-white/10 ring-1 ring-white/10 overflow-hidden">
                <input
                  type="email"
                  required
                  placeholder="Seu e-mail"
                  className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/55 outline-none"
                />
                <button
                  type="submit"
                  className="grid place-items-center px-4 bg-brand-primary hover:opacity-95 transition"
                  aria-label="Subscrever"
                >
                  <ArrowRight />
                </button>
              </div>

              <label className="mt-4 flex items-start gap-2 text-xs text-white/70">
                <input
                  type="checkbox"
                  className="mt-0.5 accent-brand-primary"
                />
                <span>
                  Concordo com a{" "}
                  <a
                    href="#"
                    className="underline underline-offset-4 hover:text-white transition"
                  >
                    Política de Privacidade
                  </a>
                  .
                </span>
              </label>
            </form>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-6 py-5 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <div className="text-sm text-white/75">
              © {new Date().getFullYear()} Equalizador — Todos os direitos
              reservados.
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <FooterBottomLink href="#">Termos & Condições</FooterBottomLink>
              <FooterBottomLink href="#">
                Política de Privacidade
              </FooterBottomLink>
              <a
                href="#contacto"
                className="text-white/80 hover:text-white transition"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>


    </footer>
  );
}

/* ---------- small components ---------- */

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-heading font-extrabold text-lg">
      {children}
      <div className="mt-3 h-px w-28 bg-white/15" />
    </div>
  );
}

function FooterBottomLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className="text-white/80 hover:text-white transition">
      {children}
    </a>
  );
}

/* hover azul nos ícones (brand-primary) */
function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={clsx(
        "inline-flex items-center justify-center size-10 rounded-2xl",
        "bg-white/10 ring-1 ring-white/10 transition",
        "text-white/85 hover:text-white hover:bg-brand-primary/30"
      )}
    >
      {children}
    </a>
  );
}

/* ---------- icons ---------- */

function ChevronMini() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="text-brand-primary"
    >
      <path
        d="M10 6l6 6-6 6"
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

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.9.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.4.2 2.7.6 3.9.1.4 0 .8-.3 1.1L6.6 10.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M12 2c-3.9 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7Zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H16.7V4.8c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.7V11H6.9v3h2.6v8h4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 6.5A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5Zm8.2-.9a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M6.5 6.8A2.2 2.2 0 1 1 6.5 2.4a2.2 2.2 0 0 1 0 4.4ZM3.8 21V8.4h5.4V21H3.8Zm7.8 0V8.4h5.2v1.7h.1c.7-1.2 2.3-2.2 4.3-2.2 3.6 0 4.3 2.1 4.3 6V21h-5.4v-5.5c0-1.4 0-3.2-2.1-3.2s-2.4 1.4-2.4 3.1V21h-5.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31.3 31.3 0 0 0 2 12a31.3 31.3 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 22 12a31.3 31.3 0 0 0-.4-4.8ZM10.2 15.2V8.8L15.8 12l-5.6 3.2Z"
        fill="currentColor"
      />
    </svg>
  );
}
