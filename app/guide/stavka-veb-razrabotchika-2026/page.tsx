import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Ставка веб-разработчика-фрилансера 2026: сколько брать за час | FreelanceCalc",
  description:
    "Сколько берут frontend и backend разработчики на фрилансе в 2026 году. Таблица ставок Junior/Middle/Senior, расчёт с учётом НПД и ИП УСН, калькулятор онлайн.",
  alternates: { canonical: `${BASE_URL}/guide/stavka-veb-razrabotchika-2026` },
  openGraph: {
    title: "Ставка веб-разработчика 2026: frontend, backend, fullstack",
    description:
      "Медианные ставки: Frontend Middle 2 000–3 500 ₽/час, Backend Middle 2 200–4 300 ₽/час. Таблица по уровням, налоговый расчёт, калькулятор.",
    url: `${BASE_URL}/guide/stavka-veb-razrabotchika-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ставка веб-разработчика фрилансера 2026: сколько брать за час",
    description:
      "Frontend Middle: 2 000–3 500 ₽/час, Backend Middle: 2 200–4 300 ₽/час. Расчёт с налогами НПД и ИП УСН.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько берёт frontend-разработчик-фрилансер в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Медианная ставка frontend-разработчика (React/Vue/Angular) в 2026 году: Junior — 800–1 500 ₽/час, Middle — 2 000–3 500 ₽/час, Senior — 4 000–7 000 ₽/час. Специалисты с опытом в Next.js, TypeScript и современных инструментах сборки стоят дороже на 15–25%.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько берёт backend-разработчик-фрилансер (PHP, Node.js, Python) в 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Медианная ставка backend-разработчика в 2026 году: Junior — 1 000–2 200 ₽/час, Middle — 2 200–4 300 ₽/час, Senior — 4 300–8 600 ₽/час. Backend-разработчики в среднем зарабатывают на 10–20% больше frontend-коллег из-за сложности серверной логики и работы с базами данных.",
      },
    },
    {
      "@type": "Question",
      name: "Что выгоднее для веб-разработчика: самозанятость или ИП?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "При годовом доходе до 2,4 млн ₽ — самозанятость (НПД 6% с юрлиц, 4% с физлиц). При доходе выше 2,4 млн ₽ — ИП УСН 6%. Например, Middle frontend при доходе 250 000 ₽/мес: НПД = 15 000 ₽/мес, ИП УСН = 15 000 + 4 472 ₽ взносов = 19 472 ₽/мес. Самозанятость дешевле на 53 664 ₽/год, пока не достигнут лимит.",
      },
    },
    {
      "@type": "Question",
      name: "Fullstack-разработчик: ставка выше или ниже чистого frontend/backend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ставки fullstack-разработчиков в 2026 году: Middle — 2 500–4 000 ₽/час, Senior — 4 500–8 000 ₽/час. В среднем на 10–15% выше чистого frontend, но на 5–10% ниже топового backend-специалиста. Преимущество fullstack — больше заказов, так как клиент нанимает одного человека вместо двух.",
      },
    },
    {
      "@type": "Question",
      name: "Как рассчитать почасовую ставку веб-разработчика?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Формула: (Желаемый доход на руки ÷ рабочие часы в месяц × коэффициент загрузки) ÷ (1 − ставка налога). Пример: хочу 200 000 ₽/мес, работаю 6 ч/день, загрузка 70%, НПД 6%. Ставка = 200 000 ÷ (6 × 22 × 0,70) ÷ (1 − 0,06) = 200 000 ÷ 92,4 ÷ 0,94 ≈ 2 306 ₽/час. Используйте калькулятор FreelanceCalc для точного расчёта.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Ставка веб-разработчика-фрилансера в 2026 году: frontend, backend, fullstack",
  description:
    "Медианные ставки frontend и backend разработчиков на фрилансе в 2026 году с таблицами по уровням опыта, расчётом налогов НПД/ИП и онлайн-калькулятором.",
  url: `${BASE_URL}/guide/stavka-veb-razrabotchika-2026`,
  datePublished: "2026-04-14",
  dateModified: "2026-04-14",
  author: { "@type": "Organization", name: "FreelanceCalc" },
  publisher: {
    "@type": "Organization",
    name: "FreelanceCalc",
    url: BASE_URL,
  },
};

export default function StavkaVebRazrabotchika2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">
            Главная
          </Link>{" "}
          /{" "}
          <Link href="/guide" className="hover:underline">
            Гайды
          </Link>{" "}
          / Ставка веб-разработчика 2026
        </nav>

        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Ставка веб-разработчика-фрилансера в 2026 году: сколько брать за час
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Frontend, backend, fullstack — у каждого направления своя рыночная
          ставка. Собрали актуальные данные по уровням Junior/Middle/Senior,
          посчитали налоги и объяснили, как не продешевить при выборе цены.
        </p>

        {/* Быстрый ответ */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-8">
          <h2 className="font-semibold text-blue-900 mb-3 text-lg">
            Быстрый ответ: медианные ставки 2026
          </h2>
          <ul className="space-y-1 text-blue-800 text-sm">
            <li>
              Frontend Junior: <strong>800–1 500 ₽/час</strong>
            </li>
            <li>
              Frontend Middle (React/Vue): <strong>2 000–3 500 ₽/час</strong>
            </li>
            <li>
              Frontend Senior: <strong>4 000–7 000 ₽/час</strong>
            </li>
            <li>
              Backend Middle (PHP/Node.js/Python):{" "}
              <strong>2 200–4 300 ₽/час</strong>
            </li>
            <li>
              Backend Senior: <strong>4 300–8 600 ₽/час</strong>
            </li>
            <li>
              Fullstack Middle: <strong>2 500–4 000 ₽/час</strong>
            </li>
          </ul>
        </div>

        {/* Секция 1: Frontend */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
          Ставки frontend-разработчика по уровням
        </h2>
        <p className="mb-4">
          Frontend-разработка — самое конкурентное направление в вебе. Порог
          входа ниже, чем в backend, поэтому предложение на рынке выше и ставки
          у Junior ниже. Однако опытные специалисты с React/Next.js и
          TypeScript компенсируют это premium-ставками.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Уровень
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Стек
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Ставка ₽/час
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Доход/мес (160 ч)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Junior</td>
                <td className="border border-gray-200 px-4 py-3">
                  HTML/CSS/JS, базовый React
                </td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  800–1 500 ₽
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  128–240 тыс. ₽
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">Middle</td>
                <td className="border border-gray-200 px-4 py-3">
                  React/Vue, TypeScript, REST/GraphQL
                </td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  2 000–3 500 ₽
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  320–560 тыс. ₽
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">
                  Middle+ / Senior
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  Next.js, архитектура, перформанс
                </td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  4 000–7 000 ₽
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  640 тыс. – 1,1 млн ₽
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          * Данные по фриланс-рынку России: hh.ru, Habr Freelance, Kwork,
          FL.ru — апрель 2026. Указан диапазон реальных сделок, не
          завышенные заявки.
        </p>

        {/* Секция 2: Backend */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
          Ставки backend-разработчика по языкам и уровням
        </h2>
        <p className="mb-4">
          Backend-разработка традиционно оплачивается выше frontend: сложнее
          задачи (высоконагруженные системы, безопасность, базы данных),
          меньше специалистов на рынке. Ставка зависит от стека — Python и
          Go-разработчики зарабатывают больше PHP.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Стек
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Junior ₽/час
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Middle ₽/час
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Senior ₽/час
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  PHP (Laravel/Bitrix)
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  1 000–2 000
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  2 200–4 000
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  4 000–7 000
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  Node.js (Express/NestJS)
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  1 200–2 200
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  2 500–4 300
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  4 500–8 000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  Python (Django/FastAPI)
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  1 200–2 500
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  2 800–5 000
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  5 000–9 000
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  Go / Rust
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  1 500–3 000
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  3 500–6 000
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  6 000–10 000+
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Секция 3: Fullstack */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
          Ставки fullstack-разработчика
        </h2>
        <p className="mb-4">
          Fullstack сочетает frontend и backend в одном лице. Ставка обычно
          выше чистого frontend на 10–15%, но ниже топового backend-специалиста.
          Главное преимущество для заказчика — один человек вместо двух, поэтому
          заказов у fullstack-разработчика больше.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Уровень
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Типичный стек
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Ставка ₽/час
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Junior</td>
                <td className="border border-gray-200 px-4 py-3">
                  React + Node.js / PHP
                </td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  1 000–2 000 ₽
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">Middle</td>
                <td className="border border-gray-200 px-4 py-3">
                  Next.js + NestJS/Django, PostgreSQL
                </td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  2 500–4 000 ₽
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Senior</td>
                <td className="border border-gray-200 px-4 py-3">
                  Архитектура, DevOps, микросервисы
                </td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  4 500–8 000 ₽
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Секция 4: Расчёт ставки */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
          Как рассчитать свою ставку с учётом налогов
        </h2>
        <p className="mb-4">
          Ошибка большинства новых фрилансеров — называть ставку по рынку, не
          считая налоги и простои. Рассчитаем ставку для Middle frontend (хочет
          200 000 ₽/мес на руки, самозанятый):
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
          <h3 className="font-semibold mb-3">
            Пример расчёта: Middle React, самозанятый
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Желаемый доход на руки</span>
              <span className="font-medium">200 000 ₽/мес</span>
            </div>
            <div className="flex justify-between">
              <span>Рабочих часов в месяц (6 ч/день × 22 дня)</span>
              <span className="font-medium">132 часа</span>
            </div>
            <div className="flex justify-between">
              <span>Коэффициент загрузки (70% — реалистично для фриланса)</span>
              <span className="font-medium">× 0,70 = 92,4 ч</span>
            </div>
            <div className="flex justify-between">
              <span>Поправка на НПД 6% (с юрлиц)</span>
              <span className="font-medium">÷ 0,94</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold text-base">
              <span>Итоговая ставка</span>
              <span className="text-green-700">≈ 2 306 ₽/час</span>
            </div>
          </div>
        </div>

        <p className="mb-4">
          Если работаете через юрлицо и НПД 6%, ваша выручка с этой ставки:
          2 306 × 92,4 = 213 074 ₽ → налог 12 784 ₽ → на руки{" "}
          <strong>200 290 ₽</strong> ✓
        </p>

        <p className="mb-6">
          Используйте{" "}
          <Link href="/" className="text-blue-600 hover:underline font-medium">
            калькулятор FreelanceCalc
          </Link>{" "}
          — он учтёт налоговый режим, регион, опыт и рабочие часы автоматически.
        </p>

        {/* Секция 5: Когда повышать */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
          Когда повышать ставку и как это делать
        </h2>
        <p className="mb-4">
          Знак, что вы недооцениваете себя: заказчики не торгуются, клиент
          принимает без вопросов, очередь заказов &gt; 2 месяцев. В таких случаях
          пора поднимать ставку — минимум на 20–30%.
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>
            <strong>Новые клиенты</strong> — сразу называйте повышенную ставку.
            Текущих клиентов не трогайте резко: предупредите за месяц.
          </li>
          <li>
            <strong>Специализация</strong> — разработчик, который умеет
            Next.js + SEO или React Native, берёт на 30–50% дороже generalista.
          </li>
          <li>
            <strong>Портфолио</strong> — 3–5 кейсов с конкретными цифрами
            (рост конверсии, скорость загрузки) обоснуют любую ставку лучше
            сертификатов.
          </li>
          <li>
            <strong>Лимит самозанятого</strong> — при доходе&nbsp; близком к 2,4 млн
            ₽/год переходите на{" "}
            <Link
              href="/guide/ip-vs-samozanyatyj"
              className="text-blue-600 hover:underline"
            >
              ИП УСН
            </Link>
            , иначе потеряете статус.
          </li>
        </ul>

        {/* Секция 6: Специализация влияет */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
          Стек технологий и влияние на ставку
        </h2>
        <p className="mb-4">
          Не все технологии одинаково оплачиваются. Вот как специализация
          меняет ставку у Middle-разработчика (база: чистый HTML/CSS/JS = 100%):
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Специализация
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Коэффициент к базовой ставке
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Причина
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3">
                  HTML/CSS/JS (базовый)
                </td>
                <td className="border border-gray-200 px-4 py-3">×1,0</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">
                  Высокая конкуренция
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">
                  React / Vue + TypeScript
                </td>
                <td className="border border-gray-200 px-4 py-3 text-green-700 font-medium">
                  ×1,3–1,5
                </td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">
                  SPA/SSR проекты
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">
                  Next.js + SEO
                </td>
                <td className="border border-gray-200 px-4 py-3 text-green-700 font-medium">
                  ×1,5–1,8
                </td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">
                  Редкое сочетание
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">
                  Web3 / DeFi
                </td>
                <td className="border border-gray-200 px-4 py-3 text-green-700 font-medium">
                  ×2,0–3,0
                </td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">
                  Дефицит кадров
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">
                  AI/ML интеграция в веб
                </td>
                <td className="border border-gray-200 px-4 py-3 text-green-700 font-medium">
                  ×1,8–2,5
                </td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">
                  Новая горячая ниша 2026
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">
          Частые вопросы
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Сколько берёт frontend-разработчик-фрилансер в 2026 году?
            </h3>
            <p className="text-gray-700">
              Медианная ставка frontend-разработчика в 2026: Junior — 800–1 500
              ₽/час, Middle (React/Vue) — 2 000–3 500 ₽/час, Senior — 4 000–7 000
              ₽/час. Специалисты с Next.js, TypeScript и опытом в перформансе
              зарабатывают на 15–25% больше медианы.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Сколько берёт backend-разработчик (PHP, Node.js, Python) в 2026?
            </h3>
            <p className="text-gray-700">
              Backend оплачивается выше frontend: Middle PHP — 2 200–4 000 ₽/час,
              Middle Node.js — 2 500–4 300 ₽/час, Middle Python — 2 800–5 000
              ₽/час. Senior Go/Rust разработчики берут 6 000–10 000+ ₽/час из-за
              дефицита специалистов.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Что выгоднее для веб-разработчика: самозанятость или ИП?
            </h3>
            <p className="text-gray-700">
              При доходе до 2,4 млн ₽/год — самозанятость (НПД 6% с юрлиц,
              4% с физлиц), без отчётности и взносов. Выше лимита — ИП УСН 6%.{" "}
              <Link
                href="/guide/ip-vs-samozanyatyj"
                className="text-blue-600 hover:underline"
              >
                Подробное сравнение ИП vs самозанятый →
              </Link>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Fullstack — ставка выше или ниже чистого специалиста?
            </h3>
            <p className="text-gray-700">
              Fullstack Middle берёт 2 500–4 000 ₽/час — на 10–15% выше
              чистого frontend. Преимущество: больше заказов, так как клиент
              нанимает одного человека. Однако топовый backend Senior зарабатывает
              больше fullstack из-за глубокой специализации.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Как рассчитать почасовую ставку веб-разработчика?
            </h3>
            <p className="text-gray-700">
              Формула: желаемый доход ÷ (рабочие часы × коэффициент загрузки)
              ÷ (1 − ставка налога). При желаемых 200 000 ₽/мес, 6 ч/день, загрузке
              70% и НПД 6% ставка составит около 2 306 ₽/час. Введите свои цифры
              в{" "}
              <Link href="/" className="text-blue-600 hover:underline">
                калькулятор FreelanceCalc
              </Link>
              .
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 mt-10 text-white text-center">
          <h2 className="text-xl font-bold mb-2">
            Рассчитайте свою ставку онлайн
          </h2>
          <p className="text-blue-100 mb-4 text-sm">
            Введите желаемый доход, налоговый режим и загрузку — получите
            готовую ставку за 30 секунд
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Открыть калькулятор →
          </Link>
        </div>

        {/* Связанные статьи */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">
            Читайте также:
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/guide/stavka-mobilnogo-razrabotchika-2026"
                className="text-blue-600 hover:underline"
              >
                Ставка мобильного разработчика 2026: iOS, Android, Flutter
              </Link>
            </li>
            <li>
              <Link
                href="/guide/nalog-programmist-frilanser"
                className="text-blue-600 hover:underline"
              >
                Какой налог платит программист-фрилансер
              </Link>
            </li>
            <li>
              <Link
                href="/guide/ip-vs-samozanyatyj"
                className="text-blue-600 hover:underline"
              >
                ИП vs самозанятый: что выгоднее для разработчика
              </Link>
            </li>
            <li>
              <Link
                href="/guide/ndfl-frilanser-13-protsent"
                className="text-blue-600 hover:underline"
              >
                НДФЛ для фрилансера: 13% без регистрации
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
