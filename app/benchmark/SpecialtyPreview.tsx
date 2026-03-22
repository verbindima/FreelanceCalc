"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import BuyButton from "./BuyButton";

// ─── Data (mirrors report/page.tsx so it stays in sync) ─────────────────────

interface Specialty {
  name: string;
  category: string;
  midMsk: number; // median mid hourly rate in Moscow ₽/h
}

const SPECIALTIES: Specialty[] = [
  { name: "ML/AI-инженер",          category: "Разработка",  midMsk: 5000 },
  { name: "DevOps-инженер",         category: "Разработка",  midMsk: 4200 },
  { name: "Golang-разработчик",     category: "Разработка",  midMsk: 3600 },
  { name: "Java-разработчик",       category: "Разработка",  midMsk: 3400 },
  { name: "Мобильный разработчик",  category: "Разработка",  midMsk: 3200 },
  { name: "Fullstack-разработчик",  category: "Разработка",  midMsk: 3000 },
  { name: "Python-разработчик",     category: "Разработка",  midMsk: 2800 },
  { name: "Backend-разработчик",    category: "Разработка",  midMsk: 2700 },
  { name: ".NET-разработчик",       category: "Разработка",  midMsk: 2600 },
  { name: "Frontend-разработчик",   category: "Разработка",  midMsk: 2250 },
  { name: "PHP-разработчик",        category: "Разработка",  midMsk: 2100 },
  { name: "1С-разработчик",         category: "Разработка",  midMsk: 1900 },
  { name: "QA-инженер",             category: "Разработка",  midMsk: 1700 },
  { name: "Аналитик данных",        category: "Аналитика",   midMsk: 2700 },
  { name: "Бизнес-аналитик",        category: "Аналитика",   midMsk: 2400 },
  { name: "UI/UX-дизайнер",         category: "Дизайн",      midMsk: 2000 },
  { name: "Motion-дизайнер",        category: "Дизайн",      midMsk: 1800 },
  { name: "Графический дизайнер",   category: "Дизайн",      midMsk: 1500 },
  { name: "Веб-дизайнер",           category: "Дизайн",      midMsk: 1300 },
  { name: "Маркетолог",             category: "Маркетинг",   midMsk: 2000 },
  { name: "Таргетолог",             category: "Маркетинг",   midMsk: 1600 },
  { name: "SEO-специалист",         category: "Маркетинг",   midMsk: 1600 },
  { name: "SMM-специалист",         category: "Маркетинг",   midMsk: 1200 },
  { name: "Копирайтер",             category: "Тексты",      midMsk: 1200 },
  { name: "Переводчик",             category: "Тексты",      midMsk: 900  },
  { name: "Менеджер проектов",      category: "Управление",  midMsk: 2200 },
];

const CITY_MULT: Record<string, number> = {
  "Москва":          1.00,
  "Санкт-Петербург": 0.83,
  "Новосибирск":     0.73,
  "Екатеринбург":    0.76,
  "Казань":          0.71,
  "Краснодар":       0.69,
  "Нижний Новгород": 0.70,
  "Ростов-на-Дону":  0.67,
  "Самара":          0.68,
  "Уфа":             0.65,
};

const LOCKED_CITIES = [
  "Новосибирск", "Екатеринбург", "Казань", "Краснодар",
  "Нижний Новгород", "Ростов-на-Дону", "Самара", "Уфа",
];

const CATEGORY_STYLE: Record<string, string> = {
  "Разработка": "text-blue-700 bg-blue-50",
  "Аналитика":  "text-purple-700 bg-purple-50",
  "Дизайн":     "text-pink-700 bg-pink-50",
  "Маркетинг":  "text-green-700 bg-green-50",
  "Тексты":     "text-orange-700 bg-orange-50",
  "Управление": "text-slate-700 bg-slate-50",
};

function jitter(base: number, idx: number): number {
  const offsets = [0, 50, -50, 100, -100, 150, -150, 0, 50, -100];
  return base + (offsets[idx % offsets.length] ?? 0);
}

function rateRange(midMsk: number, city: string, level: "jun" | "mid" | "sen", idx: number): string {
  const cityMult = CITY_MULT[city] ?? 0.70;
  const levelMult = level === "jun" ? 0.52 : level === "mid" ? 1.0 : 1.85;
  const base = jitter(midMsk * cityMult * levelMult, idx + (level === "jun" ? 0 : level === "mid" ? 7 : 14));
  const roundTo = base < 1000 ? 50 : 100;
  const low = Math.round(base * 0.78 / roundTo) * roundTo;
  const high = Math.round(base * 1.22 / roundTo) * roundTo;
  return `${low.toLocaleString("ru-RU")}–${high.toLocaleString("ru-RU")} ₽/ч`;
}

function fakeLocked(midMsk: number, cityMult: number, idx: number): string {
  const base = jitter(midMsk * cityMult, idx);
  const roundTo = base < 1000 ? 50 : 100;
  const low = Math.round(base * 0.78 / roundTo) * roundTo;
  const high = Math.round(base * 1.22 / roundTo) * roundTo;
  return `${low.toLocaleString("ru-RU")}–${high.toLocaleString("ru-RU")} ₽/ч`;
}

// Group specialties by category for the select
const CATEGORIES = ["Разработка", "Аналитика", "Дизайн", "Маркетинг", "Тексты", "Управление"];

// Slug → specialty index mapping for deep-linking (?spec=python)
const SPEC_SLUGS: Record<string, number> = {
  // Разработка
  "ml": 0, "ai": 0, "ml-ai": 0,
  "devops": 1,
  "golang": 2, "go": 2,
  "java": 3,
  "mobile": 4, "ios": 4, "android": 4,
  "fullstack": 5,
  "python": 6,
  "backend": 7,
  "dotnet": 8, "net": 8, "csharp": 8,
  "frontend": 9,
  "php": 10,
  "1c": 11, "1s": 11,
  "qa": 12, "testing": 12, "tester": 12,
  // Аналитика
  "data": 13, "analyst": 13, "analytics": 13,
  "ba": 14, "business-analyst": 14,
  // Дизайн
  "ux": 15, "ui": 15, "uxui": 15, "design": 15,
  "motion": 16,
  "graphic": 17,
  "webdesign": 18, "webdesigner": 18,
  // Маркетинг
  "marketing": 19, "marketolog": 19,
  "target": 20, "targeting": 20,
  "seo": 21,
  "smm": 22,
  // Тексты
  "copywriter": 23, "copy": 23,
  "translator": 24, "perevod": 24,
  // Управление
  "pm": 25, "manager": 25, "project": 25,
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function SpecialtyPreview() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const searchParams = useSearchParams();

  // Auto-select specialty from URL: /benchmark?spec=python
  useEffect(() => {
    const slug = searchParams.get("spec")?.toLowerCase().trim();
    if (slug && selectedIdx === null) {
      const idx = SPEC_SLUGS[slug] ?? null;
      if (idx !== null) setSelectedIdx(idx);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const spec = selectedIdx !== null ? SPECIALTIES[selectedIdx] : null;

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-2">
        Выберите свою специальность
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Москва и Санкт-Петербург — открыты бесплатно. Ещё 8 городов — в PDF.
      </p>

      {/* Specialty picker */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Специальность:
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
          value={selectedIdx ?? ""}
          onChange={(e) => setSelectedIdx(e.target.value === "" ? null : Number(e.target.value))}
        >
          <option value="">— Выберите специальность —</option>
          {CATEGORIES.map((cat) => (
            <optgroup key={cat} label={cat}>
              {SPECIALTIES.map((s, i) =>
                s.category === cat ? (
                  <option key={i} value={i}>{s.name}</option>
                ) : null
              )}
            </optgroup>
          ))}
        </select>
      </div>

      {/* Preview table */}
      {spec && selectedIdx !== null && (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden animate-in fade-in duration-200">
          {/* Specialty header */}
          <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-3">
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${CATEGORY_STYLE[spec.category] ?? "text-gray-600 bg-gray-100"}`}>
              {spec.category}
            </span>
            <span className="font-semibold text-gray-900">{spec.name}</span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 w-28">Уровень</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700">🏙 Москва</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700">🌊 Санкт-Петербург</th>
                  {LOCKED_CITIES.slice(0, 4).map((city) => (
                    <th key={city} className="text-right px-3 py-3 font-semibold text-gray-300 whitespace-nowrap hidden md:table-cell">
                      🔒 {city.split(" ")[0]}
                    </th>
                  ))}
                  <th className="text-right px-3 py-3 font-semibold text-gray-300 hidden md:table-cell">
                    🔒 +4 города
                  </th>
                </tr>
              </thead>
              <tbody>
                {(["jun", "mid", "sen"] as const).map((level, li) => {
                  const label = level === "jun" ? "Джун" : level === "mid" ? "Мид" : "Сеньор";
                  const emphasis = level === "mid" ? "font-bold text-gray-900" : "text-gray-700";
                  return (
                    <tr key={level} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/40">
                      <td className="px-4 py-3">
                        <span className={`text-sm font-semibold ${level === "sen" ? "text-violet-700" : level === "mid" ? "text-indigo-700" : "text-gray-500"}`}>
                          {label}
                        </span>
                        {level === "mid" && (
                          <span className="ml-1 text-xs text-indigo-400">· медиана</span>
                        )}
                      </td>
                      <td className={`px-4 py-3 text-right ${emphasis} whitespace-nowrap`}>
                        {rateRange(spec.midMsk, "Москва", level, selectedIdx + li * 13)}
                      </td>
                      <td className={`px-4 py-3 text-right ${emphasis} whitespace-nowrap`}>
                        {rateRange(spec.midMsk, "Санкт-Петербург", level, selectedIdx + li * 13 + 3)}
                      </td>
                      {LOCKED_CITIES.slice(0, 4).map((city, ci) => (
                        <td key={city} className="px-3 py-3 text-right hidden md:table-cell">
                          <span className="text-gray-300 blur-sm select-none" aria-hidden="true">
                            {fakeLocked(spec.midMsk, CITY_MULT[city] ?? 0.70, selectedIdx + ci + li * 4)}
                          </span>
                        </td>
                      ))}
                      <td className="px-3 py-3 text-right hidden md:table-cell">
                        <span className="text-gray-200 blur-sm select-none" aria-hidden="true">
                          1 100–2 400 ₽/ч
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* CTA bar */}
          <div className="bg-indigo-50 border-t border-indigo-100 px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-indigo-900">
                Хотите данные по вашему городу?
              </p>
              <p className="text-xs text-indigo-600 mt-0.5">
                {spec.name} · ещё 8 городов России · Джун / Мид / Сеньор
              </p>
            </div>
            <BuyButton label="Открыть полный отчёт — 249 ₽" />
          </div>
        </div>
      )}

      {/* Prompt if nothing selected */}
      {!spec && (
        <div className="bg-gray-50 rounded-2xl border border-dashed border-gray-200 px-6 py-8 text-center text-gray-400 text-sm">
          Выберите специальность выше — покажем ставки для Москвы и Санкт-Петербурга бесплатно
        </div>
      )}
    </section>
  );
}
