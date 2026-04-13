import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Ставка дизайнера-фрилансера 2026: сколько брать за час | FreelanceCalc",
  description:
    "Сколько берут UI/UX, графические и моушн-дизайнеры на фрилансе в 2026 году. Таблица ставок Junior/Middle/Senior, расчёт с НПД и ИП УСН, калькулятор онлайн.",
  alternates: { canonical: `${BASE_URL}/guide/stavka-dizajnera-2026` },
  openGraph: {
    title: "Ставка дизайнера-фрилансера 2026: UI/UX, графика, моушн",
    description:
      "Медианные ставки: UI/UX Middle 2 000–4 000 ₽/час, Графический Middle 1 500–3 000 ₽/час. Таблица по уровням, налоговый расчёт, калькулятор.",
    url: `${BASE_URL}/guide/stavka-dizajnera-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ставка дизайнера фрилансера 2026: сколько брать за час",
    description:
      "UI/UX Middle: 2 000–4 000 ₽/час. Графический дизайнер Middle: 1 500–3 000 ₽/час. Расчёт с налогами НПД и ИП УСН.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько берёт UI/UX-дизайнер-фрилансер в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Медианная ставка UI/UX-дизайнера в 2026 году: Junior — 700–1 400 ₽/час, Middle — 2 000–4 000 ₽/час, Senior — 4 000–7 000 ₽/час. Специалисты с опытом в Figma, исследованиях и проектировании сложных продуктов стоят на 20–30% дороже среднего.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько стоит час работы графического дизайнера-фрилансера?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ставка графического дизайнера на фрилансе в 2026 году: Junior — 500–1 200 ₽/час, Middle — 1 500–3 000 ₽/час, Senior — 3 000–6 000 ₽/час. Дизайнеры с навыками брендинга и иллюстрации оцениваются дороже на 15–25%.",
      },
    },
    {
      "@type": "Question",
      name: "Что выгоднее для дизайнера-фрилансера: самозанятость или ИП?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "При годовом доходе до 2,4 млн ₽ — самозанятость (НПД 6% с юрлиц, 4% с физлиц). При доходе выше 2,4 млн ₽ — ИП УСН 6%. Например, UI/UX Middle при доходе 200 000 ₽/мес: НПД = 12 000 ₽/мес, ИП УСН = 12 000 + 4 472 ₽ взносов = 16 472 ₽/мес. Самозанятость дешевле на 53 664 ₽/год при данном уровне дохода.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько зарабатывает моушн-дизайнер на фрилансе?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ставки моушн-дизайнеров на фрилансе в 2026 году: Junior — 1 000–2 000 ₽/час, Middle — 2 500–5 000 ₽/час, Senior — 5 000–9 000 ₽/час. Моушн-дизайн — один из самых высокооплачиваемых дизайнерских направлений из-за сложности освоения After Effects, Cinema 4D и навыков анимации.",
      },
    },
    {
      "@type": "Question",
      name: "Как рассчитать почасовую ставку дизайнера-фрилансера?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Формула: (Желаемый доход на руки ÷ рабочие часы в месяц × коэффициент загрузки) ÷ (1 − ставка налога). Пример: хочу 180 000 ₽/мес, работаю 6 ч/день, загрузка 70%, НПД 6%. Ставка = 180 000 ÷ (6 × 22 × 0,70) ÷ (1 − 0,06) = 180 000 ÷ 92,4 ÷ 0,94 ≈ 2 075 ₽/час. Используйте калькулятор FreelanceCalc для точного расчёта с учётом вашей ситуации.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ставка дизайнера-фрилансера в 2026 году: UI/UX, графика, моушн",
  description:
    "Медианные ставки дизайнеров на фрилансе в 2026 году с таблицами по уровням опыта и направлениям, расчётом налогов НПД/ИП и онлайн-калькулятором.",
  url: `${BASE_URL}/guide/stavka-dizajnera-2026`,
  datePublished: "2026-04-14",
  dateModified: "2026-04-14",
  author: { "@type": "Organization", name: "FreelanceCalc" },
  publisher: {
    "@type": "Organization",
    name: "FreelanceCalc",
    url: BASE_URL,
  },
};

export default function StavkaDizajnera2026() {
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
          / Ставка дизайнера 2026
        </nav>

        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Ставка дизайнера-фрилансера в 2026 году: сколько брать за час
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          UI/UX, графический дизайн, моушн — у каждого направления своя
          рыночная ставка. Собрали актуальные данные по уровням
          Junior/Middle/Senior, посчитали налоги и объяснили, как не продешевить
          при выборе цены.
        </p>

        {/* Быстрый ответ */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-8">
          <h2 className="font-semibold text-blue-900 mb-3 text-lg">
            Быстрый ответ: медианные ставки дизайнеров 2026
          </h2>
          <ul className="space-y-1 text-blue-800 text-sm">
            <li>
              UI/UX Junior: <strong>700–1 400 ₽/час</strong>
            </li>
            <li>
              UI/UX Middle (Figma, продуктовый): <strong>2 000–4 000 ₽/час</strong>
            </li>
            <li>
              UI/UX Senior: <strong>4 000–7 000 ₽/час</strong>
            </li>
            <li>
              Графический дизайнер Middle: <strong>1 500–3 000 ₽/час</strong>
            </li>
            <li>
              Моушн-дизайнер Middle: <strong>2 500–5 000 ₽/час</strong>
            </li>
            <li>
              Веб-дизайнер Middle: <strong>1 500–3 500 ₽/час</strong>
            </li>
          </ul>
        </div>

        {/* Секция 1: UI/UX */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
          Ставки UI/UX-дизайнера по уровням
        </h2>
        <p className="mb-4">
          UI/UX-дизайн — самое востребованное и хорошо оплачиваемое направление
          в дизайне. Спрос со стороны продуктовых компаний и стартапов стабильно
          высок. Ключевые инструменты: Figma, Maze, пользовательские
          исследования, прототипирование.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Уровень
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Опыт / специализация
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
                  до 1 года, базовая Figma, лендинги
                </td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  700–1 400 ₽
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  112–224 тыс. ₽
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">Middle</td>
                <td className="border border-gray-200 px-4 py-3">
                  1–4 года, продуктовый UI/UX, UX-исследования
                </td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  2 000–4 000 ₽
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  320–640 тыс. ₽
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Senior</td>
                <td className="border border-gray-200 px-4 py-3">
                  4+ лет, дизайн-системы, стратегия UX
                </td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  4 000–7 000 ₽
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  640 тыс.–1,1 млн ₽
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">Lead/Head</td>
                <td className="border border-gray-200 px-4 py-3">
                  управление командой, продуктовая стратегия
                </td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  7 000–12 000 ₽
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  от 1,1 млн ₽
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-500 mb-8">
          * Данные основаны на анализе предложений на FL.ru, Habr Freelance,
          Upwork (русскоязычный сегмент) и данных hh.ru за Q1 2026.
        </p>

        {/* Секция 2: Графический дизайн */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
          Ставки графического дизайнера
        </h2>
        <p className="mb-4">
          Графический дизайн охватывает широкий спектр задач: от логотипов и
          фирменного стиля до иллюстраций, упаковки и рекламных материалов.
          Ставки ниже, чем в UI/UX, но специалисты в нишевых областях (брендинг,
          иллюстрация, packaging) зарабатывают сопоставимо с UI/UX Middle.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Направление
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Junior
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Middle
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Senior
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3">
                  Логотип / айдентика
                </td>
                <td className="border border-gray-200 px-4 py-3">500–900 ₽</td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  1 500–3 000 ₽
                </td>
                <td className="border border-gray-200 px-4 py-3">3 000–6 000 ₽</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">
                  Брендинг / фирстиль
                </td>
                <td className="border border-gray-200 px-4 py-3">700–1 200 ₽</td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  2 000–4 000 ₽
                </td>
                <td className="border border-gray-200 px-4 py-3">4 000–8 000 ₽</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">
                  Иллюстрация
                </td>
                <td className="border border-gray-200 px-4 py-3">600–1 000 ₽</td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  1 800–3 500 ₽
                </td>
                <td className="border border-gray-200 px-4 py-3">3 500–7 000 ₽</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">
                  Полиграфия / упаковка
                </td>
                <td className="border border-gray-200 px-4 py-3">500–1 000 ₽</td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  1 500–2 800 ₽
                </td>
                <td className="border border-gray-200 px-4 py-3">3 000–5 000 ₽</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Секция 3: Моушн */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
          Ставки моушн-дизайнера
        </h2>
        <p className="mb-4">
          Моушн-дизайн — одно из самых высокооплачиваемых дизайнерских
          направлений на фрилансе. Высокий порог входа (After Effects, Cinema 4D,
          Blender) формирует дефицит специалистов и держит ставки на уровне
          выше среднего по рынку дизайна.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Уровень
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Инструменты
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Ставка ₽/час
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Доход/мес (120 ч)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Junior</td>
                <td className="border border-gray-200 px-4 py-3">
                  After Effects, базовая анимация
                </td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  1 000–2 000 ₽
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  120–240 тыс. ₽
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">Middle</td>
                <td className="border border-gray-200 px-4 py-3">
                  AE + Cinema 4D/Blender, 3D-элементы
                </td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  2 500–5 000 ₽
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  300–600 тыс. ₽
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Senior</td>
                <td className="border border-gray-200 px-4 py-3">
                  полный стек 3D, рекламные ролики
                </td>
                <td className="border border-gray-200 px-4 py-3 font-medium">
                  5 000–9 000 ₽
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  600 тыс.–1,1 млн ₽
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Секция 4: Налоговый расчёт */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
          Расчёт ставки с учётом налогов: пример для UI/UX Middle
        </h2>
        <p className="mb-4">
          Рассчитаем, какую почасовую ставку нужно установить UI/UX-дизайнеру
          уровня Middle, чтобы получать 200 000 ₽ в месяц на руки.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
          <p className="font-semibold text-gray-900 mb-3">
            Исходные данные:
          </p>
          <ul className="text-sm space-y-1 text-gray-700 mb-4">
            <li>Желаемый доход на руки: <strong>200 000 ₽/мес</strong></li>
            <li>Рабочий график: <strong>6 ч/день, 22 дня в месяц</strong></li>
            <li>Коэффициент загрузки: <strong>75%</strong> (реальная загрузка фрилансера)</li>
            <li>Налоговый режим: <strong>НПД 6%</strong> (самозанятый, клиент — юрлицо)</li>
          </ul>

          <div className="border-t border-gray-200 pt-4 text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Доступные часы в месяц:</span>
              <span className="font-medium">6 × 22 = 132 ч</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Оплачиваемые часы (75%):</span>
              <span className="font-medium">132 × 0,75 = 99 ч</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Требуемый доход до налогов:</span>
              <span className="font-medium">200 000 ÷ (1 − 0,06) = 212 766 ₽</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-2">
              <span className="text-gray-900 font-semibold">Минимальная ставка:</span>
              <span className="text-green-700 font-bold text-lg">≈ 2 149 ₽/час</span>
            </div>
          </div>
        </div>

        <p className="mb-4 text-sm text-gray-600">
          Проверьте расчёт с вашими параметрами в{" "}
          <Link href="/" className="text-blue-600 hover:underline font-medium">
            калькуляторе фрилансера
          </Link>
          . Укажите желаемый доход, режим налогообложения и рабочий график —
          калькулятор выдаст точную минимальную ставку.
        </p>

        {/* Сравнение НПД vs ИП */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
          НПД (самозанятость) vs ИП УСН: что выгоднее дизайнеру
        </h2>
        <p className="mb-4">
          Выбор налогового режима напрямую влияет на реальный заработок.
          Сравним два основных варианта для фрилансера-дизайнера с доходом
          200 000 ₽/мес.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  Параметр
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  НПД (самозанятость)
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                  ИП УСН 6%
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3">
                  Ставка налога (с юрлицами)
                </td>
                <td className="border border-gray-200 px-4 py-3 text-green-700 font-medium">
                  6%
                </td>
                <td className="border border-gray-200 px-4 py-3">6%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">
                  Страховые взносы
                </td>
                <td className="border border-gray-200 px-4 py-3 text-green-700 font-medium">
                  0 ₽ (нет)
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  53 658 ₽/год (≈ 4 472 ₽/мес)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">
                  Отчётность
                </td>
                <td className="border border-gray-200 px-4 py-3 text-green-700 font-medium">
                  Приложение «Мой налог»
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  Декларация + взносы + расчётный счёт
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">
                  Лимит дохода
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  2,4 млн ₽/год
                </td>
                <td className="border border-gray-200 px-4 py-3 text-green-700 font-medium">
                  Без лимита (265 млн ₽)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">
                  Налог при 200 000 ₽/мес
                </td>
                <td className="border border-gray-200 px-4 py-3 text-green-700 font-medium">
                  12 000 ₽/мес
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  16 472 ₽/мес
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">
                  Экономия НПД vs ИП
                </td>
                <td className="border border-gray-200 px-4 py-3 text-green-700 font-bold">
                  +53 664 ₽/год
                </td>
                <td className="border border-gray-200 px-4 py-3">—</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-yellow-800">
            <strong>Вывод:</strong> при доходе до 200 000 ₽/мес (2,4 млн ₽/год)
            самозанятость выгоднее ИП на 53 664 ₽/год. Как только доход
            превышает лимит НПД — переходите на ИП УСН 6%. Подробнее —
            в статье{" "}
            <Link
              href="/guide/ip-vs-samozanyatyj"
              className="text-yellow-700 underline hover:text-yellow-900"
            >
              ИП vs самозанятый: что выбрать фрилансеру
            </Link>
            .
          </p>
        </div>

        {/* Факторы влияния на ставку */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
          Что влияет на ставку дизайнера
        </h2>
        <p className="mb-4">
          Ставка зависит не только от уровня опыта. Вот ключевые факторы,
          которые повышают (или снижают) рыночную цену дизайнера-фрилансера:
        </p>

        <div className="space-y-4 mb-8">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="font-semibold text-gray-900">Портфолио с реальными кейсами (+20–40%)</p>
            <p className="text-sm text-gray-600">
              Кейсы с метриками (рост конверсии, удержание пользователей) ценятся
              дороже, чем просто красивые макеты. Добавьте цифры результатов —
              это главный аргумент при согласовании ставки.
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <p className="font-semibold text-gray-900">Специализация в нише (+15–30%)</p>
            <p className="text-sm text-gray-600">
              Fintech, медицина, SaaS — заказчики в этих сегментах платят больше
              за понимание специфики отрасли. Дизайнер, знакомый с compliance и
              регуляторными требованиями финтеха, стоит иначе, чем дженералист.
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <p className="font-semibold text-gray-900">Работа с иностранными заказчиками (+50–150%)</p>
            <p className="text-sm text-gray-600">
              Те же компетенции на международном рынке оцениваются в $40–120/час
              против 2 000–5 000 ₽/час на российском. Даже при сложностях с
              платёжными системами разница оправдывает усилия.
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-4">
            <p className="font-semibold text-gray-900">Биржевые проекты (−30–50%)</p>
            <p className="text-sm text-gray-600">
              Заказы с Kwork или YouDo, как правило, оплачиваются ниже рынка.
              Используйте биржи для наработки портфолио, а не как основной
              источник дохода.
            </p>
          </div>
        </div>

        {/* CTA калькулятор */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 mb-10 text-white">
          <h2 className="text-xl font-bold mb-2">
            Рассчитайте вашу ставку за 30 секунд
          </h2>
          <p className="text-blue-100 mb-4 text-sm">
            Укажите желаемый доход, налоговый режим и график — получите точную
            минимальную ставку с учётом простоя и налогов.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Открыть калькулятор →
          </Link>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">
          Частые вопросы
        </h2>

        <div className="space-y-6 mb-10">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Сколько берёт UI/UX-дизайнер-фрилансер в 2026 году?
            </h3>
            <p className="text-sm text-gray-600">
              Медианная ставка UI/UX-дизайнера в 2026 году: Junior — 700–1 400 ₽/час,
              Middle — 2 000–4 000 ₽/час, Senior — 4 000–7 000 ₽/час. Специалисты
              с опытом в Figma, исследованиях и проектировании сложных продуктов
              стоят на 20–30% дороже среднего.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Сколько стоит час работы графического дизайнера-фрилансера?
            </h3>
            <p className="text-sm text-gray-600">
              Ставка графического дизайнера на фрилансе в 2026 году: Junior — 500–1 200 ₽/час,
              Middle — 1 500–3 000 ₽/час, Senior — 3 000–6 000 ₽/час. Дизайнеры
              с навыками брендинга и иллюстрации оцениваются дороже на 15–25%.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Что выгоднее для дизайнера-фрилансера: самозанятость или ИП?
            </h3>
            <p className="text-sm text-gray-600">
              При годовом доходе до 2,4 млн ₽ — самозанятость (НПД 6% с юрлиц,
              4% с физлиц). При доходе выше 2,4 млн ₽ — ИП УСН 6%. При доходе
              200 000 ₽/мес самозанятость экономит 53 664 ₽/год по сравнению с ИП.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Сколько зарабатывает моушн-дизайнер на фрилансе?
            </h3>
            <p className="text-sm text-gray-600">
              Ставки моушн-дизайнеров на фрилансе в 2026 году: Junior — 1 000–2 000 ₽/час,
              Middle — 2 500–5 000 ₽/час, Senior — 5 000–9 000 ₽/час. Моушн — одно
              из самых высокооплачиваемых дизайнерских направлений из-за высокого
              порога входа.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Как рассчитать почасовую ставку дизайнера-фрилансера?
            </h3>
            <p className="text-sm text-gray-600">
              Формула: (Желаемый доход на руки ÷ оплачиваемые часы в месяц) ÷
              (1 − ставка налога). Для UI/UX Middle с желаемым доходом 180 000 ₽/мес,
              99 оплачиваемых часов и НПД 6%: 180 000 ÷ 99 ÷ 0,94 ≈ 1 931 ₽/час.
              Используйте{" "}
              <Link href="/" className="text-blue-600 hover:underline">
                калькулятор FreelanceCalc
              </Link>{" "}
              для точного расчёта.
            </p>
          </div>
        </div>

        {/* Связанные статьи */}
        <h2 className="text-xl font-bold mt-10 mb-4 text-gray-900">
          Читайте также
        </h2>
        <ul className="space-y-2 text-sm">
          <li>
            <Link
              href="/guide/stavka-veb-razrabotchika-2026"
              className="text-blue-600 hover:underline"
            >
              Ставка веб-разработчика-фрилансера 2026 →
            </Link>
          </li>
          <li>
            <Link
              href="/guide/stavka-mobilnogo-razrabotchika-2026"
              className="text-blue-600 hover:underline"
            >
              Ставка мобильного разработчика 2026 →
            </Link>
          </li>
          <li>
            <Link
              href="/guide/ip-vs-samozanyatyj"
              className="text-blue-600 hover:underline"
            >
              ИП vs самозанятый: что выгоднее для фрилансера →
            </Link>
          </li>
          <li>
            <Link
              href="/guide/nalog-samozanyatyj"
              className="text-blue-600 hover:underline"
            >
              Налоги самозанятого: полный гайд 2026 →
            </Link>
          </li>
          <li>
            <Link
              href="/guide/srednyaya-stavka-frilansera-2026"
              className="text-blue-600 hover:underline"
            >
              Средняя ставка фрилансера в России 2026 →
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
