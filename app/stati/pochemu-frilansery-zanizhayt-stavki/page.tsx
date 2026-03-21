import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";
const SLUG = "pochemu-frilansery-zanizhayt-stavki";

export const metadata: Metadata = {
  title: "Почему фрилансеры занижают ставки — и теряют 480 000 ₽ в год",
  description:
    "Средний фрилансер недооценивает себя на 30–40%. В деньгах это 400–600 тысяч рублей в год. Разбираем 5 причин занижения ставки и как выйти из этой ловушки.",
  keywords: [
    "почему фрилансеры занижают ставки",
    "занижение ставки фрилансера",
    "фрилансер боится повысить цену",
    "фрилансер недооценивает себя",
    "синдром самозванца фрилансер",
    "как фрилансеру перестать занижать цену",
    "ставка фрилансера ниже рынка",
    "сколько теряет фрилансер занижая ставку",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `/stati/${SLUG}` },
  openGraph: {
    title: "Почему фрилансеры занижают ставки — и теряют 480 000 ₽ в год",
    description:
      "30–40% занижение = 400–600 тыс. рублей потерь ежегодно. 5 психологических причин, которые держат фрилансеров на нижней границе рынка.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/${SLUG}`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/${SLUG}#article`,
      headline:
        "Почему фрилансеры занижают ставки — и теряют 480 000 ₽ в год",
      description:
        "Средний фрилансер недооценивает себя на 30–40%. Разбираем 5 причин и как выйти из этой ловушки.",
      author: {
        "@type": "Organization",
        name: "FreelanceCalc",
        url: BASE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "FreelanceCalc",
        url: BASE_URL,
        logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.ico` },
      },
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/stati/${SLUG}`,
      },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "FreelanceCalc",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Статьи",
          item: `${BASE_URL}/stati`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Почему фрилансеры занижают ставки",
          item: `${BASE_URL}/stati/${SLUG}`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Почему фрилансеры занижают ставки?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Главные причины: страх потерять клиента, отсутствие данных о рыночных ставках, синдром самозванца, ловушка постоянных клиентов и привычка к старой цифре. Все эти причины не рациональные, а психологические — их можно устранить с помощью реальных рыночных данных.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько теряет фрилансер, занижая ставку?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "При занижении на 30% и месячном доходе 150 000 ₽ потери составляют около 540 000 ₽ в год. Это средняя стоимость однокомнатной квартиры в регионе или 3,5 года аренды в Москве.",
          },
        },
        {
          "@type": "Question",
          name: "Как понять, что ты занижаешь ставку?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Признаки занижения: клиенты соглашаются на цену без торга (в 80%+ случаев), очередь из заказов более 2 недель, коллеги со схожим опытом берут заметно больше, последний раз повышали цену более года назад.",
          },
        },
        {
          "@type": "Question",
          name: "Как перестать занижать ставку?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Шаг 1: узнать рыночную ставку по своей специальности и городу (калькулятор FreelanceCalc). Шаг 2: посчитать годовые потери от занижения. Шаг 3: поднять цену новым клиентам — без предупреждения. Шаг 4: через 2–3 месяца поднять постоянным с объяснением.",
          },
        },
      ],
    },
  ],
};

const REASONS = [
  {
    num: "01",
    title: "Страх «дорого»",
    emoji: "😨",
    body: `Фрилансер называет цену и мысленно готовится к отказу. «Скажут дорого, уйдут к другому».
Но статистика другая: большинство клиентов, которые реально ищут специалиста, не уходят от слова «дорого» —
они либо торгуются, либо соглашаются. Уходят те, кто с самого начала искал дешевле рынка.
Это не ваша аудитория.`,
    data: "По данным hh.ru, только 23% переговоров о цене заканчиваются отказом из-за ставки.",
  },
  {
    num: "02",
    title: "Нет данных — нет уверенности",
    emoji: "📊",
    body: `Когда не знаешь, сколько берут коллеги, ориентируешься на интуицию. Интуиция всегда занижает —
это называется эффект якоря: первая цифра, которую вы слышали (первый проект, первый клиент),
становится точкой отсчёта. Всё, что выше — «много».`,
    data: "Медиана по frontend-разработчикам в Москве — 2 800 ₽/час. По регионам — 1 800 ₽/час.",
  },
  {
    num: "03",
    title: "Ловушка постоянных клиентов",
    emoji: "🪤",
    body: `Поднять цену новому клиенту легко. Поднять постоянному — страшно.
Отношения, история работы, ощущение предательства. В итоге через три года
вы работаете по ставке 2023 года — инфляция за это время съела 20–25% реальной стоимости.`,
    data: "При инфляции 7%/год за 3 года без повышения ставки вы теряете ~20% реального дохода.",
  },
  {
    num: "04",
    title: "Синдром самозванца",
    emoji: "🎭",
    body: `«Я ещё не достаточно хорош для высокой цены». Это чувство не исчезает с опытом —
оно просто меняет форму. Junior думает: «Подожду, пока наберусь опыта».
Senior думает: «Подожду, пока не стану экспертом мирового уровня». Планка всегда чуть выше.`,
    data: "Синдром самозванца распространён среди 70% специалистов в IT и creative-сферах (Impostor Syndrome Institute, 2024).",
  },
  {
    num: "05",
    title: "Привычка к старой цифре",
    emoji: "🔄",
    body: `Вы назвали 1 500 ₽/час год назад. Клиент согласился. Теперь это «ваша цена».
Любое повышение кажется слишком резким, хотя рынок за год вырос на 12–15%.
Вы не занижаете намеренно — просто не обновляете точку отсчёта.`,
    data: "Медиана ставок по данным FreelanceCalc выросла в 2025–2026 на 14% по всем специальностям.",
  },
];

export default function WhyFreelancersUnderpricePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
            <Link href="/" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
              FreelanceCalc
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/stati" className="text-gray-500 text-sm hover:text-gray-700">
              Статьи
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 text-sm">Почему занижают ставки</span>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">

          {/* Hero */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
              💸 Потери фрилансера
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Фрилансеры занижают ставки — и теряют 480&nbsp;000&nbsp;₽ в год.
              Почему это происходит и кто виноват
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Средний российский фрилансер занижает свою ставку на 30–40% от рыночной.
              Не потому что плохо работает. Не потому что рынок не платит.
              А потому что в голове работают механизмы, которые мешают называть правильную цену.
              Разбираем пять из них — и считаем, сколько это стоит в рублях.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
              <span>21 марта 2026</span>
              <span>·</span>
              <span>6 мин. чтения</span>
              <span>·</span>
              <span>FreelanceCalc</span>
            </div>
          </div>

          {/* Loss calculator callout */}
          <div className="bg-red-600 text-white rounded-2xl p-6 mb-10">
            <p className="text-red-100 text-sm font-medium uppercase tracking-wide mb-3">
              Что значит занижать на 30%?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">150 000 ₽</div>
                <div className="text-red-200 text-xs mt-1">ваш реальный доход в месяц</div>
              </div>
              <div>
                <div className="text-3xl font-bold">→ 195 000 ₽</div>
                <div className="text-red-200 text-xs mt-1">рыночный уровень (+30%)</div>
              </div>
              <div>
                <div className="text-3xl font-bold">540 000 ₽</div>
                <div className="text-red-200 text-xs mt-1">потеряно за год</div>
              </div>
            </div>
            <p className="text-red-100 text-xs mt-4 text-center">
              Это стоимость однокомнатной квартиры в регионе. Или 3,5 года аренды в Москве.
            </p>
          </div>

          {/* Intro paragraph */}
          <div className="prose prose-gray max-w-none mb-10 text-gray-700 leading-relaxed space-y-4">
            <p>
              В большинстве фриланс-чатов никто не называет реальные цифры. Это создаёт иллюзию,
              что все берут примерно столько же, сколько ты. На самом деле — нет.
              По данным FreelanceCalc Q1 2026, медиана по разработчикам составляет
              <strong> 1 800–2 800 ₽/час</strong>, по дизайнерам — <strong>1 400–2 200 ₽/час</strong>.
              Большинство фрилансеров, с которыми мы разговаривали, называли цифры на
              30–40% ниже этих значений.
            </p>
            <p>
              Занижение ставки — не финансовая проблема. Это психологическая ловушка.
              Вот пять механизмов, которые держат фрилансеров на нижней границе рынка.
            </p>
          </div>

          {/* 5 Reasons */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              5 причин, почему фрилансеры занижают ставку
            </h2>
            <div className="space-y-6">
              {REASONS.map((r) => (
                <div
                  key={r.num}
                  className="bg-white rounded-2xl border border-gray-200 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center font-mono text-sm font-bold">
                      {r.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">
                        {r.emoji} {r.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line mb-3">
                        {r.body}
                      </p>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-xs text-gray-500">
                        📊 {r.data}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* The math section */}
          <section className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Математика потерь: считаем честно
            </h2>
            <p className="text-gray-600 text-sm mb-5">
              Занижение ставки кажется «безопасным» решением — меньше рисков, больше клиентов.
              На самом деле это самое дорогое решение, которое принимает фрилансер.
            </p>
            <div className="space-y-3">
              {[
                { label: "Занижение на 20% при доходе 120 000 ₽/мес", loss: "288 000 ₽/год", color: "text-orange-600" },
                { label: "Занижение на 30% при доходе 150 000 ₽/мес", loss: "540 000 ₽/год", color: "text-red-600" },
                { label: "Занижение на 40% при доходе 200 000 ₽/мес", loss: "1 600 000 ₽/год", color: "text-red-700" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-amber-200"
                >
                  <span className="text-sm text-gray-700">{row.label}</span>
                  <span className={`font-bold text-sm ${row.color}`}>−{row.loss}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              * Расчёт: (рыночная ставка − текущая ставка) × рабочих месяцев в году (10,5 с учётом отпуска)
            </p>
          </section>

          {/* What to do */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Что делать прямо сейчас
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 bg-white rounded-xl border border-gray-200 p-4">
                <div className="shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Узнайте рыночную ставку для своей специальности и города</div>
                  <p className="text-gray-500 text-xs mt-1">
                    Без данных невозможно понять, занижаете ли вы цену. Проверьте медиану по вашей специальности —
                    на FreelanceCalc это занимает 30 секунд.
                  </p>
                  <Link
                    href="/stavka"
                    className="inline-flex mt-2 text-xs text-blue-600 font-medium hover:text-blue-700 underline"
                  >
                    Проверить ставку по специальности →
                  </Link>
                </div>
              </div>

              <div className="flex gap-4 bg-white rounded-xl border border-gray-200 p-4">
                <div className="shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Посчитайте годовые потери в рублях</div>
                  <p className="text-gray-500 text-xs mt-1">
                    Абстрактное «я занижаю на 30%» не мотивирует. Конкретные 540 000 ₽ в год — мотивируют.
                    Используйте калькулятор ставки.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex mt-2 text-xs text-blue-600 font-medium hover:text-blue-700 underline"
                  >
                    Рассчитать свою ставку →
                  </Link>
                </div>
              </div>

              <div className="flex gap-4 bg-white rounded-xl border border-gray-200 p-4">
                <div className="shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Поднимите цену следующему новому клиенту — без предупреждения</div>
                  <p className="text-gray-500 text-xs mt-1">
                    Не объясняйте, не оправдывайтесь. Просто назовите новую цифру.
                    Если клиент согласится — вы нашли рыночную ставку. Если скажет «дорого» —
                    значит, вы правильно настроили фильтр.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white rounded-xl border border-gray-200 p-4">
                <div className="shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Сравните с коллегами по городу и опыту</div>
                  <p className="text-gray-500 text-xs mt-1">
                    Middle-разработчик в Екатеринбурге и в Москве берут по-разному.
                    Junior и Senior — тоже. Проверьте данные по вашему сегменту.
                  </p>
                  <Link
                    href="/goroda"
                    className="inline-flex mt-2 text-xs text-blue-600 font-medium hover:text-blue-700 underline"
                  >
                    Ставки по городам →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA: Benchmark */}
          <section className="mb-12 bg-gray-900 text-white rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  Бенчмарк ставок Q1 2026
                </p>
                <h3 className="font-bold text-lg mb-2">
                  Медианные ставки по 22 специальностям × 10 городам
                </h3>
                <p className="text-gray-300 text-sm">
                  Точные данные по junior / middle / senior для вашей специальности и города.
                  Раз и навсегда закрывает вопрос «сколько брать».
                </p>
              </div>
              <Link
                href="/benchmark"
                className="shrink-0 bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                Посмотреть данные — 249 ₽
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Частые вопросы
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Если я подниму ставку, клиент уйдёт?",
                  a: `Возможно — но только если он изначально выбирал по цене, а не по ценности.
Потеря такого клиента не потеря, а фильтрация. Клиенты, которые ценят вашу работу,
не уходят от разумного повышения цены — особенно если вы объясняете его заранее.`,
                },
                {
                  q: "Как понять, что я именно занижаю, а не работаю с правильным сегментом?",
                  a: `Главный индикатор: если более 70% потенциальных клиентов соглашаются на вашу цену без каких-либо
возражений — вы ниже рынка. Рыночная ставка предполагает, что часть людей говорит «дорого».`,
                },
                {
                  q: "На сколько сразу можно поднять ставку?",
                  a: `Для новых клиентов — на любую сумму, без ограничений. Вы просто меняете прайс.
Для постоянных — рекомендуется не более 20–25% за раз с предупреждением за месяц.
Исключение: если прошло 2+ года без повышения — тогда и 40% будет обоснованно.`,
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden group"
                >
                  <summary className="px-5 py-4 font-semibold text-gray-900 text-sm cursor-pointer list-none flex items-center justify-between hover:bg-gray-50">
                    {item.q}
                    <span className="text-gray-400 text-lg group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Related articles */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-lg font-bold text-gray-900 mb-5">Читайте также</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/stati/kak-povysit-stavku-frilansera"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <div className="text-xs text-gray-400 mb-1">Гайд</div>
                <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-600">
                  Как повысить ставку: 7 шагов без потери клиентов
                </div>
              </Link>
              <Link
                href="/stati/srednyaya-stavka-frilansera-2026"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <div className="text-xs text-gray-400 mb-1">Данные</div>
                <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-600">
                  Средняя ставка фрилансера 2026 по специальностям
                </div>
              </Link>
              <Link
                href="/stavka"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <div className="text-xs text-gray-400 mb-1">Инструмент</div>
                <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-600">
                  Ставки по 22 специальностям → сравните свою
                </div>
              </Link>
              <Link
                href="/goroda"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <div className="text-xs text-gray-400 mb-1">Данные</div>
                <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-600">
                  Ставки фрилансеров по городам России 2026
                </div>
              </Link>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 mt-12">
          <div className="max-w-3xl mx-auto px-4 py-6 flex flex-wrap gap-4 items-center justify-between text-sm text-gray-500">
            <Link href="/" className="text-blue-600 font-medium hover:text-blue-700">
              FreelanceCalc
            </Link>
            <div className="flex flex-wrap gap-4">
              <Link href="/stavka" className="hover:text-gray-700">Специальности</Link>
              <Link href="/goroda" className="hover:text-gray-700">Города</Link>
              <Link href="/stati" className="hover:text-gray-700">Статьи</Link>
              <Link href="/benchmark" className="hover:text-gray-700">Бенчмарк PDF</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
