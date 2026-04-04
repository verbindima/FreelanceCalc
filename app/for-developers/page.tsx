import type { Metadata } from "next";
import Link from "next/link";
import { CopyBlock } from "./CopyBlock";

export const metadata: Metadata = {
  title: "Для разработчиков — API ставок фрилансеров и виджет | FreelanceCalc",
  description:
    "Бесплатный JSON API со ставками фрилансеров в России: 43 специальности, 24 города, уровни опыта. Встраиваемый виджет. Лицензия CC BY 4.0.",
};

const API_URL = "https://freelancecalc.ru/api/v1/rates";
const WIDGET_URL = "https://freelancecalc.ru/widget";
const CALC_URL = "https://freelancecalc.ru";

const exampleResponse = `{
  "meta": {
    "version": "v1",
    "updated_quarter": "2026-Q2",
    "total_specialties": 43,
    "total_cities": 24,
    "currency": "RUB",
    "source": "https://freelancecalc.ru",
    "license": "CC BY 4.0"
  },
  "specialties": [
    {
      "slug": "python-razrabotchik",
      "name": "Ставка Python-разработчика",
      "median_hourly_min_rub": 2000,
      "median_hourly_max_rub": 4500,
      "median_monthly_rub": 230000,
      "calculator_url": "https://freelancecalc.ru/stavka/python-razrabotchik"
    },
    ...
  ],
  "cities": [
    {
      "slug": "moskva",
      "name": "Москва",
      "rate_multiplier": 1.4,
      "calculator_url": "https://freelancecalc.ru/goroda/moskva"
    },
    ...
  ],
  "experience_levels": [
    { "slug": "junior",  "name": "Junior",  "years": "0–1 год",  "income_multiplier": 0.55 },
    { "slug": "middle",  "name": "Middle",  "years": "2–4 года", "income_multiplier": 1.0 },
    { "slug": "senior",  "name": "Senior",  "years": "5+ лет",   "income_multiplier": 1.65 }
  ]
}`;

// Correct widget embed: /widget is the clean iframe-safe page; /embed is the full showcase page
const embedCode = `<iframe
  src="${WIDGET_URL}"
  width="100%"
  height="460"
  frameborder="0"
  style="border-radius:12px;border:1px solid #e5e7eb"
  title="Калькулятор ставки фрилансера"
></iframe>
<p style="text-align:center;margin-top:6px;font-size:12px;color:#94a3b8">
  Данные: <a href="${CALC_URL}?utm_source=widget_embed&utm_medium=attribution"
  style="color:#6366f1;text-decoration:none" target="_blank" rel="noopener">FreelanceCalc.ru</a>
  — калькулятор ставок фрилансеров (CC BY 4.0)
</p>`;

const attributionSnippet = `<a href="${CALC_URL}?utm_source=api_attribution&utm_medium=badge"
   target="_blank" rel="noopener"
   style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;
          background:#f1f5f9;border:1px solid #e2e8f0;border-radius:6px;
          font-size:12px;color:#475569;text-decoration:none">
  📊 Данные: FreelanceCalc.ru
</a>`;

export default function ForDevelopersPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          ← FreelanceCalc
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        Для разработчиков
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Открытый API со ставками фрилансеров в России и встраиваемый виджет
        калькулятора. Бесплатно, без ключа, лицензия{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/deed.ru"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC BY 4.0
        </a>
        .
      </p>

      {/* API Section */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          JSON API — ставки фрилансеров
        </h2>
        <p className="text-gray-600 mb-4">
          Один GET-запрос возвращает медианные ставки по{" "}
          <strong>43 специальностям</strong>, 24 городам и 3 уровням опыта.
          Обновляется ежеквартально.
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <code className="text-green-400 text-sm font-mono">
            GET {API_URL}
          </code>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: "Специальностей", value: "43" },
            { label: "Городов", value: "24" },
            { label: "Уровней опыта", value: "3" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="bg-blue-50 rounded-lg p-3 text-center border border-blue-100"
            >
              <div className="text-2xl font-bold text-blue-700">{value}</div>
              <div className="text-xs text-blue-600 mt-1">{label}</div>
            </div>
          ))}
        </div>

        <h3 className="font-medium text-gray-800 mb-2">Пример ответа:</h3>
        <CopyBlock code={exampleResponse} label="Копировать" />

        <div className="mt-4 flex gap-3 flex-wrap">
          <a
            href={API_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Открыть API →
          </a>
        </div>
      </section>

      {/* Embed Widget Section */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Виджет — встроить калькулятор
        </h2>
        <p className="text-gray-600 mb-4">
          Встройте калькулятор ставки на свой сайт одной строкой. Адаптивный,
          обновляется автоматически. Подходит для блогов о фрилансе, HR-порталов
          и образовательных платформ.
        </p>

        {/* Live preview */}
        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm mb-4">
          <iframe
            src={WIDGET_URL}
            width="100%"
            height="460"
            frameBorder="0"
            title="Калькулятор ставки фрилансера — предпросмотр"
          />
        </div>

        <h3 className="font-medium text-gray-800 mb-2">Код для вставки:</h3>
        <CopyBlock code={embedCode} label="Копировать код" />

        <p className="mt-3 text-xs text-slate-500">
          Виджет грузится с{" "}
          <code className="bg-slate-100 px-1 rounded font-mono">freelancecalc.ru/widget</code>{" "}
          — отдельная страница без навигации. Высоту можно менять: 420–500px.
        </p>
      </section>

      {/* Attribution badge */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Бейдж атрибуции
        </h2>
        <p className="text-gray-600 mb-4">
          При использовании данных API (лицензия CC BY 4.0) укажите источник.
          Готовый HTML-бейдж:
        </p>

        <div className="mb-4 p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-4">
          {/* Badge preview */}
          <a
            href={`${CALC_URL}?utm_source=api_attribution&utm_medium=badge`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 border border-slate-200 rounded text-xs text-slate-600 hover:bg-slate-200 transition-colors no-underline"
          >
            📊 Данные: FreelanceCalc.ru
          </a>
          <span className="text-sm text-slate-400">← предпросмотр</span>
        </div>

        <CopyBlock code={attributionSnippet} label="Копировать бейдж" />
      </section>

      {/* Use Cases */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Кейсы использования
        </h2>
        <div className="grid gap-4">
          {[
            {
              title: "Telegram-боты",
              desc: "Подтягивайте актуальные медианные ставки для бота «рассчитай свою ставку» или HR-бота.",
            },
            {
              title: "HR и рекрутинг",
              desc: "Используйте данные о рыночных ставках при формировании бюджета на фриланс-подрядчиков.",
            },
            {
              title: "Образование",
              desc: "Встройте калькулятор в курсы по фрилансу или самозанятости — студенты сразу считают свою ставку.",
            },
            {
              title: "Аналитика рынка",
              desc: "Медианные ставки как базовый датасет для исследований рынка труда фрилансеров в России.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="flex gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100"
            >
              <div className="text-blue-500 mt-0.5">→</div>
              <div>
                <div className="font-medium text-gray-900">{title}</div>
                <div className="text-sm text-gray-600 mt-1">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Attribution / Terms */}
      <section className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
        <h2 className="font-semibold text-amber-900 mb-2">Условия использования</h2>
        <ul className="text-sm text-amber-800 space-y-1 list-disc list-inside">
          <li>Лицензия: CC BY 4.0 — бесплатно для любых целей</li>
          <li>
            При публикации укажите источник:{" "}
            <a href={CALC_URL} className="underline">
              FreelanceCalc.ru
            </a>{" "}
            (используйте бейдж выше или текстовую ссылку)
          </li>
          <li>API не требует ключа и регистрации</li>
          <li>Данные обновляются раз в квартал</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="text-center">
        <p className="text-gray-600 mb-4 text-sm">
          Вопросы или нужен более детальный датасет?
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
        >
          Открыть калькулятор →
        </Link>
      </div>
    </main>
  );
}
