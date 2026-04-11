import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Самозанятый и аренда квартиры 2026: налог 4%, как оформить | FreelanceCalc",
  description:
    "Как сдавать квартиру как самозанятый в 2026: налог 4% вместо 13% НДФЛ. Экономия до 108 000 ₽/год. Ограничения, чек арендатору, лимит 2.4 млн ₽ — всё в одной инструкции.",
  alternates: { canonical: `${BASE_URL}/guide/samozanyatyj-arenda-kvartiry-2026` },
  openGraph: {
    title: "Самозанятый и аренда квартиры 2026: 4% вместо 13%",
    description:
      "Зарегистрируйтесь как самозанятый и платите 4% с аренды вместо 13% НДФЛ. Экономия 108 000 ₽/год при аренде 40 000 ₽/мес. Пошаговая инструкция.",
    url: `${BASE_URL}/guide/samozanyatyj-arenda-kvartiry-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Самозанятый аренда квартиры 2026: налог 4% вместо 13%",
    description:
      "Как законно сдавать квартиру и платить минимальный налог. Калькулятор экономии, ограничения НПД, чек арендатору.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Может ли самозанятый сдавать квартиру в аренду?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Согласно ФЗ-422, плательщики НПД вправе сдавать жилую недвижимость в аренду (наём). Ставка налога — 4% при сдаче физлицам, 6% — юрлицам и ИП. Ограничение: только жилые помещения (квартиры, дома, комнаты). Коммерческую недвижимость (офисы, склады, торговые площади) на НПД сдавать нельзя.",
      },
    },
    {
      "@type": "Question",
      name: "Нужно ли платить налог с коммунальных платежей при сдаче квартиры?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Если арендатор возмещает коммунальные расходы сверх фиксированной платы — налог платить не нужно при условии, что расходы подтверждены счётчиками. Если коммуналка включена в единую арендную плату — весь платёж облагается налогом. Рекомендуется разделить в договоре: 'арендная плата X ₽ + возмещение ЖКУ по счётчикам'.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли сдавать квартиру посуточно как самозанятый?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. Посуточная аренда (гостиничный сервис) запрещена для НПД — такая деятельность классифицируется как гостиничная услуга, а не жилой наём. Для посуточной аренды нужно открыть ИП. При долгосрочном найме (от месяца) — НПД разрешён.",
      },
    },
    {
      "@type": "Question",
      name: "Что будет, если доход от аренды превысит лимит 2.4 млн ₽?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "При превышении 2.4 млн ₽/год статус самозанятого автоматически аннулируется. До конца календарного года с суммы превышения придётся заплатить 13% НДФЛ как физлицо (или перейти на ИП заранее). Чтобы избежать этого: при ежемесячной аренде 200 000 ₽ лимит исчерпывается за 12 месяцев — нужно заблаговременно перейти на ИП УСН 6%.",
      },
    },
    {
      "@type": "Question",
      name: "Нужно ли заключать договор аренды с самозанятым?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Договор найма жилого помещения обязателен по ГК РФ при сроке более 1 года — тогда он регистрируется в Росреестре. При сроке до 1 года письменный договор не обязателен, но настоятельно рекомендуется для защиты обеих сторон и подтверждения расходов арендатора-юрлица.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Самозанятый и аренда квартиры в 2026 году: налог 4%, ограничения, как оформить",
  description:
    "Подробный гайд: как зарегистрироваться самозанятым для сдачи квартиры, считать налог 4%/6%, выставлять чеки арендаторам и не нарушить лимит 2.4 млн ₽.",
  url: `${BASE_URL}/guide/samozanyatyj-arenda-kvartiry-2026`,
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function SamozanyatyArendaKvartiry2026() {
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
        <section className="bg-gradient-to-br from-slate-50 to-amber-50 border-b border-slate-200 py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
              <Link href="/" className="hover:text-blue-600">FreelanceCalc</Link>
              <span>→</span>
              <Link href="/guide" className="hover:text-blue-600">Гайды</Link>
              <span>→</span>
              <span>Самозанятый и аренда квартиры</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              🏠 НПД для арендодателей — 2026
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Самозанятый и аренда квартиры в 2026 году: налог 4%, как оформить
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Сдаёте квартиру и платите 13% НДФЛ? Как самозанятый вы заплатите только 4% — и это легально.
              При аренде 40 000 ₽/мес экономия составит <strong>43 200 ₽ в год</strong>.
            </p>
            {/* Быстрый итог */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-green-600">4%</div>
                <div className="text-xs text-slate-500 mt-1">налог с физлиц</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-blue-600">6%</div>
                <div className="text-xs text-slate-500 mt-1">налог с юрлиц/ИП</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-slate-800">2.4 млн</div>
                <div className="text-xs text-slate-500 mt-1">лимит дохода/год</div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Калькулятор экономии */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Сколько сэкономите: калькулятор сравнения
            </h2>
            <p className="text-slate-600 mb-6">
              Сравним три режима для арендодателя при ежемесячной плате <strong>40 000 ₽</strong>:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 border border-slate-200 font-semibold">Режим</th>
                    <th className="text-right p-3 border border-slate-200 font-semibold">Ставка</th>
                    <th className="text-right p-3 border border-slate-200 font-semibold">Налог/мес</th>
                    <th className="text-right p-3 border border-slate-200 font-semibold">Налог/год</th>
                    <th className="text-right p-3 border border-slate-200 font-semibold">Чистый доход/год</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-red-50">
                    <td className="p-3 border border-slate-200">Физлицо (НДФЛ)</td>
                    <td className="text-right p-3 border border-slate-200">13%</td>
                    <td className="text-right p-3 border border-slate-200">5 200 ₽</td>
                    <td className="text-right p-3 border border-slate-200 font-semibold text-red-600">62 400 ₽</td>
                    <td className="text-right p-3 border border-slate-200">417 600 ₽</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="p-3 border border-slate-200 font-semibold">Самозанятый (НПД)</td>
                    <td className="text-right p-3 border border-slate-200">4%</td>
                    <td className="text-right p-3 border border-slate-200">1 600 ₽</td>
                    <td className="text-right p-3 border border-slate-200 font-bold text-green-600">19 200 ₽</td>
                    <td className="text-right p-3 border border-slate-200 font-bold">460 800 ₽</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200">ИП УСН 6%</td>
                    <td className="text-right p-3 border border-slate-200">6% + взносы</td>
                    <td className="text-right p-3 border border-slate-200">2 400 ₽ + 3 883 ₽*</td>
                    <td className="text-right p-3 border border-slate-200 text-slate-600">75 396 ₽</td>
                    <td className="text-right p-3 border border-slate-200">404 604 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-2">* Фиксированные взносы ИП 2026: 53 658 ₽/год (4 471 ₽/мес). При доходе до 2.4 млн ₽ НПД выгоднее ИП УСН.</p>

            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-green-800 font-semibold">
                💡 Экономия самозанятого vs физлицо: <span className="text-2xl">43 200 ₽/год</span>
              </p>
              <p className="text-green-700 text-sm mt-1">
                При аренде 40 000 ₽/мес вы экономите 3 600 ₽ каждый месяц просто за счёт смены налогового режима.
              </p>
            </div>
          </section>

          {/* Ограничения */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Что разрешено и что запрещено на НПД
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-800 mb-3">✅ Разрешено</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Долгосрочный наём квартиры, комнаты, дома</li>
                  <li>• Сдача нескольких объектов жилья одновременно</li>
                  <li>• Аренда физлицам, ИП и юрлицам</li>
                  <li>• Сдача доли в квартире</li>
                  <li>• Совмещение с основной работой по ТД</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-bold text-red-800 mb-3">❌ Запрещено</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>• Посуточная и краткосрочная аренда (гостиничный сервис)</li>
                  <li>• Аренда коммерческой недвижимости (офис, склад, торговая точка)</li>
                  <li>• Субаренда (сдавать снятое жильё в аренду)</li>
                  <li>• Доход от аренды свыше 2.4 млн ₽/год</li>
                  <li>• Аренда нежилых помещений (гараж, апартаменты без статуса жилья)</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-amber-800 text-sm">
                <strong>Важно про апартаменты:</strong> апартаменты юридически являются нежилыми помещениями,
                даже если в них живут люди. Сдавать апартаменты на НПД нельзя — только квартиры и дома
                со статусом жилого помещения. Проверьте назначение в выписке из ЕГРН.
              </p>
            </div>
          </section>

          {/* Как зарегистрироваться */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Как зарегистрироваться самозанятым для сдачи квартиры
            </h2>
            <p className="text-slate-600 mb-6">
              Регистрация занимает 5–10 минут и не требует похода в налоговую:
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Скачайте приложение «Мой налог»",
                  desc: "Приложение доступно в RuStore, AppGallery, App Store и Google Play. Альтернативно — веб-версия на lknpd.nalog.ru.",
                },
                {
                  step: "2",
                  title: "Зарегистрируйтесь через Госуслуги или по паспорту",
                  desc: "Выберите вариант входа: через Госуслуги (быстро, паспорт не нужен) или по скану паспорта + селфи. Укажите регион — регион сдаваемой квартиры, не проживания.",
                },
                {
                  step: "3",
                  title: "Выберите вид деятельности",
                  desc: "В разделе «Виды деятельности» выберите «Аренда/наём жилых помещений». Можно добавить несколько видов, если совмещаете с другой деятельностью.",
                },
                {
                  step: "4",
                  title: "Получите справку о постановке на учёт",
                  desc: "Уведомление из ФНС придёт в приложение в течение нескольких минут. Статус НПД активен с даты регистрации.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Как выставить чек */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Как выставить чек арендатору
            </h2>
            <p className="text-slate-600 mb-6">
              Чек обязателен при каждом получении арендной платы. Выставляется в приложении «Мой налог»:
            </p>

            <div className="space-y-3">
              <div className="flex gap-3 items-start p-4 bg-white border border-slate-200 rounded-xl">
                <span className="text-xl">📱</span>
                <div>
                  <p className="font-semibold text-slate-900">Откройте «Мой налог» → «Новая продажа»</p>
                  <p className="text-sm text-slate-500">Нажмите оранжевую кнопку «Новая продажа» на главном экране.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-4 bg-white border border-slate-200 rounded-xl">
                <span className="text-xl">💰</span>
                <div>
                  <p className="font-semibold text-slate-900">Введите сумму и название услуги</p>
                  <p className="text-sm text-slate-500">Сумма — арендная плата за месяц. Название — «Аренда квартиры по адресу [адрес] за [месяц/год]».</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-4 bg-white border border-slate-200 rounded-xl">
                <span className="text-xl">👤</span>
                <div>
                  <p className="font-semibold text-slate-900">Укажите получателя</p>
                  <p className="text-sm text-slate-500">
                    Физлицо — выберите «Физическое лицо» (ставка 4%).
                    Юрлицо или ИП — выберите «Юридическое лицо», введите ИНН (ставка 6%).
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-4 bg-white border border-slate-200 rounded-xl">
                <span className="text-xl">📧</span>
                <div>
                  <p className="font-semibold text-slate-900">Отправьте чек арендатору</p>
                  <p className="text-sm text-slate-500">Чек можно отправить по email, через мессенджер или показать QR-код. Для арендаторов-физлиц чек необязательно передавать, но рекомендуется для подтверждения оплаты.</p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-blue-800 text-sm">
                <strong>Когда выставлять чек:</strong> при каждом поступлении средств — в день получения
                наличных или в день зачисления на карту. Опоздание с чеком — штраф 20% от суммы,
                при повторном нарушении в течение 6 месяцев — 100% от суммы.
              </p>
            </div>
          </section>

          {/* Лимит */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Лимит 2.4 млн ₽: кого касается и что делать
            </h2>
            <p className="text-slate-600 mb-6">
              Максимальный доход самозанятого — 2 400 000 ₽ в год. При превышении статус НПД прекращается автоматически.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 border border-slate-200 font-semibold">Аренда/мес</th>
                    <th className="text-right p-3 border border-slate-200 font-semibold">Доход/год</th>
                    <th className="text-right p-3 border border-slate-200 font-semibold">Лимит исчерпан через</th>
                    <th className="text-right p-3 border border-slate-200 font-semibold">Что делать</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-slate-200">до 40 000 ₽</td>
                    <td className="text-right p-3 border border-slate-200">до 480 000 ₽</td>
                    <td className="text-right p-3 border border-slate-200 text-green-600">Лимит не исчерпается</td>
                    <td className="text-right p-3 border border-slate-200">Остаётесь на НПД</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 border border-slate-200">100 000 ₽</td>
                    <td className="text-right p-3 border border-slate-200">1 200 000 ₽</td>
                    <td className="text-right p-3 border border-slate-200 text-green-600">Лимит не исчерпается</td>
                    <td className="text-right p-3 border border-slate-200">Остаётесь на НПД</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200">200 000 ₽</td>
                    <td className="text-right p-3 border border-slate-200">2 400 000 ₽</td>
                    <td className="text-right p-3 border border-slate-200 text-amber-600">Ровно 12 месяцев</td>
                    <td className="text-right p-3 border border-slate-200">Перейти на ИП УСН</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 border border-slate-200">300 000 ₽</td>
                    <td className="text-right p-3 border border-slate-200">3 600 000 ₽</td>
                    <td className="text-right p-3 border border-slate-200 text-red-600">Через 8 месяцев</td>
                    <td className="text-right p-3 border border-slate-200">Сразу ИП УСН 6%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-amber-900 font-semibold mb-2">Что происходит при превышении лимита</p>
              <ul className="text-sm text-amber-800 space-y-1">
                <li>• ФНС автоматически снимает статус НПД с даты превышения</li>
                <li>• С суммы превышения нужно заплатить 13% НДФЛ</li>
                <li>• Если заранее зарегистрировать ИП — переход на УСН 6% без потери налогового режима</li>
                <li>• Повторно зарегистрироваться как самозанятый можно с 1 января следующего года</li>
              </ul>
            </div>
          </section>

          {/* Налоговый вычет */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Бонус: налоговый вычет 10 000 ₽ для новых самозанятых
            </h2>
            <p className="text-slate-600 mb-4">
              При первичной регистрации как самозанятый государство начисляет вычет 10 000 ₽.
              Он автоматически снижает ставку налога:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="font-semibold text-slate-900 mb-2">До исчерпания вычета</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Ставка с физлиц: 3% (вместо 4%)</li>
                  <li>• Ставка с юрлиц: 4% (вместо 6%)</li>
                  <li>• Вычет расходуется автоматически</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="font-semibold text-slate-900 mb-2">Расчёт при аренде 40 000 ₽/мес</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Вычет иссякает за: ~25 месяцев</li>
                  <li>• Экономия в первые месяцы: 400 ₽/мес</li>
                  <li>• Итого сэкономите ещё: 10 000 ₽</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Частые вопросы
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Может ли самозанятый сдавать квартиру в аренду?",
                  a: "Да. Сдача жилой недвижимости физлицам разрешена на НПД. Ставка — 4% для физлиц, 6% для ИП и юрлиц. Запрещена только посуточная аренда и сдача коммерческой недвижимости.",
                },
                {
                  q: "Нужно ли платить налог с коммунальных платежей при сдаче квартиры?",
                  a: "Если ЖКУ возмещается по счётчикам отдельно от арендной платы — не нужно. Если коммуналка включена в общую плату — облагается налогом вся сумма. Разделите платежи в договоре.",
                },
                {
                  q: "Можно ли сдавать квартиру посуточно как самозанятый?",
                  a: "Нет. Посуточная аренда — гостиничная деятельность, она запрещена на НПД. Для Airbnb-модели нужно ИП.",
                },
                {
                  q: "Что будет, если доход от аренды превысит лимит 2.4 млн ₽?",
                  a: "Статус НПД аннулируется автоматически. Если заранее открыть ИП, переход пройдёт бесшовно. Без ИП — платите 13% НДФЛ с суммы превышения.",
                },
                {
                  q: "Нужно ли заключать договор аренды с самозанятым?",
                  a: "При сроке найма до 1 года — договор не обязателен по закону, но рекомендуется. При сроке от 1 года — договор обязателен и подлежит регистрации в Росреестре.",
                },
              ].map((item, idx) => (
                <details
                  key={idx}
                  className="group border border-slate-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex justify-between items-center p-4 cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-slate-900">
                    {item.q}
                    <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <div className="p-4 text-slate-600 text-sm leading-relaxed border-t border-slate-200">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA + Навигация */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Рассчитайте свою ставку фрилансера
            </h2>
            <p className="text-slate-600 mb-4 text-sm">
              Знаете сколько хотите получать в месяц? Калькулятор покажет минимальную ставку в час с учётом налогов, отпуска и простоев.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-sm"
            >
              Рассчитать ставку →
            </Link>
          </section>

          {/* Связанные статьи */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Читайте также</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { href: "/guide/nalog-samozanyatyj", title: "Налог самозанятого: 4% и 6% — полный разбор" },
                { href: "/guide/nalogovyj-vychet-samozanyatogo-2026", title: "Налоговый вычет 10 000 ₽ для самозанятых" },
                { href: "/guide/samozanyatyj-kak-vystavit-chek-2026", title: "Как выставить чек самозанятому" },
                { href: "/guide/shtrafy-samozanyatogo-2026", title: "Штрафы самозанятых в 2026 году" },
                { href: "/guide/ip-vs-samozanyatyj", title: "ИП или самозанятый: что выгоднее?" },
                { href: "/guide/samozanyatyj-prevysil-limit", title: "Что делать, если самозанятый превысил лимит" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="p-3 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-sm text-slate-700 hover:text-blue-700"
                >
                  → {link.title}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
