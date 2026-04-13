import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Ставка мобильного разработчика-фрилансера 2026: iOS, Android, Flutter | FreelanceCalc",
  description:
    "Сколько берут iOS и Android разработчики на фрилансе в 2026 году. Таблица ставок Junior/Middle/Senior, расчёт с учётом НПД и ИП УСН, калькулятор онлайн.",
  alternates: { canonical: `${BASE_URL}/guide/stavka-mobilnogo-razrabotchika-2026` },
  openGraph: {
    title: "Ставка мобильного разработчика 2026: iOS, Android, Flutter",
    description:
      "Медианные ставки: iOS 2 500–5 500 ₽/час, Android 2 000–4 500 ₽/час. Таблица по уровням, налоговый расчёт, калькулятор.",
    url: `${BASE_URL}/guide/stavka-mobilnogo-razrabotchika-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ставка iOS/Android разработчика 2026: сколько берут на фрилансе",
    description:
      "iOS Middle: 2 500–3 500 ₽/час, Senior: 4 000–5 500 ₽/час. Android Middle: 2 000–3 000 ₽/час. Расчёт с налогами.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько берёт iOS-разработчик-фрилансер в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Медианная ставка iOS-разработчика (Swift/SwiftUI) в 2026 году: Junior — 1 200–2 000 ₽/час, Middle — 2 500–3 500 ₽/час, Senior — 4 000–5 500 ₽/час. iOS-разработчики в среднем зарабатывают на 15–25% больше Android-коллег из-за высокого порога входа в экосистему Apple.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько берёт Android-разработчик-фрилансер в 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Медианная ставка Android-разработчика (Kotlin/Jetpack Compose) в 2026 году: Junior — 1 000–1 800 ₽/час, Middle — 2 000–3 000 ₽/час, Senior — 3 500–4 500 ₽/час. Android занимает более 70% рынка смартфонов в России, что обеспечивает стабильный спрос на специалистов.",
      },
    },
    {
      "@type": "Question",
      name: "Что выгоднее для мобильного разработчика: самозанятость или ИП?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "При годовом доходе до 2,4 млн ₽ — самозанятость (НПД 6% с юрлиц). При доходе выше 2,4 млн ₽ — ИП УСН 6%. Например, Middle iOS при доходе 250 000 ₽/мес: НПД = 15 000 ₽/мес, ИП УСН = 15 000 + 4 472 ₽ взносов = 19 472 ₽/мес. Самозанятость дешевле на 53 664 ₽/год — пока не достигнут лимит.",
      },
    },
    {
      "@type": "Question",
      name: "React Native и Flutter: ставки выше или ниже нативной разработки?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ставки React Native и Flutter разработчиков в 2026 году: Middle — 1 800–2 800 ₽/час, Senior — 3 000–4 500 ₽/час. В среднем на 10–20% ниже нативных iOS/Android из-за более широкого предложения на рынке. Однако кроссплатформенный разработчик покрывает оба рынка сразу, что даёт больше заказов.",
      },
    },
    {
      "@type": "Question",
      name: "Как рассчитать почасовую ставку мобильного разработчика?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Формула: Желаемый доход ÷ (рабочие часы в месяц × коэффициент загрузки) × поправка на налог. Пример: хочу 200 000 ₽/мес, работаю 6 ч/день, загрузка 70%, НПД 6%. Ставка = 200 000 ÷ (6 × 22 × 0,70) ÷ (1 − 0,06) = 200 000 ÷ 92,4 ÷ 0,94 ≈ 2 306 ₽/час. Используйте калькулятор FreelanceCalc для точного расчёта.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ставка мобильного разработчика-фрилансера в 2026 году: iOS, Android, Flutter",
  description:
    "Медианные ставки iOS и Android разработчиков на фрилансе в 2026 году с таблицами по уровням опыта, расчётом налогов НПД/ИП и онлайн-калькулятором.",
  url: `${BASE_URL}/guide/stavka-mobilnogo-razrabotchika-2026`,
  datePublished: "2026-04-14",
  dateModified: "2026-04-14",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function StavkaMobilnogoRazrabotchika2026() {
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

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 border-b border-slate-200 py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
              <Link href="/" className="hover:text-blue-600">FreelanceCalc</Link>
              <span>→</span>
              <Link href="/guide" className="hover:text-blue-600">Гайды</Link>
              <span>→</span>
              <span>Ставка мобильного разработчика</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              📱 iOS · Android · Flutter — данные рынка 2026
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ставка мобильного разработчика-фрилансера в 2026 году: iOS, Android, Flutter
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Медианные почасовые ставки iOS и Android разработчиков в России, таблицы по уровням
              Junior/Middle/Senior, расчёт с учётом налогов НПД и ИП УСН, и калькулятор для точной цифры.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-500">
              <span className="bg-white border border-slate-200 rounded-full px-3 py-1">📅 Апрель 2026</span>
              <span className="bg-white border border-slate-200 rounded-full px-3 py-1">📱 iOS: 2 500–5 500 ₽/час</span>
              <span className="bg-white border border-slate-200 rounded-full px-3 py-1">🤖 Android: 2 000–4 500 ₽/час</span>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

          {/* Рынок 2026 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Рынок мобильной разработки в 2026 году</h2>
            <p className="text-slate-700 mb-4">
              Мобильные разработчики — одна из самых высокооплачиваемых категорий фрилансеров в России.
              Спрос на нативные iOS и Android приложения сохраняется: компании активно разрабатывают
              собственные приложения для маркетплейсов, банков, доставки и корпоративных систем.
            </p>
            <p className="text-slate-700 mb-4">
              В 2026 году Android занимает около 72% рынка смартфонов в России, iOS — 28%.
              Несмотря на меньшую долю, iOS-разработчики традиционно получают ставку на 15–25% выше:
              аудитория Apple-пользователей в России более платёжеспособна, а порог входа в экосистему Apple
              (необходимость Mac, Apple Developer Program) естественно ограничивает предложение специалистов.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
              <p className="text-blue-900 font-semibold mb-2">Ключевые цифры рынка мобильной разработки 2026</p>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• iOS-разработчик (медиана): <strong>2 500–5 000 ₽/час</strong></li>
                <li>• Android-разработчик (медиана): <strong>2 000–4 500 ₽/час</strong></li>
                <li>• React Native / Flutter (медиана): <strong>1 800–4 000 ₽/час</strong></li>
                <li>• Средний доход Middle мобильного разработчика: <strong>200 000–350 000 ₽/мес</strong></li>
              </ul>
            </div>
          </section>

          {/* iOS */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Ставки iOS-разработчиков в 2026 году</h2>
            <p className="text-slate-700 mb-4">
              iOS-разработчики пишут приложения на Swift (основной язык) и Objective-C (легаси-проекты).
              Современный стек 2026 года: SwiftUI + UIKit, Combine/async-await, SPM, XCTest.
              Высокооплачиваемые ниши — финтех, медицина, корпоративные приложения.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 border border-slate-200 font-semibold">Уровень</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold">Опыт</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold">Ставка, ₽/час</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold">Доход/мес (6 ч, 70%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-slate-200">Junior</td>
                    <td className="p-3 border border-slate-200">0–1 год</td>
                    <td className="p-3 border border-slate-200 font-medium">1 200–2 000 ₽</td>
                    <td className="p-3 border border-slate-200 text-slate-600">74 000–123 000 ₽</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 border border-slate-200 font-semibold text-blue-700">Middle</td>
                    <td className="p-3 border border-slate-200">2–4 года</td>
                    <td className="p-3 border border-slate-200 font-semibold text-blue-700">2 500–3 500 ₽</td>
                    <td className="p-3 border border-slate-200 font-medium">154 000–216 000 ₽</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200">Senior</td>
                    <td className="p-3 border border-slate-200">5+ лет</td>
                    <td className="p-3 border border-slate-200 font-medium">4 000–5 500 ₽</td>
                    <td className="p-3 border border-slate-200 text-slate-600">246 000–339 000 ₽</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 border border-slate-200">Tech Lead</td>
                    <td className="p-3 border border-slate-200">7+ лет</td>
                    <td className="p-3 border border-slate-200 font-medium">5 500–8 000 ₽</td>
                    <td className="p-3 border border-slate-200 text-slate-600">339 000–492 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 text-sm">
              * Расчёт дохода: ставка × 6 ч/день × 22 рабочих дня × 0,70 загрузки. До вычета налогов.
            </p>
            <div className="mt-4">
              <Link
                href="/stavka/ios-razrabotchik"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
              >
                📱 Рассчитать ставку iOS-разработчика →
              </Link>
            </div>
          </section>

          {/* Android */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Ставки Android-разработчиков в 2026 году</h2>
            <p className="text-slate-700 mb-4">
              Android-разработчики работают на Kotlin (основной язык) и Java (легаси).
              Современный стек 2026: Jetpack Compose, MVVM + Clean Architecture, Coroutines, Retrofit, Room.
              Спрос устойчив: большинство российских компаний с мобильным приложением начинают именно с Android.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 border border-slate-200 font-semibold">Уровень</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold">Опыт</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold">Ставка, ₽/час</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold">Доход/мес (6 ч, 70%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-slate-200">Junior</td>
                    <td className="p-3 border border-slate-200">0–1 год</td>
                    <td className="p-3 border border-slate-200 font-medium">1 000–1 800 ₽</td>
                    <td className="p-3 border border-slate-200 text-slate-600">62 000–111 000 ₽</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 border border-slate-200 font-semibold text-green-700">Middle</td>
                    <td className="p-3 border border-slate-200">2–4 года</td>
                    <td className="p-3 border border-slate-200 font-semibold text-green-700">2 000–3 000 ₽</td>
                    <td className="p-3 border border-slate-200 font-medium">123 000–185 000 ₽</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200">Senior</td>
                    <td className="p-3 border border-slate-200">5+ лет</td>
                    <td className="p-3 border border-slate-200 font-medium">3 500–4 500 ₽</td>
                    <td className="p-3 border border-slate-200 text-slate-600">216 000–277 000 ₽</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 border border-slate-200">Tech Lead</td>
                    <td className="p-3 border border-slate-200">7+ лет</td>
                    <td className="p-3 border border-slate-200 font-medium">4 500–6 500 ₽</td>
                    <td className="p-3 border border-slate-200 text-slate-600">277 000–400 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <Link
                href="/stavka/android-razrabotchik"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
              >
                🤖 Рассчитать ставку Android-разработчика →
              </Link>
            </div>
          </section>

          {/* Flutter / React Native */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Flutter и React Native: кроссплатформенный рынок</h2>
            <p className="text-slate-700 mb-4">
              Кроссплатформенные разработчики востребованы в стартапах и малом бизнесе: одна кодовая база
              для iOS и Android снижает стоимость разработки вдвое. Flutter (Google) занял лидерство
              на российском рынке — в 2026 году его используют более 40% новых мобильных проектов
              с ограниченным бюджетом.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 border border-slate-200 font-semibold">Технология</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold">Middle ₽/час</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold">Senior ₽/час</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold">Vs. Native</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-slate-200 font-medium">Flutter (Dart)</td>
                    <td className="p-3 border border-slate-200">1 800–2 800 ₽</td>
                    <td className="p-3 border border-slate-200">3 000–4 500 ₽</td>
                    <td className="p-3 border border-slate-200 text-orange-600">−15%</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 border border-slate-200 font-medium">React Native (JS/TS)</td>
                    <td className="p-3 border border-slate-200">1 600–2 500 ₽</td>
                    <td className="p-3 border border-slate-200">2 800–4 000 ₽</td>
                    <td className="p-3 border border-slate-200 text-orange-600">−20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 text-sm">
              Кроссплатформенная разработка в среднем на 15–20% дешевле нативной. Компенсируется
              большим объёмом заказов: один Flutter-разработчик закрывает задачи и iOS, и Android команды.
            </p>
          </section>

          {/* Налоги */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Расчёт ставки с налогами: НПД vs ИП УСН</h2>
            <p className="text-slate-700 mb-4">
              Мобильный разработчик-фрилансер может работать как самозанятый (НПД) или ИП (УСН 6%).
              Разница существенна: при доходе до 2,4 млн ₽ в год самозанятость дешевле на 50 000–55 000 ₽.
            </p>

            {/* Пример */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6">
              <p className="font-semibold text-slate-900 mb-3">
                Пример: Middle iOS разработчик, ставка 3 000 ₽/час, 6 ч/день, 70% загрузка
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Самозанятый (НПД)</p>
                  <div className="space-y-1 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>Валовой доход/мес:</span>
                      <span className="font-medium">277 200 ₽</span>
                    </div>
                    <div className="flex justify-between text-red-600">
                      <span>НПД 6% с юрлиц:</span>
                      <span>− 16 632 ₽</span>
                    </div>
                    <div className="flex justify-between font-semibold text-green-700 border-t pt-1 mt-1">
                      <span>Чистыми на руки:</span>
                      <span>260 568 ₽</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <p className="text-sm font-semibold text-slate-700 mb-2">ИП УСН 6%</p>
                  <div className="space-y-1 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>Валовой доход/мес:</span>
                      <span className="font-medium">277 200 ₽</span>
                    </div>
                    <div className="flex justify-between text-red-600">
                      <span>УСН 6%:</span>
                      <span>− 16 632 ₽</span>
                    </div>
                    <div className="flex justify-between text-red-600">
                      <span>Взносы (÷12):</span>
                      <span>− 4 472 ₽</span>
                    </div>
                    <div className="flex justify-between font-semibold text-amber-700 border-t pt-1 mt-1">
                      <span>Чистыми на руки:</span>
                      <span>256 096 ₽</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                * Расчёт: 3 000 ₽ × 6 ч × 22 дня × 0,70 = 277 200 ₽/мес. Взносы ИП 2026: 53 658 ₽/год = 4 472 ₽/мес.
                Лимит самозанятости: 2,4 млн ₽/год = 200 000 ₽/мес — при ставке 3 000 ₽/час превышение неизбежно.
                При превышении лимита необходим переход на ИП.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <p className="text-amber-900 font-semibold text-sm mb-1">⚠️ Важно про лимит НПД</p>
              <p className="text-amber-800 text-sm">
                Middle iOS/Android разработчик при ставке 3 000+ ₽/час и загрузке 70% заработает
                ~3,3 млн ₽/год — это выше лимита самозанятости 2,4 млн ₽. Открывайте ИП заранее,
                не дожидаясь превышения: переход нужно оформить в течение 20 дней после превышения.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <Link
                href="/stavka/mobilnyj-razrabotchik"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
              >
                📱 Калькулятор мобильного разработчика →
              </Link>
              <Link
                href="/guide/ip-vs-samozanyatyj"
                className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-700 px-5 py-2.5 rounded-lg font-medium hover:bg-slate-50 transition-colors text-sm"
              >
                Сравнить ИП и самозанятость →
              </Link>
            </div>
          </section>

          {/* Факторы влияющие на ставку */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Что влияет на ставку мобильного разработчика</h2>
            <p className="text-slate-700 mb-4">
              Ставка мобильного разработчика варьируется в широком диапазоне. Вот ключевые факторы,
              которые двигают цену вверх:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg mt-0.5">↑</span>
                <div>
                  <p className="font-semibold text-slate-800">Нишевая специализация</p>
                  <p className="text-slate-600 text-sm">Финтех (банковские приложения), медицина (HIPAA/ФЗ-152), AR/VR прибавляют +30–50% к ставке</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg mt-0.5">↑</span>
                <div>
                  <p className="font-semibold text-slate-800">Портфолио с live-приложениями</p>
                  <p className="text-slate-600 text-sm">Приложение в App Store / Google Play с 1 000+ активных пользователей — сильнейший аргумент. Цена с портфолио vs без: +20–40%</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg mt-0.5">↑</span>
                <div>
                  <p className="font-semibold text-slate-800">Полный цикл разработки</p>
                  <p className="text-slate-600 text-sm">«Под ключ» (аналитика → дизайн → разработка → релиз → поддержка) даёт +20–30% к ставке vs разработка по ТЗ</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg mt-0.5">↑</span>
                <div>
                  <p className="font-semibold text-slate-800">Иностранные заказчики</p>
                  <p className="text-slate-600 text-sm">Ставки в USD/EUR в 2–4 раза выше российских. Самозанятый может работать с иностранными компаниями легально по НПД 6%</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold text-lg mt-0.5">↓</span>
                <div>
                  <p className="font-semibold text-slate-800">Работа через биржи (FL.ru, Kwork)</p>
                  <p className="text-slate-600 text-sm">Комиссия биржи 10–20% уменьшает эффективную ставку. Собственные клиенты через нетворкинг — без комиссии</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Сколько берёт iOS-разработчик-фрилансер в 2026 году?",
                  a: "Медианная ставка iOS-разработчика (Swift/SwiftUI) в 2026 году: Junior — 1 200–2 000 ₽/час, Middle — 2 500–3 500 ₽/час, Senior — 4 000–5 500 ₽/час. iOS-разработчики в среднем зарабатывают на 15–25% больше Android-коллег из-за высокого порога входа в экосистему Apple."
                },
                {
                  q: "Сколько берёт Android-разработчик-фрилансер в 2026?",
                  a: "Медианная ставка Android-разработчика (Kotlin/Jetpack Compose) в 2026 году: Junior — 1 000–1 800 ₽/час, Middle — 2 000–3 000 ₽/час, Senior — 3 500–4 500 ₽/час. Android занимает более 70% рынка смартфонов в России, что обеспечивает стабильный спрос на специалистов."
                },
                {
                  q: "Что выгоднее для мобильного разработчика: самозанятость или ИП?",
                  a: "При годовом доходе до 2,4 млн ₽ — самозанятость (НПД 6% с юрлиц). При доходе выше 2,4 млн ₽ — ИП УСН 6%. Middle iOS при доходе 250 000 ₽/мес: НПД = 15 000 ₽/мес, ИП УСН = 15 000 + 4 472 ₽ взносов = 19 472 ₽/мес. Самозанятость выгоднее на 53 664 ₽/год — пока не достигнут лимит."
                },
                {
                  q: "React Native и Flutter: ставки выше или ниже нативной разработки?",
                  a: "Ставки React Native и Flutter разработчиков в 2026 году: Middle — 1 800–2 800 ₽/час, Senior — 3 000–4 500 ₽/час. В среднем на 10–20% ниже нативных iOS/Android из-за более широкого предложения на рынке. Однако кроссплатформенный разработчик покрывает оба рынка сразу — больше потенциальных заказов."
                },
                {
                  q: "Как рассчитать почасовую ставку мобильного разработчика?",
                  a: "Формула: желаемый доход ÷ (рабочие часы × загрузка) ÷ (1 − налоговая ставка). Пример: хочу 200 000 ₽/мес чистыми, работаю 6 ч/день, загрузка 70%, НПД 6%. Ставка = 200 000 ÷ (6 × 22 × 0,70) ÷ 0,94 ≈ 2 306 ₽/час. Используйте калькулятор FreelanceCalc — он автоматически учтёт налоги, выходные и скрытые расходы."
                },
              ].map((item, i) => (
                <details key={i} className="border border-slate-200 rounded-xl group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-slate-800 hover:bg-slate-50 rounded-xl">
                    {item.q}
                    <span className="text-slate-400 group-open:rotate-180 transition-transform ml-2 shrink-0">▼</span>
                  </summary>
                  <div className="px-4 pb-4 pt-1 text-slate-700 text-sm leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Рассчитайте вашу ставку точно</h2>
            <p className="text-blue-100 mb-6 text-sm">
              Калькулятор FreelanceCalc учитывает ваш налоговый режим, загрузку, простои и скрытые расходы.
              Введите желаемый доход — получите ставку за 30 секунд.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/stavka/ios-razrabotchik"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm"
              >
                📱 Ставка iOS-разработчика
              </Link>
              <Link
                href="/stavka/android-razrabotchik"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm"
              >
                🤖 Ставка Android-разработчика
              </Link>
              <Link
                href="/stavka/mobilnyj-razrabotchik"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors text-sm border border-blue-400"
              >
                📲 Мобильный разработчик (общий)
              </Link>
            </div>
          </section>

          {/* Related */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Читайте также</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/ip-vs-samozanyatyj", label: "ИП или самозанятый: что выгоднее" },
                { href: "/guide/nalog-programmist-frilanser", label: "Налоги программиста-фрилансера" },
                { href: "/guide/samozanyatyj-prevysil-limit", label: "Превысил лимит 2,4 млн ₽: что делать" },
                { href: "/guide/samozanyatyj-inostrannyj-zakazchik-2026", label: "Иностранный заказчик: как получить оплату" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-sm text-slate-700 hover:text-blue-600"
                >
                  <span className="text-slate-400">→</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
