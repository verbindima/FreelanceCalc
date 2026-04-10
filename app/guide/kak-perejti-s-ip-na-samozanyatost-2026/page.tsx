import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Как перейти с ИП на самозанятость (НПД) в 2026 году: пошаговая инструкция | FreelanceCalc",
  description:
    "Переход с ИП на самозанятость в 2026 году без закрытия ИП: пошаговая инструкция, сроки подачи уведомления об отказе от УСН (30 дней!), экономия на взносах 53 658 ₽/год.",
  alternates: { canonical: `${BASE_URL}/guide/kak-perejti-s-ip-na-samozanyatost-2026` },
  openGraph: {
    title: "Переход с ИП на самозанятость 2026: пошаговая инструкция",
    description:
      "Как перейти с ИП на НПД без закрытия ИП. Уведомить ФНС об отказе от УСН — 30 дней. Экономия на взносах — 53 658 ₽/год. Полный разбор 3 сценариев.",
    url: `${BASE_URL}/guide/kak-perejti-s-ip-na-samozanyatost-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Переход с ИП на самозанятость 2026: без закрытия ИП, 3 сценария",
    description:
      "Закрывать ИП не нужно. Главный нюанс: уведомить ФНС об отказе от УСН в течение 30 дней. Иначе придётся платить оба налога.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Нужно ли закрывать ИП при переходе на самозанятость?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет, закрывать ИП не обязательно. Индивидуальный предприниматель может стать плательщиком НПД, сохранив статус ИП. В этом случае он получает статус ИП на НПД: сохраняет расчётный счёт, доступ к эквайрингу и возможность быстрой смены режима при росте дохода. При этом страховые взносы платить не нужно, пока применяется НПД.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько времени есть, чтобы уведомить ФНС об отказе от УСН?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ровно 30 дней с момента регистрации в приложении «Мой налог». Если не подать уведомление об отказе от УСН в течение 30 дней — регистрация в НПД автоматически аннулируется. Уведомление подаётся по форме № 26.2-8 в налоговую инспекцию по месту регистрации ИП.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли совмещать ИП на УСН и самозанятость?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. Режим НПД нельзя совмещать с УСН, ЕСХН или патентом. При переходе на НПД нужно отказаться от прежнего режима. Исключение: ИП на общем режиме (ОСНО) — уведомлять не нужно, так как ОСНО — это режим по умолчанию.",
      },
    },
    {
      "@type": "Question",
      name: "Что будет с долгами по взносам ИП при переходе на НПД?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Взносы начисляются пропорционально периоду применения ИП. Если вы переходите на НПД с 1 апреля — взносы ИП за январь–март нужно уплатить в полном объёме (пропорционально). С момента перехода на НПД фиксированные взносы ИП не начисляются, но существующие долги остаются.",
      },
    },
    {
      "@type": "Question",
      name: "Как вернуться с НПД обратно на ИП УСН?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Отказаться от НПД можно в любой момент в приложении «Мой налог» → «Сняться с учёта». После этого ИП автоматически переходит на ОСНО. Чтобы вернуться на УСН — подайте уведомление по форме № 26.2-1 в течение 30 дней после снятия с НПД. Если опоздаете — придётся ждать 1 января следующего года.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как перейти с ИП на самозанятость в 2026 году: пошаговая инструкция",
  description:
    "Полное руководство по переходу с ИП на НПД в 2026 году: 3 сценария, пошаговая инструкция, сроки уведомления ФНС, расчёт экономии на взносах.",
  url: `${BASE_URL}/guide/kak-perejti-s-ip-na-samozanyatost-2026`,
  datePublished: "2026-04-11",
  dateModified: "2026-04-11",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function KakPerejtiSIpNaSamozanyatost2026() {
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
      <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/guide" className="hover:underline">Гайды</Link>
          <span className="mx-2">/</span>
          <span>Переход с ИП на самозанятость 2026</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4 leading-tight">
          Как перейти с ИП на самозанятость в 2026 году: пошаговая инструкция
        </h1>

        <p className="text-gray-500 text-sm mb-6">Обновлено: апрель 2026 · 9 мин чтения</p>

        <p className="text-lg text-gray-700 mb-8">
          Многие индивидуальные предприниматели переходят на режим НПД (самозанятость), чтобы
          избавиться от обязательных страховых взносов — в 2026 году это{" "}
          <strong>53 658 ₽ в год</strong>. Закрывать ИП при этом не нужно: можно стать ИП на НПД,
          сохранив расчётный счёт и статус. Главное — не пропустить 30-дневный срок уведомления ФНС.
        </p>

        {/* Выгода — сводная таблица */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Сравнение режимов: ИП УСН vs ИП НПД vs самозанятый
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Параметр</th>
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold">ИП УСН 6%</th>
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold">ИП НПД</th>
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Самозанятый</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200 font-medium">Налог с физлица</td>
                  <td className="px-4 py-3 border border-gray-200">6%</td>
                  <td className="px-4 py-3 border border-gray-200 text-green-700 font-medium">4%</td>
                  <td className="px-4 py-3 border border-gray-200 text-green-700 font-medium">4%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200 font-medium">Налог с юрлица/ИП</td>
                  <td className="px-4 py-3 border border-gray-200">6%</td>
                  <td className="px-4 py-3 border border-gray-200">6%</td>
                  <td className="px-4 py-3 border border-gray-200">6%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200 font-medium">Взносы ОПС+ОМС</td>
                  <td className="px-4 py-3 border border-gray-200 text-red-600">53 658 ₽/год</td>
                  <td className="px-4 py-3 border border-gray-200 text-green-700 font-medium">0 ₽</td>
                  <td className="px-4 py-3 border border-gray-200 text-green-700 font-medium">0 ₽</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200 font-medium">Лимит дохода/год</td>
                  <td className="px-4 py-3 border border-gray-200">265,8 млн ₽</td>
                  <td className="px-4 py-3 border border-gray-200">2,4 млн ₽</td>
                  <td className="px-4 py-3 border border-gray-200">2,4 млн ₽</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200 font-medium">Сотрудники</td>
                  <td className="px-4 py-3 border border-gray-200">до 130 чел.</td>
                  <td className="px-4 py-3 border border-gray-200 text-red-600">0</td>
                  <td className="px-4 py-3 border border-gray-200 text-red-600">0</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200 font-medium">Расчётный счёт ИП</td>
                  <td className="px-4 py-3 border border-gray-200 text-green-700">Да</td>
                  <td className="px-4 py-3 border border-gray-200 text-green-700">Да</td>
                  <td className="px-4 py-3 border border-gray-200 text-orange-600">Личная карта</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200 font-medium">Декларация</td>
                  <td className="px-4 py-3 border border-gray-200 text-red-600">1 раз/год</td>
                  <td className="px-4 py-3 border border-gray-200 text-green-700">Нет</td>
                  <td className="px-4 py-3 border border-gray-200 text-green-700">Нет</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200 font-medium">Касса (ККТ)</td>
                  <td className="px-4 py-3 border border-gray-200 text-red-600">Нужна при наличных</td>
                  <td className="px-4 py-3 border border-gray-200 text-green-700">«Мой налог»</td>
                  <td className="px-4 py-3 border border-gray-200 text-green-700">«Мой налог»</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mt-5">
            <h3 className="font-semibold text-green-800 mb-3">
              Пример экономии при переходе с ИП УСН на НПД:
            </h3>
            <p className="text-green-900 text-sm mb-2">
              Фрилансер-разработчик, доход <strong>600 000 ₽/год</strong> от юрлиц (ставка 6%):
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">ИП УСН: налог 36 000 + взносы 53 658</span>
                <span className="font-semibold text-red-600">= 89 658 ₽</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">ИП НПД: налог 36 000 + взносы 0</span>
                <span className="font-semibold text-green-600">= 36 000 ₽</span>
              </div>
              <div className="flex justify-between border-t border-green-300 pt-2 mt-2">
                <span className="font-semibold text-green-800">Экономия в год:</span>
                <span className="font-bold text-green-700 text-base">53 658 ₽</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3 сценария */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">3 сценария перехода: выберите свой</h2>
          <div className="space-y-4">
            <div className="border border-blue-200 rounded-lg p-5 bg-blue-50">
              <h3 className="font-semibold text-blue-900 mb-2">
                Сценарий 1 — ИП на УСН → ИП на НПД (без закрытия)
              </h3>
              <p className="text-blue-800 text-sm">
                Самый популярный вариант. Сохраняете расчётный счёт, статус ИП, историю работы.{" "}
                <strong>Важно:</strong> нужно отказаться от УСН в течение 30 дней.
              </p>
            </div>
            <div className="border border-purple-200 rounded-lg p-5 bg-purple-50">
              <h3 className="font-semibold text-purple-900 mb-2">
                Сценарий 2 — ИП на ОСНО → ИП на НПД
              </h3>
              <p className="text-purple-800 text-sm">
                Уведомлять ФНС о смене режима не нужно — ОСНО является режимом по умолчанию.
                Достаточно зарегистрироваться в «Мой налог».
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-2">
                Сценарий 3 — Закрыть ИП и зарегистрироваться самозанятым
              </h3>
              <p className="text-gray-700 text-sm">
                Подходит, если расчётный счёт ИП не нужен. Закрытие ИП занимает 5 рабочих дней,
                регистрация самозанятым — 1 день в «Мой налог».
              </p>
            </div>
          </div>
        </section>

        {/* Пошаговая инструкция — Сценарий 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Пошаговая инструкция: ИП УСН → ИП на НПД (Сценарий 1)
          </h2>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                1
              </span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Зарегистрируйтесь в приложении «Мой налог»
                </p>
                <p className="text-gray-600 text-sm">
                  Скачайте «Мой налог» или войдите через веб-версию{" "}
                  <a
                    href="https://lkfl2.nalog.ru/npd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    lkfl2.nalog.ru/npd
                  </a>
                  . Пройдите регистрацию по паспорту или через Госуслуги. Дата регистрации — это{" "}
                  <strong>точка отсчёта 30 дней</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                2
              </span>
              <div className="w-full">
                <p className="font-semibold text-gray-900 mb-1">
                  Подайте уведомление об отказе от УСН — срок 30 дней!
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-3">
                  <p className="text-red-800 text-sm font-semibold mb-1">
                    ⚠️ Критичный срок: 30 дней
                  </p>
                  <p className="text-red-700 text-sm">
                    Если не подать уведомление об отказе от УСН в течение 30 дней с момента
                    регистрации в НПД — <strong>регистрация в НПД аннулируется автоматически</strong>.
                    Придётся проходить процедуру заново.
                  </p>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Форма:</strong> Уведомление № 26.2-8 «Об отказе от применения УСН»
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Куда подать:</strong> В ИФНС по месту регистрации ИП — лично, по почте,
                  через личный кабинет налогоплательщика или через сервис «Моя налоговая»
                  (nalog.ru → ИП → подача документов).
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Что будет с взносами:</strong> взносы ИП за прошедшие месяцы до перехода
                  начисляются пропорционально. Например, переходите 1 апреля — за январь–март
                  взносы = 53 658 × 3/12 = 13 414 ₽.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                3
              </span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Снимите онлайн-кассу с учёта (если была)
                </p>
                <p className="text-gray-600 text-sm">
                  ИП на НПД не обязан применять ККТ — чеки формируются через «Мой налог». Если у вас
                  была онлайн-касса: сформируйте отчёт о закрытии фискального накопителя, подайте
                  заявление о снятии ККТ с учёта в ФНС (через личный кабинет или лично). Расторгните
                  договор с ОФД.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                4
              </span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Уведомите заказчиков и перезаключите договоры
                </p>
                <p className="text-gray-600 text-sm">
                  Сообщите клиентам, что теперь вы — ИП на НПД. Заказчики-юрлица не платят с вас
                  НДФЛ и страховые взносы (это их освобождение), если в договоре указан статус НПД
                  и приложен чек из «Мой налог». Перезаключите договоры или оформите допсоглашения:
                  укажите, что исполнитель является плательщиком НПД.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                5
              </span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Подайте последнюю декларацию по УСН
                </p>
                <p className="text-gray-600 text-sm">
                  За период применения УСН до перехода нужно подать декларацию — до 25-го числа
                  месяца, следующего за месяцем, в котором вы отказались от УСН. Например, перешли
                  1 апреля — декларацию за январь–март подайте до 25 мая.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Когда НЕ стоит переходить */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Когда НЕ стоит переходить с ИП на НПД</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-semibold text-red-700 mb-3">❌ НПД не подойдёт, если:</h3>
              <ul className="text-sm text-red-800 space-y-2">
                <li>• Доход превышает или близок к <strong>2,4 млн ₽/год</strong></li>
                <li>• Есть сотрудники по трудовому договору</li>
                <li>• Деятельность — перепродажа товаров (не своего производства)</li>
                <li>• Работаете по агентским договорам в интересах третьих лиц</li>
                <li>• Планируете получать пенсионные баллы (НПД не даёт стаж)</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-semibold text-green-700 mb-3">✅ НПД идеален, если:</h3>
              <ul className="text-sm text-green-800 space-y-2">
                <li>• Фрилансер: разработка, дизайн, маркетинг, консультации</li>
                <li>• Работаете в одиночку, без наёмных сотрудников</li>
                <li>• Доход стабильно ниже 2,4 млн ₽/год</li>
                <li>• Хотите сократить налоговую нагрузку на 53 000+ ₽/год</li>
                <li>• Нужна минимальная отчётность (без деклараций)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Расчётный счёт и другие нюансы */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Что будет с расчётным счётом, ЭЦП и договорами
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-400 pl-4 py-1">
              <p className="font-semibold text-gray-900 mb-1">Расчётный счёт</p>
              <p className="text-gray-700 text-sm">
                При сохранении статуса ИП расчётный счёт остаётся. Платежи от заказчиков продолжают
                поступать как прежде. Если закроете ИП — нужно будет перевести деньги на личную карту
                и закрыть счёт (срок — 7 рабочих дней).
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-4 py-1">
              <p className="font-semibold text-gray-900 mb-1">Электронная подпись (ЭЦП)</p>
              <p className="text-gray-700 text-sm">
                КЭП ИП остаётся действительной и при НПД. Однако при закрытии ИП — ЭЦП аннулируется.
                Для самозанятого без статуса ИП ЭЦП не нужна.
              </p>
            </div>
            <div className="border-l-4 border-green-400 pl-4 py-1">
              <p className="font-semibold text-gray-900 mb-1">Действующие договоры</p>
              <p className="text-gray-700 text-sm">
                Договоры, заключённые как ИП, продолжают действовать. Можно подписать допсоглашение
                с указанием нового статуса (ИП — плательщик НПД) — это важно для заказчиков, чтобы
                они правильно оформляли налоговый учёт выплат.
              </p>
            </div>
            <div className="border-l-4 border-orange-400 pl-4 py-1">
              <p className="font-semibold text-gray-900 mb-1">Долги по взносам ИП</p>
              <p className="text-gray-700 text-sm">
                При переходе существующие долги по страховым взносам не списываются — их нужно
                погасить. За период до перехода взносы начисляются пропорционально количеству
                отработанных дней. Узнать задолженность: ФНС → личный кабинет ИП → «Единый налоговый
                счёт».
              </p>
            </div>
          </div>
        </section>

        {/* Обратный переход */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Как вернуться с НПД на ИП УСН: сроки и порядок
          </h2>
          <p className="mb-4 text-gray-700">
            Если доход вырос и НПД стал невыгоден (приближается к 2,4 млн ₽) — вернуться на УСН
            можно, но <strong>нужно успеть подать уведомление</strong>.
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
            <ol className="space-y-3 text-sm text-orange-900">
              <li className="flex items-start gap-2">
                <span className="font-bold text-orange-700">1.</span>
                <span>
                  Снимитесь с НПД в «Мой налог» → «Сняться с учёта» → указать причину.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-orange-700">2.</span>
                <span>
                  После снятия ИП автоматически переводится на ОСНО. У вас есть{" "}
                  <strong>30 дней</strong>, чтобы подать уведомление о переходе на УСН
                  (форма № 26.2-1).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-orange-700">3.</span>
                <span>
                  Если не успели за 30 дней — придётся ждать <strong>1 января</strong> следующего
                  года (переход на УСН только с начала налогового периода).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-orange-700">4.</span>
                <span>
                  Страховые взносы ИП начнут начисляться с первого дня снятия с НПД — пропорционально
                  оставшемуся периоду года.
                </span>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold mb-2">
            Рассчитайте выгоду от перехода на НПД для вашего дохода
          </h2>
          <p className="text-gray-700 text-sm mb-4">
            Укажите свой доход и тип заказчиков — калькулятор покажет разницу между ИП УСН и
            самозанятостью (НПД) с учётом всех взносов и налогов.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
          >
            Открыть калькулятор →
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Часто задаваемые вопросы</h2>
          <div className="space-y-5">
            {faqJsonLd.mainEntity.map((item, i) => (
              <details key={i} className="border border-gray-200 rounded-lg">
                <summary className="px-5 py-4 font-medium cursor-pointer hover:bg-gray-50 rounded-lg">
                  {item.name}
                </summary>
                <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">
                  {item.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-gray-100 pt-8">
          <h2 className="text-xl font-semibold mb-4">Читайте также</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link
              href="/guide/ip-vs-samozanyatyj"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <p className="font-medium text-gray-800 text-sm">ИП или самозанятый: что выбрать</p>
              <p className="text-gray-500 text-xs mt-1">Полное сравнение налогов, взносов и рисков</p>
            </Link>
            <Link
              href="/guide/nalog-ip-usn-6"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <p className="font-medium text-gray-800 text-sm">ИП УСН 6%: как считать налог</p>
              <p className="text-gray-500 text-xs mt-1">Расчёт с учётом взносов и вычетов</p>
            </Link>
            <Link
              href="/guide/samozanyatyj-prevysil-limit"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <p className="font-medium text-gray-800 text-sm">Самозанятый превысил 2,4 млн ₽</p>
              <p className="text-gray-500 text-xs mt-1">Что делать и как перейти на ИП</p>
            </Link>
            <Link
              href="/guide/strahovye-vznosy-ip-2026"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <p className="font-medium text-gray-800 text-sm">Страховые взносы ИП в 2026 году</p>
              <p className="text-gray-500 text-xs mt-1">53 658 ₽: как считать и когда платить</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
