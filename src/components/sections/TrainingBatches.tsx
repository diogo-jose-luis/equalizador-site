// src/components/sections/TrainingBatches.tsx
"use client";

import clsx from "clsx";

type Batch = {
  title: string;
  duration: string;
  price: string;
  items: string[];
  icon: React.ReactNode;
  highlight?: boolean;
};

const batches: Batch[] = [
  {
    title: "Network Engineer Professional",
    duration: "4 meses",
    price: "650.000,00 Kz",
    items: ["CCNA 200-301", "CCNP ENCOR 350-401", "CCNP ENARSI 300-410"],
    icon: <NetworkIcon />,
    highlight: true,
  },
  {
    title: "Network Security Engineer",
    duration: "4 meses",
    price: "650.000,00 Kz",
    items: [
      "CCNA 200-301",
      "CCNP ENCOR 350-401",
      "FCP FortiOS 7.6 Administrator",
      "CompTIA Security+",
    ],
    icon: <ShieldIcon />,
  },
  {
    title: "System Administrator Professional",
    duration: "4 meses",
    price: "650.000,00 Kz",
    items: ["AZ-800", "AZ-104", "RHCSA", "VMware DCV"],
    icon: <ServerIcon />,
  },
  {
    title: "Network Engineer Expert",
    duration: "8 meses",
    price: "2.950.000,00 Kz",
    items: [
      "CCNA 200-301",
      "CCNP ENCOR 350-401",
      "CCNP ENARSI 300-410",
      "CCNP ENSDWI 300-415",
      "CCIE EI 1.1",
    ],
    icon: <ExpertIcon />,
  },
  {
    title: "Cyber Security Engineer",
    duration: "6 meses",
    price: "1.250.000,00 Kz",
    items: ["RHCSA", "CompTIA Security+", "CEH v13", "Splunk", "QRadar", "Wireshark"],
    icon: <CyberIcon />,
  },
];

export default function TrainingBatches() {
  return (
    <section id="batches" className="relative bg-white py-14 sm:py-20">
      {/* decor suave */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 size-[320px] rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 size-[320px] rounded-full bg-brand-secondary/10 blur-3xl" />
      </div>

      <div className="container-max relative">
        {/* header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-xl bg-brand-primary/10 px-4 py-2 text-xs font-semibold text-brand-primary">
            Programas por Batch
          </div>

          <h2 className="mt-4 font-heading text-3xl sm:text-4xl tracking-tight text-neutral-900">
            Escolhe um <span className="text-brand-primary">plano intensivo</span>{" "}
            e acelera a tua carreira
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            Packs completos com trilhas de certificação. Estrutura clara, duração definida e
            acompanhamento.
          </p>
        </div>

        {/* grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* coluna 1 */}
          <div className="grid gap-6">
            <BatchCard batch={batches[0]} />
            <BatchCard batch={batches[1]} />
          </div>

          {/* coluna 2 (destaque) */}
          <div className="grid gap-6">
            <BatchCard batch={batches[3]} tall />
          </div>

          {/* coluna 3 */}
          <div className="grid gap-6">
            <BatchCard batch={batches[2]} />
            <BatchCard batch={batches[4]} />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-black/5 bg-black/[0.02] p-6">
          <div>
            <div className="font-heading text-lg font-extrabold text-neutral-900">
              Queres ajuda a escolher o batch ideal?
            </div>
            <div className="mt-1 text-sm text-neutral-600">
              Diz-nos o teu objetivo (Networking, SysAdmin, Cyber) e o teu nível atual.
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white
            bg-brand-primary shadow-brand hover:opacity-95 transition"
          >
            Falar com a Equalizador
            <span className="ml-2">
              <ArrowRightSmall />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function BatchCard({ batch, tall }: { batch: Batch; tall?: boolean }) {
  return (
    <article
      className={clsx(
        "group rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_18px_50px_rgba(0,0,0,0.08)] overflow-hidden",
        tall ? "lg:sticky lg:top-28" : ""
      )}
    >
      {/* top */}
      <div
        className={clsx(
          "p-5 sm:p-6",
          batch.highlight && "bg-[linear-gradient(135deg,rgba(0,156,249,0.10),rgba(0,169,157,0.08))]"
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="grid place-items-center size-12 rounded-2xl bg-brand-primary/10 ring-1 ring-black/5 text-brand-primary">
              {batch.icon}
            </div>

            <div className="min-w-0">
              <h3 className="font-heading text-lg font-extrabold text-neutral-900 leading-snug">
                {batch.title}
              </h3>

              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-neutral-600">
                <span className="inline-flex items-center gap-1 rounded-xl bg-black/[0.04] px-3 py-1 ring-1 ring-black/5">
                  <ClockMini />
                  {batch.duration}
                </span>
                <span className="inline-flex items-center gap-1 rounded-xl bg-black/[0.04] px-3 py-1 ring-1 ring-black/5">
                  <TagMini />
                  {batch.price}
                </span>
              </div>
            </div>
          </div>

          {batch.highlight && (
            <span className="shrink-0 rounded-xl bg-brand-primary text-white text-[11px] font-semibold px-3 py-1 shadow">
              Recomendado
            </span>
          )}
        </div>

        {/* list */}
        <div className="mt-5">
          <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
            Inclui
          </div>

          <ul className="mt-3 space-y-2">
            {batch.items.map((it) => (
              <li key={it} className="flex items-start gap-2 text-sm text-neutral-700">
                <span className="mt-0.5 grid place-items-center size-5 rounded-full bg-brand-secondary/15 text-brand-secondary ring-1 ring-black/5">
                  ✓
                </span>
                <span className="leading-snug">{it}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* divider dotted (estética premium) */}
        <div className="mt-6 border-t border-dashed border-black/10" />

        {/* footer */}
        <div className="mt-5 flex items-center justify-between">
          <div className="text-xs text-neutral-500">
            Duração: <span className="font-semibold text-neutral-800">{batch.duration}</span>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold
            text-neutral-900 ring-1 ring-black/10 hover:bg-black/[0.04] transition"
          >
            Ver detalhes
          </button>
        </div>
      </div>
    </article>
  );
}

/* -------- icons -------- */

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

function ClockMini() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-neutral-500">
      <path
        d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 7v6l4 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TagMini() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-neutral-500">
      <path
        d="M20 13l-7 7-11-11V2h7L20 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 7.5h0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-current">
      <path
        d="M7 7h10v6H7V7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 20h16M12 13v7M8 20v-3M16 20v-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-current">
      <path
        d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-current">
      <path
        d="M4 6h16v5H4V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 13h16v5H4v-5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7 8h0M7 15h0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ExpertIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-current">
      <path
        d="M12 2l3 6 7 .9-5 4.7 1.2 6.8L12 18.8 5.8 21.4 7 14.6 2 9 9 8 12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CyberIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-current">
      <path
        d="M12 3a7 7 0 0 0-7 7v4a6 6 0 0 0 6 6h2a6 6 0 0 0 6-6v-4a7 7 0 0 0-7-7Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M9.5 11.5h5M10 15h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 9.5h0M16 9.5h0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
