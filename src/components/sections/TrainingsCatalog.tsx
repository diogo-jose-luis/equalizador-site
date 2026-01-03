"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Course = {
  title: string;
  category: string;
  duration: string;
  students?: number;
  lessons?: number;
  rating?: number; // 0..5
  price?: string;
  image: string;
};

// Podes importar do teu ficheiro de dados se preferires.
// Aqui deixei a mesma base que já tens.
const courses: Course[] = [
  {
    title: "CCNA – Cisco Certified Network Associate (200-301)",
    category: "Networking",
    duration: "• 40h",
    students: 250,
    lessons: 18,
    rating: 5,
    price: "Sob consulta",
    image: "/courses/ccna.png",
  },
  {
    title: "CompTIA Security+ (SY0-701)",
    category: "Certificações IT",
    duration: "• 35h",
    students: 180,
    lessons: 16,
    rating: 5,
    price: "Sob consulta",
    image: "/courses/securityplus.png",
  },
  {
    title: "LPIC-1 – Linux System Administrator (102-500)",
    category: "Certificações IT",
    duration: "• 45h",
    students: 160,
    lessons: 20,
    rating: 5,
    price: "Sob consulta",
    image: "/courses/lpic1.png",
  },
  {
    title: "VMware VCP-DCV 2024",
    category: "Cloud Computing",
    duration: "• 30h",
    students: 120,
    lessons: 14,
    rating: 5,
    price: "Sob consulta",
    image: "/courses/vmware.png",
  },
  {
    title: "ITIL® 4 Foundation",
    category: "Certificações IT",
    duration: "• 16h",
    students: 300,
    lessons: 10,
    rating: 5,
    price: "Sob consulta",
    image: "/courses/itil4.png",
  },
  {
    title: "BST – Basic Safety Training",
    category: "Offshore",
    duration: "• 24h",
    students: 210,
    lessons: 8,
    rating: 5,
    price: "Sob consulta",
    image: "/courses/bst.png",
  },
  {
    title: "Espaços Confinados (CSE)",
    category: "Offshore",
    duration: "• 12h",
    students: 140,
    lessons: 6,
    rating: 5,
    price: "Sob consulta",
    image: "/courses/cse.png",
  },
  {
    title: "Power BI Avançado",
    category: "Office & BI",
    duration: "• 20h",
    students: 260,
    lessons: 12,
    rating: 5,
    price: "Sob consulta",
    image: "/courses/powerbi.png",
  },
];

type SortKey = "default" | "title_asc" | "students_desc" | "lessons_desc";
type ViewMode = "grid" | "list";

export default function TrainingsCatalog() {
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [sort, setSort] = useState<SortKey>("default");
  const [view, setView] = useState<ViewMode>("grid");

  const categories = useMemo(() => {
    const map = new Map<string, number>();
    courses.forEach((c) => map.set(c.category, (map.get(c.category) ?? 0) + 1));
    return Array.from(map.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([name, count]) => ({ name, count }));
  }, []);

  const filtered = useMemo(() => {
    if (!selectedCats.length) return courses;
    return courses.filter((c) => selectedCats.includes(c.category));
  }, [selectedCats]);

  const sorted = useMemo(() => {
    const arr = [...filtered];

    if (sort === "title_asc") {
      arr.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "students_desc") {
      arr.sort((a, b) => (b.students ?? 0) - (a.students ?? 0));
    } else if (sort === "lessons_desc") {
      arr.sort((a, b) => (b.lessons ?? 0) - (a.lessons ?? 0));
    }

    return arr;
  }, [filtered, sort]);

  const total = courses.length;
  const showingFrom = total ? 1 : 0;
  const showingTo = sorted.length;

  const toggleCat = (cat: string) => {
    setSelectedCats((prev) =>
      prev.includes(cat) ? prev.filter((x) => x !== cat) : [...prev, cat]
    );
  };

  const clearCats = () => setSelectedCats([]);

  return (
    <section className="relative bg-[#F7F9FC] py-12 sm:py-14 lg:py-16">
      <div className="container-max">
        <div className="grid gap-7 lg:grid-cols-12">
          {/* LEFT: filtros (apenas categorias) */}
          <aside className="lg:col-span-3">
            <div className="rounded-[26px] bg-white ring-1 ring-black/5 shadow-[0_18px_55px_rgba(0,0,0,0.08)] p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="font-heading text-lg text-neutral-900">
                    Categorias
                  </div>
                  <div className="mt-1 text-xs text-neutral-500">
                    Filtra por área
                  </div>
                </div>

                {selectedCats.length > 0 && (
                  <button
                    type="button"
                    onClick={clearCats}
                    className="text-xs font-semibold text-brand-primary hover:opacity-90"
                  >
                    Limpar
                  </button>
                )}
              </div>

              <div className="mt-5 space-y-3">
                {categories.map((c) => {
                  const checked = selectedCats.includes(c.name);
                  return (
                    <label
                      key={c.name}
                      className="flex items-center justify-between gap-3 cursor-pointer select-none"
                    >
                      <span className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleCat(c.name)}
                          className="size-4 rounded border-black/20"
                        />
                        <span className="text-sm text-neutral-700">
                          {c.name}
                        </span>
                      </span>

                      <span className="text-xs font-semibold text-neutral-500">
                        ({String(c.count).padStart(2, "0")})
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* mini card de dica (opcional, discreto) */}
            <div className="mt-6 rounded-[26px] bg-[linear-gradient(135deg,rgba(0,156,249,0.10),rgba(0,169,157,0.08))] ring-1 ring-black/5 p-6">
              <div className="text-sm font-semibold text-neutral-900">
                Precisas de ajuda a escolher?
              </div>
              <div className="mt-2 text-sm text-neutral-600">
                Diz-nos o teu objetivo e recomendamos a trilha ideal.
              </div>
              <a
                href="/contacto"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:opacity-90"
              >
                Falar connosco <ArrowRightSmall />
              </a>
            </div>
          </aside>

          {/* RIGHT: lista de cursos */}
          <main className="lg:col-span-9">
            {/* Top bar (como screenshot) */}
            <div className="rounded-[22px] bg-white ring-1 ring-black/5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="text-sm text-neutral-600">
                Mostrando{" "}
                <span className="font-semibold text-neutral-900">
                  {showingFrom}–{showingTo}
                </span>{" "}
                de{" "}
                <span className="font-semibold text-neutral-900">{total}</span>{" "}
                resultados
              </div>

              <div className="flex items-center gap-3 justify-between sm:justify-end">
                {/* Sort */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-neutral-600">Ordenar:</span>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortKey)}
                    className="rounded-xl bg-white ring-1 ring-black/10 px-3 py-2 text-sm text-neutral-900 outline-none"
                  >
                    <option value="default">Padrão</option>
                    <option value="title_asc">Título (A–Z)</option>
                    <option value="students_desc">Mais formandos</option>
                    <option value="lessons_desc">Mais módulos</option>
                  </select>
                </div>

                {/* View toggles */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setView("list")}
                    className={`grid place-items-center size-10 rounded-xl ring-1 transition ${
                      view === "list"
                        ? "bg-brand-primary text-white ring-brand-primary/30"
                        : "bg-white text-neutral-800 ring-black/10 hover:bg-black/[0.03]"
                    }`}
                    aria-label="Lista"
                  >
                    <ListIcon />
                  </button>
                  <button
                    type="button"
                    onClick={() => setView("grid")}
                    className={`grid place-items-center size-10 rounded-xl ring-1 transition ${
                      view === "grid"
                        ? "bg-brand-primary text-white ring-brand-primary/30"
                        : "bg-white text-neutral-800 ring-black/10 hover:bg-black/[0.03]"
                    }`}
                    aria-label="Grelha"
                  >
                    <GridIcon />
                  </button>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mt-6">
              {sorted.length === 0 ? (
                <div className="rounded-[26px] bg-white ring-1 ring-black/5 p-10 text-center">
                  <div className="font-heading text-xl text-neutral-900">
                    Sem resultados
                  </div>
                  <div className="mt-2 text-sm text-neutral-600">
                    Remove alguns filtros para ver mais opções.
                  </div>
                  <button
                    type="button"
                    onClick={clearCats}
                    className="mt-5 inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white
                    bg-brand-primary shadow-brand hover:opacity-95 transition"
                  >
                    Limpar filtros
                  </button>
                </div>
              ) : view === "grid" ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {sorted.map((course) => (
                    <CourseCard key={course.title} course={course} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {sorted.map((course) => (
                    <CourseRow key={course.title} course={course} />
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

/* --------------------- Cards --------------------- */

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group h-full flex flex-col rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_18px_50px_rgba(0,0,0,0.10)] overflow-hidden">
      <div className="relative aspect-[16/10] bg-black/[0.04]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 86vw, (max-width: 1024px) 44vw, 28vw"
        />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-xl bg-brand-primary text-white text-[11px] font-semibold px-3 py-1 shadow">
            {course.duration}
          </span>
          <span className="rounded-xl bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-semibold text-neutral-900 ring-1 ring-black/5">
            {course.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <Stars value={course.rating ?? 5} />
          <span className="text-neutral-500">
            ({(course.students ?? 0).toLocaleString("pt-PT")})
          </span>
        </div>

        <h3 className="mt-3 font-heading text-lg text-neutral-900 leading-snug group-hover:text-brand-primary transition line-clamp-2">
          {course.title}
        </h3>

        <div className="mt-4 flex items-center gap-4 text-sm text-neutral-600">
          <div className="inline-flex items-center gap-2">
            <UsersMini />
            <span>{course.students ?? 0} formandos</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <BookMini />
            <span>{course.lessons ?? 0} módulos</span>
          </div>
        </div>

        <div className="mt-auto pt-5">
          <div className="mb-4 border-t border-dashed border-black/10" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-full bg-[linear-gradient(135deg,rgba(0,156,249,0.25),rgba(0,169,157,0.22))] ring-1 ring-black/5" />
              <div className="text-xs leading-tight">
                <div className="font-semibold text-neutral-900">Equalizador</div>
                <div className="text-neutral-500">Treinamento</div>
              </div>
            </div>

            <div className="text-sm font-extrabold text-brand-primary">
              {course.price ?? "Sob consulta"}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function CourseRow({ course }: { course: Course }) {
  return (
    <article className="rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="grid md:grid-cols-12 gap-0">
        <div className="md:col-span-4 relative aspect-[16/10] md:aspect-auto md:h-full bg-black/[0.04]">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 92vw, 30vw"
          />
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="rounded-xl bg-brand-primary text-white text-[11px] font-semibold px-3 py-1 shadow">
              {course.duration}
            </span>
            <span className="rounded-xl bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-semibold text-neutral-900 ring-1 ring-black/5">
              {course.category}
            </span>
          </div>
        </div>

        <div className="md:col-span-8 p-5 sm:p-6 flex flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-neutral-600">
                <Stars value={course.rating ?? 5} />
                <span className="text-neutral-500">
                  ({(course.students ?? 0).toLocaleString("pt-PT")})
                </span>
              </div>

              <h3 className="mt-2 font-heading text-lg sm:text-xl text-neutral-900 leading-snug hover:text-brand-primary transition">
                {course.title}
              </h3>
            </div>

            <div className="text-sm font-extrabold text-brand-primary whitespace-nowrap">
              {course.price ?? "Sob consulta"}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-600">
            <span className="inline-flex items-center gap-2">
              <UsersMini />
              {course.students ?? 0} formandos
            </span>
            <span className="inline-flex items-center gap-2">
              <BookMini />
              {course.lessons ?? 0} módulos
            </span>
          </div>

          <div className="mt-5">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white
              bg-brand-primary shadow-brand hover:opacity-95 transition"
            >
              Ver detalhes
              <span className="ml-2">
                <ArrowRightSmall />
              </span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

/* --------------------- UI helpers / icons --------------------- */

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
          className={i < full ? "text-[#F59E0B]" : "text-neutral-300"}
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

function ArrowRightSmall() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-current">
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

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-current">
      <path
        d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z"
        fill="currentColor"
        opacity="0.95"
      />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-current">
      <path
        d="M6 6h15M6 12h15M6 18h15"
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
