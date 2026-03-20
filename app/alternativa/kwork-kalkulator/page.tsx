import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Альтернатива калькулятору Kwork — FreelanceCalc",
  description:
    "Работаете на Kwork? FreelanceCalc рассчитывает правильную ставку с учётом комиссии биржи, налогов самозанятого и рыночных медиан по 20+ специальностям. Обновлено Q1 2026.",
  keywords: [
    "калькулятор ставки kwork",
    "kwork комиссия калькулятор",
    "как считать цену на kwork",
    "альтернатива kwork калькулятор",
    "ставка фрилансера kwork",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/alternativa/kwork-kalkulator" },
  openGraph: {
    title: "FreelanceCalc vs Kwork — рассчитайте ставку с учётом комиссии",
    description:
      "Kwork берёт 20% комиссии. Считайте ставку правильно — с налогами, комиссией и рыночными медианами.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/alternativa/kwork-kalkulator`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Калькулятор ставки для Kwork — как считать цену с учётом комиссии и налогов",
  description:
    "Как правильно рассчитать цену кворка с учётом комиссии Kwork (20%), налога НПД и реальной загрузки.",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  datePublished: "2026-03-20",
  dateModified: "2026-03-20",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${BASE_URL}/alternativa/kwork-kalkulator`,
  },
  inLanguage: "ru",
};

export default function KworkAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
              FreelanceCalc
            </Link>
          </div>
        </header>

        <article className="max-w-4xl mx-auto px-4 py-10">
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-1">
              <li><Link href="/" className="hover:text-blue-600">Главная</Link></li>
              <li>/</li>
              <li><Link href="/alternativa" className="hover:text-blue-600">Альтернативы</Link></li>
              <li>/</li>
              <li className="text-gray-700">Kwork</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Как правильно считать цену на Kwork: калькулятор с учётом комиссии и налогов
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Kwork — биржа фиксированных задач, где цена выставляется заранее. Главная ошибка:
            не учитывать комиссию биржи (20%) и налог самозанятого (4–6%). FreelanceCalc
            рассчитывает, сколько нужно указать в кворке, чтобы на руки получить желаемый доход.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте правильную цену для Kwork</p>
            <p className="text-blue-700 text-sm mb-4">
              Введите желаемый доход — получите минимальную цену кворка с учётом всех вычетов.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=kwork"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* The commission trap */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ловушка комиссии Kwork: почему 500 ₽ — это не 500 ₽
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              На Kwork стандартная комиссия биржи составляет 20% от суммы заказа. Это значит,
              что с кворка за 500 ₽ вы получаете 400 ₽. Если вы ещё и самозанятый — с этих
              400 ₽ нужно заплатить 4–6% налога. Итого на руки: около 376 ₽.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
              <p className="font-semibold text-red-900 mb-3">Реальный расчёт кворка за 500 ₽</p>
              <div className="space-y-2 text-sm text-red-800">
                <div className="flex justify-between">
                  <span>Цена кворка (клиент платит)</span>
                  <span className="font-medium">500 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Комиссия Kwork (20%)</span>
                  <span className="font-medium">−100 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Вы получаете до налогов</span>
                  <span className="font-medium">400 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Налог НПД (6% с юрлиц)</span>
                  <span className="font-medium">−24 ₽</span>
                </div>
                <div className="flex justify-between border-t border-red-300 pt-2 font-bold text-red-900">
                  <span>На руки</span>
                  <span>376 ₽</span>
                </div>
              </div>
              <p className="text-xs text-red-600 mt-3">
                Реальный доход на 25% ниже указанной цены. Не забывайте закладывать это в стоимость.
              </p>
            </div>
          </section>

          {/* Formula */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Формула: какую цену указать в кворке
            </h2>
            <div className="bg-gray-900 rounded-xl p-6 mb-4">
              <p className="text-green-400 font-mono text-sm mb-2">// Цена в кворке ≥</p>
              <p className="text-white font-mono text-lg">
                желаемый_доход ÷ (1 − 0.20) ÷ (1 − налог_НПД)
              </p>
              <p className="text-gray-400 font-mono text-sm mt-3">
                // Пример: хочу 800 ₽ чистыми<br />
                // 800 ÷ 0.80 ÷ 0.94 = 1 064 ₽ → указываем 1 100 ₽
              </p>
            </div>
            <p className="text-gray-600 text-sm">
              FreelanceCalc автоматически выполняет этот расчёт, добавляя учёт загрузки,
              отпуска и рыночных медиан по вашей специальности.
            </p>
          </section>

          {/* Comparison table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Сравнение: FreelanceCalc vs расчёт вручную для Kwork
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Функция</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">FreelanceCalc</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-500">Ручной расчёт</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Учёт комиссии биржи", "✅", "⚠️ вручную"],
                    ["Учёт налога НПД 4% / 6%", "✅", "⚠️ вручную"],
                    ["Учёт загрузки и простоев", "✅", "❌ обычно забывают"],
                    ["Учёт отпуска и больничных", "✅", "❌ обычно забывают"],
                    ["Сравнение с рынком", "✅", "❌"],
                    ["20+ специальностей", "✅", "❌"],
                    ["10+ городов России", "✅", "❌"],
                    ["PDF-бенчмарк медиан", "✅ 249 ₽", "❌"],
                  ].map(([feature, fc, manual]) => (
                    <tr key={feature} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{feature}</td>
                      <td className="px-4 py-3 text-center font-medium text-green-700">{fc}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{manual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* By specialty */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Популярные специальности на Kwork
            </h2>
            <p className="text-gray-600 mb-5">
              Рассчитайте ставку для вашей специальности:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Графический дизайнер", slug: "graficheskij-dizajner" },
                { name: "Копирайтер", slug: "kopirayter" },
                { name: "Frontend-разработчик", slug: "frontend-razrabotchik" },
                { name: "Видеомонтажёр", slug: "videomontazhyor" },
                { name: "SMM-специалист", slug: "smm-specialist" },
                { name: "Таргетолог", slug: "targetolog" },
                { name: "Контент-менеджер", slug: "kontent-menedzher" },
                { name: "SEO-специалист", slug: "seo-specialist" },
                { name: "Переводчик", slug: "perevodchik" },
              ].map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/stavka/${spec.slug}?utm_source=alternativa&utm_medium=page&utm_campaign=kwork`}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:border-blue-400 hover:text-blue-700 transition-colors text-center"
                >
                  {spec.name}
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-3">
              <Link href="/stavka" className="text-blue-600 hover:underline">Все специальности →</Link>
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Какая комиссия на Kwork?",
                  a: "Стандартная комиссия Kwork составляет 20% от суммы заказа. Это значит, что с кворка за 1 000 ₽ вы получаете 800 ₽ до уплаты налогов.",
                },
                {
                  q: "Нужно ли платить налог с дохода на Kwork?",
                  a: "Да, если вы зарегистрированы как самозанятый или ИП. Самозанятые платят НПД: 4% при работе с физлицами, 6% — с юрлицами. Ставка Kwork как платформы — юрлицо, поэтому для большинства применяется 6%.",
                },
                {
                  q: "Как правильно установить цену кворка?",
                  a: "Начните с желаемого дохода «на руки». Затем добавьте комиссию Kwork (÷0.80) и налог НПД (÷0.94). Результат — минимальная цена кворка. FreelanceCalc делает это автоматически и сравнивает с рыночными медианами.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 mb-2">{q}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Рассчитайте правильную цену кворка</h2>
            <p className="text-blue-100 mb-6">
              Бесплатно. Учёт комиссии, налогов, загрузки и рыночных медиан. 30 секунд.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=kwork-bottom"
              className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Открыть калькулятор →
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
