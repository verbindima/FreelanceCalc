import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Договор с самозанятым 2026: образец, обязательные условия | FreelanceCalc",
  description:
    "Образец договора с самозанятым 2026 года: какой тип договора заключать, обязательные условия, риски переквалификации в трудовой. Шаблон для скачивания.",
  alternates: { canonical: `${BASE_URL}/guide/dogovor-s-samozanyatym-2026` },
  openGraph: {
    title: "Договор с самозанятым 2026: образец и обязательные условия",
    description:
      "Как правильно оформить договор с самозанятым, чтобы избежать переквалификации в трудовой. Образец договора оказания услуг и подряда для фрилансера.",
    url: `${BASE_URL}/guide/dogovor-s-samozanyatym-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Договор с самозанятым 2026: образец и риски",
    description:
      "Какой договор заключать с самозанятым, чтобы не переквалифицировали в трудовой. Образец и FAQ.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Нужен ли письменный договор при работе с самозанятым?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Для физических лиц-заказчиков письменный договор необязателен — достаточно чека из «Мой налог». Для юридических лиц и ИП письменный договор обязателен при сумме сделки свыше 10 000 рублей (ст. 161 ГК РФ). На практике рекомендуется заключать договор при любой сумме — для защиты обеих сторон.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли заключить трудовой договор с самозанятым?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. Самозанятый не может одновременно работать по трудовому договору у того же работодателя и оказывать ему услуги как плательщик НПД — ст. 6 Федерального закона № 422-ФЗ. Если самозанятый работал у вас по трудовому договору, то в течение 2 лет после увольнения вы не можете заключить с ним договор как с самозанятым.",
      },
    },
    {
      "@type": "Question",
      name: "Какой налог платит самозанятый по договору?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Самозанятый платит налог на профессиональный доход (НПД) самостоятельно: 4% с дохода от физических лиц, 6% с дохода от юридических лиц и ИП. Компания-заказчик не является налоговым агентом — она не удерживает НДФЛ и не начисляет страховые взносы. Подробнее: в нашем гайде «Налоги самозанятого».",
      },
    },
    {
      "@type": "Question",
      name: "Как проверить статус самозанятого перед заключением договора?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Через официальный сервис ФНС: npd.nalog.ru — введите ИНН и дату. Сервис покажет, является ли человек плательщиком НПД на указанную дату. Рекомендуется проверять статус на дату каждого платежа, чтобы не получить сюрприз в виде налоговых обязательств, если самозанятый потеряет статус.",
      },
    },
    {
      "@type": "Question",
      name: "Что грозит компании при переквалификации договора с самозанятым в трудовой?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Налоговая инспекция вправе признать отношения трудовыми. Последствия для компании: доначисление НДФЛ (13–15%), страховых взносов (30%), штрафы (20–40% от недоимки), пени. Для самого самозанятого — потеря статуса НПД на период, признанный трудовым. Ключевая защита: признаки гражданско-правового характера в договоре, акты, чеки.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Договор с самозанятым в 2026 году: образец, обязательные условия и риски",
  description:
    "Как оформить договор с самозанятым: какой тип договора выбрать, обязательные условия по 422-ФЗ и ГК РФ, образец текста, риски переквалификации в трудовой.",
  url: `${BASE_URL}/guide/dogovor-s-samozanyatym-2026`,
  datePublished: "2026-04-07",
  dateModified: "2026-04-07",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
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
      name: "Гайды",
      item: `${BASE_URL}/guide`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Договор с самозанятым 2026",
      item: `${BASE_URL}/guide/dogovor-s-samozanyatym-2026`,
    },
  ],
};

export default function DogovorSamozanyatymPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
            Договор с самозанятым в 2026 году: образец и обязательные условия
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            Какой договор заключать с самозанятым, что обязательно прописать, как не допустить переквалификации в трудовой — разбираем по закону с готовым шаблоном.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>Время чтения: 8 минут</span>
            <span>·</span>
            <span>Обновлено апрель 2026</span>
          </div>
        </header>

        {/* Quick CTA */}
        <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-5 text-center">
          <p className="text-sm font-semibold text-indigo-800 mb-1">
            Самозанятый? Рассчитайте ставку с учётом налога
          </p>
          <p className="text-xs text-indigo-600 mb-3">
            Введите желаемый доход — калькулятор покажет сумму для договора с учётом НПД 6%.
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
          >
            Открыть калькулятор →
          </Link>
        </div>

        <div className="space-y-8">

          {/* Section 1 — Нужен ли договор */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Нужен ли договор при работе с самозанятым
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Закон № 422-ФЗ о налоге на профессиональный доход не обязывает заключать письменный договор. Для небольших разовых заказов от физических лиц достаточно чека из приложения «Мой налог». Однако для юридических лиц и ИП ситуация другая.
              </p>
              <p>
                По <strong>ст. 161 ГК РФ</strong>, письменный договор обязателен между организацией или ИП и гражданином при сумме сделки свыше 10 000 рублей. Поскольку большинство фриланс-проектов превышают этот порог, для бизнеса письменный договор с самозанятым — норма.
              </p>
              <p>
                Помимо юридического требования, договор выполняет практические функции: фиксирует объём работ, сроки, порядок приёмки, ответственность сторон. Это защита как заказчика, так и исполнителя.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-blue-800 font-semibold mb-1">Важно: самозанятый не сотрудник</p>
                <p className="text-xs text-blue-700">
                  Договор с самозанятым — всегда гражданско-правовой (ГПХ), никогда не трудовой. Самозанятый не включается в штат, не получает больничный и отпускные. Это принципиально для налоговой инспекции.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 — Тип договора */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Какой тип договора заключать с самозанятым
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                С самозанятым заключают один из двух видов договора ГПХ:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-slate-700 font-semibold mb-2">Договор подряда (гл. 37 ГК РФ)</p>
                  <p className="text-xs text-slate-600 mb-2">Применяется когда результат — материальный или овеществлённый.</p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    <li>✓ Разработка сайта / приложения</li>
                    <li>✓ Дизайн, иллюстрации</li>
                    <li>✓ Ремонт, изготовление изделий</li>
                    <li>✓ Написание текстов (с передачей прав)</li>
                  </ul>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-slate-700 font-semibold mb-2">Договор возмездного оказания услуг (гл. 39 ГК РФ)</p>
                  <p className="text-xs text-slate-600 mb-2">Применяется когда результат — деятельность, процесс.</p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    <li>✓ Консультации, обучение</li>
                    <li>✓ Настройка рекламы, SEO</li>
                    <li>✓ Ведение соцсетей, поддержка</li>
                    <li>✓ Бухгалтерские / юридические услуги</li>
                  </ul>
                </div>
              </div>

              <p className="mt-2">
                На практике разница невелика: ключевое требование — результат оговорён заранее, исполнитель сам организует свою работу, заказчик не контролирует процесс.
              </p>
              <p className="text-xs text-slate-500 bg-slate-50 rounded-xl p-3">
                Если самозанятый выполняет работу по заданию, подчиняется внутреннему распорядку и получает регулярные выплаты раз в месяц — это признаки трудовых отношений. Налоговая может переквалифицировать договор, что повлечёт доначисление НДФЛ и страховых взносов.
              </p>
            </div>
          </section>

          {/* Section 3 — Обязательные условия */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Обязательные условия в договоре с самозанятым
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Чтобы договор защищал обе стороны и не был переквалифицирован в трудовой, включите следующие условия:
              </p>

              <div className="space-y-3">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-slate-700 font-semibold mb-1">1. Статус исполнителя — НПД</p>
                  <p className="text-xs text-slate-600">
                    Укажите, что исполнитель является плательщиком налога на профессиональный доход (НПД) в соответствии с ФЗ № 422-ФЗ. Добавьте обязательство самозанятого уведомить заказчика при утрате статуса НПД. Без этого пункта компания рискует неожиданно стать налоговым агентом.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-slate-700 font-semibold mb-1">2. Предмет и результат</p>
                  <p className="text-xs text-slate-600">
                    Чётко опишите, что именно должно быть сделано. «Разработка интернет-магазина» — слишком расплывчато. «Разработка сайта-каталога на базе Next.js с функционалом согласно ТЗ (Приложение № 1)» — конкретно. Детальное ТЗ делает договор подряда, а не трудовой договор.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-slate-700 font-semibold mb-1">3. Сроки выполнения</p>
                  <p className="text-xs text-slate-600">
                    Укажите конкретные даты начала и завершения работ, а не «в течение месяца с момента оплаты». При длительном проекте разбейте на этапы с датами сдачи каждого. Сроки — ещё один признак ГПХ, а не трудового договора.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-slate-700 font-semibold mb-1">4. Стоимость и порядок оплаты</p>
                  <p className="text-xs text-slate-600">
                    Зафиксируйте общую сумму вознаграждения или формулу расчёта. Укажите, что НДФЛ не удерживается и страховые взносы не начисляются, поскольку исполнитель самостоятельно уплачивает НПД. Это снимает вопросы бухгалтерии при учёте расходов.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-slate-700 font-semibold mb-1">5. Порядок сдачи-приёмки</p>
                  <p className="text-xs text-slate-600">
                    Пропишите срок приёмки (например, 5 рабочих дней) и условие, что молчание заказчика означает принятие работы. Укажите документы закрытия: акт выполненных работ + чек из «Мой налог». Подробнее об акте — в гайде{" "}
                    <Link href="/guide/akt-vypolnennyh-rabot-samozanyatogo" className="text-indigo-500 underline hover:text-indigo-700">
                      «Акт выполненных работ для самозанятого»
                    </Link>.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-slate-700 font-semibold mb-1">6. Самостоятельность исполнителя</p>
                  <p className="text-xs text-slate-600">
                    Включите формулировку: «Исполнитель самостоятельно определяет способы, методы и режим выполнения работ, не подчиняется внутреннему распорядку Заказчика». Это ключевой признак ГПХ против трудового договора.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 — Образец */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Образец договора с самозанятым (шаблон)
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Ниже — сокращённый образец договора возмездного оказания услуг с самозанятым. Адаптируйте под свой проект, при необходимости добавьте ТЗ приложением.
              </p>

              <div className="bg-slate-900 text-slate-100 rounded-xl p-5 font-mono text-xs leading-relaxed space-y-1 overflow-x-auto">
                <p className="text-slate-400">{"/* Договор возмездного оказания услуг с самозанятым */"}</p>
                <p>&nbsp;</p>
                <p className="font-semibold text-white">ДОГОВОР ВОЗМЕЗДНОГО ОКАЗАНИЯ УСЛУГ № ___</p>
                <p>г. Москва &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; «__» ________ 2026 г.</p>
                <p>&nbsp;</p>
                <p>ООО «Компания», ИНН 7701234567, в лице генерального</p>
                <p>директора Петрова И.И. («Заказчик»), с одной стороны,</p>
                <p>и Иванова Мария Сергеевна, ИНН 771234567890,</p>
                <p>плательщик НПД по ФЗ № 422-ФЗ («Исполнитель»),</p>
                <p>с другой стороны, заключили договор:</p>
                <p>&nbsp;</p>
                <p className="text-slate-300 font-semibold">1. ПРЕДМЕТ ДОГОВОРА</p>
                <p>1.1. Исполнитель оказывает услуги по [описание услуг]</p>
                <p>     согласно Техническому заданию (Приложение № 1).</p>
                <p>1.2. Срок: с __.__.2026 по __.__.2026.</p>
                <p>&nbsp;</p>
                <p className="text-slate-300 font-semibold">2. СТОИМОСТЬ И ОПЛАТА</p>
                <p>2.1. Вознаграждение: ____ рублей.</p>
                <p>2.2. Исполнитель применяет НПД (ФЗ № 422-ФЗ).</p>
                <p>     НДФЛ не удерживается. Страховые взносы</p>
                <p>     не начисляются.</p>
                <p>2.3. Оплата — в течение 5 рабочих дней после</p>
                <p>     подписания акта и получения чека НПД.</p>
                <p>&nbsp;</p>
                <p className="text-slate-300 font-semibold">3. СДАЧА-ПРИЁМКА</p>
                <p>3.1. Исполнитель направляет акт Заказчику.</p>
                <p>3.2. Заказчик принимает в течение 5 рабочих дней</p>
                <p>     или направляет мотивированный отказ.</p>
                <p>3.3. Молчание = принятие (ст. 753 ГК РФ).</p>
                <p>&nbsp;</p>
                <p className="text-slate-300 font-semibold">4. СТАТУС ИСПОЛНИТЕЛЯ</p>
                <p>4.1. Исполнитель является плательщиком НПД.</p>
                <p>4.2. При утрате статуса НПД Исполнитель уведомляет</p>
                <p>     Заказчика в течение 3 рабочих дней.</p>
                <p>4.3. Исполнитель самостоятельно определяет режим</p>
                <p>     и способ работы, не подчиняется внутреннему</p>
                <p>     распорядку Заказчика.</p>
                <p>&nbsp;</p>
                <p>Заказчик: _______________ / Петров И.И. /</p>
                <p>Исполнитель: _____________ / Иванова М.С. /</p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-amber-800 font-semibold mb-1">Не забудьте добавить в договор</p>
                <ul className="text-xs text-amber-700 space-y-1">
                  <li>• Условие о конфиденциальности (если передаёте доступы или внутренние данные)</li>
                  <li>• Порядок передачи результатов (ссылка, git-репозиторий, файлы)</li>
                  <li>• Санкции за срыв сроков (неустойка 0,1–0,5% в день)</li>
                  <li>• Разрешение споров (переговоры → суд по месту нахождения Заказчика)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 — Риски переквалификации */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Риски переквалификации договора с самозанятым в трудовой
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Налоговая инспекция и трудовая инспекция (ГИТ) имеют право признать отношения с самозанятым трудовыми. Это происходит, если фактические условия сотрудничества напоминают трудовой договор.
              </p>

              <div className="space-y-2">
                <p className="font-semibold text-slate-700 text-xs">Признаки, которые насторожат инспектора:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                    <p className="text-xs font-semibold text-red-800 mb-1">Опасно ❌</p>
                    <ul className="text-xs text-red-700 space-y-1">
                      <li>Фиксированная зарплата 2 раза в месяц</li>
                      <li>Работа в офисе по расписанию</li>
                      <li>Единственный или постоянный заказчик</li>
                      <li>Самозанятый — бывший сотрудник (менее 2 лет)</li>
                      <li>Выплата за явку, а не за результат</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                    <p className="text-xs font-semibold text-green-800 mb-1">Безопасно ✓</p>
                    <ul className="text-xs text-green-700 space-y-1">
                      <li>Оплата за конкретный результат</li>
                      <li>Исполнитель сам выбирает время и место</li>
                      <li>Разные заказчики у самозанятого</li>
                      <li>Договор на проект (не бессрочный)</li>
                      <li>Есть акт и чек по каждой выплате</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-red-800 font-semibold mb-1">Последствия переквалификации</p>
                <p className="text-xs text-red-700">
                  Компании доначислят НДФЛ (13–15% от выплат), страховые взносы (30%), штраф до 40% от недоимки, пени за весь период. При систематическом нарушении — административная ответственность руководителя по ст. 5.27 КоАП.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 — FAQ */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Частые вопросы о договоре с самозанятым
            </h2>
            <div className="space-y-4">

              <div>
                <p className="text-sm font-semibold text-slate-800 mb-1">
                  Нужен ли письменный договор при работе с самозанятым?
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Для физических лиц при сумме до 10 000 рублей — необязателен, достаточно чека. Для юридических лиц и ИП при сумме свыше 10 000 рублей письменный договор обязателен по ст. 161 ГК РФ. На практике рекомендуем заключать договор всегда — это защита обеих сторон.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-800 mb-1">
                  Можно ли заключить трудовой договор с самозанятым?
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Нет. По ст. 6 ФЗ № 422-ФЗ, доходы от работодателей (нынешних и бывших — в течение 2 лет) не облагаются НПД. Значит, если самозанятый работает у вас по трудовому договору, вы не можете одновременно заключить с ним договор ГПХ как с самозанятым.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-800 mb-1">
                  Какой налог платит самозанятый по договору?
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Самозанятый платит НПД самостоятельно: 6% с дохода от юридических лиц и ИП, 4% — от физических. Заказчик ничего не удерживает и не перечисляет в бюджет за исполнителя. Это одно из ключевых преимуществ работы с самозанятыми. Подробнее — в гайде{" "}
                  <Link href="/guide/nalog-samozanyatyj" className="text-indigo-500 underline hover:text-indigo-700">
                    «Налоги самозанятого»
                  </Link>.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-800 mb-1">
                  Как проверить статус самозанятого перед заключением договора?
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Через официальный сервис ФНС: <strong>npd.nalog.ru</strong>. Введите ИНН и дату — сервис подтвердит статус. Проверяйте на дату каждого платежа: если самозанятый потеряет статус НПД, компания-заказчик автоматически становится налоговым агентом по НДФЛ.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-800 mb-1">
                  Что грозит при переквалификации договора в трудовой?
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Доначисление НДФЛ (13–15%), страховых взносов (30%), штрафы 20–40% от недоимки, пени. Для самого самозанятого — потеря статуса НПД и доначисление налогов за период. Защита: признаки ГПХ в договоре, разовые проекты, акты, чеки, самостоятельность исполнителя.
                </p>
              </div>

            </div>
          </section>

          {/* Итог */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Итог: чек-лист при заключении договора с самозанятым
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <p className="text-xs text-slate-600">Проверить статус НПД на <strong>npd.nalog.ru</strong> по ИНН</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <p className="text-xs text-slate-600">Заключить договор ГПХ (подряда или оказания услуг) — не трудовой</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <p className="text-xs text-slate-600">Указать в договоре статус исполнителя как плательщика НПД</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <p className="text-xs text-slate-600">Чётко описать результат, срок и сумму</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <p className="text-xs text-slate-600">Прописать самостоятельность исполнителя (не подчиняется распорядку)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <p className="text-xs text-slate-600">Закрыть проект актом + чеком из «Мой налог»</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <p className="text-xs text-slate-600">Повторно проверять статус НПД на дату каждой выплаты</p>
                </div>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Читайте также</p>
            <div className="space-y-2">
              <Link
                href="/guide/akt-vypolnennyh-rabot-samozanyatogo"
                className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
              >
                <span>→</span>
                <span>Акт выполненных работ для самозанятого: нужен ли, образец</span>
              </Link>
              <Link
                href="/guide/nalog-samozanyatyj"
                className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
              >
                <span>→</span>
                <span>Налоги самозанятого: ставки 4% и 6%, вычет, лимит 2,4 млн</span>
              </Link>
              <Link
                href="/guide/nalog-dogovor-gph"
                className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
              >
                <span>→</span>
                <span>НДФЛ и взносы по договору ГПХ в 2026 году</span>
              </Link>
              <Link
                href="/guide/ip-vs-samozanyatyj"
                className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
              >
                <span>→</span>
                <span>ИП или самозанятый: что выгоднее для фрилансера</span>
              </Link>
            </div>
          </section>

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 bg-indigo-50 border border-indigo-200 rounded-2xl p-6 text-center">
          <p className="text-base font-bold text-indigo-900 mb-1">
            Рассчитайте ставку для договора с самозанятым
          </p>
          <p className="text-sm text-indigo-600 mb-4">
            Самозанятый? Введите желаемую сумму на руки — калькулятор покажет, какую цену указать в договоре с учётом НПД 6%.
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
          >
            Открыть FreelanceCalc →
          </Link>
        </div>

        {/* Footer nav */}
        <nav className="mt-8 text-center text-xs text-slate-400 space-x-4">
          <Link href="/" className="hover:text-slate-600 hover:underline">Калькулятор</Link>
          <Link href="/guide/nalog-samozanyatyj" className="hover:text-slate-600 hover:underline">Налог самозанятого</Link>
          <Link href="/guide/akt-vypolnennyh-rabot-samozanyatogo" className="hover:text-slate-600 hover:underline">Акт выполненных работ</Link>
        </nav>
      </main>
    </>
  );
}
