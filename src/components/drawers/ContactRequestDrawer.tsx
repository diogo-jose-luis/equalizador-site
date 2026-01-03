"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  whatsappNumber?: string; // ex: "244935689669"
  email?: string; // ex: "geral@equalizador.ao"
};

export default function ContactRequestDrawer({
  open,
  onClose,
  whatsappNumber = "244935689669",
  email = "geral@equalizador.ao",
}: Props) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [assunto, setAssunto] = useState("Informações sobre Treinamentos");
  const [mensagem, setMensagem] = useState("");

  // ESC fecha
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // limpa form ao fechar (opcional)
  useEffect(() => {
    if (!open) {
      setNome("");
      setTelefone("");
      setEmailUser("");
      setAssunto("Informações sobre Treinamentos");
      setMensagem("");
    }
  }, [open]);

  const text = useMemo(() => {
    const parts = [
      "Olá, Equalizador 👋",
      "",
      "Gostaria de solicitar contacto.",
      "",
      nome ? `• Nome: ${nome}` : "",
      telefone ? `• Telefone: ${telefone}` : "",
      emailUser ? `• Email: ${emailUser}` : "",
      assunto ? `• Assunto: ${assunto}` : "",
      mensagem ? `• Mensagem: ${mensagem}` : "",
    ].filter(Boolean);

    return parts.join("\n");
  }, [nome, telefone, emailUser, assunto, mensagem]);

  const whatsappHref = useMemo(() => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  }, [whatsappNumber, text]);

  const mailHref = useMemo(() => {
    const subject = assunto || "Solicitação de Contacto";
    const body = text;
    return `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [email, assunto, text]);

  return (
    <>
      {/* Overlay */}
      {open && (
        <button
          aria-label="Fechar contacto"
          onClick={onClose}
          className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-[2px]"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-[92%] max-w-md bg-white shadow-2xl
        transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
        aria-label="Solicitar Contacto"
      >
        {/* Header */}
        <div className="h-20 px-5 flex items-center justify-between border-b border-black/5 bg-white/80 backdrop-blur">
          <div className="leading-tight">
            <div className="font-heading font-extrabold text-neutral-900">
              Solicitar Contacto
            </div>
            <div className="text-xs text-neutral-600">
              Envia-nos os teus dados e respondemos rapidamente.
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
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

        {/* Body */}
        <div className="p-5 overflow-y-auto h-[calc(100%-5rem)]">
          {/* quick actions */}
          <div className="rounded-2xl border border-black/5 bg-black/[0.02] p-4">
            <div className="text-sm font-semibold text-neutral-900">
              Contactos rápidos
            </div>

            <div className="mt-3 grid gap-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold
                text-white bg-brand-primary shadow-brand hover:opacity-95 transition"
              >
                <WhatsAppIcon />
                Enviar no WhatsApp
              </a>

              <a
                href={mailHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold
                text-neutral-900 ring-1 ring-black/10 hover:bg-black/[0.04] transition"
              >
                <MailIcon />
                Enviar por Email
              </a>
            </div>

            <div className="mt-3 text-xs text-neutral-600">
              Ou preenche o formulário abaixo para personalizar a mensagem.
            </div>
          </div>

          {/* form */}
          <div className="mt-5 grid gap-4">
            <Field label="Nome">
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex: Diogo Luís"
                className="w-full rounded-2xl bg-white ring-1 ring-black/10 px-4 py-3 text-sm outline-none
                focus:ring-brand-primary/30"
              />
            </Field>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Telefone">
                <input
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="Ex: +244 9xx xxx xxx"
                  className="w-full rounded-2xl bg-white ring-1 ring-black/10 px-4 py-3 text-sm outline-none
                  focus:ring-brand-primary/30"
                />
              </Field>

              <Field label="Email">
                <input
                  value={emailUser}
                  onChange={(e) => setEmailUser(e.target.value)}
                  placeholder="Ex: nome@email.com"
                  className="w-full rounded-2xl bg-white ring-1 ring-black/10 px-4 py-3 text-sm outline-none
                  focus:ring-brand-primary/30"
                />
              </Field>
            </div>

            <Field label="Assunto">
              <select
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
                className="w-full rounded-2xl bg-white ring-1 ring-black/10 px-4 py-3 text-sm outline-none
                focus:ring-brand-primary/30"
              >
                <option>Informações sobre Treinamentos</option>
                <option>Inscrição / Preços</option>
                <option>Consultoria e Implementações</option>
                <option>Pacotes (Batches)</option>
                <option>Outro</option>
              </select>
            </Field>

            <Field label="Mensagem">
              <textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Escreva aqui a tua necessidade..."
                rows={5}
                className="w-full rounded-2xl bg-white ring-1 ring-black/10 px-4 py-3 text-sm outline-none
                focus:ring-brand-primary/30 resize-none"
              />
            </Field>

            {/* preview */}
            <div className="rounded-2xl border border-black/5 bg-white p-4">
              <div className="text-xs font-semibold text-neutral-900">
                Pré-visualização
              </div>
              <pre className="mt-2 whitespace-pre-wrap text-xs text-neutral-600 font-sans">
                {text}
              </pre>
            </div>

            {/* bottom actions */}
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold
                text-white bg-brand-primary shadow-brand hover:opacity-95 transition"
              >
                <WhatsAppIcon />
                Enviar WhatsApp
              </a>

              <a
                href={mailHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold
                text-neutral-900 ring-1 ring-black/10 hover:bg-black/[0.04] transition"
              >
                <MailIcon />
                Enviar Email
              </a>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-2 inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold
              text-neutral-700 hover:text-neutral-900 hover:bg-black/[0.04] transition"
            >
              Fechar
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-semibold text-neutral-700">{label}</span>
      {children}
    </label>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.46 0 .1 5.35.1 11.93c0 2.1.55 4.15 1.6 5.97L0 24l6.27-1.64a11.95 11.95 0 0 0 5.79 1.47h.01c6.58 0 11.93-5.36 11.93-11.93 0-3.19-1.24-6.18-3.48-8.42ZM12.06 21.82h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.97.99-3.63-.24-.37a9.9 9.9 0 0 1-1.52-5.27c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.16 1.03 7.04 2.91a9.88 9.88 0 0 1 2.92 7.03c0 5.48-4.46 9.89-9.95 9.89Zm5.77-7.87c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.52-.16-.74.16-.22.32-.85 1.05-1.05 1.27-.19.21-.39.24-.71.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.61-1.92-1.8-2.24-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.22-.32.33-.53.11-.21.06-.4-.02-.55-.08-.16-.74-1.79-1.02-2.46-.27-.65-.55-.56-.74-.57l-.63-.01c-.22 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.41 5.4 4.78.75.32 1.34.52 1.8.67.76.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}
