// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ContactRequestDrawer from "../drawers/ContactRequestDrawer";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Sobre Nós", href: "/sobre-nos" },
  { label: "Treinamentos", href: "/treinamentos" },
  { label: "Pacotes", href: "/pacotes" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Topbar hide/show
  const [showTop, setShowTop] = useState(true);
  const lastY = useRef(0);

  const [contactOpen, setContactOpen] = useState(false);
  const closeContact = () => setContactOpen(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      // se estiver no topo do site, mostra
      if (y < 8) {
        setShowTop(true);
        lastY.current = y;
        return;
      }

      const goingDown = y > lastY.current;

      // ao descer: esconde topbar
      if (goingDown) setShowTop(false);
      // ao subir: mostra topbar
      else setShowTop(true);

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // fecha no ESC + bloqueia scroll quando menu abrir
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setContactOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);

    if (open || contactOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, contactOpen]);

  const close = () => setOpen(false);

  // ...mantém imports e lógica igual...

  return (
    <header className="sticky top-0 z-50">
      {/* TOP BAR (some ao scroll) */}
      <div
        className={`hidden md:block border-b border-white/15 transition-all duration-300
      ${showTop ? "h-9 opacity-100" : "h-0 opacity-0 overflow-hidden"}
      bg-brand-primary`}
      >
        <div className="container-max">
          <div className="h-9 flex items-center justify-between text-[11px] text-white/90">
            {/* esquerda: contactos */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+244935689669"
                className="inline-flex items-center gap-2 hover:text-white transition"
              >
                <PhoneIcon />
                <span>+(244) 935 689 669</span>
              </a>

              <a
                href="mailto:geral@equalizador.ao"
                className="inline-flex items-center gap-2 hover:text-white transition"
              >
                <MailIcon />
                <span>geral@equalizador.ao</span>
              </a>

              <div className="hidden lg:inline-flex items-center gap-2 text-white/80">
                <PinIcon />
                <span>
                  Avenida Pedro de Castro Van-Dúnem Loy, Gamek, Vila Eco-Campo,
                  n&apos; 76, Luanda.
                </span>
              </div>
            </div>

            {/* direita: social (hover branco total) */}
            <div className="flex items-center gap-1.5">
              <span className="text-white/80 mr-2">Siga-nos:</span>

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
        </div>
      </div>

      {/* HEADER PRINCIPAL (mais baixo) */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-black/5">
        <div className="container-max">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5"
              onClick={close}
            >
              <div className="grid place-items-center size-10">
                <Image
                  src="/logo-equalizador.png"
                  alt="Equalizador"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </div>

              {/* Desktop */}
              <div className="hidden sm:block leading-tight">
                <div className="font-heading font-extrabold uppercase text-brand-primary text-[15px] tracking-tight">
                  EQUALIZADOR
                </div>
                <div className="text-[11px] text-neutral-600 -mt-0.5">
                  Consultoria & Treinamento
                </div>
              </div>
            </Link>

            {/* Menu desktop */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-xl text-sm font-semibold text-neutral-700 hover:text-neutral-900 hover:bg-black/[0.04] transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Ações desktop */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href="https://wa.me/244935689669"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-3.5 py-2 text-sm font-semibold
  text-neutral-800 ring-1 ring-black/10 hover:bg-black/[0.04] transition"
                aria-label="Falar no WhatsApp"
              >
                <WhatsAppIcon className="text-[#25D366]" />
                WhatsApp
              </a>

              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold text-white shadow-brand
  bg-brand-primary hover:opacity-95 transition"
              >
                Solicitar Contacto
              </button>
            </div>

            {/* Mobile actions */}
            <div className="flex items-center gap-2.5 lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-2xl px-3.5 py-2 text-sm font-semibold text-white
              bg-brand-primary hover:opacity-95 transition"
              >
                Contacto
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-2xl p-2 ring-1 ring-black/10 hover:bg-black/[0.04] transition"
                aria-label="Abrir menu"
                aria-expanded={open}
                onClick={() => setOpen(true)}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-neutral-900"
                >
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <button
          aria-label="Fechar menu"
          onClick={close}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[86%] max-w-sm bg-white shadow-2xl
        transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="h-20 px-5 flex items-center justify-between border-b border-black/5">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-equalizador.png"
              alt="Equalizador"
              width={40}
              height={40}
              className="h-9 w-auto"
              priority
            />
            <div className="leading-tight">
              <div className="font-heading font-extrabold uppercase text-brand-primary">
                EQUALIZADOR
              </div>
              <div className="text-xs text-neutral-600 -mt-0.5">
                Consultoria & Treinamento
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={close}
            className="inline-flex items-center justify-center rounded-2xl p-2 ring-1 ring-black/10 hover:bg-black/[0.04] transition"
            aria-label="Fechar"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="p-5">
          <div className="rounded-2xl border border-black/5 bg-black/[0.02] p-4">
            <a
              href="tel:+244935689669"
              onClick={close}
              className="flex items-center gap-3 py-2 text-sm text-neutral-800"
            >
              <span className="grid place-items-center size-9 rounded-2xl bg-white ring-1 ring-black/10">
                <PhoneIcon />
              </span>
              <span>+(244) 935 689 669</span>
            </a>
            <a
              href="mailto:geral@equalizador.ao"
              onClick={close}
              className="flex items-center gap-3 py-2 text-sm text-neutral-800"
            >
              <span className="grid place-items-center size-9 rounded-2xl bg-white ring-1 ring-black/10">
                <MailIcon />
              </span>
              <span>geral@equalizador.ao</span>
            </a>
          </div>

          <nav className="mt-5 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="px-4 py-3 rounded-2xl text-base font-semibold text-neutral-800 hover:bg-black/[0.04] transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 grid gap-3">
            <a
              href="https://wa.me/244935689669"
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold
  text-neutral-900 ring-1 ring-black/10 hover:bg-black/[0.04] transition"
              aria-label="Falar no WhatsApp"
            >
              <WhatsAppIcon className="text-[#25D366]" />
              Falar no WhatsApp
            </a>

            <button
              type="button"
              className="w-full inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold
  text-white bg-brand-primary shadow-brand hover:opacity-95 transition"
              onClick={() => {
                close(); // fecha o menu
                setContactOpen(true); // abre o contacto
              }}
            >
              Solicitar Contacto
            </button>
          </div>
        </div>
      </aside>

      <ContactRequestDrawer
        open={contactOpen}
        onClose={closeContact}
        whatsappNumber="244935689669"
        email="geral@equalizador.ao"
      />
    </header>
  );
}

/* Social wrapper (hover azul) */
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
      className="inline-flex items-center justify-center size-7 rounded-lg
      text-white/90 hover:text-white hover:bg-white/15 transition"
    >
      {children}
    </a>
  );
}

/* icons */
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={className ?? "text-current"}
      aria-hidden="true"
    >
      <path
        d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.9-1.4A10 10 0 1 0 12 2Z"
        fill="currentColor"
        opacity="0.22"
      />
      <path
        d="M12 3.9A8.1 8.1 0 0 0 5 16.3l-.7 2.6 2.7-.7A8.1 8.1 0 1 0 12 3.9Zm4.7 11.2c-.2.5-1.1 1-1.6 1.1-.3.1-.8.1-1.2 0-1-.3-2.2-.9-3.4-2.1-1.2-1.2-1.9-2.6-2.1-3.6-.1-.4-.1-.9 0-1.2.1-.5.6-1.4 1.1-1.6.2-.1.5-.1.7 0 .2.1.4.4.6.7l.7 1.5c.1.3.1.6-.1.8l-.3.4c-.1.2-.2.4-.1.6.2.6.7 1.4 1.4 2.1.7.7 1.5 1.2 2.1 1.4.2.1.4 0 .6-.1l.4-.3c.2-.2.5-.2.8-.1l1.5.7c.3.2.6.4.7.6.1.2.1.5 0 .7Z"
        fill="currentColor"
      />
    </svg>
  );
}
