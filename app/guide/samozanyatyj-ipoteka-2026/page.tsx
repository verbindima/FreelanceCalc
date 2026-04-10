import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Ипотека для самозанятых в 2026 году: какие банки дают, как подтвердить доход | FreelanceCalc",
  description:
    "Ипотека для самозанятых в 2026: Сбербанк, ВТБ, Альфа-Банк — условия и требования. Как подтвердить доход НПД через «Мой налог». Минимальный стаж 6–12 месяцев. Расчёт нужного дохода.",
  alternates: { canonical: `${BASE_URL}/guide/samozanyatyj-ipoteka-2026` },
  openGraph: {
    title: "Ипотека для самозанятых 2026: банки, документы, доход",
    description:
      "Какие банки дают ипотеку самозанятым, как подтвердить доход из приложения «Мой налог», какой стаж нужен и сколько зарабатывать для одобрения.",
    url: `${BASE_URL}/guide/samozanyatyj-ipoteka-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ипотека для самозанятых 2026: пошаговый гайд",
    description:
      "Сбербанк, ВТБ, Альфа-Банк — кто одобряет, что требует. Справка из «Мой налог» как подтверждение дохода.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Дают ли ипотеку самозанятым в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, большинство крупных банков (Сбербанк, ВТБ, Альфа-Банк, Газпромбанк, Россельхозбанк) выдают ипотеку самозанятым плательщикам НПД. Главное требование — подтверждённый доход и стаж самозанятости не менее 6–12 месяцев в зависимости от банка.",
      },
    },
    {
      "@type": "Question",
      name: "Как подтвердить доход самозанятого для ипотеки?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Основной документ — справка о доходах из приложения «Мой налог» (формируется автоматически за любой период, скачивается в PDF с QR-кодом ФНС). Дополнительно банки могут запросить выписку по расчётному счёту за 6–12 месяцев и налоговые уведомления об уплате НПД.",
      },
    },
    {
      "@type": "Question",
      name: "Какой минимальный стаж самозанятости нужен для ипотеки?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Сбербанк и ВТБ требуют стаж не менее 12 месяцев. Альфа-Банк и Газпромбанк — от 6 месяцев. Некоторые банки засчитывают совокупный стаж: например, 3 месяца самозанятым + 9 месяцев наёмным работником. Уточняйте условия в конкретном банке.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько нужно зарабатывать самозанятому для одобрения ипотеки на 5 млн ₽?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "При ставке 10% и сроке 20 лет ежемесячный платёж составит около 48 000 ₽. Банки одобряют ипотеку при условии, что платёж не превышает 40–50% от дохода. Значит, нужен подтверждённый доход от 100 000–120 000 ₽ в месяц. Используйте калькулятор FreelanceCalc для расчёта своей ставки.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли самозанятому взять ипотеку с господдержкой в 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Самозанятые могут участвовать в программах с господдержкой: семейная ипотека (6% для семей с детьми до 6 лет), ИТ-ипотека (5% для разработчиков — если зарегистрированы как ИП совмещённо с НПД не применяется), региональные программы. Самозанятость сама по себе не является ограничением для льготных программ.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ипотека для самозанятых в 2026 году: какие банки дают, как подтвердить доход",
  description:
    "Подробный гайд по ипотеке для плательщиков НПД в 2026 году: требования банков, документы для подтверждения дохода, расчёт нужного заработка и лайфхаки для повышения шансов одобрения.",
  url: `${BASE_URL}/guide/samozanyatyj-ipoteka-2026`,
  datePublished: "2026-04-10",
  dateModified: "2026-04-10",
  author: { "@type": "Organization", name: "FreelanceCalc" },
  publisher: {
    "@type": "Organization",
    name: "FreelanceCalc",
    url: BASE_URL,
  },
};

export default function SamozanyatyjIpotekaPage() {
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
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-1 items-center">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Главная
              </Link>
            </li>
            <li className="before:content-['/'] before:mx-1">
              <Link href="/guide" className="hover:text-blue-600">
                Гайды
              </Link>
            </li>
            <li className="before:content-['/'] before:mx-1 text-gray-700">
              Ипотека для самозанятых 2026
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-4 leading-tight">
          Ипотека для самозанятых в 2026 году: какие банки дают и как подтвердить доход
        </h1>

        <p className="text-gray-500 text-sm mb-6">Обновлено: апрель 2026 · 8 мин чтения</p>

        <p className="text-lg text-gray-700 mb-8">
          Самозанятых в России уже более 12 миллионов — и многие из них хотят взять ипотеку.
          Главный страх: «банк не одобрит, потому что нет справки 2-НДФЛ». Разбираем, как
          всё устроено на самом деле в 2026 году: какие банки работают с НПД, какие документы
          нужны и сколько нужно зарабатывать.
        </p>

        {/* TL;DR */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-blue-800 mb-2">Коротко: главное</h2>
          <ul className="text-blue-900 space-y-1 text-sm list-disc list-inside">
            <li>Сбербанк, ВТБ, Альфа-Банк, Газпромбанк — все работают с самозанятыми</li>
            <li>Доход подтверждается справкой из приложения «Мой налог» (PDF с QR)</li>
            <li>Минимальный стаж: 6 месяцев (Альфа) или 12 месяцев (Сбер, ВТБ)</li>
            <li>Первый взнос обычно 15–20% вместо стандартных 10–15%</li>
            <li>Льготные программы (семейная ипотека, ИТ-ипотека) — доступны</li>
          </ul>
        </div>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Какие банки дают ипотеку самозанятым в 2026 году
        </h2>
        <p className="mb-4">
          Большинство крупных банков сегодня готовы работать с плательщиками НПД. Разница — в
          требованиях к стажу, первому взносу и набору документов.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 border border-gray-200 font-semibold">Банк</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Мин. стаж НПД</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Первый взнос</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Подтверждение дохода</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Сбербанк</td>
                <td className="p-3 border border-gray-200">12 месяцев</td>
                <td className="p-3 border border-gray-200">20%</td>
                <td className="p-3 border border-gray-200">Справка «Мой налог» + выписка</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">ВТБ</td>
                <td className="p-3 border border-gray-200">12 месяцев</td>
                <td className="p-3 border border-gray-200">15%</td>
                <td className="p-3 border border-gray-200">Справка «Мой налог» за 12 мес.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Альфа-Банк</td>
                <td className="p-3 border border-gray-200">6 месяцев</td>
                <td className="p-3 border border-gray-200">15%</td>
                <td className="p-3 border border-gray-200">Справка «Мой налог» + счёт</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Газпромбанк</td>
                <td className="p-3 border border-gray-200">6 месяцев</td>
                <td className="p-3 border border-gray-200">15%</td>
                <td className="p-3 border border-gray-200">Справка «Мой налог»</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Россельхозбанк</td>
                <td className="p-3 border border-gray-200">12 месяцев</td>
                <td className="p-3 border border-gray-200">20%</td>
                <td className="p-3 border border-gray-200">Справка ФНС + выписка по счёту</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          * Условия актуальны на апрель 2026. Уточняйте в отделении банка или на официальном сайте.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Как подтвердить доход самозанятого для ипотеки
        </h2>
        <p className="mb-4">
          Главный документ — <strong>справка о доходах из приложения «Мой налог»</strong>. Она
          формируется автоматически за любой период и имеет юридическую силу: подписана
          квалифицированной электронной подписью ФНС и содержит QR-код для проверки.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
          <h3 className="font-semibold text-green-800 mb-2">
            Как скачать справку из «Мой налог»
          </h3>
          <ol className="text-green-900 space-y-1 text-sm list-decimal list-inside">
            <li>Откройте приложение «Мой налог» или сайт lknpd.nalog.ru</li>
            <li>Перейдите в раздел «Прочее» → «Справки»</li>
            <li>Выберите «Справка о постановке на учёт» или «Справка о доходах»</li>
            <li>Укажите период (банк обычно просит 12 месяцев)</li>
            <li>Скачайте PDF — это официальный документ с подписью ФНС</li>
          </ol>
        </div>

        <p className="mb-4">
          Помимо справки из «Мой налог», банки часто запрашивают:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>
            <strong>Выписку по банковскому счёту</strong> за 6–12 месяцев — чтобы подтвердить
            реальные поступления. Идеально, если оплаты от заказчиков видны в выписке.
          </li>
          <li>
            <strong>Налоговые уведомления</strong> об уплате НПД (скачиваются из «Мой налог» или
            личного кабинета ФНС).
          </li>
          <li>
            <strong>Договоры с заказчиками</strong> — не обязательно, но некоторые банки просят
            показать, что доход стабильный и продолжается.
          </li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Сколько нужно зарабатывать для одобрения ипотеки
        </h2>
        <p className="mb-4">
          Банки используют правило: ежемесячный платёж по ипотеке не должен превышать{" "}
          <strong>40–50% от подтверждённого дохода</strong>.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Примеры расчёта</h3>
          <div className="space-y-4 text-sm">
            <div className="border-b pb-3">
              <p className="font-medium text-gray-700 mb-1">Ипотека 4 млн ₽, ставка 10%, срок 20 лет</p>
              <p className="text-gray-600">Ежемесячный платёж: ~38 600 ₽</p>
              <p className="text-gray-600">Нужный доход (50% правило): <span className="font-semibold text-blue-700">от 77 200 ₽/мес</span></p>
            </div>
            <div className="border-b pb-3">
              <p className="font-medium text-gray-700 mb-1">Ипотека 6 млн ₽, ставка 10%, срок 20 лет</p>
              <p className="text-gray-600">Ежемесячный платёж: ~57 900 ₽</p>
              <p className="text-gray-600">Нужный доход (50% правило): <span className="font-semibold text-blue-700">от 115 800 ₽/мес</span></p>
            </div>
            <div>
              <p className="font-medium text-gray-700 mb-1">Семейная ипотека 6 млн ₽, ставка 6%, срок 25 лет</p>
              <p className="text-gray-600">Ежемесячный платёж: ~38 700 ₽</p>
              <p className="text-gray-600">Нужный доход (50% правило): <span className="font-semibold text-blue-700">от 77 400 ₽/мес</span></p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <p className="text-blue-800 text-sm">
            💡 <strong>Совет:</strong> Рассчитайте свою реальную почасовую ставку и месячный доход
            с помощью{" "}
            <Link href="/" className="underline text-blue-700 hover:text-blue-900">
              калькулятора FreelanceCalc
            </Link>
            . Это поможет понять, какую ипотеку вы можете себе позволить сейчас, и сколько нужно
            зарабатывать для более крупного кредита.
          </p>
        </div>

        {/* Section 4 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Льготные программы: доступны ли самозанятым?
        </h2>
        <p className="mb-4">
          Хорошая новость: самозанятость сама по себе не является ограничением для льготных
          ипотечных программ. Критерии — возраст, наличие детей, регион, сфера деятельности.
        </p>

        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-1">Семейная ипотека (6%)</h3>
            <p className="text-sm text-gray-600">
              Доступна самозанятым с ребёнком до 6 лет (или с ребёнком-инвалидом до 18 лет).
              Ставка 6%, максимальная сумма 12 млн ₽ для Москвы/СПб и 6 млн ₽ для регионов.
              Первый взнос от 20%.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-1">ИТ-ипотека (5%)</h3>
            <p className="text-sm text-gray-600">
              Предназначена для сотрудников аккредитованных IT-компаний. Самозанятые
              разработчики, как правило, не подходят — программа требует трудового договора
              с IT-компанией. Исключение: если вы зарегистрированы как ИП и аккредитованы
              как IT-компания самостоятельно.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-1">Сельская ипотека (3%)</h3>
            <p className="text-sm text-gray-600">
              Доступна самозанятым при покупке жилья в сельской местности. Ставка 3%,
              максимальная сумма 6 млн ₽. Требования к подтверждению дохода — стандартные.
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Как повысить шансы на одобрение: 5 практических советов
        </h2>

        <ol className="list-decimal list-inside space-y-4 mb-6 text-gray-700">
          <li>
            <strong>Накопите стаж заранее.</strong> Зарегистрируйтесь как самозанятый минимум
            за 12 месяцев до подачи заявки — большинство банков требуют именно этот срок.
            Выдавайте чеки через «Мой налог» на каждый платёж.
          </li>
          <li>
            <strong>Проводите оплаты через банковский счёт.</strong> Банки анализируют выписку
            по счёту. Если заказчики переводят деньги напрямую на карту — это хорошо видно.
            Наличные и криптовалюта не подходят для подтверждения.
          </li>
          <li>
            <strong>Показывайте стабильный доход.</strong> Колебания дохода настораживают
            банк. Идеально — равномерные ежемесячные поступления. Если доход сезонный,
            объясните это на этапе рассмотрения.
          </li>
          <li>
            <strong>Увеличьте первоначальный взнос.</strong> Первый взнос 30–40% значительно
            повышает вероятность одобрения для самозанятых — банк видит меньший риск.
          </li>
          <li>
            <strong>Привлеките созаёмщика.</strong> Супруг(а) с официальным трудоустройством
            и справкой 2-НДФЛ существенно увеличивает совокупный доход и снижает риски для
            банка.
          </li>
        </ol>

        {/* Section 6 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Риски: когда могут отказать
        </h2>
        <p className="mb-4">
          Самозанятость — не причина для отказа, но есть факторы, которые банки оценивают
          критически:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>
            <strong>Стаж менее 6 месяцев</strong> — большинство банков откажут автоматически
          </li>
          <li>
            <strong>Нерегулярный доход</strong> — один большой платёж раз в 3 месяца хуже,
            чем стабильные ежемесячные
          </li>
          <li>
            <strong>Доход на грани лимита НПД</strong> — если вы зарабатываете близко к
            2,4 млн ₽/год, банк может сомневаться в дальнейшем статусе
          </li>
          <li>
            <strong>Плохая кредитная история</strong> — актуально для всех заёмщиков
            независимо от формы занятости
          </li>
          <li>
            <strong>Высокая долговая нагрузка</strong> — действующие кредиты, кредитные
            карты с задолженностью
          </li>
        </ul>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold mb-2">
            Рассчитайте, какой доход вам нужен для ипотеки
          </h2>
          <p className="text-blue-100 text-sm mb-4">
            Используйте калькулятор FreelanceCalc, чтобы понять свою рыночную ставку, посчитать
            месячный доход и сравнить его с требованиями банка.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-blue-700 font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition"
          >
            Открыть калькулятор →
          </Link>
        </div>

        {/* Related links */}
        <div className="border border-gray-200 rounded-xl p-5 mb-10">
          <h3 className="font-semibold text-gray-800 mb-3">Полезные статьи по теме</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/guide/nalog-samozanyatyj" className="text-blue-600 hover:underline">
                Налоги самозанятого в 2026: НПД 4% и 6%, расчёт и уплата
              </Link>
            </li>
            <li>
              <Link href="/guide/ip-vs-samozanyatyj" className="text-blue-600 hover:underline">
                ИП или самозанятый: что выгоднее для фрилансера
              </Link>
            </li>
            <li>
              <Link href="/guide/samozanyatyj-prevysil-limit" className="text-blue-600 hover:underline">
                Что делать, если самозанятый превысил лимит 2,4 млн ₽
              </Link>
            </li>
            <li>
              <Link href="/guide/samozanyatyj-bolnichnyj-2026" className="text-blue-600 hover:underline">
                Больничный для самозанятых в 2026 году: как оформить
              </Link>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h2>
        <div className="space-y-5">
          {faqJsonLd.mainEntity.map((item, i) => (
            <details key={i} className="border border-gray-200 rounded-lg group">
              <summary className="p-4 cursor-pointer font-medium text-gray-800 hover:text-blue-600 list-none flex justify-between items-center">
                {item.name}
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                {item.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-400 mt-10 border-t pt-4">
          Информация актуальна на апрель 2026 года. Условия банков могут меняться — уточняйте
          актуальные требования на официальных сайтах банков. Материал носит информационный
          характер и не является финансовой консультацией.
        </p>
      </main>
    </>
  );
}
