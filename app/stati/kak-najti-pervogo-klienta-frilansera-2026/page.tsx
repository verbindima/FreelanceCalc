import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";
const SLUG = "kak-najti-pervogo-klienta-frilansera-2026";

export const metadata: Metadata = {
  title: "Как найти первого клиента на фрилансе: 7 каналов, которые работают в 2026",
  description:
    "90% начинающих фрилансеров бросают через 2 месяца — не потому что плохо работают, а потому что неправильно ищут и ценят себя. Разбираем 7 реальных каналов поиска первого клиента и главную ошибку с ценой.",
  keywords: [
    "как найти первого клиента на фрилансе",
    "первый клиент фрилансер",
    "где найти заказы фрилансеру",
    "первый заказ на фрилансе",
    "как начать работать фрилансером",
    "поиск клиентов фрилансер новичок",
    "фриланс без опыта первый клиент",
    "как найти клиентов фрилансеру",
    "где брать заказы начинающему фрилансеру",
    "первый проект на фрилансе",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `/stati/${SLUG}` },
  openGraph: {
    title: "Как найти первого клиента на фрилансе в 2026",
    description:
      "90% бросают фриланс за 2 месяца. Причина не в таланте — в неправильном поиске и цене. 7 каналов, которые реально работают для новичков.",
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
      headline: "Как найти первого клиента на фрилансе: 7 каналов, которые работают в 2026",
      description:
        "90% начинающих фрилансеров бросают через 2 месяца — не из-за навыков, а из-за неправильного поиска и ценообразования. Разбираем реальные каналы и типичные ошибки.",
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
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Статьи", item: `${BASE_URL}/stati` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Как найти первого клиента на фрилансе",
          item: `${BASE_URL}/stati/${SLUG}`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Где найти первого клиента на фрилансе без опыта?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Лучшие каналы для начинающих без портфолио: 1) Ближний круг — бывшие коллеги, знакомые предприниматели. 2) Фриланс-биржи (FL.ru, Kwork) — берите небольшие проекты для отзывов. 3) Профессиональные Telegram-чаты — там часто ищут исполнителей. 4) HeadHunter/SuperJob в разделе проектной работы. Главное — не занижайте цену, иначе привлечёте проблемных клиентов.",
          },
        },
        {
          "@type": "Question",
          name: "Какую ставку ставить на первый проект?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Распространённая ошибка — сильно занижать цену «из-за отсутствия опыта». Это привлекает клиентов с ограниченным бюджетом и завышенными ожиданиями. Рассчитайте минимально возможную ставку через калькулятор (с учётом налогов и загрузки) — и не опускайтесь ниже неё. Скидка на «первый проект» — максимум 10–15%.",
          },
        },
        {
          "@type": "Question",
          name: "Нужен ли опыт для первого заказа на фрилансе?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет, но нужны примеры работ. Если их нет — сделайте 2–3 учебных проекта для портфолио: переделайте сайт реальной компании как упражнение, напишите демо-тексты, создайте дизайн-концепцию. Реальный пример работы важнее резюме.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько времени нужно, чтобы найти первого клиента?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "При активном поиске (15–30 откликов в день) — от 1 до 4 недель. Через личный круг — иногда быстрее, 3–7 дней. Пассивное ожидание (только профиль на бирже) может растянуться на месяцы. Ключ — активность и правильная цена.",
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
          <Link href="/stati" className="text-slate-500 text-sm hover:text-slate-700">
            Статьи
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-500 text-sm truncate">Первый клиент</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 pb-16">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-slate-600">Главная</Link>
          <span className="mx-1">›</span>
          <Link href="/stati" className="hover:text-slate-600">Статьи</Link>
          <span className="mx-1">›</span>
          <span>Первый клиент на фрилансе</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl font-bold text-slate-900 leading-tight mb-4">
          Как найти первого клиента на фрилансе: 7 каналов, которые работают в 2026
        </h1>

        <p className="text-sm text-slate-400 mb-6">Обновлено: март 2026 · Время чтения: 8 минут</p>

        {/* Hook — loss framing */}
        <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 mb-8">
          <p className="text-sm font-semibold text-red-700 mb-1">📉 Статистика, которая неприятна</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            По данным исследований фриланс-платформ, <strong>около 70–80% новичков прекращают активный поиск
            клиентов уже в первые 2–3 месяца</strong>. Не потому что не умеют работать.
            А потому что ищут не там, ставят неправильную цену и получают либо отказы,
            либо проблемных клиентов — что ещё хуже.
          </p>
        </div>

        {/* Intro */}
        <p className="text-slate-700 leading-relaxed mb-6">
          Первый клиент на фрилансе — самый сложный. Нет портфолио, нет отзывов, нет репутации.
          Но это решаемо. В этой статье — семь реальных каналов поиска, которые работают для новичков
          в 2026 году, и разбор главной ошибки, которая топит большинство ещё до старта.
        </p>

        {/* TOC */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 mb-8">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Содержание</p>
          <ol className="space-y-1.5 text-sm text-indigo-600">
            <li><a href="#oshibka-s-cenoj" className="hover:underline">1. Главная ошибка: неправильная цена ещё до поиска клиента</a></li>
            <li><a href="#kanal-1" className="hover:underline">2. Канал 1: ближний круг</a></li>
            <li><a href="#kanal-2" className="hover:underline">3. Канал 2: фриланс-биржи</a></li>
            <li><a href="#kanal-3" className="hover:underline">4. Канал 3: Telegram-чаты</a></li>
            <li><a href="#kanal-4" className="hover:underline">5. Канал 4: LinkedIn и hh.ru</a></li>
            <li><a href="#kanal-5" className="hover:underline">6. Канал 5: ВКонтакте и профессиональные сообщества</a></li>
            <li><a href="#kanal-6" className="hover:underline">7. Канал 6: холодные письма</a></li>
            <li><a href="#kanal-7" className="hover:underline">8. Канал 7: личный контент</a></li>
            <li><a href="#pervoe-predlozhenie" className="hover:underline">9. Как написать первое предложение клиенту</a></li>
            <li><a href="#pervyj-proekt" className="hover:underline">10. Первый проект: защита и договор</a></li>
            <li><a href="#faq" className="hover:underline">11. Частые вопросы</a></li>
          </ol>
        </nav>

        {/* Section 1: Price error */}
        <section id="oshibka-s-cenoj" className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            1. Главная ошибка: неправильная цена ещё до поиска клиента
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Перед тем как идти на биржи и писать потенциальным клиентам, нужно знать одну цифру:
            <strong> минимальную ставку, ниже которой вы не можете работать без ущерба для себя</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Большинство новичков берут цифру «из головы» или смотрят на самые дешёвые предложения
            на бирже и ставят похожее. Это ловушка. Вы неизбежно занизите цену и попадёте
            в один из двух сценариев:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex gap-2 text-slate-700 text-sm">
              <span className="text-red-500 mt-0.5 flex-shrink-0">✗</span>
              <span>Работаете за деньги, которых не хватает на жизнь → через 2 месяца возвращаетесь в найм</span>
            </li>
            <li className="flex gap-2 text-slate-700 text-sm">
              <span className="text-red-500 mt-0.5 flex-shrink-0">✗</span>
              <span>Привлекаете клиентов с ограниченным бюджетом и завышенными ожиданиями → стресс и плохие отзывы</span>
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-5">
            Правильная ставка — это не то, что вы «хотите», а математика: желаемый доход ÷ количество
            оплачиваемых часов с учётом налогов, отпуска и реальной загрузки. Это можно рассчитать
            за 30 секунд:
          </p>

          {/* CTA калькулятор */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl px-5 py-5 mb-6">
            <p className="font-semibold text-indigo-900 mb-1">
              📐 Рассчитайте минимальную ставку прямо сейчас
            </p>
            <p className="text-sm text-indigo-700 mb-4 leading-relaxed">
              Введите желаемый доход на руки → калькулятор покажет, сколько нужно брать за час,
              чтобы выйти на эту сумму с учётом НПД, отпуска и реальной загрузки.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
            <p className="text-sm text-amber-800">
              <strong>Практическое правило:</strong> Скидка на «первый проект без отзывов» — максимум
              10–15% от вашей нормальной ставки. Не 50%, не «сделаю почти бесплатно за отзыв».
              Дешёвые клиенты не оставляют хороших отзывов и поглощают всё ваше время.
            </p>
          </div>
        </section>

        {/* Section 2: Channel 1 */}
        <section id="kanal-1" className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            2. Канал 1: ближний круг — самый недооценённый
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            У большинства людей в контактах есть предприниматели, руководители, менеджеры —
            люди, у которых есть бизнес-задачи. Большинство новичков этим не пользуются,
            считая это «неловким».
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Между тем ближний круг даёт самого быстрого первого клиента:
            уже есть доверие, не нужен портфолио, легче договориться об условиях.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-4 mb-4">
            <p className="text-sm font-semibold text-slate-700 mb-2">Как действовать:</p>
            <ol className="space-y-1.5 text-sm text-slate-700 list-decimal list-inside">
              <li>Составьте список из 20–30 знакомых, у которых есть своё дело или они работают в компании</li>
              <li>Напишите каждому лично — не массовую рассылку, а конкретное сообщение</li>
              <li>Расскажите, чем занимаетесь, и спросите: есть ли у них похожие задачи или кого-то знают, кому нужна такая помощь?</li>
              <li>Не просите работу — предлагайте решение конкретной проблемы</li>
            </ol>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            <strong>Реальный результат:</strong> Если в списке 30 человек, обычно 2–3 отвечают заинтересованно.
            Конверсия в первый проект — около 20–30% от заинтересованных. Итого 1 проект
            из 30 контактов — уже хорошая стартовая позиция.
          </p>
        </section>

        {/* Section 3: Channel 2 */}
        <section id="kanal-2" className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            3. Канал 2: фриланс-биржи — правильная тактика для новичка
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            FL.ru, Kwork, Habr Freelance — биржи работают, но с ними нужна правильная тактика.
            Новичок без отзывов конкурирует с опытными исполнителями — и проигрывает по умолчанию,
            если ничего не сделать.
          </p>

          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-2 font-semibold text-slate-700 border border-slate-200">Биржа</th>
                  <th className="text-left px-3 py-2 font-semibold text-slate-700 border border-slate-200">Подходит для</th>
                  <th className="text-left px-3 py-2 font-semibold text-slate-700 border border-slate-200">Комиссия</th>
                  <th className="text-left px-3 py-2 font-semibold text-slate-700 border border-slate-200">Совет новичку</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-2 border border-slate-200 font-medium">FL.ru</td>
                  <td className="px-3 py-2 border border-slate-200">IT, дизайн, маркетинг, тексты</td>
                  <td className="px-3 py-2 border border-slate-200">10–14%</td>
                  <td className="px-3 py-2 border border-slate-200">Откликайтесь первыми, пишите конкретно</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-3 py-2 border border-slate-200 font-medium">Kwork</td>
                  <td className="px-3 py-2 border border-slate-200">Услуги с фиксированной ценой</td>
                  <td className="px-3 py-2 border border-slate-200">20%</td>
                  <td className="px-3 py-2 border border-slate-200">Создайте кворк с конкретным результатом</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border border-slate-200 font-medium">Habr Freelance</td>
                  <td className="px-3 py-2 border border-slate-200">IT-специалисты</td>
                  <td className="px-3 py-2 border border-slate-200">10%</td>
                  <td className="px-3 py-2 border border-slate-200">Заполните профиль детально, укажите стек</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-3 py-2 border border-slate-200 font-medium">YouDo</td>
                  <td className="px-3 py-2 border border-slate-200">Локальные услуги, репетиторство</td>
                  <td className="px-3 py-2 border border-slate-200">18–25%</td>
                  <td className="px-3 py-2 border border-slate-200">Хорошо для быстрого старта с отзывами</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-4">
            <p className="text-sm font-semibold text-slate-700 mb-2">Тактика на бирже для новичка:</p>
            <ul className="space-y-1.5 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-indigo-500">→</span> Берите небольшие проекты (3–15 тыс. ₽) ради первых отзывов, а не ради денег</li>
              <li className="flex gap-2"><span className="text-indigo-500">→</span> Пишите отклики первыми — отклик в первые 30 минут на 40–60% выше вероятности ответа</li>
              <li className="flex gap-2"><span className="text-indigo-500">→</span> Не копируйте шаблон — одна конкретная фраза о проекте клиента выделяет вас среди 20 откликов</li>
              <li className="flex gap-2"><span className="text-indigo-500">→</span> После 3–5 отзывов поднимите ставку до нормальной</li>
            </ul>
          </div>
        </section>

        {/* Section 4: Channel 3 */}
        <section id="kanal-3" className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            4. Канал 3: Telegram-чаты — недооценённый в 2026
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            В Telegram тысячи профессиональных и бизнесовых чатов, где ежедневно появляются
            объявления о поиске исполнителей. Большинство новичков этим не пользуются — и зря.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-4 mb-4">
            <p className="text-sm font-semibold text-slate-700 mb-2">Что искать в Telegram:</p>
            <ul className="space-y-1.5 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>Чаты по вашей специальности: «дизайнеры», «копирайтеры», «разработчики»</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>Бизнесовые чаты: предприниматели, стартапы, малый бизнес вашего города</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>Чаты-биржи: «вакансии IT», «работа SMM», «дизайн проекты»</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>Нишевые сообщества: клиенты в вашей сфере (e-commerce, недвижимость, медицина)</span>
              </li>
            </ul>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            Поищите в Telegram по запросам: «ищу [ваша специальность]», «нужен фрилансер»,
            «проект [ваша область]». Вступайте в чаты, будьте полезны в обсуждениях —
            и когда появляется нужный запрос, откликайтесь мгновенно.
          </p>
        </section>

        {/* Section 5: Channel 4 */}
        <section id="kanal-4" className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            5. Канал 4: LinkedIn и hh.ru — проектная работа
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Многие компании размещают вакансии на полный день, но готовы рассмотреть
            проектный формат — особенно для разовых задач. LinkedIn и hh.ru недооценивают
            как источник фриланс-заказов.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
              <p className="text-sm font-semibold text-slate-700 mb-1">LinkedIn</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Создайте профиль с «Freelancer» / «Самозанятый» в заголовке. Ищите посты
                с «ищу» от HRов и founders. Комментируйте полезно — вас начнут находить сами.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
              <p className="text-sm font-semibold text-slate-700 mb-1">hh.ru / SuperJob</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Фильтруйте по «проектная работа» и «удалённо». На подходящие вакансии пишите
                HR напрямую: «Вакансия закрыта, но могу взять задачу в формате проекта».
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-500">
            LinkedIn особенно эффективен для IT, маркетинга и консалтинга. Для локального малого бизнеса — менее актуален.
          </p>
        </section>

        {/* Section 6: Channel 5 */}
        <section id="kanal-5" className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            6. Канал 5: ВКонтакте и профессиональные сообщества
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            ВКонтакте — один из ключевых каналов для фрилансеров в России. Огромное количество
            бизнес-сообществ и групп по специальностям, где регулярно появляются объявления о работе.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex gap-2 text-slate-700 text-sm">
              <span className="text-indigo-500">→</span>
              <span>Ищите посты «ищу дизайнера», «нужен копирайтер» в тематических группах ВК</span>
            </li>
            <li className="flex gap-2 text-slate-700 text-sm">
              <span className="text-indigo-500">→</span>
              <span>Публикуйте предложение своих услуг в группах малого бизнеса вашего города</span>
            </li>
            <li className="flex gap-2 text-slate-700 text-sm">
              <span className="text-indigo-500">→</span>
              <span>Участвуйте в профессиональных сообществах — помогайте, отвечайте на вопросы</span>
            </li>
            <li className="flex gap-2 text-slate-700 text-sm">
              <span className="text-indigo-500">→</span>
              <span>Настройте таргетированную рекламу ВК на малый бизнес (если есть бюджет 3–5 тыс. ₽)</span>
            </li>
          </ul>
        </section>

        {/* Section 7: Channel 6 */}
        <section id="kanal-6" className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            7. Канал 6: холодные письма — работает, если делать правильно
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Большинство «холодных» сообщений игнорируют, потому что они написаны неправильно.
            Правильное холодное письмо — это не «здравствуйте, я ищу работу». Это конкретное
            наблюдение о проблеме компании и предложение решения.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 mb-4">
            <p className="text-sm font-semibold text-slate-700 mb-2">Структура работающего холодного письма:</p>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex gap-3">
                <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-0.5 rounded flex-shrink-0 mt-0.5">1</span>
                <p><strong>Конкретное наблюдение:</strong> «Заметил, что у вас на сайте нет мобильной версии — 60% трафика уходит без конверсии»</p>
              </div>
              <div className="flex gap-3">
                <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-0.5 rounded flex-shrink-0 mt-0.5">2</span>
                <p><strong>Ваше решение:</strong> «Я адаптирую сайт под мобильные за 5 дней»</p>
              </div>
              <div className="flex gap-3">
                <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-0.5 rounded flex-shrink-0 mt-0.5">3</span>
                <p><strong>Доказательство:</strong> Ссылка на 1–2 похожих кейса</p>
              </div>
              <div className="flex gap-3">
                <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-0.5 rounded flex-shrink-0 mt-0.5">4</span>
                <p><strong>Простой следующий шаг:</strong> «Могу показать прототип на следующей неделе — удобно?»</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-500">
            Отклик на такое письмо — 5–15%. При 50 письмах в неделю получите 3–8 ответов.
            Этого достаточно для стабильного потока переговоров.
          </p>
        </section>

        {/* Section 8: Channel 7 */}
        <section id="kanal-7" className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            8. Канал 7: личный контент — долгосрочная инвестиция
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Блог, канал в Telegram, посты во ВКонтакте или на Habr — контент не даёт клиентов
            завтра, но через 3–6 месяцев начинает работать автономно. Это самый дорогостоящий
            канал по времени, но и самый устойчивый.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Для начала достаточно одного формата: например, разборы кейсов из вашей работы
            (даже учебных), ответы на вопросы из профессиональных чатов, обзоры инструментов
            своей специальности.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
            <p className="text-sm text-amber-800">
              <strong>Важно:</strong> Не пишите «5 советов дизайнеру» — это AI-шлак, который никто
              не читает. Пишите конкретный опыт: «Я потратил 3 часа на правки, потому что не уточнил
              эту деталь в брифе — вот как теперь делаю иначе». Личный опыт с позицией читают.
            </p>
          </div>
        </section>

        {/* Section 9: First proposal */}
        <section id="pervoe-predlozhenie" className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            9. Как написать первое предложение клиенту
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Независимо от канала, предложение должно быть сфокусировано на задаче клиента,
            а не на вашей биографии. Три правила:
          </p>
          <div className="space-y-3 mb-5">
            <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3">
              <p className="text-sm font-semibold text-green-700 mb-1">✓ Делайте так</p>
              <p className="text-sm text-slate-700">«У вас задача X. Я решу её за Y дней. Вот пример похожей работы [ссылка]. Когда удобно поговорить?»</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              <p className="text-sm font-semibold text-red-700 mb-1">✗ Не делайте так</p>
              <p className="text-sm text-slate-700">«Здравствуйте! Я опытный специалист с 3-летним стажем, ответственный, быстро обучаюсь. Готов рассмотреть ваш проект. Готов обсудить условия...»</p>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Называйте цену в первом же сообщении или как можно раньше. Клиент всё равно
            спросит — лучше сразу отсеять тех, с кем не совпадаете по бюджету, чем тратить
            час на переговоры впустую.
          </p>
        </section>

        {/* Section 10: First project */}
        <section id="pervyj-proekt" className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            10. Первый проект: договор, аванс и защита
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Первый проект особенно важно структурировать правильно — не из-за юридических
            тонкостей, а чтобы избежать типичных ситуаций: «сделай ещё вот это», бесконечных
            правок и задержки оплаты.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-1">30–50%</div>
              <p className="text-xs text-slate-600">Аванс до начала работы — норма на рынке</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-1">2–3</div>
              <p className="text-xs text-slate-600">Раунда правок включить в стоимость, остальные — за доп. оплату</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-1">ТЗ</div>
              <p className="text-xs text-slate-600">Фиксируйте задачу письменно до начала — в мессенджере достаточно</p>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Для первых проектов необязателен полноценный договор — достаточно переписки
            в мессенджере с описанием задачи, стоимости и сроков. Это уже защищает в большинстве споров.
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl px-5 py-5">
            <p className="font-semibold text-indigo-900 mb-1">
              💡 Первый проект — проверка ставки
            </p>
            <p className="text-sm text-indigo-700 mb-4 leading-relaxed">
              После первого проекта вы увидите, сколько реально потратили времени. Если
              потратили больше — значит, ставка была занижена или масштаб задачи оценён неверно.
              Используйте калькулятор, чтобы скорректировать ставку перед следующим проектом.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Пересчитать ставку →
            </Link>
          </div>
        </section>

        {/* Market rates CTA */}
        <section className="bg-gradient-to-r from-violet-50 to-indigo-50 border border-indigo-200 rounded-xl px-5 py-6 mb-10">
          <h3 className="font-bold text-slate-900 mb-2">
            📊 Не знаете, сколько берут другие в вашей специальности?
          </h3>
          <p className="text-sm text-slate-700 mb-4 leading-relaxed">
            Рыночный ориентир — медианные ставки по 22+ специальностям и 10 городам России
            на Q1 2026. Поможет понять, не слишком ли вы занижаете или завышаете цену.
          </p>
          <Link
            href="/benchmark"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            Смотреть рыночные ставки →
          </Link>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Частые вопросы</h2>
          <div className="space-y-4">
            {[
              {
                q: "Где найти первого клиента без портфолио?",
                a: "Начните с ближнего круга — там не нужны отзывы и портфолио. Параллельно сделайте 2–3 учебных проекта: переделайте реальный сайт для практики, напишите демо-тексты, создайте концепт для существующего бренда. Реальный пример работы убедительнее любого резюме.",
              },
              {
                q: "Нужна ли самозанятость для первого проекта?",
                a: "Юридически — нет, можно начать без регистрации. Но самозанятость оформляется за 15 минут в приложении «Мой налог» и даёт доверие клиентам-юрлицам, которые хотят проводить оплату официально. Советуем оформить до первого проекта.",
              },
              {
                q: "Сколько времени займёт поиск первого клиента?",
                a: "При активном поиске через ближний круг — 3–14 дней. Через биржи при 15–30 откликах в день — 2–4 недели. Пассивное ожидание (просто профиль на бирже без откликов) — непредсказуемо, может занять месяцы.",
              },
              {
                q: "Можно ли работать без договора на первых проектах?",
                a: "Можно, но фиксируйте договорённости письменно — в мессенджере достаточно. Опишите: задачу, дедлайн, стоимость, количество правок, условия оплаты. Это защищает от большинства конфликтов без формального договора.",
              },
              {
                q: "Какую ставку ставить на Kwork и FL.ru без отзывов?",
                a: "Не занижайте ниже вашей минимальной ставки (рассчитайте через калькулятор). Скидка «за первый отзыв» — максимум 15%. Клиенты с очень маленьким бюджетом чаще всего самые требовательные — и дают плохие отзывы, а не хорошие.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="border border-slate-200 rounded-lg group">
                <summary className="px-4 py-3 cursor-pointer font-medium text-slate-800 hover:bg-slate-50 rounded-lg list-none flex justify-between items-center">
                  {q}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform text-sm">▼</span>
                </summary>
                <div className="px-4 pb-4 pt-1 text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Итог: с чего начать прямо сейчас</h2>
          <div className="space-y-2">
            {[
              "Рассчитайте минимальную ставку через калькулятор — не угадывайте",
              "Составьте список 20–30 знакомых предпринимателей и напишите лично",
              "Зарегистрируйтесь на FL.ru или Kwork, заполните профиль полностью",
              "Вступите в 5–7 Telegram-чатов по вашей специальности",
              "Напишите 10 холодных сообщений конкретным компаниям с конкретным наблюдением",
              "Первые 3–5 проектов на бирже — ради отзывов, не ради денег",
              "После 5 отзывов поднимите ставку до нормальной и больше не работайте ниже неё",
            ].map((step, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="text-slate-700 text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related articles */}
        <section className="border-t border-slate-200 pt-8">
          <h3 className="font-semibold text-slate-700 mb-4">Читайте также</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/stati/kak-stat-frilanserom-2026", label: "Как стать фрилансером: пошаговый план" },
              { href: "/stati/peregovory-o-stavke-s-zakazchikom", label: "Переговоры о ставке с заказчиком" },
              { href: "/stati/pochemu-frilansery-zanizhayt-stavki", label: "Почему фрилансеры занижают ставки" },
              { href: "/stati/skrytye-rashody-frilansera", label: "Скрытые расходы фрилансера" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg px-4 py-3 text-sm text-indigo-600 font-medium transition-colors"
              >
                {label} →
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
