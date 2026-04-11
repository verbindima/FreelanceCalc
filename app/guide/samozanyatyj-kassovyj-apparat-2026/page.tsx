import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Нужен ли кассовый аппарат самозанятому в 2026 году | FreelanceCalc",
  description:
    "Самозанятые (НПД) освобождены от онлайн-кассы по ФЗ-54. Вместо ККТ — чек в приложении «Мой налог». Штраф за непробитый чек: 20% или 100%. Полный разбор с примерами.",
  alternates: { canonical: `${BASE_URL}/guide/samozanyatyj-kassovyj-apparat-2026` },
  openGraph: {
    title: "Кассовый аппарат для самозанятых 2026: нужен или нет?",
    description:
      "Короткий ответ: нет. Длинный: чек всё равно обязателен — но через «Мой налог», а не ККТ. Штрафы, исключения и новые требования с 1 сентября 2026.",
    url: `${BASE_URL}/guide/samozanyatyj-kassovyj-apparat-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Кассовый аппарат самозанятому 2026: не нужен, но чек обязателен",
    description:
      "НПД освобождён от ККТ по ФЗ-54. Вместо кассы — чек в «Мой налог». Штраф за нарушение: 20–100% от суммы.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Нужен ли самозанятому кассовый аппарат в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. Плательщики НПД (налога на профессиональный доход) освобождены от применения контрольно-кассовой техники (ККТ) на основании п. 2.2 ст. 2 Федерального закона № 54-ФЗ от 22.05.2003. Вместо кассы самозанятые обязаны выдавать чеки через мобильное приложение «Мой налог» или через сайт lknpd.nalog.ru.",
      },
    },
    {
      "@type": "Question",
      name: "Как самозанятому выдать чек без кассы?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Чек формируется в приложении «Мой налог»: вкладка «Новая продажа» → укажите сумму, описание услуги, тип клиента (физлицо или ИП/юрлицо) → нажмите «Выдать чек». Чек можно отправить клиенту через QR-код, ссылку в мессенджере, email или SMS. Срок выдачи: не позднее 9-го числа месяца, следующего за расчётом (при наличных — в момент оплаты).",
      },
    },
    {
      "@type": "Question",
      name: "Какой штраф за непробитый чек для самозанятого?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Согласно ст. 129.13 НК РФ: первое нарушение — 20% от суммы расчёта, но не менее 200 ₽. Повторное нарушение в течение 6 месяцев — 100% от суммы расчёта, но не менее 200 ₽. Нарушение фиксируется налоговой инспекцией, в том числе по жалобе клиента через «Мой налог».",
      },
    },
    {
      "@type": "Question",
      name: "Может ли самозанятый добровольно купить онлайн-кассу?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Технически — да, законодательного запрета нет. Но это лишние расходы (от 10 000 ₽ за аппарат + 3 000–5 000 ₽/год за ОФД) без какой-либо пользы: чек через «Мой налог» имеет такую же юридическую силу, что и чек с ККТ. Покупать кассу самозанятому нет смысла.",
      },
    },
    {
      "@type": "Question",
      name: "Изменились ли требования к чекам самозанятых в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "С 1 сентября 2026 года вступают в силу новые требования к реквизитам чека при работе с маркированными товарами (приказ ФНС № ЕД-7-20/236@ от 26.03.2026). Это касается самозанятых, которые реализуют маркированную продукцию (одежда, обувь, духи). Для услуг и немаркированных товаров ничего не меняется.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Нужен ли кассовый аппарат самозанятому в 2026 году",
  description:
    "Разбор требований по КТТ для плательщиков НПД: освобождение по ФЗ-54, обязанность выдавать чеки через «Мой налог», штрафы по ст. 129.13 НК РФ, новые требования с сентября 2026.",
  url: `${BASE_URL}/guide/samozanyatyj-kassovyj-apparat-2026`,
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function SamozanyatyjKassovyjApparat2026() {
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
              <span>Касса для самозанятых 2026</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              🧾 Касса и чеки НПД — 2026
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Нужен ли кассовый аппарат самозанятому в 2026 году
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Короткий ответ: <strong>нет</strong>. Плательщики НПД освобождены от онлайн-кассы по закону.
              Но чек клиенту всё равно нужен — через приложение{" "}
              <strong>«Мой налог»</strong>. Штраф за нарушение — до{" "}
              <strong>100% от суммы</strong> платежа.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { label: "ФЗ-54", value: "Освобождение", sub: "официально" },
                { label: "Штраф 1-й раз", value: "20%", sub: "от суммы" },
                { label: "Повторный штраф", value: "100%", sub: "от суммы" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-3">
                  <div className="text-xs text-slate-500 mb-1">{s.label}</div>
                  <div className="text-xl font-bold text-blue-700">{s.value}</div>
                  <div className="text-xs text-slate-500">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Закон прямо освобождает самозанятых от ККТ
            </h2>
            <p className="text-slate-700 mb-4">
              Пункт 2.2 статьи 2 Федерального закона № 54-ФЗ «О применении контрольно-кассовой
              техники» устанавливает: лица, применяющие специальный налоговый режим НПД
              (налог на профессиональный доход), <strong>не обязаны применять ККТ</strong>.
              Это правило действует с момента введения НПД в 2019 году и сохраняется в 2026.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
              <p className="text-green-900 font-semibold mb-1">✅ Итог</p>
              <p className="text-green-800 text-sm">
                Покупать онлайн-кассу, регистрировать её в ФНС и платить за ОФД самозанятому
                не нужно. Это сэкономит 10 000–30 000 ₽ при старте и 3 000–6 000 ₽/год на обслуживание.
              </p>
            </div>
            <p className="text-slate-700">
              Важно понимать: освобождение от <em>кассы</em> не означает освобождение от
              <em> чеков</em>. Это разные обязательства, и второе по-прежнему существует.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Что вместо кассы: чек через «Мой налог»
            </h2>
            <p className="text-slate-700 mb-4">
              Статья 14 Федерального закона № 422-ФЗ обязывает каждого самозанятого{" "}
              <strong>передавать сведения о расчёте в ФНС</strong> и выдавать клиенту чек.
              Чек формируется в приложении <strong>«Мой налог»</strong> (iOS / Android) или
              через веб-версию на сайте{" "}
              <a
                href="https://lknpd.nalog.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                lknpd.nalog.ru
              </a>
              .
            </p>
            <p className="text-slate-700 mb-4">
              Чек НПД имеет ту же юридическую силу, что и кассовый чек ККТ. Заказчик может
              принять его к бухгалтерскому учёту и учесть в расходах.
            </p>

            {/* How-to table */}
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 font-semibold text-slate-700">Шаг</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Действие в «Мой налог»</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Откройте приложение → вкладка «Новая продажа»"],
                    ["2", "Введите сумму и краткое описание услуги (например, «Разработка сайта»)"],
                    ["3", "Выберите тип клиента: физлицо или ИП / юрлицо (ставки разные: 4% / 6%)"],
                    ["4", "Нажмите «Выдать чек» — чек сформирован и отправлен в ФНС"],
                    ["5", "Отправьте чек клиенту: QR-код, ссылка, PDF через мессенджер или email"],
                  ].map(([n, desc]) => (
                    <tr key={n} className="border-b border-slate-100">
                      <td className="p-3 font-bold text-blue-700">{n}</td>
                      <td className="p-3 text-slate-700">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-900 font-semibold mb-1">⏱ Сроки выдачи чека</p>
              <ul className="text-amber-800 text-sm space-y-1">
                <li>• <strong>Наличные / перевод на карту в момент оплаты</strong> — чек выдаётся сразу</li>
                <li>• <strong>Безналичный расчёт (юрлицо платит с расчётного счёта)</strong> — до 9-го числа месяца, следующего за месяцем оплаты</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3 способа передать чек клиенту
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: "📱",
                  title: "QR-код",
                  desc: "Клиент сканирует QR прямо в вашем телефоне. Подходит при личной встрече.",
                },
                {
                  icon: "🔗",
                  title: "Ссылка / файл",
                  desc: "Отправьте ссылку на чек или PDF-файл через WhatsApp, Telegram, email.",
                },
                {
                  icon: "📧",
                  title: "На email",
                  desc: "Введите email клиента при формировании чека — он получит его автоматически.",
                },
              ].map((c) => (
                <div key={c.title} className="bg-slate-50 rounded-xl border border-slate-200 p-4">
                  <div className="text-2xl mb-2">{c.icon}</div>
                  <div className="font-semibold text-slate-900 mb-1">{c.title}</div>
                  <div className="text-sm text-slate-600">{c.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Штрафы за нарушение чековой дисциплины в 2026 году
            </h2>
            <p className="text-slate-700 mb-4">
              Статья 129.13 НК РФ устанавливает ответственность за нарушение порядка или сроков
              передачи сведений о расчётах:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-red-50">
                    <th className="text-left p-3 font-semibold text-slate-700">Нарушение</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Штраф</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Минимум</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="p-3 text-slate-700">Первое нарушение</td>
                    <td className="p-3 font-bold text-red-700">20% от суммы расчёта</td>
                    <td className="p-3 text-slate-700">200 ₽</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-3 text-slate-700">Повторное нарушение (в течение 6 мес.)</td>
                    <td className="p-3 font-bold text-red-700">100% от суммы расчёта</td>
                    <td className="p-3 text-slate-700">200 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
              <p className="text-red-900 font-semibold mb-2">📌 Пример расчёта штрафа</p>
              <p className="text-red-800 text-sm">
                Самозанятый получил 15 000 ₽ от клиента-физлица и не выдал чек.{" "}
                <strong>Первый штраф: 15 000 × 20% = 3 000 ₽.</strong>{" "}
                Если в течение следующих 6 месяцев нарушение повторится на сумму 30 000 ₽ —{" "}
                <strong>штраф 30 000 ₽</strong> (100%).
              </p>
            </div>

            <p className="text-slate-700 text-sm">
              Нарушение может зафиксировать не только налоговая, но и сам клиент — через кнопку
              «Пожаловаться» в приложении «Мой налог». Поэтому чек стоит выдавать всегда,
              даже если клиент «не просит».
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Когда самозанятому всё-таки может понадобиться касса
            </h2>
            <p className="text-slate-700 mb-4">
              Есть один сценарий: если самозанятый <strong>совмещает НПД с другим налоговым
              режимом</strong>. Например, ИП может одновременно применять НПД для одних видов
              деятельности и УСН для других (хотя это редкая ситуация). В части деятельности
              на УСН ИП может быть обязан применять ККТ.
            </p>
            <p className="text-slate-700 mb-4">
              Также касса потребуется, если самозанятый <strong>решит зарегистрировать ИП</strong>
              и перейти на иной режим налогообложения. В этом случае освобождение от КТТ по
              ФЗ-54 перестаёт действовать.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p className="text-slate-800 font-semibold mb-2">🔑 Главный принцип</p>
              <p className="text-slate-700 text-sm">
                Пока вы работаете <strong>исключительно как самозанятый (НПД)</strong> —
                касса не нужна. Нужны только чеки через «Мой налог».
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Новые требования с 1 сентября 2026 года
            </h2>
            <p className="text-slate-700 mb-4">
              Приказом ФНС России № ЕД-7-20/236@ от 26.03.2026 утверждены обновлённые требования
              к реквизитам чека НПД при работе с <strong>маркированными товарами</strong>.
              Изменения вступают в силу с 1 сентября 2026 года.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 font-semibold text-slate-700">Категория</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Изменение с 01.09.2026</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Услуги (дизайн, программирование, консультации)", "Без изменений — обычный чек в «Мой налог»"],
                    ["Немаркированные товары (handmade, продукты)", "Без изменений"],
                    ["Маркированные товары (одежда, обувь, духи, текстиль)", "Новые реквизиты чека — обновите приложение «Мой налог» до 01.09.2026"],
                  ].map(([cat, change]) => (
                    <tr key={cat} className="border-b border-slate-100">
                      <td className="p-3 text-slate-700">{cat}</td>
                      <td className="p-3 text-slate-700">{change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 text-sm">
              Большинства самозанятых — фрилансеров, консультантов, разработчиков — изменения
              не касаются. Если торгуете маркированными товарами, следите за обновлением
              приложения «Мой налог» от ФНС.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Нужен ли самозанятому кассовый аппарат в 2026 году?",
                  a: "Нет. Плательщики НПД освобождены от применения ККТ по п. 2.2 ст. 2 ФЗ-54. Вместо кассы обязательно использовать приложение «Мой налог» для выдачи чеков.",
                },
                {
                  q: "Как самозанятому выдать чек без кассы?",
                  a: 'Через приложение «Мой налог»: «Новая продажа» → сумма → описание → тип клиента → «Выдать чек». Отправьте клиенту QR-код, ссылку или PDF. Срок — в момент наличной оплаты или до 9-го числа следующего месяца при безналичном расчёте.',
                },
                {
                  q: "Какой штраф за непробитый чек для самозанятого?",
                  a: "Первый раз — 20% от суммы расчёта (мин. 200 ₽). Повторно в течение 6 месяцев — 100% от суммы (мин. 200 ₽). Основание: ст. 129.13 НК РФ.",
                },
                {
                  q: "Может ли самозанятый добровольно купить онлайн-кассу?",
                  a: "Да, запрета нет. Но это лишние расходы без пользы: чек «Мой налог» имеет ту же юридическую силу, что и кассовый чек ККТ. Покупать кассу нет смысла.",
                },
                {
                  q: "Изменились ли требования к чекам самозанятых в 2026 году?",
                  a: "С 1 сентября 2026 — новые реквизиты чека для маркированных товаров (приказ ФНС ЕД-7-20/236@ от 26.03.2026). Для услуг и немаркированных товаров ничего не меняется.",
                },
              ].map(({ q, a }) => (
                <details
                  key={q}
                  className="bg-slate-50 rounded-xl border border-slate-200 group"
                >
                  <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-slate-900 list-none">
                    {q}
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-4 pb-4 text-slate-700 text-sm leading-relaxed">{a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Рассчитайте свою ставку как самозанятый
            </h2>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto">
              Зная, что касса не нужна и налог составляет всего 4–6%, — посчитайте, сколько
              брать с клиентов, чтобы выйти на желаемый доход.
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Открыть калькулятор ставки →
            </Link>
          </section>

          {/* Related */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Читайте также</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { href: "/guide/samozanyatyj-kak-vystavit-chek-2026", label: "Как выставить чек самозанятому: пошаговая инструкция" },
                { href: "/guide/shtrafy-samozanyatogo-2026", label: "Штрафы для самозанятых в 2026 году" },
                { href: "/guide/nalog-samozanyatyj", label: "Налог самозанятого: ставки, расчёт, сроки уплаты" },
                { href: "/guide/kak-stat-samozanyatym-frilanser", label: "Как стать самозанятым: пошаговая инструкция" },
              ].map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                >
                  <span className="text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                  <span className="text-slate-700 text-sm font-medium">{r.label}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
