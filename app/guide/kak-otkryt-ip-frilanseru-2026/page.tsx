import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Как открыть ИП фрилансеру в 2026 году: пошаговая инструкция | FreelanceCalc",
  description:
    "Пошаговая инструкция: как фрилансеру открыть ИП в 2026 году через Госуслуги бесплатно. Выбор ОКВЭД, системы налогообложения, расчёт взносов 53 658 ₽, первые шаги после регистрации.",
  alternates: { canonical: `${BASE_URL}/guide/kak-otkryt-ip-frilanseru-2026` },
  openGraph: {
    title: "Как открыть ИП фрилансеру в 2026 году: пошаговая инструкция",
    description:
      "Регистрация ИП через Госуслуги за 3 дня бесплатно. ОКВЭД, УСН 6%, взносы 53 658 ₽, первые документы. Чек-лист для фрилансера.",
    url: `${BASE_URL}/guide/kak-otkryt-ip-frilanseru-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Как открыть ИП фрилансеру 2026: бесплатно через Госуслуги",
    description:
      "ОКВЭД, УСН 6%, взносы 53 658 ₽, расчётный счёт — всё что нужно знать фрилансеру перед открытием ИП.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько стоит открыть ИП в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Регистрация ИП бесплатна при подаче документов через Госуслуги или сайт ФНС (nalog.ru) с электронной подписью. При личной подаче в налоговую инспекцию госпошлина составляет 800 рублей. Срок регистрации — 3 рабочих дня.",
      },
    },
    {
      "@type": "Question",
      name: "Какой ОКВЭД выбрать фрилансеру при открытии ИП?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Разработчику подходит 62.01 (разработка ПО), дизайнеру — 74.10 (деятельность в области дизайна), маркетологу — 73.11 (рекламные агентства) или 73.20 (исследование конъюнктуры рынка). Можно добавить несколько ОКВЭД сразу. Основной — тот, от которого ожидается наибольший доход.",
      },
    },
    {
      "@type": "Question",
      name: "Когда подавать заявление на УСН при регистрации ИП?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Заявление о переходе на УСН (форма 26.2-1) нужно подать вместе с документами на регистрацию или в течение 30 дней после регистрации ИП. Если пропустить 30-дневный срок, переход на УСН будет возможен только с 1 января следующего года.",
      },
    },
    {
      "@type": "Question",
      name: "Нужна ли онлайн-касса ИП-фрилансеру?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет, если вы работаете исключительно с юридическими лицами и ИП по безналичному расчёту. Онлайн-касса нужна только при приёме наличных или если вы работаете с физическими лицами (если вы не самозанятый). Большинство фрилансеров на ИП работают с компаниями по безналу — касса не нужна.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли совмещать ИП и самозанятость?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, ИП может зарегистрироваться как плательщик НПД (самозанятый). Но тогда он теряет право применять УСН, патент и другие спецрежимы. При совмещении ИП+НПД действуют все ограничения самозанятого: лимит дохода 2,4 млн ₽/год, нельзя нанимать сотрудников. Большинству фрилансеров это не выгодно — проще оставаться на УСН.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как открыть ИП фрилансеру в 2026 году: пошаговая инструкция",
  description:
    "Пошаговая инструкция регистрации ИП через Госуслуги, выбор ОКВЭД и УСН 6%, расчёт страховых взносов 53 658 ₽, первые шаги после регистрации.",
  url: `${BASE_URL}/guide/kak-otkryt-ip-frilanseru-2026`,
  datePublished: "2026-04-11",
  dateModified: "2026-04-11",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function KakOtkrytIpFrilanseru2026Page() {
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

      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Header */}
        <header className="mb-8 text-center">
          <Link
            href="/"
            className="text-sm font-semibold text-indigo-500 tracking-wide uppercase hover:underline"
          >
            FreelanceCalc
          </Link>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Как открыть ИП фрилансеру в 2026 году: пошаговая инструкция
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            Регистрация через Госуслуги бесплатно за 3 дня, правильный ОКВЭД, УСН 6% и первые шаги после получения статуса.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>Время чтения: 10 минут</span>
            <span>·</span>
            <span>Обновлено апрель 2026</span>
          </div>
        </header>

        {/* Quick Calculator CTA */}
        <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-5 text-center">
          <p className="text-sm font-semibold text-indigo-800 mb-1">
            Рассчитайте ставку фрилансера с учётом налога ИП
          </p>
          <p className="text-xs text-indigo-600 mb-3">
            Укажите желаемый доход — калькулятор покажет сколько выставлять клиенту с учётом УСН и взносов
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
          >
            Рассчитать свою ставку →
          </Link>
        </div>

        <div className="space-y-8">

          {/* Section 1 — Когда нужен ИП */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Когда фрилансеру стоит открыть ИП
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Самозанятость удобна, но у неё есть жёсткие ограничения. ИП нужен фрилансеру в нескольких случаях:
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2">
                <p className="text-xs font-semibold text-amber-800 mb-2">ИП необходим, если:</p>
                <ul className="text-xs text-amber-700 space-y-1.5">
                  <li>📈 <strong>Доход превышает 2,4 млн ₽/год</strong> — лимит самозанятого. При превышении НПД автоматически аннулируется.</li>
                  <li>👥 <strong>Планируете нанять субподрядчика или сотрудника</strong> — самозанятый не может привлекать наёмных работников.</li>
                  <li>🏢 <strong>Крупные корпоративные клиенты требуют ИП или ООО</strong> — некоторые компании не работают с НПД.</li>
                  <li>💳 <strong>Нужен полноценный расчётный счёт с бизнес-функциями</strong> — эквайринг, зарплатный проект, корпоративная карта.</li>
                  <li>📋 <strong>Работаете по патенту</strong> — например, репетиторство, перевозки, аренда.</li>
                </ul>
              </div>
              <p>
                Если доход стабильно ниже 200 000 ₽/месяц и вы работаете с физлицами — скорее всего, самозанятость выгоднее. Подробнее см. <Link href="/guide/ip-vs-samozanyatyj" className="text-indigo-600 hover:underline">сравнение ИП и самозанятого</Link>.
              </p>
            </div>
          </section>

          {/* Section 2 — Выбор налогового режима */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Шаг 1: выберите систему налогообложения
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Это самое важное решение — принять его нужно <strong>до или сразу после регистрации</strong> (в течение 30 дней). Потом сменить режим можно будет только с нового года.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-100 text-slate-700">
                    <tr>
                      <th className="text-left px-3 py-2 font-semibold">Режим</th>
                      <th className="text-left px-3 py-2 font-semibold">Ставка</th>
                      <th className="text-left px-3 py-2 font-semibold">Подходит если</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="bg-green-50">
                      <td className="px-3 py-2 font-semibold text-green-800">УСН «Доходы» 6%</td>
                      <td className="px-3 py-2">6% со всего дохода</td>
                      <td className="px-3 py-2">Расходы &lt; 60% дохода (большинство фрилансеров)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-semibold">УСН «Доходы − Расходы» 15%</td>
                      <td className="px-3 py-2">15% с прибыли</td>
                      <td className="px-3 py-2">Расходы &gt; 60% (закупки, субподряд)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-semibold">Патент (ПСН)</td>
                      <td className="px-3 py-2">Фиксированная сумма</td>
                      <td className="px-3 py-2">Репетиторство, перевозки, конкретные виды деятельности</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="px-3 py-2 font-semibold text-red-700">ОСНО</td>
                      <td className="px-3 py-2">НДФЛ 13%+ + НДС 20%</td>
                      <td className="px-3 py-2">Не подходит фрилансеру без особых причин</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <strong>Для 95% фрилансеров оптимален УСН «Доходы» 6%</strong> — низкая ставка, минимум отчётности, можно уменьшить налог на страховые взносы до нуля. Подробнее: <Link href="/guide/nalog-ip-usn-6" className="text-indigo-600 hover:underline">как работает налог ИП УСН 6%</Link>.
              </p>
            </div>
          </section>

          {/* Section 3 — ОКВЭД */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Шаг 2: выберите ОКВЭД
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                ОКВЭД — код вида деятельности. Вам нужен хотя бы один основной код, можно добавить несколько дополнительных. Ошибка в ОКВЭД не критична — их можно менять через заявление Р24001.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                <p className="text-xs font-semibold text-slate-700 mb-3">Популярные ОКВЭД для фрилансеров:</p>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  <div className="flex gap-3 items-start">
                    <span className="font-mono bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs shrink-0">62.01</span>
                    <span><strong>Разработка ПО</strong> — веб-разработчики, программисты, fullstack</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-mono bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs shrink-0">62.02</span>
                    <span><strong>Консультации по ИТ</strong> — системные аналитики, архитекторы</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-mono bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs shrink-0">74.10</span>
                    <span><strong>Деятельность в области дизайна</strong> — UX/UI, графика, брендинг</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-mono bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs shrink-0">73.11</span>
                    <span><strong>Рекламные агентства</strong> — маркетологи, таргетологи, SMM</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-mono bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs shrink-0">74.30</span>
                    <span><strong>Переводческая деятельность</strong> — переводчики, локализаторы</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-mono bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs shrink-0">63.12</span>
                    <span><strong>Интернет-порталы</strong> — контентные проекты, редакторы</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-mono bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs shrink-0">85.41</span>
                    <span><strong>Дополнительное образование</strong> — онлайн-курсы, репетиторство</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                💡 Совет: добавьте код <span className="font-mono bg-slate-100 px-1 rounded">74.90</span> (прочая профессиональная деятельность) как дополнительный — он покрывает консультации и смежные услуги, которые не вписываются в основной код.
              </p>
            </div>
          </section>

          {/* Section 4 — Регистрация */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Шаг 3: подайте документы на регистрацию
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Зарегистрировать ИП можно несколькими способами. Самый удобный для фрилансера — онлайн через Госуслуги или ФНС.
              </p>

              <h3 className="font-semibold text-slate-800 text-sm mt-4">Способ 1: через Госуслуги (бесплатно, рекомендуется)</h3>
              <ol className="text-xs text-slate-600 space-y-2 list-decimal list-inside">
                <li>Зайдите на <strong>gosuslugi.ru</strong> → «Бизнес» → «Регистрация ИП»</li>
                <li>Заполните форму заявления Р21001 (ФИО, паспорт, адрес регистрации)</li>
                <li>Выберите основной и дополнительные коды ОКВЭД</li>
                <li>Прикрепите скан паспорта (или используйте НЭП / биометрию)</li>
                <li>Одновременно подайте заявление о переходе на УСН (форма 26.2-1)</li>
                <li>Дождитесь ответа — <strong>3 рабочих дня</strong>, пошлина 0 ₽</li>
              </ol>

              <h3 className="font-semibold text-slate-800 text-sm mt-4">Способ 2: через nalog.ru (онлайн, бесплатно)</h3>
              <p className="text-xs">
                Сервис «Государственная регистрация ЮЛ и ИП» на сайте ФНС. Нужна квалифицированная электронная подпись (КЭП). Если КЭП нет — используйте Госуслуги.
              </p>

              <h3 className="font-semibold text-slate-800 text-sm mt-4">Способ 3: в налоговой лично (800 ₽)</h3>
              <p className="text-xs">
                Обратитесь в ИФНС по месту прописки с паспортом и заявлением Р21001 (можно распечатать с nalog.ru). Госпошлина — 800 ₽. Срок — 3 рабочих дня.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-2">
                <p className="text-xs font-semibold text-blue-800 mb-1">⚠️ Важно: не забудьте УСН</p>
                <p className="text-xs text-blue-700">
                  Без заявления о переходе на УСН вы окажетесь на ОСНО по умолчанию — с НДС 20% и НДФЛ 13%. Подайте форму 26.2-1 вместе с документами на регистрацию или в течение <strong>30 дней</strong> после получения свидетельства ИП.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 — Расходы ИП */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Сколько ИП тратит в год: обязательные платежи
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Главная статья расходов ИП — <strong>страховые взносы</strong>. Они уплачиваются независимо от наличия дохода.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-start text-xs">
                  <div>
                    <p className="font-semibold text-slate-700">Фиксированный взнос 2026</p>
                    <p className="text-slate-500 mt-0.5">ОПС + ОМС, уплачивается до 31 декабря</p>
                  </div>
                  <span className="font-bold text-slate-800 text-base">53 658 ₽</span>
                </div>
                <div className="flex justify-between items-start text-xs border-t border-slate-200 pt-3">
                  <div>
                    <p className="font-semibold text-slate-700">Дополнительный взнос 1%</p>
                    <p className="text-slate-500 mt-0.5">С дохода свыше 300 000 ₽, до 1 июля следующего года</p>
                  </div>
                  <span className="font-bold text-slate-800 text-base">1% × (доход − 300 000)</span>
                </div>
              </div>

              <h3 className="font-semibold text-slate-800 text-sm mt-4">Пример расчёта для дохода 1 200 000 ₽/год</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Налог УСН 6% до вычета</span>
                  <span className="font-semibold">72 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Фиксированный взнос</span>
                  <span className="font-semibold">53 658 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Доп. взнос 1% × (1 200 000 − 300 000)</span>
                  <span className="font-semibold">9 000 ₽</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2">
                  <span className="text-slate-500">Налог к уплате (72 000 − 62 658)</span>
                  <span className="font-semibold text-green-700">9 342 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-700">Итого в бюджет</span>
                  <span className="font-bold text-slate-800">72 000 ₽ (= 6% от дохода)</span>
                </div>
                <p className="text-slate-500 mt-1">
                  Взносы уменьшают налог до нуля — фактическая нагрузка не выше 6% при любом доходе.
                </p>
              </div>

              <p>
                При доходе ниже <strong>~894 000 ₽/год</strong> самозанятость выгоднее: нет фиксированных взносов. При доходе выше — ИП на УСН 6% и самозанятый (6% с юрлиц) платят одинаково, но ИП не ограничен лимитом 2,4 млн ₽.
              </p>
            </div>
          </section>

          {/* Section 6 — После регистрации */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Шаг 4: что делать сразу после регистрации ИП
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="bg-indigo-100 text-indigo-800 font-bold text-xs px-2 py-1 rounded-lg shrink-0">1</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-xs">Откройте расчётный счёт</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Без расчётного счёта нельзя принимать платежи от юрлиц. Популярные варианты для ИП-фрилансеров: <strong>Тинькофф Бизнес</strong> (обслуживание от 0 ₽), <strong>Точка</strong>, <strong>Сбербанк Бизнес</strong>. Открывается за 1–2 дня онлайн.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="bg-indigo-100 text-indigo-800 font-bold text-xs px-2 py-1 rounded-lg shrink-0">2</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-xs">Подготовьте шаблоны документов</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Для работы с клиентами нужны: договор оказания услуг, счёт на оплату, акт выполненных работ. Шаблоны можно скачать в системе ФНС или в бухгалтерских сервисах. Подробнее: <Link href="/guide/akt-vypolnennyh-rabot-samozanyatogo" className="text-indigo-600 hover:underline">как оформить акт выполненных работ</Link>.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="bg-indigo-100 text-indigo-800 font-bold text-xs px-2 py-1 rounded-lg shrink-0">3</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-xs">Подключите онлайн-бухгалтерию (опционально)</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      ИП на УСН 6% без сотрудников — простейшая отчётность: одна декларация в год + КУДиР. Справитесь сами через личный кабинет ФНС. При желании — Контур.Эльба (бесплатно первый год) или Моё Дело (~490 ₽/мес).
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="bg-indigo-100 text-indigo-800 font-bold text-xs px-2 py-1 rounded-lg shrink-0">4</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-xs">Запомните ключевые даты</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      <strong>31 декабря</strong> — уплата фиксированных взносов 53 658 ₽. <strong>28 апреля</strong> — авансовый платёж УСН за 1 квартал. <strong>25 апреля следующего года</strong> — сдача декларации УСН. <strong>1 июля следующего года</strong> — уплата доп. взноса 1%.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="bg-indigo-100 text-indigo-800 font-bold text-xs px-2 py-1 rounded-lg shrink-0">5</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-xs">Рассчитайте ставку с учётом налога</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Как ИП вы платите налог со всей суммы — значит, ставку для клиентов нужно устанавливать с запасом. Используйте <Link href="/" className="text-indigo-600 hover:underline">калькулятор FreelanceCalc</Link>, чтобы рассчитать минимальную ставку с учётом УСН и взносов.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 — Сравнение с самозанятым */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              ИП vs самозанятый: быстрое сравнение
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <div className="overflow-x-auto">
                <table className="w-full text-xs border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-100 text-slate-700">
                    <tr>
                      <th className="text-left px-3 py-2 font-semibold">Параметр</th>
                      <th className="text-center px-3 py-2 font-semibold">ИП УСН 6%</th>
                      <th className="text-center px-3 py-2 font-semibold">Самозанятый</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-3 py-2">Лимит дохода</td>
                      <td className="px-3 py-2 text-center text-green-700 font-semibold">265 млн ₽/год</td>
                      <td className="px-3 py-2 text-center text-amber-600 font-semibold">2,4 млн ₽/год</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-3 py-2">Налог с физлиц</td>
                      <td className="px-3 py-2 text-center">6%</td>
                      <td className="px-3 py-2 text-center text-green-700 font-semibold">4%</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Налог с юрлиц</td>
                      <td className="px-3 py-2 text-center">6%</td>
                      <td className="px-3 py-2 text-center">6%</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-3 py-2">Обязательные взносы</td>
                      <td className="px-3 py-2 text-center text-red-600 font-semibold">53 658 ₽/год</td>
                      <td className="px-3 py-2 text-center text-green-700 font-semibold">Нет</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Наёмные сотрудники</td>
                      <td className="px-3 py-2 text-center text-green-700 font-semibold">Да</td>
                      <td className="px-3 py-2 text-center text-red-600 font-semibold">Нет</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-3 py-2">Расчётный счёт</td>
                      <td className="px-3 py-2 text-center text-green-700 font-semibold">Да</td>
                      <td className="px-3 py-2 text-center text-amber-600">Только карта</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Пенсионные накопления</td>
                      <td className="px-3 py-2 text-center text-green-700 font-semibold">Да (ОПС)</td>
                      <td className="px-3 py-2 text-center text-red-600 font-semibold">Нет</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500">
                Подробный анализ с расчётами: <Link href="/guide/ip-vs-samozanyatyj" className="text-indigo-600 hover:underline">ИП vs самозанятый — что выгоднее в 2026 году</Link>
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              Частые вопросы
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Сколько стоит открыть ИП в 2026 году?",
                  a: "Через Госуслуги или nalog.ru — бесплатно. При личной подаче в налоговую — 800 ₽ госпошлина. Срок регистрации в обоих случаях — 3 рабочих дня.",
                },
                {
                  q: "Какой ОКВЭД выбрать фрилансеру?",
                  a: "Разработчику — 62.01, дизайнеру — 74.10, маркетологу — 73.11 или 73.20. Можно добавить несколько кодов сразу. Ошибка некритична — коды меняются через заявление Р24001.",
                },
                {
                  q: "Когда подавать заявление на УСН?",
                  a: "Вместе с документами на регистрацию или в течение 30 дней после. Если пропустить срок — переход на УСН только с 1 января следующего года, до этого будете на ОСНО.",
                },
                {
                  q: "Нужна ли ИП-фрилансеру онлайн-касса?",
                  a: "Нет, если работаете только с юрлицами и ИП по безналичному расчёту. Касса нужна при приёме наличных или оплатах от физических лиц (кроме случаев работы как самозанятый).",
                },
                {
                  q: "Можно ли совмещать ИП и самозанятость?",
                  a: "Да, ИП может применять НПД. Но при этом теряет право на УСН и все спецрежимы, плюс действуют все ограничения НПД (лимит 2,4 млн ₽, нельзя нанимать). Большинству фрилансеров это невыгодно.",
                },
              ].map(({ q, a }, i) => (
                <details key={i} className="group border border-slate-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between gap-2 px-4 py-3 cursor-pointer text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors list-none">
                    <span>{q}</span>
                    <span className="text-slate-400 text-lg group-open:rotate-45 transition-transform shrink-0">+</span>
                  </summary>
                  <div className="px-4 py-3 text-sm text-slate-600 border-t border-slate-100 bg-slate-50 leading-relaxed">
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA bottom */}
          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-200 rounded-2xl p-6 text-center">
            <p className="text-base font-bold text-slate-800 mb-2">
              Рассчитайте минимальную ставку для клиентов
            </p>
            <p className="text-sm text-slate-500 mb-4">
              Введите желаемый доход — FreelanceCalc покажет сколько выставлять с учётом налога ИП УСН 6% и страховых взносов
            </p>
            <Link
              href="/"
              className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
            >
              Открыть калькулятор фрилансера →
            </Link>
          </div>

          {/* Related articles */}
          <div className="border border-slate-200 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Связанные статьи</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/ip-vs-samozanyatyj", label: "ИП vs самозанятый: что выгоднее" },
                { href: "/guide/nalog-ip-usn-6", label: "Налог ИП УСН 6%: расчёт и взносы" },
                { href: "/guide/strahovye-vznosy-ip-2026", label: "Страховые взносы ИП 2026" },
                { href: "/guide/nalog-programmist-frilanser", label: "Налог программиста-фрилансера" },
                { href: "/guide/akt-vypolnennyh-rabot-samozanyatogo", label: "Акт выполненных работ" },
                { href: "/guide/dogovor-s-samozanyatym-2026", label: "Договор с самозанятым 2026" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs text-indigo-600 hover:text-indigo-500 hover:underline bg-indigo-50 rounded-lg px-3 py-2 transition-colors"
                >
                  {label} →
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
