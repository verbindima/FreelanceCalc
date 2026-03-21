import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Как выставить счёт самозанятому клиенту: чек в Мой налог 2026",
  description: "Самозанятые выставляют не счета, а чеки через приложение Мой налог. Пошаговая инструкция: как правильно оформить чек для физлица и юрлица, сроки выдачи, штрафы и аннулирование.",
  keywords: [
    "как выставить счёт самозанятому",
    "чек самозанятого мой налог",
    "самозанятый счёт клиенту",
    "как самозанятому оформить чек",
    "чек самозанятого 2026",
    "мой налог как выставить счёт",
    "самозанятый чек юрлицу",
    "самозанятый чек физлицу",
    "аннулирование чека самозанятого",
    "штраф за нечек самозанятого",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/kak-vystavit-schet-samozanyatomu" },
  openGraph: {
    title: "Как выставить счёт самозанятому клиенту: чек в Мой налог 2026",
    description: "Самозанятые выставляют не счета, а чеки через приложение Мой налог. Пошаговая инструкция + штрафы и аннулирование.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/kak-vystavit-schet-samozanyatomu`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/kak-vystavit-schet-samozanyatomu#article`,
      headline: "Как выставить счёт самозанятому клиенту: чек в Мой налог 2026",
      description:
        "Самозанятые выставляют не счета, а чеки через приложение Мой налог. Пошаговая инструкция: как оформить чек для физлица и юрлица, сроки, штрафы и аннулирование.",
      inLanguage: "ru",
      url: `${BASE_URL}/stati/kak-vystavit-schet-samozanyatomu`,
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      author: { "@type": "Organization", name: "FreelanceCalc" },
      publisher: {
        "@type": "Organization",
        name: "FreelanceCalc",
        url: BASE_URL,
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Статьи", item: `${BASE_URL}/stati` },
          {
            "@type": "ListItem",
            position: 3,
            name: "Как выставить счёт самозанятому",
            item: `${BASE_URL}/stati/kak-vystavit-schet-samozanyatomu`,
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/stati/kak-vystavit-schet-samozanyatomu#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Нужно ли самозанятому выставлять счёт-фактуру?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет. Самозанятые (плательщики НПД) не являются плательщиками НДС и не обязаны выставлять счета-фактуры. Вместо счёта-фактуры самозанятый выдаёт чек через приложение «Мой налог». Именно этот чек является единственным обязательным закрывающим документом для подтверждения расходов заказчика.",
          },
        },
        {
          "@type": "Question",
          name: "Когда надо выдать чек самозанятому?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Сроки выдачи чека зависят от способа оплаты: при наличном расчёте — в момент получения денег; при безналичной оплате от физлица — не позднее 9-го числа месяца, следующего за месяцем получения оплаты; при оплате от юрлица или ИП — в момент расчёта (или не позднее 9-го числа следующего месяца, если оплата безналичная). Для избежания штрафов рекомендуется выдавать чек сразу после получения денег.",
          },
        },
        {
          "@type": "Question",
          name: "Что будет если самозанятый не выдал чек?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "За невыдачу чека предусмотрены штрафы: первое нарушение — 20% от суммы дохода, минимум 1 000 рублей; повторное нарушение в течение 6 месяцев — 100% от суммы дохода, минимум 5 000 рублей. Штраф назначается налоговой службой по результатам проверки. Контрагенты (особенно юрлица) могут самостоятельно пожаловаться в ФНС, если не получат чек.",
          },
        },
        {
          "@type": "Question",
          name: "Как выдать чек самозанятому юридическому лицу?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Процесс не отличается от обычного: откройте приложение «Мой налог» → «Новая продажа» → укажите сумму → выберите тип заказчика «Юридическое лицо или ИП» → введите ИНН организации (приложение автоматически подтянет название) → укажите название услуги → нажмите «Выдать чек». Чек можно отправить клиенту ссылкой, QR-кодом или PDF на email. Для юрлиц чек обязателен — без него они не могут учесть расходы.",
          },
        },
        {
          "@type": "Question",
          name: "Можно ли аннулировать чек самозанятого?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Для аннулирования: откройте приложение «Мой налог» → раздел «Чеки» → найдите нужный чек → нажмите «Аннулировать» → выберите причину (возврат средств клиенту или ошибка при вводе). После аннулирования сумма дохода автоматически уменьшится, и налог будет пересчитан. Аннулировать можно любой чек, независимо от давности.",
          },
        },
      ],
    },
  ],
};

export default function KakVystavitSchetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3 flex-wrap">
            <Link href="/" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
              FreelanceCalc
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/stati" className="text-gray-500 text-sm hover:text-blue-600">
              Статьи
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 text-sm">Как выставить счёт самозанятому</span>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Как выставить счёт самозанятому клиенту: чек в Мой налог 2026
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Если вы самозанятый, вам часто задают вопрос: «Вышлите счёт на оплату».
              Но самозанятые не выставляют традиционные счета — они формируют{" "}
              <strong>чек через приложение «Мой налог»</strong>. Разбираем, как это работает,
              какие сроки нарушать нельзя, и что грозит за невыдачу чека.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
              <span>Обновлено: март 2026</span>
              <span>·</span>
              <span>Самозанятость и НПД</span>
              <span>·</span>
              <span>Россия</span>
            </div>
          </div>

          {/* Главное за 30 секунд */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
            <div className="font-semibold text-blue-900 mb-3 text-lg">Главное за 30 секунд</div>
            <ul className="text-sm text-blue-900 space-y-2">
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold flex-shrink-0">•</span>
                <span>
                  Самозанятые <strong>не выставляют счета</strong> — вместо счёта выдаётся{" "}
                  <strong>чек через приложение «Мой налог»</strong>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold flex-shrink-0">•</span>
                <span>
                  Чек формируется за 30 секунд: сумма + заказчик (физлицо или юрлицо/ИП) +
                  название услуги → «Выдать чек»
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold flex-shrink-0">•</span>
                <span>
                  Для юрлиц и ИП чек <strong>обязателен</strong> — без него они не смогут
                  включить ваш гонорар в расходы
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold flex-shrink-0">•</span>
                <span>
                  Штраф за невыдачу чека: 20% от суммы (мин. 1 000 ₽) — первый раз;
                  100% (мин. 5 000 ₽) — повторно в течение 6 мес
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold flex-shrink-0">•</span>
                <span>
                  Предварительный «счёт на оплату» — это просто договорённость, не официальный
                  документ. Официальный документ — только чек
                </span>
              </li>
            </ul>
          </div>

          {/* Section 1: Счёт или чек */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Счёт или чек: в чём разница?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Когда клиент просит «выставить счёт», он обычно имеет в виду документ, на
              основании которого переводит деньги. В традиционном бизнесе компании выставляют
              счёт-фактуру или счёт на оплату — это официальные документы бухгалтерского учёта.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              У самозанятых всё устроено иначе. Плательщики налога на профессиональный доход
              (НПД) <strong>не являются плательщиками НДС</strong>, поэтому счёт-фактуру
              выставлять не нужно и нельзя. Вместо этого закон обязывает самозанятого выдавать{" "}
              <strong>чек через приложение «Мой налог»</strong>.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">
                      Документ
                    </th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">
                      Кто выдаёт
                    </th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">
                      Когда
                    </th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">
                      Юридическая сила
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium">Счёт-фактура</td>
                    <td className="p-3 border border-gray-200">ООО, ИП с НДС</td>
                    <td className="p-3 border border-gray-200">После оказания услуг</td>
                    <td className="p-3 border border-gray-200">Официальный НДС-документ</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="p-3 border border-gray-200 font-medium">Счёт на оплату</td>
                    <td className="p-3 border border-gray-200">ООО, ИП, самозанятый (по желанию)</td>
                    <td className="p-3 border border-gray-200">До оплаты</td>
                    <td className="p-3 border border-gray-200 text-amber-700">
                      Не обязателен, не официальный
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium text-green-700">
                      Чек «Мой налог»
                    </td>
                    <td className="p-3 border border-gray-200 text-green-700">
                      <strong>Только самозанятый</strong>
                    </td>
                    <td className="p-3 border border-gray-200 text-green-700">После оплаты</td>
                    <td className="p-3 border border-gray-200 text-green-700">
                      <strong>Обязателен по закону</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
              <strong>Важно:</strong> Предварительный «счёт на оплату», который самозанятый может
              составить в Word или Google Docs, — это просто удобная форма договорённости.
              Он не является официальным документом и не заменяет чек. Официальный закрывающий
              документ для самозанятого — только чек из приложения «Мой налог».
            </div>
          </section>

          {/* Section 2: Пошаговая инструкция */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как выдать чек через Мой налог: пошаговая инструкция
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Весь процесс занимает около 30–60 секунд. Вам понадобится приложение
              «Мой налог» (iOS/Android) или веб-кабинет на{" "}
              <span className="font-medium">lknpd.nalog.ru</span>.
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "1",
                  emoji: "📱",
                  title: "Откройте приложение «Мой налог»",
                  desc: "Войдите в приложение по ИНН/паролю или через Госуслуги. На главном экране нажмите кнопку «Новая продажа» (оранжевая кнопка внизу экрана).",
                },
                {
                  step: "2",
                  emoji: "💰",
                  title: "Укажите сумму",
                  desc: "Введите сумму полученной оплаты. Важно: сумма в чеке должна точно совпадать с суммой, которую вы получили. Не округляйте и не занижайте.",
                },
                {
                  step: "3",
                  emoji: "👤",
                  title: "Выберите тип заказчика",
                  desc: "Приложение предложит выбрать: «Физическое лицо» (для частных клиентов) или «Юридическое лицо или ИП» (для компаний и предпринимателей). Для юрлиц и ИП введите ИНН — приложение автоматически подтянет название организации.",
                },
                {
                  step: "4",
                  emoji: "📝",
                  title: "Введите название услуги",
                  desc: "Укажите наименование того, за что получена оплата: «Разработка сайта», «Дизайн логотипа», «Консультация», «Перевод текстов» и т. д. Название должно отражать суть работы — это важно для налогового учёта клиента.",
                },
                {
                  step: "5",
                  emoji: "✅",
                  title: "Нажмите «Выдать чек»",
                  desc: "После нажатия чек сформируется мгновенно. Он автоматически зарегистрируется в ФНС — вам ничего дополнительно отправлять в налоговую не нужно.",
                },
                {
                  step: "6",
                  emoji: "📤",
                  title: "Отправьте чек клиенту",
                  desc: "Чек можно отправить тремя способами: ссылкой (скопировать в буфер и отправить в чат), QR-кодом (клиент сканирует камерой) или PDF-файлом на email. Выберите удобный вашему клиенту способ.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white rounded-xl border border-gray-200 p-5 flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-lg">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {item.emoji} {item.title}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6 text-sm text-green-900">
              <strong>Что должно быть в чеке обязательно:</strong> сумма, дата и время, наименование
              услуги, статус заказчика (физлицо — без ИНН, юрлицо/ИП — с ИНН). Уникальный номер
              чека и ИНН самозанятого подставляются автоматически.
            </div>
          </section>

          {/* Section 3: Физлицо vs юрлицо */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Чек для физлица vs юрлица/ИП: в чём разница?
            </h2>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Процесс создания чека одинаковый, но есть важные различия в том, зачем клиенту
              нужен чек и какую информацию нужно указывать.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">
                      Параметр
                    </th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-blue-700">
                      Физическое лицо
                    </th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-indigo-700">
                      Юридическое лицо / ИП
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium">ИНН в чеке</td>
                    <td className="p-3 border border-gray-200 text-gray-500">Не требуется</td>
                    <td className="p-3 border border-gray-200 font-medium text-indigo-700">
                      Обязателен
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="p-3 border border-gray-200 font-medium">Зачем нужен чек</td>
                    <td className="p-3 border border-gray-200">
                      Как подтверждение оплаты (не критично)
                    </td>
                    <td className="p-3 border border-gray-200 font-medium text-indigo-700">
                      Для учёта расходов в бухгалтерии (обязателен)
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium">Налог самозанятого</td>
                    <td className="p-3 border border-gray-200">4% от суммы</td>
                    <td className="p-3 border border-gray-200">6% от суммы</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="p-3 border border-gray-200 font-medium">
                      Последствия для клиента без чека
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-500">
                      Минимальные (нет налогового учёта)
                    </td>
                    <td className="p-3 border border-gray-200 text-red-700 font-medium">
                      Не может учесть расходы, риск доначисления налогов
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium">Доп. документы</td>
                    <td className="p-3 border border-gray-200 text-gray-500">
                      Не требуются
                    </td>
                    <td className="p-3 border border-gray-200">
                      Акт выполненных работ (по желанию/по договору)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mt-5 text-sm text-indigo-900">
              <strong>Для работы с юрлицами и ИП:</strong> Когда вы выбираете тип «Юридическое
              лицо или ИП» и вводите ИНН, приложение автоматически находит компанию и вписывает
              её название. Это важно — при неверном ИНН чек будет некорректным, и клиент не
              сможет принять расходы к учёту. Всегда уточняйте ИНН у заказчика перед формированием
              чека.
            </div>
          </section>

          {/* Section 4: Сроки */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Сроки выдачи чека: когда обязательно
            </h2>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Закон о НПД устанавливает конкретные дедлайны для выдачи чека в зависимости
              от способа получения оплаты. Нарушение этих сроков — основание для штрафа.
            </p>

            <div className="overflow-x-auto mb-5">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">
                      Способ оплаты
                    </th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">
                      Срок выдачи чека
                    </th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">
                      Рекомендация
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium">
                      Наличные деньги
                    </td>
                    <td className="p-3 border border-gray-200 text-red-700 font-medium">
                      В момент расчёта
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-600">
                      Сформировать сразу при получении наличных
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="p-3 border border-gray-200 font-medium">
                      Безналичный расчёт (перевод)
                    </td>
                    <td className="p-3 border border-gray-200 text-amber-700 font-medium">
                      До 9-го числа следующего месяца
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-600">
                      Лучше сформировать в день получения денег
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium">
                      Предоплата / аванс
                    </td>
                    <td className="p-3 border border-gray-200 text-amber-700 font-medium">
                      В момент получения аванса
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-600">
                      Чек на аванс — отдельный, чек на остаток — при доплате
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="p-3 border border-gray-200 font-medium">
                      Оплата через посредника
                      <br />
                      <span className="text-xs text-gray-400">(биржи, агрегаторы)</span>
                    </td>
                    <td className="p-3 border border-gray-200 text-amber-700 font-medium">
                      До 9-го числа следующего месяца
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-600">
                      Уточните, не выдаёт ли чек сам посредник автоматически
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
              <strong>Практический совет:</strong> Не ждите дедлайна — формируйте чек сразу
              после получения денег. Это занимает 30 секунд, снижает риск забыть и укрепляет
              доверие клиента (особенно юрлиц, которые ждут чек для бухгалтерии).
            </div>
          </section>

          {/* Section 5: Штрафы */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Штрафы за невыдачу чека
            </h2>

            <div className="bg-red-50 border border-red-300 rounded-xl p-5 mb-6">
              <div className="font-semibold text-red-900 text-lg mb-3">
                Размеры штрафов (ст. 129.13 НК РФ)
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white border border-red-200 rounded-lg p-4">
                  <div className="text-red-700 font-bold text-xl mb-1">20%</div>
                  <div className="text-sm font-medium text-red-900 mb-1">Первое нарушение</div>
                  <div className="text-sm text-red-800">
                    от суммы расчёта, но <strong>не менее 1 000 ₽</strong>
                  </div>
                  <div className="mt-2 text-xs text-red-600">
                    Пример: не выдали чек на 50 000 ₽ → штраф 10 000 ₽
                  </div>
                </div>
                <div className="bg-white border border-red-300 rounded-lg p-4">
                  <div className="text-red-800 font-bold text-xl mb-1">100%</div>
                  <div className="text-sm font-medium text-red-900 mb-1">
                    Повторное в течение 6 мес
                  </div>
                  <div className="text-sm text-red-800">
                    от суммы расчёта, но <strong>не менее 5 000 ₽</strong>
                  </div>
                  <div className="mt-2 text-xs text-red-600">
                    Пример: повторно не выдали чек на 30 000 ₽ → штраф 30 000 ₽
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Штрафы назначаются ФНС по результатам контрольных закупок или жалоб от контрагентов.
              Особенно внимательны юридические лица: если бухгалтер не получит чек и не сможет
              принять расходы к учёту, компания заинтересована пожаловаться в налоговую.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Обратите внимание: штраф начисляется на{" "}
              <strong>каждый факт невыдачи чека</strong> отдельно. Если за месяц вы не выдали
              чеки по 5 сделкам, каждая из них может быть оштрафована отдельно.
            </p>
          </section>

          {/* Section 6: Аннулирование */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как аннулировать чек самозанятого
            </h2>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Если клиент вернул деньги или вы допустили ошибку при вводе суммы — чек нужно
              аннулировать. Это занимает столько же времени, сколько его создание.
            </p>

            <div className="space-y-3 mb-6">
              {[
                {
                  step: "1",
                  text: 'Откройте приложение «Мой налог» → перейдите в раздел «Чеки» (или «Продажи»)',
                },
                {
                  step: "2",
                  text: "Найдите чек, который нужно аннулировать",
                },
                {
                  step: "3",
                  text: 'Нажмите на чек → выберите «Аннулировать»',
                },
                {
                  step: "4",
                  text: 'Укажите причину: «Возврат средств клиенту» или «Чек сформирован ошибочно»',
                },
                {
                  step: "5",
                  text: "Подтвердите аннулирование. Сумма дохода уменьшится автоматически, налог будет пересчитан",
                },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-lg border border-gray-200 p-4 flex gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 text-gray-700 font-bold flex items-center justify-center text-sm">
                    {item.step}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
                <div className="font-semibold text-green-900 mb-2">Можно аннулировать</div>
                <ul className="text-green-800 space-y-1">
                  <li>• Любой чек, независимо от даты</li>
                  <li>• Чек с неправильной суммой</li>
                  <li>• Чек при возврате денег клиенту</li>
                  <li>• Чек, если услуга не была оказана</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
                <div className="font-semibold text-amber-900 mb-2">Важно знать</div>
                <ul className="text-amber-800 space-y-1">
                  <li>• После аннулирования налог пересчитается</li>
                  <li>• Если налог уже уплачен — будет переплата (зачтётся в следующем периоде)</li>
                  <li>• Причину аннулирования нужно указать честно</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7: Предварительный счёт */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Предварительный счёт на оплату: как составить
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Многие юридические лица не могут перевести деньги без «счёта на оплату» — это
              требование их внутреннего финансового документооборота. Самозанятый может
              составить такой счёт, но важно понимать его природу.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-5 text-sm text-amber-900">
              <strong>Статус предварительного счёта:</strong> Это{" "}
              <strong>не официальный финансовый документ</strong> в понимании налогового
              законодательства. Это просто удобная форма, которая помогает клиенту инициировать
              платёж. Официальным документом станет чек после получения оплаты.
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Предварительный счёт можно составить в любом текстовом редакторе (Word, Google Docs)
              или воспользоваться бесплатными шаблонами онлайн. В нём обычно указывают:
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
              <div className="font-semibold text-gray-900 mb-3">
                Что включить в предварительный счёт:
              </div>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  "Ваше ФИО и статус «Самозанятый (плательщик НПД)»",
                  "Ваш ИНН",
                  "Название и ИНН компании-заказчика",
                  "Номер счёта и дата",
                  "Перечень услуг с указанием количества и стоимости",
                  "Итоговая сумма",
                  "Ваши банковские реквизиты для перевода",
                  'Пометка: «НДС не облагается (применяется НПД)»',
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-gray-700">
                    <span className="text-blue-500 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              После того как клиент оплатит счёт, вы обязаны{" "}
              <strong>выдать чек через «Мой налог»</strong>. Именно чек — единственный
              официальный закрывающий документ, который подтверждает факт получения дохода
              и уплату налога.
            </p>
          </section>

          {/* Section 8: Иностранный заказчик */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Чек для иностранного заказчика
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Самозанятые могут законно работать с иностранными клиентами. Налог НПД при
              получении дохода от иностранных юрлиц — 6% (как и с российскими юрлицами).
            </p>

            <div className="space-y-3">
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm">
                <div className="font-medium text-gray-900 mb-1">Как указать заказчика</div>
                <p className="text-gray-600">
                  При выборе типа заказчика выберите «Иностранная компания» или укажите название
                  компании на русском языке. Если у иностранной компании нет российского ИНН —
                  его вводить не нужно.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm">
                <div className="font-medium text-gray-900 mb-1">Валюта и пересчёт</div>
                <p className="text-gray-600">
                  Если оплата пришла в иностранной валюте (USD, EUR и т. д.), доход нужно
                  пересчитать в рубли по официальному курсу Центрального банка РФ на дату
                  фактического получения денег. Именно эту рублёвую сумму укажите в чеке.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm">
                <div className="font-medium text-gray-900 mb-1">Лимит дохода</div>
                <p className="text-gray-600">
                  Помните о лимите самозанятого: <strong>2,4 млн ₽ в год</strong>. При
                  превышении режим НПД отключается автоматически. С иностранными заказчиками,
                  которые платят в валюте, этот лимит можно превысить быстрее — следите
                  за накопленным доходом в приложении.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Частые вопросы о чеках самозанятого
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Нужно ли самозанятому выставлять счёт-фактуру?",
                  a: "Нет. Самозанятые не являются плательщиками НДС и не обязаны выставлять счета-фактуры. Это обязанность только для организаций и ИП, работающих с НДС. Вместо счёта-фактуры самозанятый выдаёт чек через приложение «Мой налог» — именно он является официальным закрывающим документом. Если клиент-юрлицо настаивает на счёте-фактуре, объясните, что как самозанятый вы освобождены от НДС и не можете его выписывать.",
                },
                {
                  q: "Когда надо выдать чек самозанятому?",
                  a: "Сроки зависят от способа оплаты: при наличном расчёте — в момент получения денег; при безналичной оплате от физлица — не позднее 9-го числа следующего месяца; при оплате от юрлица/ИП — в момент расчёта (или до 9-го числа следующего месяца при безнале). Рекомендуется выдавать чек сразу после получения денег — это безопаснее и удобнее для клиента.",
                },
                {
                  q: "Что будет если самозанятый не выдал чек?",
                  a: "Штраф за первое нарушение — 20% от суммы, минимум 1 000 ₽. Повторное нарушение в течение 6 месяцев — 100% от суммы, минимум 5 000 ₽. Штраф назначается ФНС по результатам проверки или жалобы контрагента. Юридические лица особенно заинтересованы в получении чека — без него они не могут учесть расходы, что даёт им мотив для жалобы в налоговую.",
                },
                {
                  q: "Как выдать чек самозанятому юридическому лицу?",
                  a: "Откройте «Мой налог» → «Новая продажа» → укажите сумму → выберите тип «Юридическое лицо или ИП» → введите ИНН организации (приложение автоматически найдёт название) → укажите название услуги → «Выдать чек». Отправьте чек клиенту ссылкой, QR-кодом или PDF на email. Всегда уточняйте ИНН у заказчика перед формированием чека, чтобы избежать ошибок.",
                },
                {
                  q: "Можно ли аннулировать чек самозанятого?",
                  a: "Да, аннулировать можно любой чек. Для этого: «Мой налог» → «Чеки» → найдите нужный чек → «Аннулировать» → выберите причину (возврат денег или ошибка). После аннулирования сумма дохода уменьшится, и налог пересчитается автоматически. Если налог уже уплачен — образуется переплата, которая зачтётся в счёт следующего налогового периода.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden group"
                >
                  <summary className="p-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center gap-3">
                    <span>{item.q}</span>
                    <span className="text-gray-400 flex-shrink-0 text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-700 leading-relaxed border-t border-gray-100">
                    <p className="mt-3">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Block */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 text-center mb-10">
            <div className="text-lg font-bold text-indigo-900 mb-2">
              Рассчитайте свою ставку с учётом налога НПД
            </div>
            <p className="text-sm text-indigo-700 mb-4 leading-relaxed">
              Бесплатный калькулятор: укажите желаемый доход — и узнайте, какую ставку
              выставлять клиентам с учётом налога 4% или 6%, простоев и других расходов
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Открыть калькулятор ставки →
            </Link>
          </div>

          {/* Summary box */}
          <div className="bg-gray-100 rounded-xl p-5 mb-8">
            <div className="font-semibold text-gray-900 mb-3">Итого: главное о чеках самозанятого</div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">1.</span>
                <span>Самозанятые выдают чек, а не счёт — через приложение «Мой налог»</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">2.</span>
                <span>Процесс: «Новая продажа» → сумма → тип заказчика → название услуги → «Выдать чек»</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">3.</span>
                <span>Для юрлиц и ИП чек обязателен с ИНН — без него они не учтут ваш гонорар в расходах</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">4.</span>
                <span>Выдавайте чек сразу — не рискуйте штрафом 20%/100% от суммы</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">5.</span>
                <span>Аннулировать чек можно в любой момент — при возврате или ошибке</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">6.</span>
                <span>Лимит дохода самозанятого: 2,4 млн ₽/год — при превышении режим отключается</span>
              </li>
            </ul>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 py-6 flex flex-wrap gap-4 justify-between items-center text-sm text-gray-500">
            <div className="flex flex-wrap gap-4">
              <Link href="/" className="hover:text-blue-600">
                FreelanceCalc
              </Link>
              <Link href="/stati" className="hover:text-blue-600">
                Статьи
              </Link>
              <Link href="/stati/kak-oformit-samozanyatost-2026" className="hover:text-blue-600">
                Как оформить самозанятость
              </Link>
              <Link href="/stati/izmeneniya-samozanyatyh-2026" className="hover:text-blue-600">
                Изменения 2026
              </Link>
            </div>
            <span>© {new Date().getFullYear()} FreelanceCalc</span>
          </div>
        </footer>
      </div>
    </>
  );
}
