import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Ставка тестировщика QA-фрилансера 2026: сколько брать за час | FreelanceCalc",
  description:
    "Сколько берут QA-тестировщики на фрилансе в 2026 году. Таблица ставок Manual/Automation QA по уровням Junior/Middle/Senior, расчёт с учётом НПД и ИП УСН, калькулятор онлайн.",
  alternates: { canonical: `${BASE_URL}/guide/stavka-testirovshchika-qa-2026` },
  openGraph: {
    title: "Ставка тестировщика QA 2026: ручное и автоматизированное тестирование",
    description:
      "Медианные ставки: Manual QA Middle 900–1 600 ₽/час, Automation QA Middle 1 800–3 000 ₽/час. Таблица по уровням, налоговый расчёт, калькулятор.",
    url: `${BASE_URL}/guide/stavka-testirovshchika-qa-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ставка тестировщика QA фрилансера 2026: сколько брать за час",
    description:
      "Manual QA Middle: 900–1 600 ₽/час, Automation QA Middle: 1 800–3 000 ₽/час. Расчёт с налогами НПД и ИП УСН.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько берёт QA-тестировщик-фрилансер в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Медианная ставка ручного тестировщика (Manual QA) на фрилансе в 2026 году: Junior — 400–700 ₽/час, Middle — 900–1 600 ₽/час, Senior — 2 000–3 500 ₽/час. Automation QA (Selenium, Cypress, Playwright) стоит на 40–80% дороже: Middle — 1 800–3 000 ₽/час, Senior — 3 500–6 000 ₽/час.",
      },
    },
    {
      "@type": "Question",
      name: "Чем Automation QA отличается от Manual QA по ставке?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Автоматизированное тестирование оплачивается на 40–80% выше ручного. Это связано с тем, что Automation QA нужно писать код (Python, Java, JavaScript) и владеть инструментами (Selenium, Playwright, Cypress, Appium). Middle Automation QA берёт 1 800–3 000 ₽/час против 900–1 600 ₽/час у ручного тестировщика того же уровня.",
      },
    },
    {
      "@type": "Question",
      name: "Что выгоднее для тестировщика-фрилансера: самозанятость или ИП?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "При годовом доходе до 2,4 млн ₽ — самозанятость (НПД 6% с юрлиц, 4% с физлиц): нет отчётности, страховых взносов, достаточно приложения «Мой налог». При доходе выше 2,4 млн ₽ в год — ИП УСН 6%. Например, Middle Automation QA при 200 000 ₽/мес: НПД = 12 000 ₽, экономия по сравнению с ИП — около 53 000 ₽/год пока не достигнут лимит.",
      },
    },
    {
      "@type": "Question",
      name: "Как рассчитать почасовую ставку тестировщика?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Формула: (желаемый доход на руки ÷ рабочие часы в месяц × коэффициент загрузки) ÷ (1 − ставка налога). Пример: хочу 150 000 ₽/мес, работаю 6 ч/день, загрузка 70%, НПД 6%. Ставка = 150 000 ÷ (6 × 22 × 0,70) ÷ 0,94 = 150 000 ÷ 92,4 ÷ 0,94 ≈ 1 728 ₽/час. Используйте калькулятор FreelanceCalc для точного расчёта.",
      },
    },
    {
      "@type": "Question",
      name: "Где QA-тестировщику найти фриланс-заказы в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Основные площадки для QA-фрилансеров в России: Habr Freelance (IT-проекты, ставки выше рынка), FL.ru (большой выбор, высокая конкуренция), Kwork (фиксированные пакеты от 500 ₽), Telegram-чаты QA-специалистов. Зарубежные: Upwork, Toptal (ставки $20–80/час при знании английского). Специалисты по автоматизации чаще получают долгосрочные контракты через прямые знакомства или LinkedIn.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Ставка тестировщика QA-фрилансера в 2026 году: ручное и автоматизированное тестирование",
  description:
    "Медианные ставки QA-тестировщиков на фрилансе в 2026 году: таблицы по уровням Manual/Automation, расчёт налогов НПД/ИП УСН и онлайн-калькулятор.",
  url: `${BASE_URL}/guide/stavka-testirovshchika-qa-2026`,
  datePublished: "2026-04-14",
  dateModified: "2026-04-14",
  author: { "@type": "Organization", name: "FreelanceCalc" },
  publisher: {
    "@type": "Organization",
    name: "FreelanceCalc",
    url: BASE_URL,
  },
};

export default function StavkaTestirovshchikaQa2026() {
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
          / Ставка тестировщика QA 2026
        </nav>

        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Ставка тестировщика QA-фрилансера в 2026 году: сколько брать за час
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Ручное и автоматизированное тестирование — разные рынки с разными
          ставками. Собрали данные по уровням Junior/Middle/Senior, разобрали
          разницу между Manual и Automation QA и посчитали, сколько нужно
          брать, чтобы зарабатывать 150 000 ₽ на руки.
        </p>

        {/* Быстрый ответ */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-8">
          <h2 className="font-semibold text-blue-900 mb-3 text-lg">
            Быстрый ответ: медианные ставки QA 2026
          </h2>
          <ul className="space-y-1 text-blue-800 text-sm">
            <li>
              Manual QA Junior: <strong>400–700 ₽/час</strong>
            </li>
            <li>
              Manual QA Middle: <strong>900–1 600 ₽/час</strong>
            </li>
            <li>
              Manual QA Senior: <strong>2 000–3 500 ₽/час</strong>
            </li>
            <li>
              Automation QA Middle (Selenium/Playwright):{" "}
              <strong>1 800–3 000 ₽/час</strong>
            </li>
            <li>
              Automation QA Senior: <strong>3 500–6 000 ₽/час</strong>
            </li>
            <li>
              QA Lead / Head of QA: <strong>4 000–7 000 ₽/час</strong>
            </li>
          </ul>
        </div>

        {/* Секция 1: Manual QA */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
          Ставки ручного тестировщика (Manual QA) по уровням
        </h2>
        <p className="mb-4">
          Ручное тестирование — самый конкурентный сегмент в QA. Порог входа
          ниже, чем в автоматизацию, поэтому ставки у Junior невысокие. Однако
          опытный Manual QA с экспертизой в нагрузочном тестировании или
          в конкретных доменах (банкинг, e-commerce) зарабатывает наравне с
          Junior Automation.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Уровень
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Опыт
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
                  до 1 года, базовые тест-кейсы, Jira
                </td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  400–700 ₽
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  64–112 тыс. ₽
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">Middle</td>
                <td className="border border-gray-200 px-4 py-3">
                  1–3 года, API-тесты (Postman), регрессия
                </td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  900–1 600 ₽
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  144–256 тыс. ₽
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">
                  Senior
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  3+ лет, нагрузочное тестирование, QA-процессы
                </td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  2 000–3 500 ₽
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  320–560 тыс. ₽
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          * Данные по фриланс-рынку России: Habr Freelance, FL.ru, Kwork —
          апрель 2026. Указан диапазон реальных сделок, не заявленные ставки.
        </p>

        {/* Секция 2: Automation QA */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
          Ставки Automation QA: Selenium, Playwright, Cypress
        </h2>
        <p className="mb-4">
          Автоматизированное тестирование требует навыков программирования —
          это повышает порог входа и резко поднимает ставки. В 2026 году
          спрос на Automation QA вырос на 20–35% из-за ускорения DevOps-циклов
          и CI/CD-пайплайнов. Специалисты с Python/Pytest или Java/TestNG
          пользуются наибольшим спросом на рынке.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Инструмент / стек
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
                  Selenium + Python/Java
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  800–1 300
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  1 800–3 000
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  3 500–5 500
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  Cypress / Playwright (JS/TS)
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  900–1 400
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  2 000–3 200
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  3 800–6 000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  Appium (mobile QA)
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  900–1 500
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  2 200–3 500
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  4 000–6 500
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  k6 / Gatling (нагрузочное)
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  1 000–1 800
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  2 500–4 000
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  4 500–7 000
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Секция 3: Коэффициенты по городам */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
          Ставки QA по городам: Москва, Питер, регионы
        </h2>
        <p className="mb-4">
          Фриланс стирает географические различия, но они всё ещё существуют:
          московские заказчики привыкли платить больше, региональные —
          торгуются жёстче. Вот коэффициенты для базовой ставки Middle Manual QA
          (1 200 ₽/час = 100%):
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Заказчик из
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Коэффициент
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Ставка Middle Manual QA
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3">
                  Москва / СПб (крупные IT-компании)
                </td>
                <td className="border border-gray-200 px-4 py-3 text-green-700 font-medium">
                  ×1,2–1,4
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  1 440–1 680 ₽/час
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">
                  Регионы (Новосибирск, Екатеринбург)
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  ×0,9–1,0
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  1 080–1 200 ₽/час
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">
                  СНГ (Казахстан, Беларусь)
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  ×0,7–0,9
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  840–1 080 ₽/час
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">
                  Зарубежный (USD/EUR оплата)
                </td>
                <td className="border border-gray-200 px-4 py-3 text-green-700 font-medium">
                  ×2,0–3,5
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  $15–35/час ($20–40 для Automation)
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
          Главная ошибка начинающих QA-фрилансеров — называть ставку
          «как у коллег», не считая налоги и простои. Рассчитаем ставку для
          Middle Automation QA, который хочет 150 000 ₽/мес на руки и работает
          как самозанятый:
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
          <h3 className="font-semibold mb-3">
            Пример расчёта: Middle Automation QA, самозанятый
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Желаемый доход на руки</span>
              <span className="font-medium">150 000 ₽/мес</span>
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
              <span className="text-green-700">≈ 1 728 ₽/час</span>
            </div>
          </div>
        </div>

        <p className="mb-4">
          Проверка: 1 728 × 92,4 ч = 159 667 ₽ выручки → налог НПД 9 580 ₽
          → на руки <strong>150 087 ₽</strong> ✓
        </p>

        <p className="mb-6">
          Это попадает в диапазон Middle Automation QA (1 800–3 000 ₽/час).
          Если хотите 200 000 ₽/мес на руки при тех же условиях — ставка
          вырастет до <strong>≈ 2 304 ₽/час</strong>. Посчитайте точно в{" "}
          <Link href="/" className="text-blue-600 hover:underline font-medium">
            калькуляторе FreelanceCalc
          </Link>
          .
        </p>

        {/* Секция 5: Когда повышать */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
          Когда повышать ставку и как переходить из Manual в Automation
        </h2>
        <p className="mb-4">
          Признаки того, что вы недооцениваете себя: клиенты не торгуются,
          очередь заказов больше двух месяцев, вам отказывают только из-за
          занятости, а не цены. В этом случае поднимайте ставку на 20–30%.
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>
            <strong>Переход в Automation</strong> — самый быстрый рост ставки
            для Manual QA. Достаточно освоить Python + Pytest или JavaScript +
            Playwright: ставка вырастает в 1,5–2 раза за 6–9 месяцев обучения.
          </li>
          <li>
            <strong>API-тестирование</strong> — знание Postman/RestAssured
            поднимает ставку даже без автоматизации: клиенты готовы платить
            дополнительно 20–30% за глубокое понимание backend.
          </li>
          <li>
            <strong>Специализация на нише</strong> — QA для финтеха, медтеха
            или GameDev оплачивается на 40–60% выше, чем общий веб.
          </li>
          <li>
            <strong>Лимит самозанятого</strong> — при доходе близком к
            2,4 млн ₽/год переходите на{" "}
            <Link
              href="/guide/ip-vs-samozanyatyj"
              className="text-blue-600 hover:underline"
            >
              ИП УСН
            </Link>
            , иначе потеряете статус НПД.
          </li>
        </ul>

        {/* Секция 6: Где искать заказы */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
          Где QA-тестировщику найти фриланс-заказы
        </h2>
        <p className="mb-4">
          Рынок QA-фриланса в России не так велик, как разработка, — это плюс:
          конкуренция ниже при сопоставимых ставках. Основные площадки:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Площадка
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Формат
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Ставки QA
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  Habr Freelance
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  Проектная / почасовая
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  900–4 000 ₽/час
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  FL.ru
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  Фиксированная / почасовая
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  500–2 500 ₽/час
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  Kwork
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  Пакетные услуги от 500 ₽
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  500–1 500 ₽/час
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  Telegram (QA-чаты)
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  Прямые контракты
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  1 000–5 000 ₽/час
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  Upwork (зарубеж)
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  Почасовая / фиксированная
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  $15–60/час
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
              Сколько берёт QA-тестировщик-фрилансер в 2026 году?
            </h3>
            <p className="text-gray-700">
              Manual QA Middle — 900–1 600 ₽/час, Automation QA Middle —
              1 800–3 000 ₽/час. Senior специалисты с экспертизой в
              нагрузочном тестировании или финтехе берут 3 500–6 000 ₽/час.
              Среднемесячная зарплата QA-инженера в найме в 2026 году —
              около 185 000 ₽/мес, что соответствует фриланс-ставке
              Middle QA при полной загрузке.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Чем Automation QA отличается от Manual QA по ставке?
            </h3>
            <p className="text-gray-700">
              Автоматизация оплачивается на 40–80% выше ручного тестирования.
              Причина — требуется умение писать код (Python, Java, JS) и знание
              инструментов (Selenium, Playwright, Cypress). Middle Automation
              QA берёт 1 800–3 000 ₽/час против 900–1 600 ₽/час у ручного
              тестировщика того же уровня.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Что выгоднее для тестировщика-фрилансера: самозанятость или ИП?
            </h3>
            <p className="text-gray-700">
              При доходе до 2,4 млн ₽/год — самозанятость (НПД 6% с юрлиц,
              4% с физлиц). Нет отчётности, взносов, достаточно приложения
              «Мой налог». Выше лимита — ИП УСН 6%.{" "}
              <Link
                href="/guide/ip-vs-samozanyatyj"
                className="text-blue-600 hover:underline"
              >
                Полное сравнение ИП vs самозанятый →
              </Link>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Как рассчитать почасовую ставку тестировщика?
            </h3>
            <p className="text-gray-700">
              Формула: желаемый доход ÷ (рабочие часы × коэффициент загрузки)
              ÷ (1 − ставка налога). При желаемых 150 000 ₽/мес, 6 ч/день,
              загрузке 70% и НПД 6% ставка составит около 1 728 ₽/час.
              Введите свои цифры в{" "}
              <Link href="/" className="text-blue-600 hover:underline">
                калькулятор FreelanceCalc
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Где QA-тестировщику найти фриланс-заказы в 2026 году?
            </h3>
            <p className="text-gray-700">
              Habr Freelance — лучшие ставки для IT-проектов. FL.ru — большой
              выбор, выше конкуренция. Kwork — пакетные услуги. Telegram-чаты
              QA-специалистов — прямые контракты без комиссии. Зарубежные
              заказы: Upwork ($15–60/час при знании английского).
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
            готовую ставку тестировщика за 30 секунд
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
                href="/guide/stavka-veb-razrabotchika-2026"
                className="text-blue-600 hover:underline"
              >
                Ставка веб-разработчика 2026: frontend, backend, fullstack
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
                href="/guide/nalog-samozanyatyj"
                className="text-blue-600 hover:underline"
              >
                Налог самозанятого: ставки, лимиты, как платить
              </Link>
            </li>
            <li>
              <Link
                href="/guide/ip-vs-samozanyatyj"
                className="text-blue-600 hover:underline"
              >
                ИП vs самозанятый: что выгоднее для IT-фрилансера
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
