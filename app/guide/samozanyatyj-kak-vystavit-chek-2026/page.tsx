import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Как выставить чек самозанятому в 2026 году: пошаговая инструкция | FreelanceCalc",
  description:
    "Как правильно выставить чек самозанятому через приложение «Мой налог» в 2026 году: физлицу, юрлицу и иностранному клиенту. Сроки выдачи чека, как аннулировать, штрафы за нарушение.",
  alternates: { canonical: `${BASE_URL}/guide/samozanyatyj-kak-vystavit-chek-2026` },
  openGraph: {
    title: "Как выставить чек самозанятому 2026: инструкция через «Мой налог»",
    description:
      "Пошаговая инструкция: чек физлицу, юрлицу, иностранцу. Сроки, аннулирование, штрафы за отсутствие чека по ст. 129.13 НК РФ.",
    url: `${BASE_URL}/guide/samozanyatyj-kak-vystavit-chek-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Как выставить чек самозанятому 2026",
    description:
      "3 сценария: физлицо, юрлицо, иностранный клиент. Сроки, аннулирование, штрафы. Инструкция по «Мой налог».",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "В какой срок самозанятый обязан выставить чек?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "По закону чек нужно выдать в момент получения денег или не позднее 9-го числа месяца, следующего за расчётным, если оплата поступила через агента или ИП/юрлицо. На практике рекомендуется выдавать чек сразу при получении оплаты — это исключает риск штрафа.",
      },
    },
    {
      "@type": "Question",
      name: "Нужен ли чек самозанятому при оплате от физлица наличными?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, при любом получении дохода нужно формировать чек — наличными, переводом на карту, через электронный кошелёк. Исключений нет. Чек выдаётся сразу в момент расчёта.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли аннулировать чек самозанятому?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. В приложении «Мой налог» откройте нужный чек → «Аннулировать» → выберите причину: «Чек сформирован ошибочно» или «Возврат средств покупателю». После аннулирования налог с этой суммы не начисляется, а уже уплаченный — уменьшается в следующем расчётном периоде.",
      },
    },
    {
      "@type": "Question",
      name: "Какой штраф за то, что самозанятый не выдал чек?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Первое нарушение — штраф 20% от суммы расчёта (минимум 200 ₽). Повторное нарушение в течение 6 месяцев — 100% суммы расчёта. Основание: ст. 129.13 НК РФ.",
      },
    },
    {
      "@type": "Question",
      name: "Нужен ли самозанятому ИНН клиента для формирования чека юрлицу?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, при оплате от организации или ИП необходимо указать ИНН покупателя. Это обязательное поле — без ИНН юрлицо не сможет учесть оплату в расходах и принять чек к учёту.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как выставить чек самозанятому в 2026 году: пошаговая инструкция",
  description:
    "Подробная инструкция по формированию чека в приложении «Мой налог» для физических лиц, организаций и ИП, а также иностранных клиентов. Сроки выдачи чека, порядок аннулирования и ответственность за нарушения.",
  url: `${BASE_URL}/guide/samozanyatyj-kak-vystavit-chek-2026`,
  datePublished: "2026-04-11",
  dateModified: "2026-04-11",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Как выставить чек самозанятому через «Мой налог»",
  description: "Пошаговая инструкция формирования чека НПД для физлица или юрлица",
  totalTime: "PT2M",
  step: [
    {
      "@type": "HowToStep",
      name: "Откройте «Мой налог» и нажмите «Новая продажа»",
      text: "Запустите официальное приложение ФНС «Мой налог». На главном экране нажмите кнопку «Новая продажа» (большой плюс или кнопка внизу экрана).",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "Укажите стоимость и описание услуги",
      text: "Введите сумму в рублях и напишите название услуги (например: «Разработка сайта», «Копирайтинг», «Дизайн логотипа»). Описание должно отражать суть работы — это важно для налоговой проверки.",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "Выберите тип покупателя",
      text: "Укажите кто платит: «Физическое лицо» — если клиент частный человек; «Юридическое лицо или ИП» — если платит компания или ИП. Для юрлица/ИП обязательно введите ИНН.",
      position: 3,
    },
    {
      "@type": "HowToStep",
      name: "Выдайте чек клиенту",
      text: "После нажатия «Выдать чек» приложение сформирует PDF или QR-код. Отправьте клиенту любым способом: ссылкой, через мессенджер, email или просто покажите QR-код на экране.",
      position: 4,
    },
  ],
};

export default function SamozanyatyKakVystavitChek2026() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600">
            Главная
          </Link>
          {" / "}
          <Link href="/guide" className="hover:text-blue-600">
            Гайды
          </Link>
          {" / "}
          <span>Как выставить чек самозанятому</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4 leading-tight">
          Как выставить чек самозанятому в 2026 году: пошаговая инструкция
        </h1>

        <p className="text-gray-500 text-sm mb-6">Обновлено: апрель 2026 · Время чтения: 5 минут</p>

        <p className="mb-6 text-lg">
          Чек — главный документ самозанятого. Именно на основе выданных чеков ФНС рассчитывает
          налог на профессиональный доход (НПД). Не выдал чек — рискуешь штрафом. Разбираем, как
          всё сделать правильно через приложение{" "}
          <strong>«Мой налог»</strong> — для физлица, организации и иностранного заказчика.
        </p>

        {/* Quick summary box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="font-semibold text-blue-800 mb-2">Коротко о главном:</p>
          <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
            <li>Чек выдаётся сразу при получении оплаты</li>
            <li>Для юрлица/ИП обязательно нужен ИНН клиента</li>
            <li>Иностранным клиентам — тот же порядок, указывается страна</li>
            <li>Аннулировать чек можно — налог пересчитается</li>
            <li>Штраф за нарушение: 20% первый раз, 100% повторно</li>
          </ul>
        </div>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Что такое чек самозанятого и зачем он нужен
        </h2>
        <p className="mb-4">
          Чек самозанятого — это электронный документ, который формируется в приложении «Мой налог»
          при каждом получении дохода. Он подтверждает факт оказания услуги (выполнения работы) и
          передаётся покупателю.
        </p>
        <p className="mb-4">
          Для <strong>физических лиц</strong> чек служит подтверждением легальной сделки. Для
          <strong> организаций и ИП</strong> — обязательным первичным документом для учёта расходов.
          Юрлицо без чека НПД не может признать оплату самозанятому расходом и не имеет права
          учесть её в налоговой базе.
        </p>
        <p className="mb-4">
          Приложение «Мой налог» автоматически передаёт данные о каждом чеке в ФНС — именно так
          налоговая узнаёт о вашем доходе и начисляет налог. Никакой декларации подавать не нужно:
          весь учёт ведётся через приложение.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Шаг за шагом: как выставить чек через «Мой налог»
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Сценарий 1: оплата от физического лица</h3>
        <p className="mb-3">
          Самый простой случай — клиент перевёл деньги на вашу карту, наличными или через СБП.
        </p>
        <ol className="list-decimal list-inside space-y-3 mb-6 pl-2">
          <li>
            Откройте приложение «Мой налог» → нажмите{" "}
            <strong>«Новая продажа»</strong> (кнопка «+» на главном экране).
          </li>
          <li>
            Введите <strong>сумму</strong> полученной оплаты в рублях.
          </li>
          <li>
            Напишите <strong>название услуги</strong>: «Разработка лендинга», «Перевод текста»,
            «Репетиторство по математике» и т.п. Это важно — ФНС видит описание.
          </li>
          <li>
            В поле «Покупатель» оставьте <strong>«Физическое лицо»</strong> — ИНН не требуется.
          </li>
          <li>
            Нажмите <strong>«Выдать чек»</strong>. Чек готов — отправьте клиенту ссылкой, в
            мессенджер или распечатайте QR-код.
          </li>
        </ol>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
          <p className="text-green-800 text-sm">
            💡 <strong>Совет:</strong> Не нужно вводить имя клиента — физлицо анонимно. Укажите
            только сумму и описание. Даже если платёж разбит на части — формируйте один чек на
            итоговую сумму.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          Сценарий 2: оплата от юридического лица или ИП
        </h3>
        <p className="mb-3">
          Если заказчик — компания или ИП, чек обязателен для их бухгалтерии. Без него они не
          смогут учесть оплату в расходах.
        </p>
        <ol className="list-decimal list-inside space-y-3 mb-6 pl-2">
          <li>
            В «Мой налог» → «Новая продажа» → введите сумму и название услуги.
          </li>
          <li>
            В поле «Покупатель» выберите{" "}
            <strong>«Юридическое лицо или ИП»</strong>.
          </li>
          <li>
            Введите <strong>ИНН организации или ИП</strong> — приложение автоматически подтянет
            название из реестра ФНС.
          </li>
          <li>
            Проверьте данные и нажмите <strong>«Выдать чек»</strong>.
          </li>
          <li>
            Отправьте PDF чека бухгалтеру заказчика — по почте, через мессенджер или загрузите в
            систему документооборота.
          </li>
        </ol>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="text-yellow-800 text-sm">
            ⚠️ <strong>Важно для бухгалтерии заказчика:</strong> Чек самозанятого — полноценный
            первичный документ (п. 8–10 ст. 15 Федерального закона № 422-ФЗ). Акт выполненных
            работ дополнительно нужен, только если это прописано в договоре.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          Сценарий 3: оплата от иностранного заказчика
        </h3>
        <p className="mb-3">
          Работаете на зарубежные компании или получаете деньги из-за рубежа? Чек всё равно нужен —
          и порядок почти такой же, но с нюансами.
        </p>
        <ol className="list-decimal list-inside space-y-3 mb-4 pl-2">
          <li>
            В поле «Покупатель» выберите <strong>«Иностранная компания»</strong> (или
            «Физическое лицо» если платит частный иностранец).
          </li>
          <li>
            Укажите <strong>страну</strong> заказчика (например, Германия, Казахстан, США).
          </li>
          <li>
            Сумму вводите <strong>в рублях</strong> — по курсу ЦБ РФ на дату получения платежа.
          </li>
          <li>
            Выдайте чек как обычно. Иностранный заказчик чек обычно не запрашивает, но он нужен
            вам для правильного учёта дохода.
          </li>
        </ol>
        <p className="mb-6 text-sm text-gray-600">
          Подробнее о правилах работы с зарубежными заказчиками читайте в статье{" "}
          <Link
            href="/guide/samozanyatyj-inostrannyj-zakazchik-2026"
            className="text-blue-600 hover:underline"
          >
            Самозанятый с иностранным заказчиком 2026
          </Link>
          .
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Сроки выдачи чека: когда выдавать</h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Способ оплаты</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Срок выдачи чека</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Наличные</td>
                <td className="border border-gray-300 px-4 py-2">В момент расчёта</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Перевод на карту (физлицо)</td>
                <td className="border border-gray-300 px-4 py-2">В момент получения</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Перевод от юрлица / ИП</td>
                <td className="border border-gray-300 px-4 py-2">
                  Не позднее 9-го числа следующего месяца
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  Через агента (маркетплейс, биржа)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Не позднее 9-го числа следующего месяца
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6 text-gray-700">
          Несмотря на то, что для юрлиц есть «льготный» срок до 9-го числа, профессиональная
          практика — выдавать чек сразу при получении денег. Так вы не забудете, и налог начислится
          точно в тот месяц, в котором получен доход.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Как аннулировать (отозвать) чек самозанятого
        </h2>
        <p className="mb-4">
          Ошиблись в сумме или клиент вернул деньги? Чек можно аннулировать — налог с него
          пересчитается.
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-4 pl-2">
          <li>
            В «Мой налог» перейдите в раздел{" "}
            <strong>«Мои продажи»</strong>.
          </li>
          <li>Найдите нужный чек и откройте его.</li>
          <li>
            Нажмите <strong>«Аннулировать»</strong> (обычно в нижней части экрана).
          </li>
          <li>
            Выберите причину: <em>«Чек сформирован ошибочно»</em> или{" "}
            <em>«Возврат средств покупателю»</em>.
          </li>
          <li>Подтвердите действие.</li>
        </ol>
        <p className="mb-4">
          После аннулирования налог за этот чек не начисляется. Если налог за этот месяц уже был
          рассчитан, разница вычтется из следующего начисления.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <p className="text-red-800 text-sm">
            ⚠️ <strong>Важно:</strong> Нельзя аннулировать чек просто потому, что «не хочется
            платить налог». Основание для аннулирования должно быть реальным: ошибка в данных или
            фактический возврат денег клиенту. Необоснованное аннулирование — налоговое
            правонарушение.
          </p>
        </div>

        {/* Section 5 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Штрафы за нарушение порядка выдачи чека
        </h2>
        <p className="mb-4">
          Обязанность выдавать чек закреплена в ст. 14 Федерального закона № 422-ФЗ. Ответственность
          за нарушение — ст. 129.13 НК РФ:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-red-50">
                <th className="border border-gray-300 px-4 py-2 text-left">Нарушение</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Штраф</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Первое нарушение (чек не выдан)
                </td>
                <td className="border border-gray-300 px-4 py-2 font-semibold text-red-700">
                  20% от суммы расчёта (минимум 200 ₽)
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  Повторное нарушение в течение 6 месяцев
                </td>
                <td className="border border-gray-300 px-4 py-2 font-semibold text-red-700">
                  100% суммы расчёта (минимум 200 ₽)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-4 text-sm text-gray-600">
          Подробнее обо всех штрафах для самозанятых читайте в{" "}
          <Link
            href="/guide/shtrafy-samozanyatogo-2026"
            className="text-blue-600 hover:underline"
          >
            полном гайде по штрафам НПД 2026
          </Link>
          .
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Частые ошибки при выдаче чека</h2>
        <ul className="space-y-3 mb-6">
          <li className="flex gap-3">
            <span className="text-red-500 font-bold shrink-0">✗</span>
            <p>
              <strong>Выставить один чек за несколько месяцев работы.</strong> Неправильно: каждый
              платёж — отдельный чек. Налог начисляется в месяце получения дохода.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="text-red-500 font-bold shrink-0">✗</span>
            <p>
              <strong>Указать неверную сумму.</strong> Если ошиблись — аннулируйте чек сразу и
              выдайте новый. Не ждите, пока налоговая найдёт расхождение.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="text-red-500 font-bold shrink-0">✗</span>
            <p>
              <strong>Не указать ИНН для юрлица.</strong> Заказчик-организация не сможет учесть
              расходы — вас попросят переделать чек, а это займёт время и создаёт неловкость.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="text-red-500 font-bold shrink-0">✗</span>
            <p>
              <strong>Выставить сумму в валюте.</strong> Всегда пересчитывайте в рубли по курсу ЦБ
              на дату получения платежа. Приложение «Мой налог» принимает только рубли.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="text-red-500 font-bold shrink-0">✗</span>
            <p>
              <strong>Забыть про чек за предоплату.</strong> Получили аванс 50% — выдайте чек
              сразу. Когда получите остаток — ещё один чек. Налог платится с каждого поступления.
            </p>
          </li>
        </ul>

        {/* Calculator CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-6 mb-10">
          <h3 className="text-xl font-bold mb-2">Рассчитайте свою ставку как самозанятый</h3>
          <p className="text-blue-100 mb-4 text-sm">
            Узнайте, сколько нужно зарабатывать, чтобы покрыть налоги и оставить нужную сумму себе.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-blue-700 font-semibold px-5 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            Открыть калькулятор →
          </Link>
        </div>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold mt-10 mb-6">Частые вопросы</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              В какой срок самозанятый обязан выставить чек?
            </h3>
            <p className="text-gray-700">
              По закону чек нужно выдать в момент получения денег или не позднее 9-го числа месяца,
              следующего за расчётным, если оплата поступила через агента или от ИП/юрлица. На
              практике рекомендуется выдавать чек сразу при получении оплаты.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Нужен ли чек при оплате наличными?
            </h3>
            <p className="text-gray-700">
              Да, при любом получении дохода нужно формировать чек — наличными, переводом на карту,
              через электронный кошелёк. Исключений нет. Чек выдаётся сразу в момент расчёта.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Можно ли аннулировать чек самозанятому?
            </h3>
            <p className="text-gray-700">
              Да. В «Мой налог» откройте нужный чек → «Аннулировать» → выберите причину. После
              аннулирования налог с этой суммы не начисляется, а уже уплаченный — уменьшается в
              следующем расчётном периоде.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Какой штраф за то, что самозанятый не выдал чек?
            </h3>
            <p className="text-gray-700">
              Первое нарушение — штраф 20% от суммы расчёта (минимум 200 ₽). Повторное нарушение в
              течение 6 месяцев — 100% суммы расчёта. Основание: ст. 129.13 НК РФ.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Нужен ли ИНН клиента для формирования чека юрлицу?
            </h3>
            <p className="text-gray-700">
              Да, при оплате от организации или ИП необходимо указать ИНН покупателя. Это
              обязательное поле — без ИНН юрлицо не сможет учесть оплату в расходах.
            </p>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-xl font-bold mb-4">Читайте также</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/guide/nalog-samozanyatyj"
                className="text-blue-600 hover:underline"
              >
                Налог самозанятого: ставки, порядок уплаты, вычеты 2026
              </Link>
            </li>
            <li>
              <Link
                href="/guide/shtrafy-samozanyatogo-2026"
                className="text-blue-600 hover:underline"
              >
                Штрафы для самозанятых в 2026 году — полный список
              </Link>
            </li>
            <li>
              <Link
                href="/guide/akt-vypolnennyh-rabot-samozanyatogo"
                className="text-blue-600 hover:underline"
              >
                Акт выполненных работ самозанятого: когда нужен и как оформить
              </Link>
            </li>
            <li>
              <Link
                href="/guide/dogovor-s-samozanyatym-2026"
                className="text-blue-600 hover:underline"
              >
                Договор с самозанятым: образец и требования 2026
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
