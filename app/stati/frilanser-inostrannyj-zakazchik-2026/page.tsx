import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";
const SLUG = "frilanser-inostrannyj-zakazchik-2026";

export const metadata: Metadata = {
  title: "Фрилансер и иностранный заказчик 2026: как работать, получать оплату и платить налоги",
  description:
    "Самозанятый может работать с иностранными клиентами — это законно. Как получить оплату в 2026, какой налог платить, как рассчитать ставку в USD/EUR и оформить договор. Практический гид для фрилансеров.",
  keywords: [
    "фрилансер иностранный заказчик",
    "самозанятый иностранный клиент",
    "как получить оплату от иностранного клиента",
    "НПД иностранный клиент 2026",
    "самозанятый работа с зарубежными компаниями",
    "фрилансер оплата в долларах",
    "самозанятый иностранная компания налог",
    "фрилансер ставка в долларах",
    "оплата от иностранца самозанятый",
    "фрилансер зарубежный клиент договор",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `/stati/${SLUG}` },
  openGraph: {
    title: "Фрилансер и иностранный заказчик 2026: оплата, налоги, ставка",
    description:
      "Самозанятый может работать с иностранными клиентами — это законно. Как получить деньги, какой налог, как посчитать ставку в валюте.",
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
        "Фрилансер и иностранный заказчик 2026: как работать, получать оплату и платить налоги",
      description:
        "Самозанятый может работать с иностранными клиентами законно. Практический гид: оплата, налог НПД, расчёт ставки в валюте, договор.",
      author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
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
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Статьи", item: `${BASE_URL}/stati` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Фрилансер и иностранный заказчик",
          item: `${BASE_URL}/stati/${SLUG}`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Может ли самозанятый работать с иностранными заказчиками?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, самозанятые (НПД) могут работать с иностранными физлицами и юридическими лицами — это прямо не запрещено ФЗ №422-ФЗ. Налоговая ставка при работе с иностранными компаниями составляет 6% (как с российскими юрлицами). Чек формируется в приложении «Мой налог» с указанием наименования иностранного заказчика.",
          },
        },
        {
          "@type": "Question",
          name: "Какой налог платит самозанятый при работе с иностранным клиентом?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "6% — как при работе с любым юридическим лицом или ИП. Если иностранный клиент — физическое лицо (фрилансер-физик нанял вас как частное лицо), то 4%. Налог рассчитывается с суммы в рублях по курсу ЦБ РФ на дату поступления платежа.",
          },
        },
        {
          "@type": "Question",
          name: "Как получить оплату от иностранного заказчика в 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "В 2026 работают: (1) Валютный счёт в российском банке — Т-Банк, Альфа-Банк, Газпромбанк принимают SWIFT из ряда стран; (2) Международные биржи (Upwork, Freelancer.com) — выплаты на карту через партнёрские сервисы; (3) Криптовалюта (USDT, BTC) с последующей конвертацией через P2P; (4) Платёжные системы стран СНГ. Оптимальный вариант зависит от страны заказчика — уточните у своего банка актуальные коридоры.",
          },
        },
        {
          "@type": "Question",
          name: "Как рассчитать ставку в долларах для иностранного клиента?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Формула: (Нужный рублёвый доход ÷ (1 − 0.06)) ÷ курс USD/RUB ÷ количество оплачиваемых часов. Пример: хочу 200 000 ₽/мес чистыми, курс 90 ₽/$, 80 оплачиваемых часов в месяц → необходимая ставка = (200 000 ÷ 0.94) ÷ 90 ÷ 80 ≈ 29.6 $/час. Добавьте 10–20% буфер на колебания курса.",
          },
        },
        {
          "@type": "Question",
          name: "Нужен ли договор с иностранным заказчиком?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Для самозанятого договор не обязателен по закону, но настоятельно рекомендуется. Стандартный формат — Service Agreement или Freelance Contract на английском языке с указанием стоимости, сроков, результата и условий оплаты. Включите пункт о применимом праве (обычно право страны заказчика или нейтральное). Ключевое: пропишите Payment в USD/EUR, а не в рублях.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/" className="text-indigo-600 font-bold text-lg tracking-tight hover:opacity-80">
            FreelanceCalc
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/stati" className="text-sm text-slate-500 hover:text-slate-700">
            Статьи
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-sm text-slate-700 truncate">Иностранный заказчик</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              🌍 Международные клиенты
            </span>
            <span className="text-xs text-slate-400">
              21 марта 2026 · 9 мин
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-4 leading-snug">
            Фрилансер и иностранный заказчик в 2026: как работать, получать оплату и платить налоги
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Иностранные клиенты платят в 2–4 раза больше российских за ту же работу.
            Многие фрилансеры избегают этого рынка из-за страха сложностей с налогами и оплатой.
            Разбираем: это законно, это реально, и вот как это работает в 2026.
          </p>
        </div>

        {/* Loss-framing hook */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-8">
          <p className="text-sm font-semibold text-amber-800 mb-1">
            💸 Сколько вы теряете, работая только с российскими клиентами?
          </p>
          <p className="text-sm text-amber-700">
            Медианная ставка российского Frontend-разработчика — 1 500–3 000 ₽/час.
            Американский стартап платит $40–80/час за аналогичную работу — это <strong>3 600–7 200 ₽/час</strong> по курсу 2026.
            Разница — в 2.4 раза при одинаковых навыках.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            1. Законно ли самозанятому работать с иностранными клиентами?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Да, полностью законно.</strong> ФЗ №422-ФЗ «О налоге на профессиональный доход»
            не запрещает самозанятым работать с иностранными заказчиками — физлицами или компаниями.
            Никаких специальных разрешений не нужно.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 mb-4">
            <p className="text-sm font-semibold text-slate-800 mb-2">Ставки НПД при работе с иностранными клиентами:</p>
            <div className="space-y-2">
              {[
                { who: "Иностранная компания / ИП", rate: "6%", note: "как с российским юрлицом" },
                { who: "Иностранное физлицо", rate: "4%", note: "как с российским физлицом" },
              ].map((row) => (
                <div key={row.who} className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">{row.who}</span>
                  <span className="font-bold text-indigo-700">{row.rate}</span>
                  <span className="text-slate-400 text-xs">{row.note}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Важно: налог рассчитывается в <strong>рублях по курсу ЦБ РФ на дату получения платежа</strong>.
            Если 1 марта получили $1 000 при курсе 88 ₽/$, налоговая база = 88 000 ₽, налог = 5 280 ₽.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            2. Как рассчитать ставку в валюте
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Иностранные клиенты работают в USD или EUR. Чтобы не продешевить, нужно пересчитать
            желаемый рублёвый доход в валютную ставку с учётом налога и курсового буфера.
          </p>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl px-5 py-4 mb-6">
            <p className="text-sm font-semibold text-indigo-900 mb-3">Формула расчёта часовой ставки в USD:</p>
            <div className="font-mono text-sm text-indigo-800 space-y-1">
              <p>1. Нужный чистый доход: 200 000 ₽/мес</p>
              <p>2. С учётом НПД 6%: 200 000 ÷ 0.94 = 212 766 ₽/мес (валовый)</p>
              <p>3. Часов в месяц (с загрузкой 70%): 160 × 0.70 = 112 ч</p>
              <p>4. Рублёвая ставка: 212 766 ÷ 112 = 1 900 ₽/час</p>
              <p>5. Курс USD: 88 ₽/$</p>
              <p className="font-bold text-indigo-900 border-t border-indigo-200 pt-2 mt-2">
                6. Ставка в USD: 1 900 ÷ 88 ≈ $21.6/час
              </p>
              <p className="text-xs text-indigo-600 mt-1">
                + буфер 15% на курсовые риски → итого $25/час
              </p>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Зачем буфер на курс?</strong> Рубль волатилен. Если вы выставите счёт $25/час
            при курсе 88, а к моменту оплаты курс упадёт до 80 — вы получите 2 000 ₽/час вместо 2 200 ₽/час.
            Буфер 10–15% страхует от таких скачков.
          </p>

          <div className="bg-white border border-slate-200 rounded-xl px-5 py-4">
            <p className="text-sm font-semibold text-slate-700 mb-3">
              💡 Используйте наш калькулятор: введите желаемый доход → получите рублёвую ставку →
              разделите на курс USD.
            </p>
            <Link
              href="/?utm_source=article&utm_medium=cta&utm_campaign=foreign_client"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
            >
              📐 Рассчитать рублёвую ставку →
            </Link>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            3. Как получить оплату от иностранного заказчика в 2026
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Это самый практический вопрос. Международная платёжная инфраструктура для России в 2026
            ограничена, но работающие варианты есть. Схема зависит от страны заказчика.
          </p>

          <div className="space-y-4 mb-6">
            {[
              {
                title: "Валютный счёт в российском банке (SWIFT/SEPA)",
                pros: "Официально, налоговая прозрачность, безопасно",
                cons: "Работает не со всеми странами, комиссии 1–2%, сроки 3–7 дней",
                works: "Подходит для клиентов из Китая, стран СНГ, некоторых европейских банков",
                color: "emerald",
              },
              {
                title: "Международные фриланс-биржи (Upwork, Freelancer.com)",
                pros: "Встроенная защита оплаты, milestone-система, рейтинг",
                cons: "Комиссия платформы 10–20%, вывод через партнёрские сервисы",
                works: "Подходит для долгосрочного сотрудничества с западными клиентами",
                color: "blue",
              },
              {
                title: "Криптовалюта (USDT TRC-20, BTC)",
                pros: "Работает практически везде, без банковских ограничений",
                cons: "Волатильность (кроме стейблкоинов), нужна P2P-конвертация в рубли",
                works: "Всё чаще используется между фрилансерами и стартапами — уточните налоговый учёт с бухгалтером",
                color: "amber",
              },
              {
                title: "Платёжные системы стран СНГ",
                pros: "Быстро, низкие комиссии, простая конвертация",
                cons: "Ограниченная география заказчиков",
                works: "Подходит при работе с клиентами из Казахстана, Беларуси, Армении, Грузии",
                color: "purple",
              },
            ].map((method) => (
              <div
                key={method.title}
                className="bg-white border border-slate-200 rounded-xl px-5 py-4"
              >
                <p className="font-semibold text-slate-900 mb-2">{method.title}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-emerald-600 font-medium">✓ Плюсы: </span>
                    <span className="text-slate-600">{method.pros}</span>
                  </div>
                  <div>
                    <span className="text-red-500 font-medium">✗ Минусы: </span>
                    <span className="text-slate-600">{method.cons}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2 bg-slate-50 rounded-lg px-3 py-1.5">
                  📍 {method.works}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4">
            <p className="text-sm font-semibold text-red-800 mb-1">⚠️ Важно: PayPal и Wise недоступны</p>
            <p className="text-sm text-red-700">
              С 2022 года PayPal прекратил работу в России, Wise заблокировал создание счетов для
              российских граждан. Если заказчик предлагает только эти варианты — сразу обсудите альтернативы.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            4. Как оформить чек в «Мой налог» для иностранного клиента
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Процедура практически не отличается от работы с российским клиентом:
          </p>

          <div className="space-y-3 mb-6">
            {[
              {
                num: "01",
                title: "Получили платёж",
                desc: "Зафиксируйте дату и сумму в рублях по курсу ЦБ РФ на день поступления средств на счёт (не дату отправки клиентом).",
              },
              {
                num: "02",
                title: "Откройте «Мой налог»",
                desc: "Нажмите «Новая продажа» → укажите наименование услуги → введите сумму в рублях (конвертированную из валюты).",
              },
              {
                num: "03",
                title: "Укажите заказчика",
                desc: "В поле «Покупатель» введите название иностранной компании (например, «Acme Corp, USA»). Это легально — иностранные компании не имеют ИНН, поэтому поле можно заполнить произвольно.",
              },
              {
                num: "04",
                title: "Отправьте чек",
                desc: "Чек можно отправить заказчику — для него это подтверждение оплаты. Некоторые зарубежные компании запрашивают инвойс — это отдельный документ, не чек НПД.",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4">
                <span className="text-2xl font-bold text-indigo-200 flex-shrink-0 w-10">{step.num}</span>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">{step.title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            5. Договор с иностранным заказчиком: что включить
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Для самозанятого договор не обязателен по закону, но при работе с иностранными клиентами
            он критически важен: защищает от неоплаты, фиксирует объём работ и условия изменений.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                title: "Обязательные пункты",
                items: [
                  "Описание услуг (Scope of Work)",
                  "Стоимость и валюта (обязательно валюта, не рубли)",
                  "Сроки оплаты (Net 15 / Net 30)",
                  "Условия ревизий (количество правок)",
                  "Условия расторжения",
                ],
                color: "indigo",
              },
              {
                title: "Рекомендуемые пункты",
                items: [
                  "Применимое право (лучше нейтральное — Швейцария, Англия)",
                  "Порядок разрешения споров (арбитраж, а не суд)",
                  "Передача прав на результат (IP rights)",
                  "NDA при необходимости",
                  "Late payment penalty (штраф за просрочку)",
                ],
                color: "slate",
              },
            ].map((col) => (
              <div key={col.title} className="bg-white border border-slate-200 rounded-xl px-4 py-4">
                <p className="font-semibold text-slate-900 mb-2">{col.title}</p>
                <ul className="space-y-1.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-indigo-400 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-slate-700 leading-relaxed">
            Стандартный шаблон Freelance Contract можно найти на AND.CO (Fiverr), HelloSign или
            сформировать через ChatGPT — укажите специальность, страну заказчика, стоимость.
            Для разовых задач до $500 достаточно переписки в email с чётким описанием работы и условий.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            6. Валютный контроль: нужно ли отчитываться?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Для самозанятых (НПД) специального валютного отчёта нет.</strong>
            Главное — зарегистрировать доход в «Мой налог» по курсу ЦБ на дату поступления.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Если доходы в иностранной валюте становятся регулярными и значительными (от 600 000 ₽/год),
            банк может запросить подтверждающие документы: договор, инвойс, акт выполненных работ.
            Это стандартная процедура валютного контроля — готовьте документы заранее.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4">
            <p className="text-sm font-semibold text-slate-700 mb-2">Что держать готовым для банка:</p>
            <ul className="space-y-1 text-sm text-slate-600">
              {[
                "Договор с иностранным заказчиком (Contract / Service Agreement)",
                "Инвойсы (Invoice) на каждый платёж с указанием описания услуги",
                "Акты выполненных работ (можно упрощённые — Statement of Work Completion)",
                "Переписка, подтверждающая факт оказания услуг",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-indigo-400 flex-shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 7 — practical tips */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            7. Практические советы: как выйти на иностранных клиентов
          </h2>

          <div className="space-y-4">
            {[
              {
                icon: "🌐",
                title: "Сделайте профиль на международной бирже",
                desc: "Upwork — крупнейшая биржа с западными клиентами. Создайте профиль с портфолио на английском, укажите почасовую ставку в USD. Первые 2–3 отклика дайте по сниженной ставке для получения отзывов — они критически важны для рейтинга.",
              },
              {
                icon: "🔗",
                title: "LinkedIn — основной B2B-канал",
                desc: "Зарубежные компании ищут фрилансеров через LinkedIn. Заполните профиль на английском (навыки, опыт, портфолио), укажите «Open to freelance». Публикуйте 1–2 поста в неделю на тему своей специальности.",
              },
              {
                icon: "💬",
                title: "Сообщества в Slack и Discord",
                desc: "Многие международные IT-сообщества имеют каналы #jobs или #hiring. Участвуйте в обсуждениях, делайте полезные посты — органическое взаимодействие приводит к заказам лучше, чем холодные обращения.",
              },
              {
                icon: "📧",
                title: "Холодные письма нишевым стартапам",
                desc: "Найдите через Product Hunt или Crunchbase стартапы в своей нише, проверьте их сайт на наличие задач по вашей специальности, напишите персонализированное письмо. Конверсия — 3–5%, но качество клиентов высокое.",
              },
            ].map((tip) => (
              <div key={tip.title} className="flex gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4">
                <span className="text-2xl flex-shrink-0">{tip.icon}</span>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">{tip.title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA калькулятор */}
        <div className="bg-indigo-600 text-white rounded-2xl px-6 py-6 mb-10 text-center">
          <p className="text-lg font-bold mb-1">📐 Рассчитайте свою ставку в USD прямо сейчас</p>
          <p className="text-indigo-200 text-sm mb-4">
            Введите желаемый доход → получите рублёвую ставку → разделите на курс
          </p>
          <Link
            href="/?utm_source=article&utm_medium=cta_bottom&utm_campaign=foreign_client"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
          >
            Открыть калькулятор →
          </Link>
        </div>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Надо ли регистрировать ИП для работы с иностранными клиентами?",
                a: "Нет, если вы самозанятый (НПД) — регистрировать ИП не нужно. Самозанятость полностью легальна для работы с иностранными заказчиками. ИП стоит рассматривать при годовом доходе выше 2.4 млн рублей (лимит НПД) или если заказчик настаивает на договоре с юрлицом.",
              },
              {
                q: "Как задекларировать доход в криптовалюте?",
                a: "Конвертируйте сумму в рубли по курсу ЦБ на дату получения (или дату реализации крипты). Зарегистрируйте доход в «Мой налог». Налоговое законодательство в отношении криптовалюты в России продолжает формироваться — рекомендуем проконсультироваться с налоговым консультантом для крупных сумм.",
              },
              {
                q: "Что делать, если иностранный заказчик не платит?",
                a: "Международное взыскание долга сложно и дорого. Главная защита — предоплата (30–50% аванс) или платёжная защита биржи (Upwork Escrow). Для новых клиентов без отзывов всегда берите 100% предоплату или используйте escrow-сервисы.",
              },
              {
                q: "Можно ли работать с иностранным заказчиком, если я ИП, а не самозанятый?",
                a: "Да. ИП на УСН 6% работает с иностранными клиентами аналогично. Нужен валютный счёт, паспорт сделки при суммах от $50 000 по одному договору. Доход учитывается в рублях по курсу ЦБ.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white border border-slate-200 rounded-xl px-5 py-4">
                <p className="font-semibold text-slate-900 mb-2">{faq.q}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related articles */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Читайте также</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: "/stati/kak-raschitat-stavku-frilansera",
                title: "Как рассчитать ставку фрилансера",
                desc: "Формула с налогами и загрузкой",
              },
              {
                href: "/stati/samozanyatyj-vs-ip-frilancer",
                title: "Самозанятый vs ИП",
                desc: "Что выгоднее при разных доходах",
              },
              {
                href: "/stati/peregovory-o-stavke-s-zakazchikom",
                title: "Переговоры о ставке",
                desc: "Как обосновать цену и не прогнуться",
              },
              {
                href: "/stati/portfolio-frilansera-2026",
                title: "Портфолио фрилансера",
                desc: "Как показать работы и получить заказы",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block bg-white border border-slate-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-slate-800 text-sm">{link.title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-slate-900 text-white rounded-2xl px-6 py-6 text-center">
          <p className="font-bold text-lg mb-1">Хотите поднять ставку на 30%?</p>
          <p className="text-slate-400 text-sm mb-4">
            Получите пошаговый план: 7 конкретных шагов — как поднять ставку за 3 месяца
          </p>
          <Link
            href="/?utm_source=article&utm_medium=bottom_cta&utm_campaign=foreign_client#pdf"
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            Скачать гид бесплатно →
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-12 py-8">
        <div className="max-w-3xl mx-auto px-4 text-center text-sm text-slate-400">
          <Link href="/" className="text-indigo-600 font-bold hover:opacity-80">
            FreelanceCalc
          </Link>{" "}
          — бесплатный калькулятор ставки фрилансера ·{" "}
          <Link href="/stati" className="hover:text-slate-600">
            Все статьи
          </Link>{" "}
          ·{" "}
          <Link href="/stavka" className="hover:text-slate-600">
            Ставки по специальностям
          </Link>
        </div>
      </footer>
    </>
  );
}
