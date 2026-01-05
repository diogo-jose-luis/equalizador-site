// src/components/sections/ContactSection.tsx
"use client";

import { useState } from "react";
import clsx from "clsx";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // TODO: ligar a um endpoint (ex: /api/contacto) ou serviço externo
    await new Promise((r) => setTimeout(r, 600));

    setLoading(false);
    (e.currentTarget as HTMLFormElement).reset();
    alert("Mensagem enviada! Vamos responder o mais breve possível.");
  };

  return (
    <section className="py-12 sm:py-14 lg:py-16 bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Info + cards */}
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl text-neutral-900">
              Vamos conversar
            </h2>
            <p className="mt-3 text-neutral-600 max-w-xl">
              Para formações, inscrições, parcerias e consultoria. Se
              preferires, podes contactar via WhatsApp.
            </p>

            <div className="mt-7 grid sm:grid-cols-2 gap-4">
              <InfoCard
                title="WhatsApp"
                value="+244 9XX XXX XXX"
                hint="Atendimento rápido"
                icon={<ChatIcon />}
              />
              <InfoCard
                title="Email"
                value="info@equalizador.ao"
                hint="Propostas & suporte"
                icon={<MailIcon />}
              />
              <InfoCard
                title="Localização"
                value="Luanda, Angola"
                hint="Presencial e remoto"
                icon={<PinIcon />}
              />
              <InfoCard
                title="Horário"
                value="Seg–Sáb, 08:00–18:00"
                hint="Horário comercial"
                icon={<ClockIcon />}
              />
            </div>

            {/* Mapa (Google Maps embed) */}
            <div className="mt-6 rounded-[28px] bg-[#F2F4F8] ring-1 ring-black/5 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center size-11 rounded-2xl bg-brand-secondary text-white shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
                      <MapIcon />
                    </span>
                    <div>
                      <div className="font-semibold text-neutral-900">
                        Mapa / Direções
                      </div>
                      <div className="text-sm text-neutral-600">
                        Vila Eco-campo
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://www.google.com/maps/place/EQUALIZADOR+CONSULTORIA+E+TREINAMENTO/@-8.8989708,13.2117135,17z"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold text-neutral-900 ring-1 ring-black/10 bg-white hover:bg-black/[0.03] transition"
                  >
                    Abrir no Google Maps
                    <span className="ml-2">↗</span>
                  </a>
                </div>

                <div className="mt-5 h-[220px] sm:h-[260px] rounded-2xl bg-white ring-1 ring-black/5 overflow-hidden">
                  <iframe
                    title="Mapa – Equalizador (Galeria Tangue)"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={
                      "https://www.google.com/maps?q=EQUALIZADOR+CONSULTORIA+E+TREINAMENTO&z=17&output=embed"
                    }
                  />
                </div>

                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=-8.8988848,13.2116611"
                    target="_blank"
                    rel="noreferrer"
                    className={clsx("inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white bg-brand-primary shadow-brand hover:opacity-95 transition")}
                  >
                    Traçar rota
                    <span className="ml-2">→</span>
                  </a>
                  <a
                    href="tel:+244935689669"
                    className={clsx(
                      "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold",
                      "text-neutral-900 ring-1 ring-black/10 bg-white hover:bg-black/[0.03] transition"
                    )}
                  >
                    Ligar agora
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[32px] bg-[#F2F4F8] ring-1 ring-black/5 p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.10)]">
            <h3 className="font-heading text-xl sm:text-2xl text-neutral-900">
              Enviar mensagem
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Preenche os campos e envia — nós retornamos.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nome">
                  <input
                    required
                    className="input"
                    placeholder="O teu nome"
                    name="nome"
                  />
                </Field>
                <Field label="Telefone">
                  <input
                    className="input"
                    placeholder="+244..."
                    name="telefone"
                  />
                </Field>
              </div>

              <Field label="Email">
                <input
                  required
                  type="email"
                  className="input"
                  placeholder="teuemail@..."
                  name="email"
                />
              </Field>

              <Field label="Assunto">
                <select
                  className="input"
                  name="assunto"
                  defaultValue="inscricao"
                >
                  <option value="inscricao">Inscrição em formação</option>
                  <option value="corporativo">Formação corporativa</option>
                  <option value="consultoria">Consultoria</option>
                  <option value="suporte">Suporte</option>
                  <option value="outro">Outro</option>
                </select>
              </Field>

              <Field label="Mensagem">
                <textarea
                  required
                  className="input min-h-[140px] resize-none"
                  placeholder="Escreve a tua mensagem..."
                  name="mensagem"
                />
              </Field>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <div className="text-xs text-neutral-500">
                  Ao enviar, concordas em ser contactado pela Equalizador.
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-2xl px-6 py-3 font-semibold text-white bg-brand-primary hover:opacity-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "A enviar..." : "Enviar"}
                </button>
              </div>
            </form>

            {/* mini destaque */}
            <div className="mt-6 rounded-2xl bg-white ring-1 ring-black/5 p-4 flex items-center gap-3">
              <span className="grid place-items-center size-10 rounded-2xl bg-brand-primary/10 text-brand-primary">
                <ShieldIcon />
              </span>
              <div>
                <div className="text-sm font-semibold text-neutral-900">
                  Resposta rápida
                </div>
                <div className="text-xs text-neutral-600">
                  Normalmente respondemos em poucas horas (horário comercial).
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* input styles local (simples e limpo) */}
        <style jsx global>{`
          .input {
            width: 100%;
            border-radius: 16px;
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.08);
            padding: 12px 14px;
            font-size: 14px;
            outline: none;
          }
          .input:focus {
            border-color: rgba(0, 156, 249, 0.55);
            box-shadow: 0 0 0 4px rgba(0, 156, 249, 0.12);
          }
        `}</style>
      </div>
    </section>
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
    <label className="block">
      <span className="text-sm font-medium text-neutral-800">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function InfoCard({
  title,
  value,
  hint,
  icon,
}: {
  title: string;
  value: string;
  hint?: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white ring-1 ring-black/5 p-5 hover:bg-[linear-gradient(135deg,rgba(0,156,249,0.08),rgba(0,169,157,0.06))] transition">
      <div className="flex items-start gap-4">
        <div className="grid place-items-center size-12 rounded-2xl bg-brand-primary text-white shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
          {icon}
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-neutral-900">{title}</div>
          <div className="text-sm text-neutral-700 break-words">{value}</div>
          {hint ? (
            <div className="text-xs text-neutral-500 mt-1">{hint}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/* ---- Icons (inline SVG) ---- */
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6h16v12H4V6Zm1.5 1.8 6.3 4.7c.1.1.5.1.6 0l6.1-4.7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 5h16v11H7l-3 3V5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 6v6l4 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function MapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9 3v15" stroke="currentColor" strokeWidth="2" />
      <path d="M15 6v15" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2 20 6v7c0 5-3.4 9-8 9s-8-4-8-9V6l8-4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m9 12 2 2 4-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
