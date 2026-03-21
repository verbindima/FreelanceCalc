import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Как вести переговоры о ставке с заказчиком: скрипты и тактики 2026",
  description:
    "Пошаговый гайд: как фрилансеру обсудить цену с клиентом, не потерять заказ и не занизить ставку. Готовые скрипты, разбор возражений «дорого» и психология сделки.",
  keywords: [
    "переговоры о ставке фрилансера",
    "как обсудить цену с заказчиком",
    "как фрилансеру поднять ставку",
    "возражение дорого фриланс",
    "скрипт переговоров фрилансер",
    "как назвать цену клиенту фрилансер",
    "переговоры фрилансера с клиентом",
    "как не занизить ставку фрилансеру",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/peregovory-o-stavke-s-zakazchikom" },
  openGraph: {
    title: "Переговоры о ставке с заказчиком: скрипты и тактики для фрилансера",
    description:
      "Как назвать цену, не услышать «дорого», не дать скидку и сохранить клиента. Готовые скрипты для фрилансеров.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/peregovory-o-stavke-s-zakazchikom`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/peregovory-o-stavke-s-zakazchikom#article`,
      headline:
        "Как вести переговоры о ставке с заказчиком: скрипты и тактики 2026",
      description:
        "Пошаговый гайд для фрилансеров: как обсудить цену с клиентом, не потерять заказ и не занизить ставку.",
      url: `${BASE_URL}/stati/peregovory-o-stavke-s-zakazchikom`,
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      inLanguage: "ru",
      about: { "@type": "Thing", name: "Переговоры о ставке фрилансера" },
      mainEntityOfPage: `${BASE_URL}/stati/peregovory-o-stavke-s-zakazchikom`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Статьи", item: `${BASE_URL}/stati` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Переговоры о ставке с заказчиком",
          item: `${BASE_URL}/stati/peregovory-o-stavke-s-zakazchikom`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Как фрилансеру назвать цену, чтобы не услышать «дорого»?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Называйте стоимость проекта, а не часовую ставку — клиент оценивает результат, а не ваше время. Обосновывайте цену ценностью для бизнеса: «За 3 месяца SEO-работ органический трафик вырастет на 40%» звучит убедительнее, чем «2 000 ₽/час × 120 часов». Если клиент всё равно говорит «дорого» — уточните детали, не снижайте цену сразу.",
          },
        },
        {
          "@type": "Question",
          name: "Что делать, если заказчик просит скидку?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Не давайте скидку без сокращения объёма работ — это обесценивает вашу экспертизу. Вместо скидки предложите меньший первый этап: «Давайте начнём с аудита за 15 000 ₽ — вы убедитесь в качестве, потом обсудим полный проект». Или увяжите скидку с конкретными условиями: предоплата 100%, долгосрочный контракт от 3 месяцев.",
          },
        },
        {
          "@type": "Question",
          name: "Как поднять ставку для текущего клиента, которому работаете давно?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Предупреждайте за 1–2 месяца, не «спрашивайте разрешения», а информируйте: «С 1 июня моя ставка составит X ₽/час — цены на рынке и мои затраты выросли. Вы можете зафиксировать текущую цену, подписав договор на 3 месяца вперёд». Обоснование + конкретная дата + опция сохранить старую цену снижают отток клиентов.",
          },
        },
        {
          "@type": "Question",
          name: "Как узнать, не занижаю ли я ставку?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Сравните свою ставку с рыночной медианой для вашей специальности и города. Инструмент FreelanceCalc показывает медианные ставки по 22 специальностям и 10 городам с разбивкой по уровням опыта. Если ваша ставка ниже медианы — скорее всего, вы оставляете деньги на столе.",
          },
        },
      ],
    },
  ],
};

const SCRIPTS = [
  {
    situation: "Клиент спрашивает «сколько стоит?»",
    wrong: "— Я беру 1 500 ₽ в час...",
    right:
      "— Лендинг для вашей ниши с SEO-структурой и адаптивом — от 45 000 ₽. Точную цену дам после брифа — стоимость зависит от объёма и сроков.",
    tip: "Называйте стоимость проекта, а не часовую ставку. Клиент оценивает результат.",
  },
  {
    situation: "Клиент говорит «дорого»",
    wrong: "— Хорошо, могу сделать скидку 20%.",
    right:
      "— Понимаю. Расскажите, с чем сравниваете? Если с фрилансерами без портфолио — да, у них дешевле. Но мои проекты окупаются за N недель — вот кейс.",
    tip: "Уточните, с чем сравнивают, и обоснуйте разницу в ценности, не в цене.",
  },
  {
    situation: "Клиент просит скидку",
    wrong: "— Ладно, сделаю за 30 000 ₽.",
    right:
      "— Ставку снизить не смогу, но могу уменьшить объём: сделаем только основные страницы за 30 000 ₽, остальное — в следующем этапе.",
    tip: "Скидка = уменьшение объёма. Никогда не снижайте цену без сокращения работ.",
  },
  {
    situation: "Клиент исчезает после озвучивания цены",
    wrong: "Ждать и надеяться.",
    right:
      "— Добрый день, Иван. Отправлял расчёт в пятницу — хотел уточнить, остались ли вопросы по стоимости или срокам?",
    tip: "Один фолло-ап через 3–5 дней — норма. Больше не пишите, не выглядите нуждающимся.",
  },
];

export default function NegotiationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="text-indigo-600 font-semibold hover:text-indigo-700">
              FreelanceCalc
            </Link>
            <span>/</span>
            <Link href="/stati" className="hover:text-indigo-600">Статьи</Link>
            <span>/</span>
            <span className="text-gray-700 truncate">Переговоры о ставке</span>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              💸 Большинство фрилансеров теряют деньги ещё до начала работы
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Как вести переговоры о ставке с заказчиком: скрипты и тактики
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Вы рассчитали справедливую ставку — это половина дела. Теперь нужно её
              продать клиенту, не получить «дорого» в ответ и не согласиться на меньшее. В статье — конкретные
              скрипты, психология ценовых переговоров и разбор типичных ошибок.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
              <span>📅 Март 2026</span>
              <span>⏱ 7 минут чтения</span>
            </div>
          </div>

          {/* CTA — calc first */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-semibold text-indigo-900 text-sm">Сначала рассчитайте справедливую ставку</p>
              <p className="text-xs text-indigo-700 mt-1">
                Прежде чем идти на переговоры — знайте свои цифры. Калькулятор учитывает налоги, отпуск и реальную загрузку.
              </p>
            </div>
            <Link
              href="/"
              className="shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
            >
              Рассчитать ставку →
            </Link>
          </div>

          {/* Section 1: Главная ошибка */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Главная ошибка: называть часовую ставку
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Большинство фрилансеров открывают переговоры фразой «я беру X рублей в час».
              Это ошибка по двум причинам.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Во-первых, клиент <strong>не покупает ваше время</strong> — он покупает результат. Когда вы называете часовую
              ставку, он начинает считать: «150 часов × 2 000 ₽ = 300 000 ₽ — это много». Тогда как
              «лендинг, который принесёт 50 дополнительных заявок в месяц — 120 000 ₽» воспринимается иначе.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Во-вторых, часовая ставка создаёт{" "}
              <strong>ощущение, что вы продаёте своё время, а не экспертизу</strong>. Это
              автоматически ставит вас в позицию исполнителя, а не специалиста.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-emerald-800 mb-1">✅ Правило №1</p>
              <p className="text-sm text-emerald-700">
                Называйте стоимость проекта или конкретного результата. Часовую ставку сообщайте
                только если клиент настаивает или если договор предполагает Time & Material.
              </p>
            </div>
          </section>

          {/* Section 2: Скрипты */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Готовые скрипты на 4 ситуации
            </h2>
            <div className="space-y-4">
              {SCRIPTS.map((s, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                    Ситуация {i + 1}: {s.situation}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-3">
                    <div className="bg-red-50 rounded-lg p-3 text-sm text-red-800">
                      <p className="font-semibold text-xs text-red-600 mb-1">❌ Как не надо</p>
                      <p>{s.wrong}</p>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-3 text-sm text-emerald-800">
                      <p className="font-semibold text-xs text-emerald-600 mb-1">✅ Как надо</p>
                      <p>{s.right}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                    💡 {s.tip}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Психология */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3 психологических принципа, которые работают
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  1. Якорение ценой
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Первая названная цифра становится якорем для переговоров. Всегда называйте{" "}
                  <strong>верхнюю границу диапазона первой</strong>: «Проект такого масштаба стоит
                  от 80 000 ₽. После брифа дам точную цифру». Клиент будет торговаться вниз от 80 000 ₽,
                  а не от 40 000 ₽.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  2. Пауза после называния цены
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Назвали цену — <strong>замолчите</strong>. Большинство фрилансеров не выдерживают
                  молчание и начинают сами оправдывать стоимость: «Ну, я понимаю, это может быть
                  много...» — это сигнал, что вы сами не уверены в цене. Пауза в 5–10 секунд
                  нормальна. Дайте клиенту время обработать информацию.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  3. Обоснование через потери, а не выгоды
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Исследования нейробиолога Даниэля Канемана показывают: угроза потерь мотивирует
                  сильнее, чем обещание выгод. Сравните:
                </p>
                <div className="mt-3 grid sm:grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                    <p className="text-xs font-medium text-gray-400 mb-1">Выгода (слабее)</p>
                    «С хорошим SEO вы получите +40% трафика»
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-3 text-sm text-indigo-800">
                    <p className="text-xs font-medium text-indigo-500 mb-1">Потеря (сильнее)</p>
                    «Без SEO вы теряете 200 000 ₽ в месяц, которые уходят к конкурентам»
                  </div>
                </div>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Переформулируйте своё предложение через то, что клиент <em>теряет</em> без вас.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Поднять ставку */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как поднять ставку для текущего клиента
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Повышение ставки для давнего клиента — самая стрессовая ситуация для фрилансера.
              Но если вы годами работаете по старой цене, вы фактически финансируете бизнес клиента.
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-3 text-sm text-gray-700">
              <div className="flex gap-3">
                <span className="shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <p>
                  <strong>Предупреждайте заранее</strong> — минимум за 4–6 недель. Не спрашивайте
                  разрешения, а информируйте: «С 1 мая моя ставка составит X ₽/час».
                </p>
              </div>
              <div className="flex gap-3">
                <span className="shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <p>
                  <strong>Дайте опцию зафиксировать старую цену</strong> — при условии предоплаты
                  за 2–3 месяца или подписи долгосрочного договора. Это снижает сопротивление
                  и часто срабатывает.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <p>
                  <strong>Обоснуйте рынком, а не личными расходами</strong>. «Рыночная медиана
                  для [специальность] в [город] сейчас X ₽/час» звучит убедительнее, чем
                  «у меня подорожало всё».
                </p>
              </div>
              <div className="flex gap-3">
                <span className="shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <p>
                  <strong>Если клиент уходит — пусть уходит</strong>. Клиент, который не готов
                  платить рыночную цену, занимает место клиента, который готов.
                </p>
              </div>
            </div>
          </section>

          {/* Benchmark upsell */}
          <section className="mb-10 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 md:p-8 text-white">
            <div className="text-3xl mb-3">📊</div>
            <h2 className="text-xl font-bold mb-2">
              Обоснуйте ставку данными, а не ощущениями
            </h2>
            <p className="text-indigo-100 text-sm leading-relaxed mb-4">
              «Рыночная медиана для Frontend-разработчика middle в Москве — 2 400–4 200 ₽/час»
              — это аргумент. Такие данные содержит PDF-бенчмарк FreelanceCalc: 22 специальности × 10 городов × 3 уровня опыта.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <Link
                href="/benchmark"
                className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                Посмотреть бенчмарк →
              </Link>
              <p className="text-indigo-300 text-xs">249 ₽ · PDF мгновенно · Без подписки</p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Частые вопросы</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Как фрилансеру назвать цену, чтобы не услышать «дорого»?",
                  a: 'Называйте стоимость проекта, а не часовую ставку. Обосновывайте ценностью для бизнеса: «За 3 месяца SEO-работ органический трафик вырастет на 40%» звучит убедительнее, чем «2 000 ₽/час × 120 часов». Если клиент всё равно говорит «дорого» — уточните детали, не снижайте цену сразу.',
                },
                {
                  q: "Что делать, если заказчик просит скидку?",
                  a: "Не давайте скидку без сокращения объёма работ — это обесценивает вашу экспертизу. Вместо скидки предложите меньший первый этап или свяжите скидку с конкретными условиями: предоплата 100%, долгосрочный контракт.",
                },
                {
                  q: "Как поднять ставку для клиента, которому работаю давно?",
                  a: "Предупреждайте за 1–2 месяца, не «спрашивайте разрешения», а информируйте. Предложите зафиксировать старую цену при условии предоплаты за несколько месяцев вперёд. Обосновывайте рыночными данными, а не личными расходами.",
                },
                {
                  q: "Как узнать, не занижаю ли я ставку?",
                  a: "Сравните свою ставку с рыночной медианой. FreelanceCalc бесплатно показывает рыночное положение вашей ставки — просто рассчитайте её в калькуляторе.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-white rounded-xl border border-gray-200 p-5">
                  <p className="font-semibold text-gray-800 text-sm mb-2">{item.q}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related links */}
          <section className="mb-8 bg-white border border-gray-200 rounded-2xl p-5">
            <h3 className="font-semibold text-gray-700 text-sm mb-3">Читать также</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/stati/kak-povysit-stavku-frilansera" className="text-indigo-600 hover:underline">
                  Как повысить ставку фрилансера: пошаговый план →
                </Link>
              </li>
              <li>
                <Link href="/stati/pochemu-frilansery-zanizhayt-stavki" className="text-indigo-600 hover:underline">
                  Почему фрилансеры занижают ставки — и как это исправить →
                </Link>
              </li>
              <li>
                <Link href="/stati/skrytye-rashody-frilansera" className="text-indigo-600 hover:underline">
                  Скрытые расходы фрилансера: всё, что забывают учесть →
                </Link>
              </li>
              <li>
                <Link href="/benchmark" className="text-indigo-600 hover:underline">
                  Рыночные ставки по 22 специальностям — PDF-бенчмарк →
                </Link>
              </li>
            </ul>
          </section>

          {/* Bottom nav */}
          <div className="border-t border-gray-200 pt-6 flex flex-wrap gap-4">
            <Link href="/" className="text-sm text-indigo-600 hover:underline">
              ← Калькулятор ставки
            </Link>
            <Link href="/stati" className="text-sm text-indigo-600 hover:underline">
              Все статьи →
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
