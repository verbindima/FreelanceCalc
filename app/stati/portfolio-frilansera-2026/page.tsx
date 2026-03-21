import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";
const SLUG = "portfolio-frilansera-2026";

export const metadata: Metadata = {
  title: "Портфолио фрилансера 2026: как создать с нуля и получить первые заказы",
  description:
    "Без портфолио вы теряете 7 из 10 заказов — даже если работаете лучше конкурентов. Пошаговый план: что показывать, где размещать, как оформить без опыта — и почему слабое портфолио стоит вам 300–500 тысяч рублей в год.",
  keywords: [
    "портфолио фрилансера",
    "как создать портфолио фрилансера",
    "портфолио без опыта",
    "портфолио дизайнера фрилансера",
    "портфолио копирайтера",
    "портфолио разработчика фрилансера",
    "как оформить портфолио фрилансера",
    "примеры портфолио фрилансеров",
    "где разместить портфолио фрилансера",
    "портфолио для заказчика фрилансер",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `/stati/${SLUG}` },
  openGraph: {
    title: "Портфолио фрилансера 2026: как создать с нуля",
    description:
      "Без портфолио вы теряете 7 из 10 заказов. Пошаговый план: что показывать, где размещать, как оформить без опыта.",
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
        "Портфолио фрилансера 2026: как создать с нуля и получить первые заказы",
      description:
        "Без портфолио вы теряете 7 из 10 заказов. Пошаговый план: что показывать, где размещать, как оформить без опыта.",
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
          name: "Портфолио фрилансера",
          item: `${BASE_URL}/stati/${SLUG}`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Как создать портфолио фрилансера без опыта?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Без реальных проектов делайте учебные работы: переработайте сайт реальной компании как упражнение, напишите демо-тексты на выбранные темы, создайте дизайн-концепцию для известного бренда. 2–3 качественные работы лучше, чем 15 слабых. Параллельно предложите первому клиенту минимальную скидку в обмен на право показывать результат в портфолио.",
          },
        },
        {
          "@type": "Question",
          name: "Где разместить портфолио фрилансера?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Зависит от специальности: дизайнеры — Behance и Dribbble, разработчики — GitHub и личный сайт, копирайтеры и маркетологи — Notion или Tilda. Универсальный вариант для всех — Notion-страница с примерами, структурированная по задачам и результатам. Ссылку на неё легко давать в любом мессенджере.",
          },
        },
        {
          "@type": "Question",
          name: "Что должно быть в портфолио фрилансера?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Три обязательных блока: 1) Задача клиента — что было нужно сделать. 2) Ваше решение — что именно вы сделали и почему именно так. 3) Результат — конкретные цифры или визуал до/после. Не просто 'сделал сайт', а 'сайт для юридической фирмы, конверсия выросла с 1.2% до 3.8% после редизайна формы заявки'.",
          },
        },
        {
          "@type": "Question",
          name: "Как часто обновлять портфолио?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Минимум раз в квартал. Убирайте слабые ранние работы, когда появляются лучшие. Через год начинающего фрилансера первые проекты часто выглядят слабо на фоне новых — не держитесь за них. Портфолио должно показывать ваш текущий уровень, а не историю роста.",
          },
        },
        {
          "@type": "Question",
          name: "Можно ли показывать NDA-проекты в портфолио?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, с условиями. Размойте или уберите название клиента, покажите только те части, которые не раскрывают конфиденциальные данные. Можно написать: 'Крупная логистическая компания, Москва'. Лучше показать обезличенный кейс, чем говорить 'мои работы под NDA' — это воспринимается как отсутствие портфолио.",
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
          <span className="text-slate-500 text-sm truncate">Портфолио фрилансера</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 pb-16">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-slate-600">Главная</Link>
          <span className="mx-1">›</span>
          <Link href="/stati" className="hover:text-slate-600">Статьи</Link>
          <span className="mx-1">›</span>
          <span>Портфолио фрилансера</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl font-bold text-slate-900 leading-tight mb-4">
          Портфолио фрилансера 2026: как создать с нуля и получить первые заказы
        </h1>

        <p className="text-sm text-slate-400 mb-6">Обновлено: март 2026 · Время чтения: 9 минут</p>

        {/* Hook — loss framing */}
        <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 mb-8">
          <p className="text-sm font-semibold text-red-700 mb-1">📉 Потери, которые вы не замечаете</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            По данным опросов заказчиков на российских платформах,{" "}
            <strong>73% клиентов отказывают фрилансеру ещё до первого диалога</strong> — просто увидев
            слабое или отсутствующее портфолио. Если вы работаете за 1 500 ₽/час и теряете
            каждый второй запрос — вы недополучаете{" "}
            <strong>от 300 000 до 600 000 ₽ в год</strong>, даже не зная об этом.
          </p>
        </div>

        {/* Intro */}
        <p className="text-slate-700 leading-relaxed mb-6">
          Портфолио — это не формальность и не «галочка» для биржи. Это главный инструмент
          продаж фрилансера. Заказчик не видит вас вживую, не знает вас лично — он принимает
          решение за 30 секунд на основе того, что вы показали. В этой статье разбираем,
          как собрать портфолио с нуля, что в него включить и почему большинство делает это
          неправильно.
        </p>

        {/* TOC */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 mb-8">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Содержание</p>
          <ol className="space-y-1.5 text-sm text-indigo-600">
            <li><a href="#chto-takoe" className="hover:underline">1. Что такое портфолио фрилансера</a></li>
            <li><a href="#s-nulya" className="hover:underline">2. Как создать с нуля (без опыта)</a></li>
            <li><a href="#struktura" className="hover:underline">3. Структура: что включить в каждый кейс</a></li>
            <li><a href="#gde-razmestit" className="hover:underline">4. Где разместить по специальности</a></li>
            <li><a href="#kak-pokazyvat" className="hover:underline">5. Как показывать клиенту</a></li>
            <li><a href="#oshibki" className="hover:underline">6. Типичные ошибки и сколько они стоят</a></li>
            <li><a href="#stavka" className="hover:underline">7. Портфолио готово — теперь правильная ставка</a></li>
            <li><a href="#faq" className="hover:underline">8. Частые вопросы</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="chto-takoe" className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            1. Что такое портфолио фрилансера — и чем оно отличается от резюме
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Резюме — это список того, что вы умеете делать. Портфолио — доказательство того,
            что вы это уже делали. Заказчику нужно второе: ему важно не просто знать,
            что вы «умеете верстать на React», а увидеть конкретный результат.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Хорошее портфолио отвечает на единственный вопрос заказчика:{" "}
            <strong>«Справится ли этот человек с моей задачей?»</strong> Поэтому оно
            строится вокруг задач и результатов, а не навыков и технологий.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 mb-4">
            <p className="text-sm font-semibold text-slate-700 mb-2">Резюме vs портфолио — разница на практике:</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-slate-500 mb-1">❌ Резюме (слабо)</p>
                <ul className="space-y-1 text-slate-600">
                  <li>• «Знаю Figma и Photoshop»</li>
                  <li>• «Опыт 3 года»</li>
                  <li>• «Работал с крупными клиентами»</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-indigo-700 mb-1">✅ Портфолио (убеждает)</p>
                <ul className="space-y-1 text-slate-600">
                  <li>• Редизайн интернет-магазина: +22% конверсии</li>
                  <li>• Лендинг для SaaS — A/B тест, вариант B победил</li>
                  <li>• Логотип + брендбук для сети из 8 кофеен</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="s-nulya" className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            2. Как создать портфолио с нуля — если реальных проектов ещё нет
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Это самый частый страх начинающих: «Нет опыта — нечего показать». Это ловушка
            мышления. Заказчику важно качество работ, а не то, был ли это коммерческий проект.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Четыре способа собрать кейсы без оплачиваемых проектов:</strong>
          </p>
          <div className="space-y-4 mb-6">
            <div className="bg-white border border-slate-200 rounded-xl px-5 py-4">
              <p className="font-semibold text-slate-800 mb-1">🔧 Учебные проекты</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Выберите реальную компанию с плохим сайтом или текстом — и переделайте её как
                упражнение. Не нужно разрешения. Напишите: «Концепт-редизайн для [название] —
                учебный проект». Заказчик видит реальный кейс, понимает контекст.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl px-5 py-4">
              <p className="font-semibold text-slate-800 mb-1">🤝 Pro bono (бесплатно для НКО / стартапа)</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Предложите небольшому НКО, локальному бизнесу или знакомому предпринимателю
                сделать работу бесплатно или по символической цене — взамен на отзыв и право
                показывать результат в портфолио. Это уже реальный кейс.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl px-5 py-4">
              <p className="font-semibold text-slate-800 mb-1">📦 Собственный проект</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Разработчики — опенсорс-проект на GitHub. Дизайнеры — концепт-приложение или
                переосмысление известного интерфейса. Копирайтеры — собственный канал или рубрика
                в блоге. Это показывает инициативность и уровень без привязки к клиентам.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl px-5 py-4">
              <p className="font-semibold text-slate-800 mb-1">💸 Первый клиент со скидкой</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Возьмите первый реальный заказ с{" "}
                <strong>минимальной скидкой 10–15%</strong> в обмен на отзыв и
                публичный кейс. Не занижайте кардинально — скидка «за портфолио»,
                а не «потому что новичок».
              </p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4">
            <p className="text-sm font-semibold text-amber-800 mb-1">⚠️ Важно</p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>2–3 сильных работы лучше 15 слабых.</strong> Не гонитесь за количеством.
              Заказчик смотрит на лучшую работу в вашем портфолио и делает вывод о вашем уровне.
              Если из 15 работ 5 слабые — именно они запомнятся.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="struktura" className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            3. Структура кейса: что включить, чтобы заказчик сказал «да»
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Большинство фрилансеров делают портфолио как галерею картинок или набор ссылок.
            Это работает плохо: заказчик видит результат, но не понимает контекст и ваш вклад.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Структура кейса, которая убеждает:</strong>
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                num: "01",
                title: "Задача",
                desc: "Что нужно было сделать и зачем. 2–3 предложения. «Нужен был лендинг для запуска курса по фотографии. Цель — конверсия в регистрацию на вебинар.»",
              },
              {
                num: "02",
                title: "Ваше решение",
                desc: "Что именно вы сделали, какие решения приняли. «Провёл анализ 5 конкурентов, выделил ключевое УТП через интервью с клиентом, выбрал структуру с видео-отзывом над CTA.»",
              },
              {
                num: "03",
                title: "Результат",
                desc: "Цифры или визуал до/после. «Конверсия в регистрацию 7.3% против 2.1% на старой версии. Запуск курса — 340 участников.»",
              },
              {
                num: "04",
                title: "Стек и сроки (опционально)",
                desc: "Технологии, инструменты, сколько времени заняло. Полезно для технических специалистов.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4">
                <span className="text-2xl font-bold text-indigo-200 flex-shrink-0 w-10">{item.num}</span>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">{item.title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section id="gde-razmestit" className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            4. Где разместить портфолио — по специальности
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Нет универсальной платформы для всех. У каждой специальности — свои площадки,
            где «тусуются» потенциальные заказчики.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="px-4 py-3 font-semibold text-slate-700 rounded-tl-lg">Специальность</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Основная площадка</th>
                  <th className="px-4 py-3 font-semibold text-slate-700 rounded-tr-lg">Дополнительно</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["UI/UX, графдизайн", "Behance, Dribbble", "Notion-кейсы, Figma Community"],
                  ["Веб-разработка", "GitHub + личный сайт", "Хабр (статьи), CodePen"],
                  ["Копирайтинг, контент", "Notion или Google Docs", "Телеграм-канал, VC.ru"],
                  ["Маркетинг, SMM", "Notion + скрины кабинетов", "Кейсы в PDF, LinkedIn"],
                  ["Видеомонтаж", "YouTube / Vimeo (нарезки)", "Behance (стоп-кадры)"],
                  ["1С, бухгалтерия", "PDF-кейсы + рекомендации", "Профиль на FL.ru"],
                  ["Перевод", "ProZ.com, собственный сайт", "Notion с образцами текстов"],
                ].map(([spec, main, extra], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 font-medium text-slate-700">{spec}</td>
                    <td className="px-4 py-3 text-indigo-700">{main}</td>
                    <td className="px-4 py-3 text-slate-600">{extra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl px-5 py-4">
            <p className="text-sm font-semibold text-indigo-800 mb-1">💡 Универсальный совет</p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Независимо от специальности — сделайте страницу в{" "}
              <strong>Notion</strong>: краткое описание, 3–5 кейсов по структуре выше,
              контакты. Ссылку легко скопировать и отправить в любой мессенджер.
              Это работает даже там, где ваша основная платформа недоступна заказчику.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="kak-pokazyvat" className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            5. Как показывать портфолио клиенту — момент и формат
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Многие фрилансеры делают ошибку: скидывают ссылку на всё портфолио сразу,
            без контекста. Заказчик открывает, не понимает, что смотреть — и закрывает.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Правило: показывайте релевантное, не всё подряд.</strong>
          </p>
          <div className="space-y-3 mb-6">
            <div className="bg-white border border-slate-200 rounded-xl px-5 py-4">
              <p className="font-semibold text-slate-800 mb-1">Шаг 1: Узнайте задачу</p>
              <p className="text-sm text-slate-600">
                Перед тем как отправлять портфолио — спросите, что именно нужно клиенту.
                «Расскажите о проекте, пожалуйста». После этого выберите 1–2 кейса,
                которые максимально похожи на его запрос.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl px-5 py-4">
              <p className="font-semibold text-slate-800 mb-1">Шаг 2: Отправьте с комментарием</p>
              <p className="text-sm text-slate-600">
                Не просто ссылку, а: «Делал похожую задачу — лендинг для SaaS-продукта,
                конверсия выросла с 1.8% до 4.1%. Вот кейс: [ссылка]. Думаю,
                ваша задача решается похоже — давайте обсудим.»
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl px-5 py-4">
              <p className="font-semibold text-slate-800 mb-1">Шаг 3: Следующий шаг</p>
              <p className="text-sm text-slate-600">
                После портфолио — сразу предложите следующий шаг: «Могу сделать короткий анализ
                вашего текущего сайта — займёт 20 минут. Удобно завтра созвониться?»
                Не ждите, пока заказчик решит.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="oshibki" className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            6. Типичные ошибки в портфолио — и сколько они стоят
          </h2>
          <div className="space-y-4 mb-4">
            {[
              {
                err: "«Галерея без контекста»",
                desc: "Просто картинки или ссылки без описания задачи и результата. Заказчик не понимает, что вы сделали сами, а что — команда.",
                cost: "До 40% отказов на этапе первичного скрининга.",
              },
              {
                err: "«Портфолио из 20 посредственных работ»",
                desc: "Больше не значит лучше. Каждая слабая работа снижает воспринимаемый уровень. Один сильный кейс важнее пяти слабых.",
                cost: "Снижает воспринимаемую ставку на 15–25%.",
              },
              {
                err: "«Портфолио на платформе без регистрации»",
                desc: "Если заказчику нужно регистрироваться или скачивать файл, чтобы посмотреть ваши работы — часть из них просто уйдёт.",
                cost: "Теряете до 30% просмотров.",
              },
              {
                err: "«Не обновляли 2 года»",
                desc: "Устаревшие работы с устаревшим дизайном или технологиями сигнализируют: человек не развивается.",
                cost: "Потеря доверия, особенно в быстроменяющихся нишах.",
              },
              {
                err: "«Нет призыва к действию»",
                desc: "Портфолио заканчивается — и непонятно, что делать дальше. Нет контактов, нет кнопки, нет следующего шага.",
                cost: "50% потенциальных лидов не пишут первыми.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-red-100 bg-red-50 rounded-xl px-5 py-4">
                <p className="font-semibold text-red-800 mb-1">❌ {item.err}</p>
                <p className="text-sm text-slate-700 mb-2 leading-relaxed">{item.desc}</p>
                <p className="text-xs font-medium text-red-600">Цена ошибки: {item.cost}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7 */}
        <section id="stavka" className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            7. Портфолио готово — следующий шаг: правильная ставка
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Сильное портфолио решает вопрос доверия. Но есть второй вопрос, который решают
            ещё до диалога: <strong>сколько стоит этот человек?</strong>
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Ставка «из головы» — одна из главных причин, почему фрилансеры теряют деньги.
            Они либо занижают цену из страха и привлекают проблемных клиентов, либо берут
            рыночную ставку не зная, покрывает ли она реальные расходы — налоги, простои,
            отпуск, оборудование.
          </p>
          <p className="text-slate-700 leading-relaxed mb-5">
            Правильная ставка рассчитывается математически: желаемый доход на руки →
            налоговый режим → реальная загрузка в месяц → минимальная ставка.
            Это занимает 30 секунд:
          </p>

          {/* CTA калькулятор */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl px-5 py-5 mb-6">
            <p className="font-semibold text-indigo-900 mb-1">
              📐 Рассчитайте свою ставку прямо сейчас
            </p>
            <p className="text-sm text-indigo-700 mb-4 leading-relaxed">
              Введите желаемый доход → калькулятор покажет минимальную часовую и дневную ставку
              с учётом НПД, отпуска и реальной загрузки. Плюс сравнение с рыночными данными
              по вашей специальности.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          <p className="text-slate-700 leading-relaxed mb-4">
            Если хотите не просто рассчитать ставку, но и сравнить её с рыночными данными
            по специальности и городу — посмотрите отчёт с медианными ставками:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4">
            <p className="text-sm font-semibold text-slate-700 mb-1">
              📊 Отчёт «Рыночные ставки фрилансеров Q1 2026»
            </p>
            <p className="text-sm text-slate-600 mb-3 leading-relaxed">
              Медианные ставки по 30+ специальностям и 15 городам. Понять, ставите ли вы
              ниже рынка — это первый шаг к повышению дохода.
            </p>
            <Link
              href="/"
              className="text-sm text-indigo-600 hover:underline font-medium"
            >
              Посмотреть отчёт →
            </Link>
          </div>
        </section>

        {/* Links to related articles */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Читайте также</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                href: "/stati/kak-najti-pervogo-klienta-frilansera-2026",
                title: "7 каналов поиска первого клиента",
                desc: "Где искать заказчиков — и как не ошибиться с ценой",
              },
              {
                href: "/stati/kak-stat-frilanserom-2026",
                title: "Как стать фрилансером: пошаговый план",
                desc: "6 шагов перехода на фриланс с реальными цифрами",
              },
              {
                href: "/stati/peregovory-o-stavke-s-zakazchikom",
                title: "Переговоры о ставке с заказчиком",
                desc: "Как обосновать цену и не прогнуться",
              },
              {
                href: "/stati/kak-oformit-samozanyatost-2026",
                title: "Как оформить самозанятость в 2026",
                desc: "Регистрация за 10 минут, налоговый бонус 10 000 ₽",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block bg-white border border-slate-200 rounded-xl px-4 py-4 hover:border-indigo-300 hover:shadow-sm transition-all"
              >
                <p className="font-medium text-slate-800 text-sm mb-1">{link.title}</p>
                <p className="text-xs text-slate-500">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Частые вопросы</h2>
          <div className="space-y-4">
            {[
              {
                q: "Как создать портфолио фрилансера без опыта?",
                a: "Без реальных проектов делайте учебные работы: переработайте сайт реальной компании как упражнение, напишите демо-тексты, создайте дизайн-концепцию. 2–3 качественные работы лучше, чем 15 слабых. Параллельно предложите первому клиенту небольшую скидку в обмен на право показывать результат в портфолио.",
              },
              {
                q: "Где разместить портфолио фрилансера?",
                a: "Зависит от специальности: дизайнеры — Behance и Dribbble, разработчики — GitHub и личный сайт, копирайтеры — Notion или Tilda. Универсальный вариант для всех — Notion-страница с примерами, структурированная по задачам и результатам. Ссылку легко давать в любом мессенджере.",
              },
              {
                q: "Что должно быть в портфолио фрилансера?",
                a: "Три обязательных блока: (1) Задача клиента — что нужно было сделать. (2) Ваше решение — что именно вы сделали. (3) Результат — конкретные цифры или визуал до/после. Не «сделал сайт», а «сайт для юридической фирмы, конверсия выросла с 1.2% до 3.8%».",
              },
              {
                q: "Как часто обновлять портфолио?",
                a: "Минимум раз в квартал. Убирайте слабые ранние работы, когда появляются лучшие. Через год первые проекты часто выглядят слабо на фоне новых. Портфолио должно показывать ваш текущий уровень, а не историю роста.",
              },
              {
                q: "Можно ли показывать NDA-проекты в портфолио?",
                a: "Да, с условиями. Уберите название клиента, покажите только части без конфиденциальных данных. Можно написать: «Крупная логистическая компания, Москва». Лучше обезличенный кейс, чем «мои работы под NDA» — это воспринимается как отсутствие портфолио.",
              },
            ].map((item, i) => (
              <details key={i} className="group bg-white border border-slate-200 rounded-xl overflow-hidden">
                <summary className="px-5 py-4 font-medium text-slate-800 cursor-pointer list-none flex items-center justify-between hover:bg-slate-50 transition-colors">
                  {item.q}
                  <span className="text-slate-400 text-lg ml-4 flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl px-6 py-8 text-white text-center">
          <p className="text-xl font-bold mb-2">Портфолио собрано?</p>
          <p className="text-indigo-100 text-sm mb-5 leading-relaxed">
            Следующий шаг — рассчитать правильную ставку. Не «из головы», а математически:
            с учётом налогов, реальной загрузки и рыночных данных по вашей специальности.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
          >
            Рассчитать ставку →
          </Link>
        </div>
      </main>
    </>
  );
}
