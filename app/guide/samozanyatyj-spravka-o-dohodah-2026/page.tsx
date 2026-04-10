import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Справка о доходах самозанятого 2026: как получить за 2 минуты | FreelanceCalc",
  description:
    "Как самозанятому получить справку о доходах (КНД 1122036) через «Мой налог» в 2026 году. Принимают ли банки для ипотеки и кредита, какие форматы доступны, что делать если период закрыт.",
  alternates: { canonical: `${BASE_URL}/guide/samozanyatyj-spravka-o-dohodah-2026` },
  openGraph: {
    title: "Справка о доходах самозанятого 2026: инструкция за 2 минуты",
    description:
      "КНД 1122036 через «Мой налог» — сразу, бесплатно, с электронной подписью. Принимают Сбербанк, ВТБ, Тинькофф, ипотечные брокеры.",
    url: `${BASE_URL}/guide/samozanyatyj-spravka-o-dohodah-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Справка о доходах самозанятого за 2 минуты в «Мой налог»",
    description:
      "Пошаговая инструкция: какой документ, какой формат, куда отправить в банк для ипотеки или кредита.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Принимают ли банки справку о доходах самозанятого вместо 2-НДФЛ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Большинство крупных банков (Сбербанк, ВТБ, Тинькофф, Альфа-Банк) принимают справку КНД 1122036 из «Мой налог» как подтверждение дохода вместо 2-НДФЛ. Для ипотеки обычно требуется минимум 6–12 месяцев статуса самозанятого и дополнительно — выписки по счёту или договоры с заказчиками.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько ждать справку о доходах самозанятого?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Справка формируется мгновенно — за 1–2 минуты через приложение «Мой налог» или сайт lknpd.nalog.ru. Документ подписан электронной подписью ФНС и имеет юридическую силу без нотариального заверения.",
      },
    },
    {
      "@type": "Question",
      name: "Как получить справку о доходах самозанятого через Госуслуги?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "На Госуслугах: зайдите в раздел «Налоги» → «Мой налог» → «Документы и справки» → выберите период → скачайте архив. Архив содержит PDF, XML и файлы электронной подписи — все форматы нужно передавать вместе, отдельный PDF без подписи может не приниматься банком.",
      },
    },
    {
      "@type": "Question",
      name: "Что содержит справка о доходах самозанятого КНД 1122036?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Справка КНД 1122036 включает: ФИО и ИНН плательщика НПД, помесячную разбивку дохода за выбранный период, итоговую сумму дохода, сумму уплаченного налога на профессиональный доход, задолженность по штрафам (если есть). Документ подписан квалифицированной электронной подписью ФНС России.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли получить справку за прошлые годы как самозанятый?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. В приложении «Мой налог» можно запросить справку за любой период с момента регистрации в качестве самозанятого. Если регистрация прекращалась и возобновлялась — справка формируется только за периоды активного статуса НПД.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Справка о доходах самозанятого в 2026 году: как получить за 2 минуты",
  description:
    "Пошаговая инструкция по получению справки КНД 1122036 через «Мой налог» и Госуслуги. Принятие банками, форматы, ипотека и кредиты.",
  url: `${BASE_URL}/guide/samozanyatyj-spravka-o-dohodah-2026`,
  datePublished: "2026-04-11",
  dateModified: "2026-04-11",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function SamozanyatySpravkaODohodah2026() {
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
          <span>Справка о доходах самозанятого 2026</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4 leading-tight">
          Справка о доходах самозанятого в 2026 году: как получить за 2 минуты
        </h1>

        <p className="text-gray-500 text-sm mb-6">Обновлено: апрель 2026 · 7 мин чтения</p>

        <p className="text-lg text-gray-700 mb-8">
          Для ипотеки, кредита, визы или аренды жилья банки и организации просят подтвердить доход.
          У самозанятых нет ни справки 2-НДФЛ, ни трудовой книжки — но есть <strong>КНД 1122036</strong>.
          Этот документ выдаёт ФНС через приложение «Мой налог» мгновенно и бесплатно. Разбираем пошагово.
        </p>

        {/* Quick info box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <h2 className="text-base font-semibold text-blue-800 mb-3">Коротко о главном</h2>
          <ul className="space-y-2 text-blue-900 text-sm">
            <li>✅ Формируется за 1–2 минуты — в «Мой налог» или Госуслугах</li>
            <li>✅ Подписана электронной подписью ФНС — имеет юридическую силу</li>
            <li>✅ Принимают Сбербанк, ВТБ, Тинькофф, ипотечные брокеры</li>
            <li>✅ Доступна за любой период с момента регистрации на НПД</li>
            <li>✅ Содержит помесячный доход и уплаченный налог</li>
          </ul>
        </div>

        {/* Что это за документ */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Что такое справка о доходах самозанятого (КНД 1122036)
          </h2>
          <p className="mb-4">
            Официальное название — <strong>«Справка о состоянии расчётов (доходов) по налогу на
            профессиональный доход»</strong>, форма <strong>КНД 1122036</strong>. Её выдаёт ФНС России
            через приложение «Мой налог» или личный кабинет самозанятого.
          </p>
          <p className="mb-4">
            Документ заменяет 2-НДФЛ для плательщиков НПД и содержит:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-5 text-gray-700">
            <li>ФИО и ИНН плательщика НПД</li>
            <li>Помесячную разбивку дохода за выбранный период</li>
            <li>Итоговую сумму дохода</li>
            <li>Сумму уплаченного налога НПД</li>
            <li>Задолженность по штрафам (если есть)</li>
          </ul>
          <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
            <strong>Важно:</strong> справка подписана <strong>квалифицированной электронной подписью
            ФНС России</strong> — это значит, что она имеет ту же юридическую силу, что и бумажный
            документ с синей печатью. Нотариального заверения не требуется.
          </div>
        </section>

        {/* Как получить через Мой налог */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Как получить справку через приложение «Мой налог»
          </h2>
          <p className="mb-5 text-gray-700">
            Самый быстрый способ — через мобильное приложение. Работает на iOS и Android.
          </p>

          <ol className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
              <div>
                <p className="font-medium">Откройте «Мой налог» → перейдите в раздел <strong>«Прочее»</strong></p>
                <p className="text-gray-600 text-sm mt-1">Это нижняя правая иконка в главном меню приложения.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
              <div>
                <p className="font-medium">Выберите <strong>«Справки»</strong></p>
                <p className="text-gray-600 text-sm mt-1">Раздел находится в блоке «Полезное».</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
              <div>
                <p className="font-medium">Нажмите <strong>«Справка о доходах»</strong></p>
                <p className="text-gray-600 text-sm mt-1">Не путайте с «Справкой о постановке на учёт» — это другой документ.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
              <div>
                <p className="font-medium">Укажите <strong>период</strong> (год или произвольный диапазон дат)</p>
                <p className="text-gray-600 text-sm mt-1">
                  Для ипотеки обычно просят доход за 6 или 12 месяцев. Для визы — за 3 месяца.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">5</span>
              <div>
                <p className="font-medium">Нажмите <strong>«Получить справку»</strong> → сохраните или отправьте</p>
                <p className="text-gray-600 text-sm mt-1">
                  Справка в формате PDF сохраняется на устройство или отправляется по почте. Готова через 10–30 секунд.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Через Госуслуги */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Как получить справку через Госуслуги и личный кабинет ФНС
          </h2>
          <p className="mb-4 text-gray-700">
            Альтернативный способ — через сайт <strong>lknpd.nalog.ru</strong> или портал Госуслуг.
            Удобен, если нет смартфона или нужен архив с электронной подписью.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Через lknpd.nalog.ru</h3>
              <ol className="text-sm text-gray-600 space-y-1 list-decimal pl-4">
                <li>Войдите через ИНН + пароль или через Госуслуги</li>
                <li>Раздел «Настройки» → «Справки»</li>
                <li>Выберите «Справка о доходах» и период</li>
                <li>Скачайте PDF</li>
              </ol>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Через Госуслуги</h3>
              <ol className="text-sm text-gray-600 space-y-1 list-decimal pl-4">
                <li>«Налоги» → «Мой налог» → «Документы»</li>
                <li>Выберите период</li>
                <li>Скачайте архив (ZIP)</li>
                <li>Архив содержит PDF + XML + файлы ЭП</li>
              </ol>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 text-sm">
              <strong>⚠️ При получении через Госуслуги:</strong> архив содержит несколько файлов —
              PDF, XML и два файла электронной подписи. Если банк принимает документы в электронном виде,
              передавайте весь архив целиком. Отдельный PDF без файлов подписи может не считаться
              юридически значимым.
            </p>
          </div>
        </section>

        {/* Форматы */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Форматы справки</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Формат</th>
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Где скачать</th>
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Применение</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200 font-medium">PDF</td>
                  <td className="px-4 py-3 border border-gray-200">«Мой налог», lknpd.nalog.ru, Госуслуги</td>
                  <td className="px-4 py-3 border border-gray-200">Печать, отправка по почте, загрузка в банк</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200 font-medium">XML</td>
                  <td className="px-4 py-3 border border-gray-200">Госуслуги (архив)</td>
                  <td className="px-4 py-3 border border-gray-200">Электронный документооборот, API-интеграции банков</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200 font-medium">Архив с ЭП</td>
                  <td className="px-4 py-3 border border-gray-200">Госуслуги</td>
                  <td className="px-4 py-3 border border-gray-200">Передача в банк целиком для проверки подлинности</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Банки */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Какие банки принимают справку КНД 1122036
          </h2>
          <p className="mb-5 text-gray-700">
            Большинство крупных банков принимают справку из «Мой налог» как основное или
            дополнительное подтверждение дохода. Вот что известно по основным игрокам:
          </p>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <h3 className="font-semibold text-gray-800">Сбербанк</h3>
              </div>
              <p className="text-sm text-gray-600">
                Принимает справку КНД 1122036 через приложение «СберБанк Онлайн» или в отделении.
                Самозанятые клиенты «Своего дела» могут сформировать справку прямо в приложении
                Сбера — через раздел «Действия». Для ипотеки требуется минимум 12 месяцев статуса НПД.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <h3 className="font-semibold text-gray-800">ВТБ</h3>
              </div>
              <p className="text-sm text-gray-600">
                Принимает справку при наличии согласия на получение данных из ФНС. Самозанятые,
                зарегистрировавшиеся через ВТБ, передают данные автоматически — дополнительное
                согласие не нужно. Для ипотеки рассматривают доход за последние 6–12 месяцев.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <h3 className="font-semibold text-gray-800">Тинькофф (Т-Банк)</h3>
              </div>
              <p className="text-sm text-gray-600">
                Принимает справку для кредитов. Для клиентов с регистрацией через Т-Банк
                доступно упрощённое подтверждение дохода — банк сам видит обороты.
                Для крупных сумм может потребоваться дополнительно выписка по счёту.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <h3 className="font-semibold text-gray-800">Альфа-Банк, Газпромбанк, Дом.РФ</h3>
              </div>
              <p className="text-sm text-gray-600">
                Принимают справку КНД 1122036 как подтверждение дохода, но для ипотеки часто
                требуют дополнительно: выписку по расчётному счёту за 6–12 месяцев,
                1–3 договора с основными заказчиками, увеличенный первоначальный взнос (от 20%).
              </p>
            </div>
          </div>
        </section>

        {/* Ипотека */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Справка о доходах самозанятого для ипотеки в 2026 году
          </h2>
          <p className="mb-4 text-gray-700">
            Самозанятые могут оформить ипотеку — банки научились работать с НПД-доходами.
            Требования к пакету документов обычно жёстче, чем для наёмных сотрудников.
          </p>

          <div className="bg-blue-50 rounded-xl p-5 mb-5">
            <h3 className="font-semibold text-blue-800 mb-3">Типичный пакет документов для ипотеки:</h3>
            <ul className="space-y-2 text-blue-900 text-sm">
              <li>✅ Справка КНД 1122036 за последние 12 месяцев</li>
              <li>✅ Выписка по банковскому счёту за 6–12 месяцев</li>
              <li>✅ 1–3 договора с основными заказчиками (необязательно, но повышает шансы)</li>
              <li>✅ Паспорт РФ</li>
              <li>✅ Первоначальный взнос от 20% (часто требуют больше, чем для наёмных)</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-gray-700 mb-2 text-sm">Расчёт: сколько нужно зарабатывать</h3>
            <p className="text-sm text-gray-600">
              Банки считают максимальный ежемесячный платёж как <strong>40–50% от дохода</strong>.
              При ипотеке на 5 млн ₽ на 25 лет (ставка 18%) ежемесячный платёж ≈ 76 000 ₽.
              Значит, нужен <strong>документально подтверждённый доход от 150 000–190 000 ₽/мес</strong>.
            </p>
          </div>

          <p className="text-sm text-gray-600">
            Подробнее о получении ипотеки для самозанятых →{" "}
            <Link href="/guide/samozanyatyj-ipoteka-2026" className="text-blue-600 hover:underline">
              Ипотека для самозанятого в 2026 году
            </Link>
          </p>
        </section>

        {/* Другие случаи использования */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Где ещё понадобится справка о доходах
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2 text-sm">🏠 Аренда жилья</h3>
              <p className="text-sm text-gray-600">
                Арендодатели и агентства часто просят подтверждение дохода. Справка за
                последние 3 месяца убеждает, что вы платёжеспособны.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2 text-sm">✈️ Виза и загранпаспорт</h3>
              <p className="text-sm text-gray-600">
                Консульства принимают справку КНД 1122036 как подтверждение занятости
                и дохода для шенгенской и других виз.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2 text-sm">💳 Потребительский кредит</h3>
              <p className="text-sm text-gray-600">
                Банки выдают кредиты самозанятым. Справка за 6–12 месяцев увеличивает
                одобренную сумму и снижает ставку.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2 text-sm">📋 Социальные льготы</h3>
              <p className="text-sm text-gray-600">
                Для оформления субсидий, пособий и льгот справка подтверждает уровень
                дохода без привязки к трудовой книжке.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold mb-2">Рассчитайте налог перед оформлением справки</h2>
          <p className="text-gray-700 text-sm mb-4">
            Убедитесь, что ваши доходы задекларированы корректно: наш калькулятор показывает
            НПД 4%/6%, вычет 10 000 ₽ и реальный доход «на руки» после налогов.
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
              href="/guide/samozanyatyj-ipoteka-2026"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <p className="font-medium text-gray-800 text-sm">Ипотека для самозанятого 2026</p>
              <p className="text-gray-500 text-xs mt-1">Требования банков, минимальный доход, условия</p>
            </Link>
            <Link
              href="/guide/nalog-samozanyatyj"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <p className="font-medium text-gray-800 text-sm">Налог самозанятого: НПД 4% и 6%</p>
              <p className="text-gray-500 text-xs mt-1">Как рассчитать и когда платить</p>
            </Link>
            <Link
              href="/guide/nalogovyj-vychet-samozanyatogo-2026"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <p className="font-medium text-gray-800 text-sm">Налоговый вычет 10 000 ₽</p>
              <p className="text-gray-500 text-xs mt-1">Как работает бонус для новых самозанятых</p>
            </Link>
            <Link
              href="/guide/samozanyatyj-pensiya-2026"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <p className="font-medium text-gray-800 text-sm">Пенсия самозанятого в 2026 году</p>
              <p className="text-gray-500 text-xs mt-1">Стаж, взносы, накопления</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
