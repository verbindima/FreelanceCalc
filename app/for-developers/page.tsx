import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Для разработчиков — API ставок фрилансеров и виджет | FreelanceCalc",
  description:
    "Бесплатный JSON API со ставками фрилансеров в России: 26 специальностей, 24 города, уровни опыта. Также встраиваемый виджет калькулятора для вашего сайта. Лицензия CC BY 4.0.",
};

const API_URL = "https://freelancecalc.ru/api/v1/rates";
const CALC_URL = "https://freelancecalc.ru";

const exampleResponse = `{
  "meta": {
    "version": "v1",
    "updated_quarter": "2026-Q1",
    "total_specialties": 26,
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
    { "slug": "junior", "name": "Junior", "years": "0–1 год", "income_multiplier": 0.55 },
    { "slug": "middle", "name": "Middle", "years": "2–4 года", "income_multiplier": 1.0 },
    { "slug": "senior", "name": "Senior", "years": "5+ лет", "income_multiplier": 1.65 }
  ]
}`;

const embedCode = `<iframe
  src="https://freelancecalc.ru/embed"
  width="100%"
  height="480"
  frameborder="0"
  style="border-radius:12px;border:1px solid #e5e7eb"
  title="Калькулятор ставки фрилансера"
></iframe>`;

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
          Один GET-запрос возвращает медианные ставки по 26 специальностям, 24
          городам и 3 уровням опыта. Обновляется ежеквартально.
        </p>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <code className="text-green-400 text-sm font-mono">
            GET {API_URL}
          </code>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: "Специальностей", value: "26" },
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
        <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
          <pre className="text-gray-300 text-xs font-mono whitespace-pre">
            {exampleResponse}
          </pre>
        </div>

        <div className="mt-4 flex gap-3 flex-wrap">
          <a
            href={API_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Открыть API
          </a>
          <a
            href={`${API_URL}?pretty=1`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Полный JSON
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

        <div className="bg-gray-900 rounded-xl p-4 mb-4 overflow-x-auto">
          <pre className="text-gray-300 text-sm font-mono whitespace-pre">
            {embedCode}
          </pre>
        </div>

        <a
          href="/embed"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Демо виджета
        </a>
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

      {/* Attribution */}
      <section className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
        <h2 className="font-semibold text-amber-900 mb-2">Условия использования</h2>
        <ul className="text-sm text-amber-800 space-y-1 list-disc list-inside">
          <li>Лицензия: CC BY 4.0 — бесплатно для любых целей</li>
          <li>
            При публикации укажите источник:{" "}
            <a href={CALC_URL} className="underline">
              FreelanceCalc.ru
            </a>
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
          Открыть калькулятор
        </Link>
      </div>
    </main>
  );
}
