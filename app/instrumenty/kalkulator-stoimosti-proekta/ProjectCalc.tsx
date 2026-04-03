"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const BENCHMARK_PRICE = Date.now() < new Date("2026-04-07T00:00:00+03:00").getTime() ? 249 : 349;

type Specialty = {
  label: string;
  minRate: number; // ₽/час, медиана «мид» Москва
  maxRate: number;
};

const SPECIALTIES: Specialty[] = [
  { label: "Frontend-разработчик", minRate: 1500, maxRate: 3000 },
  { label: "Backend-разработчик", minRate: 2000, maxRate: 4000 },
  { label: "Fullstack-разработчик", minRate: 2000, maxRate: 4500 },
  { label: "Мобильный разработчик (iOS/Android)", minRate: 2500, maxRate: 5000 },
  { label: "ML/AI-инженер", minRate: 3500, maxRate: 7000 },
  { label: "DevOps-инженер", minRate: 2500, maxRate: 5000 },
  { label: "UI/UX-дизайнер", minRate: 1200, maxRate: 2800 },
  { label: "Графический дизайнер", minRate: 800, maxRate: 2000 },
  { label: "Аналитик данных", minRate: 1500, maxRate: 3500 },
  { label: "SEO-специалист", minRate: 1000, maxRate: 2200 },
  { label: "Таргетолог", minRate: 900, maxRate: 2000 },
  { label: "SMM-специалист", minRate: 800, maxRate: 1800 },
  { label: "Копирайтер", minRate: 700, maxRate: 1700 },
  { label: "QA-тестировщик", minRate: 1000, maxRate: 2200 },
  { label: "Менеджер проектов", minRate: 1500, maxRate: 3000 },
];

type City = {
  label: string;
  multiplier: number;
};

const CITIES: City[] = [
  { label: "Москва", multiplier: 1.0 },
  { label: "Санкт-Петербург", multiplier: 0.85 },
  { label: "Новосибирск", multiplier: 0.75 },
  { label: "Екатеринбург", multiplier: 0.72 },
  { label: "Казань", multiplier: 0.70 },
  { label: "Краснодар", multiplier: 0.68 },
  { label: "Нижний Новгород", multiplier: 0.65 },
  { label: "Ростов-на-Дону", multiplier: 0.65 },
  { label: "Самара", multiplier: 0.63 },
  { label: "Уфа", multiplier: 0.60 },
  { label: "Другой регион", multiplier: 0.60 },
];

function fmt(n: number): string {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(n);
}

function fmtShort(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)} млн ₽`;
  if (n >= 1_000) return `${Math.round(n / 1_000)} тыс ₽`;
  return fmt(n);
}

export default function ProjectCalc() {
  const [specialtyIdx, setSpecialtyIdx] = useState(0);
  const [cityIdx, setCityIdx] = useState(0);
  const [hours, setHours] = useState(80);
  const [clientType, setClientType] = useState<"ul" | "fl">("ul");

  const results = useMemo(() => {
    const spec = SPECIALTIES[specialtyIdx]!;
    const city = CITIES[cityIdx]!;

    const minRate = Math.round(spec.minRate * city.multiplier);
    const maxRate = Math.round(spec.maxRate * city.multiplier);

    const taxRate = clientType === "ul" ? 0.06 : 0.04;

    // What freelancer quotes = gross (already includes their tax)
    const projectMin = minRate * hours;
    const projectMax = maxRate * hours;

    // Freelancer take-home
    const freelancerMin = Math.round(projectMin * (1 - taxRate));
    const freelancerMax = Math.round(projectMax * (1 - taxRate));

    // Extra overhead: revisions ~20%, comms ~5%
    const overheadMin = Math.round(projectMin * 1.1);
    const overheadMax = Math.round(projectMax * 1.2);

    return { minRate, maxRate, projectMin, projectMax, freelancerMin, freelancerMax, overheadMin, overheadMax, taxRate };
  }, [specialtyIdx, cityIdx, hours, clientType]);

  const spec = SPECIALTIES[specialtyIdx]!;
  const city = CITIES[cityIdx]!;

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-5">
        {/* Specialty */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Специальность фрилансера
          </label>
          <select
            value={specialtyIdx}
            onChange={(e) => setSpecialtyIdx(+e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {SPECIALTIES.map((s, i) => (
              <option key={s.label} value={i}>{s.label}</option>
            ))}
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Город / регион фрилансера
          </label>
          <select
            value={cityIdx}
            onChange={(e) => setCityIdx(+e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {CITIES.map((c, i) => (
              <option key={c.label} value={i}>{c.label}</option>
            ))}
          </select>
        </div>

        {/* Hours */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Объём работы: <span className="text-indigo-600">{hours} часов</span>
          </label>
          <input
            type="range"
            min={8}
            max={800}
            step={8}
            value={hours}
            onChange={(e) => setHours(+e.target.value)}
            className="w-full accent-indigo-600"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>8 ч (1 день)</span>
            <span>80 ч (2 недели)</span>
            <span>160 ч (1 мес)</span>
            <span>800 ч (5 мес)</span>
          </div>
          {/* Quick presets */}
          <div className="flex flex-wrap gap-2 mt-2">
            {[
              { label: "Мелкая задача (8–16 ч)", val: 12 },
              { label: "Лэндинг (40 ч)", val: 40 },
              { label: "MVP (160 ч)", val: 160 },
              { label: "Большой проект (320 ч)", val: 320 },
            ].map((p) => (
              <button
                key={p.val}
                type="button"
                onClick={() => setHours(p.val)}
                className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                  hours === p.val
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-slate-500 border-slate-300 hover:border-indigo-400 hover:text-indigo-600"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Client type */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Кто платит фрилансеру?
          </label>
          <div className="flex gap-3">
            {([
              { val: "ul", label: "Юридическое лицо / ИП" },
              { val: "fl", label: "Физическое лицо" },
            ] as { val: "ul" | "fl"; label: string }[]).map((opt) => (
              <button
                key={opt.val}
                type="button"
                onClick={() => setClientType(opt.val)}
                className={`flex-1 text-sm py-2 px-3 rounded-lg border transition-colors ${
                  clientType === opt.val
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-slate-600 border-slate-300 hover:border-indigo-400"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {clientType === "ul"
              ? "Самозанятый платит 6% НПД при получении от компаний и ИП"
              : "Самозанятый платит 4% НПД при получении от физлиц"}
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="bg-indigo-600 text-white rounded-2xl shadow-md p-6">
        <h2 className="text-lg font-bold text-indigo-100 mb-4">
          Оценка бюджета: {spec.label} · {city.label} · {hours} ч
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-white text-indigo-700 rounded-xl p-4">
            <p className="text-xs font-medium text-indigo-400 mb-0.5">Рыночная ставка</p>
            <p className="text-xl font-bold">{fmt(results.minRate)} – {fmt(results.maxRate)}<span className="text-sm font-normal text-indigo-500"> /час</span></p>
            <p className="text-xs text-indigo-400 mt-1">медиана для {city.label}</p>
          </div>
          <div className="bg-indigo-700 rounded-xl p-4">
            <p className="text-xs font-medium text-indigo-300 mb-0.5">Стоимость проекта</p>
            <p className="text-xl font-bold">{fmtShort(results.projectMin)} – {fmtShort(results.projectMax)}</p>
            <p className="text-xs text-indigo-300 mt-1">счёт фрилансера (включая его налог)</p>
          </div>
          <div className="bg-indigo-700 rounded-xl p-4">
            <p className="text-xs font-medium text-indigo-300 mb-0.5">Фрилансер получает «на руки»</p>
            <p className="text-xl font-bold">{fmtShort(results.freelancerMin)} – {fmtShort(results.freelancerMax)}</p>
            <p className="text-xs text-indigo-300 mt-1">после НПД {Math.round(results.taxRate * 100)}%</p>
          </div>
          <div className="bg-indigo-700 rounded-xl p-4">
            <p className="text-xs font-medium text-indigo-300 mb-0.5">Реалистичный бюджет с доп. расходами</p>
            <p className="text-xl font-bold">{fmtShort(results.overheadMin)} – {fmtShort(results.overheadMax)}</p>
            <p className="text-xs text-indigo-300 mt-1">+10–20% на правки и коммуникацию</p>
          </div>
        </div>

        <p className="text-xs text-indigo-300">
          Расчёт основан на медианных рыночных ставках Q2 2026. Конкретная ставка зависит от опыта специалиста, технологий и объёма ТЗ.
        </p>
      </section>

      {/* What affects cost */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6">
        <h3 className="font-semibold text-slate-800 text-sm mb-3">
          💡 Что влияет на итоговую стоимость
        </h3>
        <ul className="space-y-2 text-sm text-slate-600">
          <li className="flex gap-2">
            <span className="text-amber-500 mt-0.5">⚡</span>
            <span><strong>Уровень опыта:</strong> разрыв между джуном и сеньором — 2–4 раза. Запросите портфолио и оцените реальный грейд.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-500 mt-0.5">⚡</span>
            <span><strong>Чёткость ТЗ:</strong> размытое задание увеличивает стоимость на 30–50% из-за правок и доработок.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-500 mt-0.5">⚡</span>
            <span><strong>Срочность:</strong> дедлайны «на вчера» поднимают ставку на 20–50%.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-500 mt-0.5">⚡</span>
            <span><strong>Регион фрилансера:</strong> Москва vs регионы — разница 25–40% при том же уровне специалиста.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-500 mt-0.5">ℹ</span>
            <span><strong>Юридический статус:</strong> самозанятый выставляет счёт и платит НПД сам — вы не платите НДФЛ и взносы за него. Это выгоднее штатного сотрудника на 30–40%.</span>
          </li>
        </ul>
      </section>

      {/* Upsell */}
      <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">
              PDF-бенчмарк · Q2 2026
            </p>
            <h3 className="font-bold text-slate-800 text-base">
              Точные медианы по 32 специальностям и 25 городам
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Обоснуйте бюджет перед командой или проверьте, не завышает ли фрилансер ставку.
            </p>
          </div>
          <Link
            href="/benchmark"
            className="shrink-0 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
          >
            Смотреть PDF — {BENCHMARK_PRICE} ₽
          </Link>
        </div>
        <p className="mt-3 text-xs text-amber-700/70">
          📊 22+ специальности · Джун / Мид / Сеньор · Ежеквартальное обновление
        </p>
      </section>

      {/* Links to specialty calculators */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6">
        <h3 className="font-semibold text-slate-700 text-sm mb-3">
          🎯 Калькуляторы ставок по специальностям (для фрилансера)
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            { title: "Frontend", slug: "frontend-razrabotchik" },
            { title: "Backend", slug: "backend-razrabotchik" },
            { title: "Fullstack", slug: "fullstack-razrabotchik" },
            { title: "UI/UX", slug: "dizajner-ui-ux" },
            { title: "Копирайтер", slug: "kopirayter" },
            { title: "SEO", slug: "seo-specialist" },
          ].map((s) => (
            <Link
              key={s.slug}
              href={`/stavka/${s.slug}`}
              className="text-xs bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-600 px-3 py-1.5 rounded-full transition-colors"
            >
              {s.title}
            </Link>
          ))}
        </div>
        <Link href="/stavka" className="mt-3 inline-block text-xs text-indigo-600 hover:underline">
          Все специальности →
        </Link>
      </section>
    </div>
  );
}
