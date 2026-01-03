// src/components/sections/Categories.tsx
const categories = [
  {
    title: "IT",
    subtitle: "Formações & Exames",
    iconBg: "bg-brand-primary",
    icon: <BadgeIcon />,
  },
  {
    title: "Offshore",
    subtitle: "Segurança & Operações",
    iconBg: "bg-brand-secondary",
    icon: <AnchorIcon />,
  },
  {
    title: "Cloud",
    subtitle: "Azure, AWS & Mais",
    iconBg: "bg-brand-primary",
    icon: <CloudIcon />,
  },
  {
    title: "Networking",
    subtitle: "CCNA, CCNP & Redes",
    iconBg: "bg-brand-secondary",
    icon: <NetworkIcon />,
  },
];

export default function Categories() {
  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 lg:-mt-16 pb-10 sm:pb-14">
      <div className="container-max">
        {/* wrapper cinza “flutuante” */}
        <div className="rounded-[32px] bg-[#F2F4F8] p-6 sm:p-8 lg:p-10 ring-1 ring-black/5 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div
                key={c.title}
                className="group rounded-2xl bg-white ring-1 ring-black/5
                p-5 sm:p-6 transition
                hover:bg-[linear-gradient(135deg,rgba(0,156,249,0.10),rgba(0,169,157,0.08))]
                hover:ring-brand-primary/20"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`grid place-items-center size-12 rounded-2xl text-white ${c.iconBg}
                    shadow-[0_10px_20px_rgba(0,0,0,0.08)]`}
                  >
                    {c.icon}
                  </div>

                  <div className="min-w-0">
                    <div className="font-heading text-lg text-neutral-900">
                      {c.title}
                    </div>
                    <div className="text-sm text-neutral-600">
                      {c.subtitle}
                    </div>
                  </div>
                </div>

                {/* detalhe de hover */}
                <div className="mt-5 h-px w-0 bg-brand-primary/60 transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Icons (inline SVG) ---- */
function BadgeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
      <path
        d="M12 2l3 5 5.5 1.2-3.8 4.2.6 5.6L12 16.9 6.7 18l.6-5.6L3.5 8.2 9 7l3-5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function AnchorIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
      <path
        d="M12 2a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5Zm-1 5.9V11H8.8c-.4 0-.8.4-.8.9s.4.9.8.9H11v5.4c-2.9-.4-5.1-2.6-5.6-5.4H3.6c.6 4.5 4.4 8 9.4 8s8.8-3.5 9.4-8h-1.8c-.5 2.8-2.7 5-5.6 5.4V12.7h2.2c.4 0 .8-.4.8-.9s-.4-.9-.8-.9H13V7.9h-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
      <path
        d="M18.5 10.5a4.5 4.5 0 0 0-8.7-1.6A3.6 3.6 0 0 0 6 12.5C6 14.4 7.6 16 9.5 16h8.8c1.9 0 3.4-1.5 3.4-3.4 0-1.8-1.3-3.1-3.2-3.1ZM9.5 18c-3 0-5.5-2.5-5.5-5.5 0-2.4 1.6-4.5 3.9-5.2A6.5 6.5 0 0 1 20.4 9.7c2.2.5 3.6 2.3 3.6 4.9 0 3-2.4 5.4-5.4 5.4H9.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
      <path
        d="M7 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm10 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM7 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm10 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM9.2 11h5.6v2H9.2v-2Zm0 6h5.6v2H9.2v-2Z"
        fill="currentColor"
      />
    </svg>
  );
}
