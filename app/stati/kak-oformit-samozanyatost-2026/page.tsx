import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";
const SLUG = "kak-oformit-samozanyatost-2026";

export const metadata: Metadata = {
  title: "Как оформить самозанятость в 2026: пошаговая инструкция | FreelanceCalc",
  description:
    "Пошаговая инструкция по регистрации самозанятого в 2026 году: приложение Мой налог, Госуслуги или банк. Как не упустить налоговый бонус 10 000 ₽. Что делать после регистрации.",
  keywords: [
    "как оформить самозанятость",
    "как зарегистрироваться самозанятым 2026",
    "оформление самозанятости пошагово",
    "самозанятость через мой налог",
    "самозанятость через госуслуги 2026",
    "как стать самозанятым 2026",
    "регистрация самозанятого 2026",
    "налоговый бонус самозанятого 10000",
    "самозанятый документы для регистрации",
    "НПД как оформить",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `/stati/${SLUG}` },
  openGraph: {
    title: "Как оформить самозанятость в 2026: не теряйте бонус 10 000 ₽",
    description:
      "Большинство не знают о налоговом бонусе 10 000 ₽ для новых самозанятых. Пошаговая инструкция регистрации за 10 минут и что делать дальше.",
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
      headline: "Как оформить самозанятость в 2026: пошаговая инструкция",
      description:
        "Пошаговая инструкция регистрации самозанятого через приложение Мой налог: от скачивания до первого чека.",
      inLanguage: "ru",
      url: `${BASE_URL}/stati/${SLUG}`,
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      author: { "@type": "Organization", name: "FreelanceCalc" },
      publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Статьи", item: `${BASE_URL}/stati` },
          {
            "@type": "ListItem",
            position: 3,
            name: "Как оформить самозанятость 2026",
            item: `${BASE_URL}/stati/${SLUG}`,
          },
        ],
      },
    },
    {
      "@type": "HowTo",
      name: "Как оформить самозанятость через приложение Мой налог",
      description:
        "Пошаговая инструкция по регистрации плательщика НПД через приложение ФНС России «Мой налог».",
      totalTime: "PT10M",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Скачайте приложение «Мой налог»",
          text: "Скачайте бесплатное приложение ФНС России «Мой налог» из App Store или Google Play.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Выберите способ регистрации",
          text: "Войдите через Госуслуги (быстро, без ввода данных) или загрузите паспорт вручную.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Укажите вид деятельности",
          text: "Выберите категорию деятельности — от «Разработки ПО» до «Консультации». Можно выбрать несколько.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Подтвердите регистрацию",
          text: "Нажмите «Стать самозанятым». Статус присваивается мгновенно — уведомление от ФНС приходит в течение нескольких минут.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Выставьте первый чек",
          text: "Сразу после регистрации вы можете выставлять чеки клиентам прямо в приложении. Налог рассчитывается автоматически.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Нужно ли ехать в налоговую для оформления самозанятости?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет. Регистрация полностью дистанционная: через приложение «Мой налог», сайт ФНС или банк-партнёр. Личного присутствия не требуется.",
          },
        },
        {
          "@type": "Question",
          name: "Какие документы нужны для регистрации самозанятого?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Только паспорт и ИНН (он есть у каждого гражданина). Если регистрируетесь через Госуслуги — они подтянутся автоматически.",
          },
        },
        {
          "@type": "Question",
          name: "Что такое налоговый бонус 10 000 ₽ для самозанятых?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "При регистрации ФНС автоматически начисляет налоговый вычет 10 000 ₽. Пока бонус не исчерпан, ставка снижается: 4% → 3% (с физлицами) и 6% → 4% (с юрлицами). Бонус расходуется постепенно с каждым налоговым платежом.",
          },
        },
        {
          "@type": "Question",
          name: "Можно ли совмещать самозанятость с основной работой?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Самозанятость не мешает официальному трудоустройству. Исключение: нельзя выставлять чеки своему работодателю или бывшему работодателю в течение 2 лет после увольнения.",
          },
        },
        {
          "@type": "Question",
          name: "Что будет, если превысить лимит 2 400 000 ₽?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Статус самозанятого автоматически прекращается при превышении лимита 2 400 000 ₽ в год. Доходы сверх лимита облагаются как у физлица (НДФЛ 13%). Чтобы продолжить работу законно — нужно открывать ИП.",
          },
        },
        {
          "@type": "Question",
          name: "Как самозанятому платить налог?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Налог рассчитывается автоматически в приложении «Мой налог». До 12 числа каждого месяца приходит уведомление с суммой за прошлый месяц. Оплатить можно картой прямо в приложении.",
          },
        },
      ],
    },
  ],
};

export default function KakOformitSamozanyatostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
            <Link href="/" className="text-blue-600 font-bold text-lg">
              FreelanceCalc
            </Link>
            <span className="text-gray-300">/</span>
            <Link href="/stati" className="text-sm text-gray-500 hover:text-gray-700">
              Статьи
            </Link>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-10">
          {/* Article header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                Для самозанятых
              </span>
              <span className="text-xs text-gray-400">Март 2026</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Как оформить самозанятость в 2026 году: пошаговая инструкция
            </h1>
            <p className="text-lg text-gray-600">
              Регистрация занимает 10 минут. Большинство делают это правильно — но
              почти никто не знает о&nbsp;налоговом бонусе{" "}
              <strong className="text-gray-900">10&nbsp;000&nbsp;₽</strong>, который
              ФНС начисляет автоматически каждому новому самозанятому.
            </p>
          </div>

          {/* Loss framing highlight */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-8">
            <p className="text-sm font-semibold text-red-800 mb-1">
              📉 Без знания этого — переплачиваете налог с первого дня
            </p>
            <p className="text-sm text-red-700">
              Налоговый бонус 10&nbsp;000&nbsp;₽ снижает реальную ставку НПД: вместо 4%
              платите 3% (с физлицами) и вместо 6% — 4% (с компаниями). Бонус действует
              автоматически, но только пока вы его не исчерпаете. Как только знаете об
              этом — используете деньги умнее.
            </p>
          </div>

          {/* Ways to register */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Три способа зарегистрироваться
            </h2>
            <div className="space-y-3">
              {[
                {
                  num: "1",
                  title: "Приложение «Мой налог» — самый быстрый",
                  desc: "Официальное приложение ФНС. Регистрация через Госуслуги занимает 3–5 минут, паспорт вводить не нужно. Именно через него выставляются чеки и платится налог.",
                  badge: "Рекомендуем",
                  badgeColor: "bg-green-100 text-green-700",
                },
                {
                  num: "2",
                  title: "Сайт lknpd.nalog.ru",
                  desc: "Веб-версия «Мой налог» — если не хотите устанавливать приложение. Функционал тот же, но мобильное приложение удобнее для ежедневной работы.",
                  badge: null,
                  badgeColor: "",
                },
                {
                  num: "3",
                  title: "Через банк-партнёр",
                  desc: "Сбер, Тинькофф, ВТБ, Альфа и другие банки позволяют стать самозанятым прямо в своём приложении. Удобно, если вы уже пользуетесь их услугами — всё в одном месте.",
                  badge: null,
                  badgeColor: "",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="bg-white border border-gray-100 rounded-xl p-4 flex gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.num}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                      {item.badge && (
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full ${item.badgeColor}`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Step by step */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Пошаговая инструкция: приложение «Мой налог»
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "Шаг 1",
                  title: "Скачайте приложение",
                  body: "Найдите «Мой налог» в App Store или Google Play — это официальное приложение ФНС России, бесплатное.",
                },
                {
                  step: "Шаг 2",
                  title: "Войдите через Госуслуги",
                  body: "Нажмите «Через Госуслуги» — это самый быстрый путь. Паспорт вводить не нужно, данные подтянутся автоматически. Если аккаунта нет — регистрация через паспорт займёт 5–7 минут.",
                },
                {
                  step: "Шаг 3",
                  title: "Выберите вид деятельности",
                  body: "Укажите, чем занимаетесь: «Разработка программного обеспечения», «Дизайн», «Маркетинг», «Консультирование» — вариантов много, можно выбрать несколько. Это не ограничение, менять можно в любое время.",
                },
                {
                  step: "Шаг 4",
                  title: "Укажите регион",
                  body: "Выберите регион, в котором ведёте деятельность. Обычно это регион вашего основного заказчика или место жительства. НПД действует во всех регионах России.",
                },
                {
                  step: "Шаг 5",
                  title: "Подтвердите регистрацию",
                  body: "Нажмите «Стать самозанятым». Статус присваивается мгновенно. ФНС пришлёт уведомление в течение нескольких минут. Всё — вы самозанятый.",
                },
                {
                  step: "Шаг 6",
                  title: "Выставьте первый чек",
                  body: "Сразу после регистрации нажмите «Новый чек» — введите сумму, название услуги и выберите: клиент физлицо (НПД 4→3% с бонусом) или юрлицо/ИП (НПД 6→4% с бонусом). Чек можно отправить клиенту ссылкой или PDF.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {item.step}
                    </span>
                  </div>
                  <div className="pt-0.5">
                    <p className="font-semibold text-gray-900 text-sm mb-1">{item.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tax bonus block */}
          <section className="mb-8 bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              💡 Налоговый бонус 10 000 ₽: как это работает
            </h2>
            <p className="text-sm text-gray-700 mb-3">
              При регистрации ФНС автоматически зачисляет вам налоговый вычет{" "}
              <strong>10&nbsp;000&nbsp;₽</strong>. Это не живые деньги на счёт —
              это уменьшение ставки налога:
            </p>
            <div className="grid grid-cols-2 gap-3 mb-3">
              {[
                {
                  label: "Клиенты-физлица",
                  before: "4%",
                  after: "3%",
                  note: "пока бонус не исчерпан",
                },
                {
                  label: "Клиенты-компании",
                  before: "6%",
                  after: "4%",
                  note: "пока бонус не исчерпан",
                },
              ].map((row) => (
                <div key={row.label} className="bg-white rounded-xl p-3 border border-amber-100">
                  <p className="text-xs font-semibold text-gray-500 mb-2">{row.label}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-red-500 line-through opacity-60">
                      {row.before}
                    </span>
                    <span className="text-gray-400">→</span>
                    <span className="text-lg font-bold text-green-600">{row.after}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{row.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-amber-700">
              Бонус расходуется постепенно с каждым налоговым платежом. При доходе
              100&nbsp;000&nbsp;₽/мес с физлицами он исчерпается примерно за 10 месяцев
              (экономия ≈ 1&nbsp;000&nbsp;₽/мес). Ничего делать не нужно — ФНС учитывает
              автоматически.
            </p>
          </section>

          {/* Calculator CTA */}
          <div className="mb-8 bg-blue-600 rounded-2xl p-5 text-white">
            <p className="font-bold text-base mb-1">
              📊 Посчитайте налог с учётом бонуса
            </p>
            <p className="text-blue-100 text-sm mb-4">
              Калькулятор покажет точный НПД за месяц с учётом бонуса первого года и лимита
              2&nbsp;400&nbsp;000&nbsp;₽
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/instrumenty/kalkulator-naloga-samozanyatogo"
                className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors"
              >
                Калькулятор налога НПД →
              </Link>
              <Link
                href="/"
                className="inline-block bg-white/15 hover:bg-white/25 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors"
              >
                Рассчитать ставку →
              </Link>
            </div>
          </div>

          {/* What to do after */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Что делать после регистрации
            </h2>
            <div className="space-y-4">
              {[
                {
                  icon: "🧾",
                  title: "Выставляйте чеки на каждую оплату",
                  body: "Закон обязывает формировать чек на каждую оплату от клиента — до 9-го числа следующего месяца после получения денег. Чек формируется в «Мой налог» и передаётся клиенту (ссылка, PDF, QR-код). Без чека — штраф 20% суммы.",
                },
                {
                  icon: "📅",
                  title: "Следите за налогом каждый месяц",
                  body: "До 12-го числа каждого месяца приложение присылает уведомление с суммой налога за прошлый месяц. Оплатить нужно до 28-го числа. Просрочка — пени.",
                },
                {
                  icon: "🏦",
                  title: "Решите вопрос с пенсией",
                  body: "Самозанятые по умолчанию НЕ формируют пенсионные накопления. Каждый год без добровольных взносов в СФР — минус 1 пенсионный балл (≈171 ₽/мес к пенсии навсегда). Решение за вами, но лучше знать заранее.",
                },
                {
                  icon: "💰",
                  title: "Рассчитайте правильную ставку",
                  body: "Многие новые самозанятые занижают ставку, не учитывая налоги, отпуск и реальную загрузку. Если берёте 1 000 ₽/час — «на руки» выйдет значительно меньше. Калькулятор считает точную цифру за 30 секунд.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-1">{item.title}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common mistakes */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Частые ошибки новых самозанятых
            </h2>
            <div className="space-y-3">
              {[
                {
                  mistake: "Не выставляют чек вовремя",
                  fix: "Формируйте чек сразу при получении оплаты — это 30 секунд в приложении. Откладывать нельзя: штраф 20% от суммы.",
                },
                {
                  mistake: "Работают с бывшим работодателем",
                  fix: "Нельзя выставлять чеки текущему или бывшему работодателю в течение 2 лет. Если заказчик — ваш бывший работодатель, нужен договор ГПХ как физлицо (и 13% НДФЛ удержат они).",
                },
                {
                  mistake: "Не учитывают налог в ставке",
                  fix: "Ставка 1 000 ₽/час — это «грязными». «На руки» выйдет 960–970 ₽ (с физлицами) или 940 ₽ (с компаниями). Считайте ставку с запасом на налог.",
                },
                {
                  mistake: "Превышают лимит 2 400 000 ₽ без плана",
                  fix: "При приближении к лимиту нужно заранее открыть ИП — переход не мгновенный. Рассчитайте, когда выгоднее перейти на ИП УСН.",
                },
              ].map((item) => (
                <div key={item.mistake} className="bg-white border border-gray-100 rounded-xl p-4">
                  <div className="flex gap-3">
                    <span className="text-red-500 font-bold text-sm flex-shrink-0 mt-0.5">✗</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-1">{item.mistake}</p>
                      <p className="text-sm text-gray-600">{item.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Частые вопросы
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Нужно ли ехать в налоговую?",
                  a: "Нет. Регистрация полностью дистанционная: через приложение «Мой налог», сайт ФНС или банк-партнёр. Личное присутствие не требуется.",
                },
                {
                  q: "Какие документы нужны?",
                  a: "Только паспорт и ИНН (он есть у каждого гражданина РФ). При входе через Госуслуги данные подтянутся автоматически — никаких документов вводить не нужно.",
                },
                {
                  q: "Можно ли совмещать с работой по найму?",
                  a: "Да, самозанятость не мешает трудоустройству. Исключение: нельзя выставлять чеки своему текущему работодателю или бывшему работодателю в течение 2 лет.",
                },
                {
                  q: "Что будет, если превысить лимит 2 400 000 ₽?",
                  a: "Статус самозанятого прекращается автоматически. Доходы сверх лимита облагаются НДФЛ 13%. Чтобы продолжить легально — нужно открыть ИП заранее.",
                },
                {
                  q: "Как платить налог?",
                  a: "Приложение рассчитывает налог автоматически. До 12-го числа каждого месяца придёт уведомление с суммой за прошлый месяц. Оплатить можно картой прямо в «Мой налог» — до 28-го числа.",
                },
                {
                  q: "Нужна ли онлайн-касса?",
                  a: "Нет. Самозанятые освобождены от ККТ. Чек формируется в приложении «Мой налог» — это законная замена кассе.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-white border border-gray-100 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1.5">— {item.q}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Rate calculator CTA */}
          <section className="bg-slate-800 rounded-2xl p-6 text-white mb-8">
            <h2 className="font-bold text-base mb-1">
              Зарегистрировались? Теперь посчитайте правильную ставку
            </h2>
            <p className="text-slate-300 text-sm mb-4">
              Большинство новых самозанятых занижают ставку, не учитывая налоги и реальную
              загрузку. Калькулятор покажет минимальную ставку с учётом НПД, отпуска и
              загрузки — за 30 секунд.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-block bg-white text-slate-900 hover:bg-slate-100 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                Рассчитать ставку →
              </Link>
              <Link
                href="/stavka"
                className="inline-block bg-white/15 hover:bg-white/25 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                Ставки по специальностям →
              </Link>
            </div>
          </section>

          {/* Related articles */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Читайте также</h2>
            <div className="space-y-2">
              {[
                {
                  href: "/stati/izmeneniya-samozanyatyh-2026",
                  title: "Изменения для самозанятых в 2026 году",
                },
                {
                  href: "/stati/samozanyatyj-vs-ip-frilancer",
                  title: "Самозанятый vs ИП: что выбрать фрилансеру",
                },
                {
                  href: "/stati/stavka-samozanyatogo-2026",
                  title: "Ставка самозанятого: как рассчитать с учётом НПД",
                },
                {
                  href: "/instrumenty/kalkulator-pensii-samozanyatogo",
                  title: "Калькулятор пенсии: сколько теряете без взносов в СФР",
                },
                {
                  href: "/nalog/sravnenie",
                  title: "Самозанятый vs ИП: интерактивное сравнение налогов",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  <span className="text-blue-300">→</span>
                  {link.title}
                </Link>
              ))}
            </div>
          </section>
        </main>

        <footer className="border-t border-gray-100 mt-16 py-8 text-center text-sm text-gray-400">
          <p>
            © 2026 FreelanceCalc —{" "}
            <Link href="/" className="hover:text-blue-500">
              Калькулятор ставки фрилансера
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
