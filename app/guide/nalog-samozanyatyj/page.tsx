import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Налог для самозанятых в 2026 году: ставки 4% и 6%, лимит, расчёт | FreelanceCalc",
  description:
    "Как работает налог самозанятого в 2026 году: ставки 4% и 6%, лимит 2,4 млн ₽, как платить через приложение «Мой налог», сравнение с ИП УСН. Онлайн-калькулятор.",
  alternates: { canonical: `${BASE_URL}/guide/nalog-samozanyatyj` },
  openGraph: {
    title: "Налог самозанятого 2026: ставки 4% и 6%, лимит, как платить",
    description:
      "Полный гайд по налогу на профессиональный доход (НПД): ставки, лимиты, вычет, сравнение с ИП. Онлайн-калькулятор налога.",
    url: `${BASE_URL}/guide/nalog-samozanyatyj`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Налог самозанятого 2026: 4%, 6%, лимит 2.4 млн",
    description:
      "Ставки, лимиты, налоговый вычет, как платить. Онлайн-калькулятор налога самозанятого.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько процентов налог у самозанятого в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Самозанятый платит 4% с доходов от физических лиц и 6% с доходов от юридических лиц и индивидуальных предпринимателей. Ставки не изменились с момента введения НПД и зафиксированы до 2028 года.",
      },
    },
    {
      "@type": "Question",
      name: "Какой лимит дохода для самозанятых в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Максимальный доход самозанятого — 2,4 миллиона рублей в год (200 000 рублей в месяц в среднем). При превышении лимита статус самозанятого автоматически прекращается, нужно зарегистрировать ИП или уплатить НДФЛ 13% с суммы превышения.",
      },
    },
    {
      "@type": "Question",
      name: "Нужно ли самозанятому платить страховые взносы?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. Самозанятый не обязан платить страховые взносы в СФР (Социальный фонд России). Это одно из главных преимуществ режима. Можно платить добровольно для формирования пенсионного стажа — 50 798,88 ₽ в год в 2025 году.",
      },
    },
    {
      "@type": "Question",
      name: "Как платить налог самозанятому — через банк или приложение?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Через приложение «Мой налог» (ФНС России). Схема: вы фиксируете каждый доход в приложении (выдаёте чек), ФНС сама рассчитывает налог и к 12-му числу следующего месяца присылает уведомление. Платёж нужно внести до 28-го числа. Банковский перевод налоговой не нужен — всё через приложение или личный кабинет на nalog.ru.",
      },
    },
    {
      "@type": "Question",
      name: "Что выгоднее: самозанятый или ИП УСН 6%?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "При доходе до ~825 000 ₽ в год (68 750 ₽/месяц) самозанятость выгоднее: нет обязательных взносов ~49 500 ₽. При доходе выше — ИП выгоднее: взносы вычитаются из налога (100% при отсутствии сотрудников). При доходе свыше 2,4 млн ₽/год самозанятость невозможна — только ИП.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Налог для самозанятых в 2026 году: ставки, лимиты, как платить",
  description:
    "Полный гайд по налогу на профессиональный доход (НПД): ставки 4% и 6%, лимит 2,4 млн ₽, налоговый вычет, сравнение с ИП УСН.",
  url: `${BASE_URL}/guide/nalog-samozanyatyj`,
  datePublished: "2026-04-06",
  dateModified: "2026-04-06",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function NalogSamozanyatyjPage() {
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

      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Header */}
        <header className="mb-8 text-center">
          <Link
            href="/"
            className="text-sm font-semibold text-indigo-500 tracking-wide uppercase hover:underline"
          >
            FreelanceCalc
          </Link>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Налог для самозанятых в 2026 году: ставки, лимит и как платить
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            Полный гайд по НПД: 4% и 6%, лимит 2,4 млн ₽, налоговый вычет, сравнение с ИП — и онлайн-калькулятор налога.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>Время чтения: 7 минут</span>
            <span>·</span>
            <span>Обновлено апрель 2026</span>
          </div>
        </header>

        {/* Quick Calculator CTA */}
        <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-5 text-center">
          <p className="text-sm font-semibold text-indigo-800 mb-1">
            Хотите сразу посчитать налог?
          </p>
          <p className="text-xs text-indigo-600 mb-3">
            Введите доход — калькулятор покажет сумму налога и ставку с учётом налогового режима
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
          >
            Открыть калькулятор →
          </Link>
        </div>

        <div className="space-y-8">

          {/* Section 1 — Что такое НПД */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Что такое налог самозанятого (НПД)
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Налог на профессиональный доход (НПД) — специальный налоговый режим для физических лиц и ИП, которые работают самостоятельно, без наёмных сотрудников. В обиходе его называют «налог самозанятого» или «самозанятость».
              </p>
              <p>
                Режим введён в 2019 году и сейчас действует во всех регионах России. Его ключевое отличие от других режимов — минимальная налоговая нагрузка и полное отсутствие обязательных страховых взносов.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-xs text-green-800 font-semibold mb-2">Главные преимущества самозанятости:</p>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>✓ Ставка налога 4% или 6% — меньше, чем НДФЛ 13%</li>
                  <li>✓ Нет обязательных страховых взносов (~49 500 ₽/год у ИП)</li>
                  <li>✓ Регистрация за 5 минут через приложение «Мой налог»</li>
                  <li>✓ Не нужна касса, бухгалтер, налоговая декларация</li>
                  <li>✓ Ставки зафиксированы до 2028 года законом</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 — Ставки */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Ставки налога: 4% и 6% — в чём разница
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Ставка налога зависит от того, <strong>кто является вашим клиентом</strong>:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="font-bold text-blue-800 text-lg mb-1">4%</p>
                  <p className="text-xs text-blue-700 font-semibold mb-2">Доходы от физических лиц</p>
                  <p className="text-xs text-blue-600">
                    Репетиторство, услуги соседям, частным заказчикам, разовые фриланс-задачи для обычных людей.
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                  <p className="font-bold text-purple-800 text-lg mb-1">6%</p>
                  <p className="text-xs text-purple-700 font-semibold mb-2">Доходы от юрлиц и ИП</p>
                  <p className="text-xs text-purple-600">
                    Разработка для компаний, дизайн для бизнеса, консалтинг, агентства — большинство B2B-фриланса.
                  </p>
                </div>
              </div>
              <p>
                Большинство фрилансеров, работающих с компаниями и агентствами, платят <strong>6%</strong>. Если у вас смешанные клиенты — система автоматически применяет нужную ставку к каждому чеку.
              </p>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Пример расчёта налога</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                <p className="font-semibold text-slate-700 mb-2">Фриланс-разработчик, октябрь 2026:</p>
                <div className="flex justify-between">
                  <span className="text-slate-500">Доход от компании «Альфа» (ООО)</span>
                  <span className="font-semibold">120 000 ₽ × 6% = 7 200 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Доход от частного заказа (физлицо)</span>
                  <span className="font-semibold">30 000 ₽ × 4% = 1 200 ₽</span>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between">
                  <span className="font-bold text-slate-800">Итого налог за месяц</span>
                  <span className="font-bold text-indigo-700">8 400 ₽</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Эффективная ставка</span>
                  <span>5,6%</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 — Лимит */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Лимит дохода самозанятого: 2,4 млн ₽ в год
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Максимальный доход самозанятого — <strong>2 400 000 рублей в год</strong>. Это ~200 000 ₽ в месяц в среднем (но лимит годовой, а не ежемесячный).
              </p>
              <p>
                Что происходит при превышении лимита:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Статус самозанятого автоматически прекращается с момента превышения.</li>
                <li>С суммы превышения нужно уплатить НДФЛ 13% (как физлицо).</li>
                <li>Восстановить статус самозанятого можно с 1 января следующего года.</li>
                <li>Альтернатива — зарегистрировать ИП до превышения лимита.</li>
              </ul>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-amber-800 font-semibold mb-1">Практический совет для фрилансера:</p>
                <p className="text-xs text-amber-700">
                  Если ваш доход приближается к 150 000–180 000 ₽/месяц — зарегистрируйте ИП заранее. Это позволит перейти на ИП УСН без потери статуса и избежать уплаты НДФЛ с превышения.
                </p>
              </div>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Налоговый вычет при регистрации</h3>
              <p>
                При регистрации самозанятого ФНС даёт налоговый вычет — <strong>10 000 рублей</strong>. Вычет применяется автоматически: ставки снижаются до 3% (вместо 4%) и 4% (вместо 6%) до исчерпания 10 000 ₽.
              </p>
              <p>
                При ежемесячном доходе 100 000 ₽ и ставке 6% вычет исчерпается примерно через 1,6 месяца: 10 000 ÷ (6% − 4%) = ~50 000 ₽ доходов по вычету при ставке от юрлиц.
              </p>
            </div>
          </section>

          {/* Section 4 — Как платить */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как платить налог самозанятому: пошаговая инструкция
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Весь процесс уплаты налога происходит через приложение <strong>«Мой налог»</strong> (разработано ФНС России). Никаких деклараций, бухгалтеров и поездок в налоговую.
              </p>

              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold flex items-center justify-center">1</span>
                  <div>
                    <p className="font-semibold text-slate-700">Получили оплату — зафиксируйте доход</p>
                    <p className="text-slate-500 text-xs mt-0.5">В приложении «Мой налог» нажмите «Новая продажа», укажите сумму и кто платил (физлицо или юрлицо). Приложение выдаст чек — отправьте его клиенту.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold flex items-center justify-center">2</span>
                  <div>
                    <p className="font-semibold text-slate-700">До 12-го числа — получите уведомление</p>
                    <p className="text-slate-500 text-xs mt-0.5">ФНС сама посчитает налог за предыдущий месяц и пришлёт уведомление. Вам ничего считать не нужно.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold flex items-center justify-center">3</span>
                  <div>
                    <p className="font-semibold text-slate-700">До 28-го числа — оплатите налог</p>
                    <p className="text-slate-500 text-xs mt-0.5">Прямо в приложении картой или банковским переводом. Можно настроить автооплату — налог спишется автоматически.</p>
                  </div>
                </li>
              </ol>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-slate-600 font-semibold mb-1">Важно: чек обязателен</p>
                <p className="text-xs text-slate-500">
                  Каждая оплата должна фиксироваться чеком в «Мой налог». Если клиент (юрлицо) запрашивает чек для своей бухгалтерии — вы обязаны его предоставить. Без чека клиент не может учесть расходы.
                </p>
              </div>

              <p>
                Если налог за месяц меньше 100 ₽ — он переносится на следующий месяц и платится вместе с ним.
              </p>
            </div>
          </section>

          {/* Section 5 — Сравнение с ИП */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Самозанятый vs ИП УСН 6%: что выгоднее фрилансеру
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Оба режима используют ставку 6% с доходов от юрлиц — на первый взгляд одинаково. Но разница значительная.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-2 font-semibold text-slate-700 border border-slate-200">Параметр</th>
                      <th className="text-center p-2 font-semibold text-slate-700 border border-slate-200">Самозанятый</th>
                      <th className="text-center p-2 font-semibold text-slate-700 border border-slate-200">ИП УСН 6%</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Ставка налога", "4% / 6%", "6%"],
                      ["Страховые взносы", "Нет (добровольно)", "~49 500 ₽/год"],
                      ["Максимальный доход", "2,4 млн ₽/год", "265 млн ₽/год"],
                      ["Налоговая декларация", "Не нужна", "Раз в год"],
                      ["Касса (онлайн-ККТ)", "Не нужна", "Не нужна (УСН без сотрудников)"],
                      ["Наёмные сотрудники", "Нельзя", "Можно"],
                    ].map(([param, sam, ip]) => (
                      <tr key={param} className="hover:bg-slate-50">
                        <td className="p-2 border border-slate-200 text-slate-700">{param}</td>
                        <td className="p-2 border border-slate-200 text-center text-green-700 font-medium">{sam}</td>
                        <td className="p-2 border border-slate-200 text-center text-slate-600">{ip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Когда самозанятый выгоднее ИП?</h3>
              <p>
                При доходе до ~<strong>825 000 ₽ в год</strong> (~68 750 ₽/месяц) самозанятость выгоднее: вы экономите на взносах 49 500 ₽, которые ИП обязан платить вне зависимости от дохода.
              </p>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Когда ИП выгоднее самозанятого?</h3>
              <p>
                При доходе от <strong>825 000 ₽ в год</strong> ИП выгоднее: взносы 49 500 ₽ полностью вычитаются из налога (при отсутствии сотрудников). Эффективная ставка при доходе 1 млн ₽/год — около 1% вместо 6%. При доходе 2–3 млн ₽ разница с самозанятостью несущественна, но нет ограничения по лимиту.
              </p>

              <p>
                Для точного сравнения с вашими параметрами используйте{" "}
                <Link href="/nalog/sravnenie" className="text-indigo-600 hover:underline font-medium">
                  калькулятор сравнения налоговых режимов →
                </Link>
              </p>
            </div>
          </section>

          {/* Section 6 — Как учесть в ставке */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как учесть налог при расчёте ставки фрилансера
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Ошибка большинства фрилансеров — называть клиенту цену «нетто» (сколько хочется получить), а потом вычитать налог из этой суммы. Правильно — сразу закладывать налог в ставку.
              </p>

              <p>Формула обратного расчёта:</p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs text-slate-700">
                <p className="font-semibold text-slate-800 mb-1">Ставка клиенту (юрлицо, 6%) =</p>
                <p>Желаемый доход ÷ (1 − 0,06)</p>
                <p className="text-slate-400 mt-2">Пример: хочу 1 500 ₽/час → выставляю 1 500 ÷ 0,94 = <strong>1 596 ₽/час</strong></p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5 text-xs mt-2">
                <p className="font-semibold text-slate-700 mb-2">Таблица: сколько выставлять, чтобы получить нужную сумму</p>
                {[
                  ["1 000 ₽/час", "1 064 ₽ (4%)", "1 064 ₽", "1 064 ₽ → 1 064 ₽"],
                ].map(() => null)}
                <div className="grid grid-cols-3 gap-2 text-slate-500">
                  <span className="font-semibold text-slate-700">Хочу получить</span>
                  <span className="font-semibold text-slate-700 text-center">Выставить (4%)</span>
                  <span className="font-semibold text-slate-700 text-center">Выставить (6%)</span>
                </div>
                {[
                  ["1 000 ₽/час", "1 042 ₽", "1 064 ₽"],
                  ["1 500 ₽/час", "1 563 ₽", "1 596 ₽"],
                  ["2 000 ₽/час", "2 083 ₽", "2 128 ₽"],
                  ["3 000 ₽/час", "3 125 ₽", "3 191 ₽"],
                ].map(([want, p4, p6]) => (
                  <div key={want} className="grid grid-cols-3 gap-2 text-slate-600 border-t border-slate-100 pt-1.5">
                    <span>{want}</span>
                    <span className="text-center">{p4}</span>
                    <span className="text-center">{p6}</span>
                  </div>
                ))}
              </div>

              <p>
                Для автоматического расчёта ставки с учётом налога, загрузки и отпуска используйте{" "}
                <Link href="/" className="text-indigo-600 hover:underline font-medium">
                  калькулятор фрилансера →
                </Link>
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">FAQ по налогу самозанятого</h2>
            <div className="space-y-5">
              {[
                {
                  q: "Сколько процентов налог у самозанятого в 2026 году?",
                  a: "4% с доходов от физических лиц и 6% с доходов от юридических лиц и ИП. Ставки зафиксированы законом до 2028 года и не изменятся.",
                },
                {
                  q: "Какой лимит дохода для самозанятых в 2026 году?",
                  a: "2 400 000 рублей в год (~200 000 ₽/месяц в среднем). Лимит годовой. При превышении статус прекращается, нужно уплатить НДФЛ 13% с суммы сверх лимита или заранее зарегистрировать ИП.",
                },
                {
                  q: "Нужно ли самозанятому платить страховые взносы?",
                  a: "Нет. Это необязательно. Можно платить добровольно (~50 798 ₽/год) для формирования пенсионного стажа. Без добровольных взносов стаж не идёт.",
                },
                {
                  q: "Как платить налог самозанятому — через банк или приложение?",
                  a: "Через приложение «Мой налог». Вы фиксируете каждый доход (выдаёте чек), ФНС сама считает налог и присылает уведомление до 12-го числа. Платёж — до 28-го числа. Можно настроить автоплатёж.",
                },
                {
                  q: "Что выгоднее: самозанятый или ИП УСН 6%?",
                  a: "До 825 000 ₽/год (~68 750 ₽/месяц) — самозанятый: нет взносов 49 500 ₽. Выше — ИП выгоднее: взносы вычитаются из налога. При доходе свыше 2,4 млн ₽/год самозанятость невозможна — только ИП.",
                },
              ].map((item, i) => (
                <div key={i} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                  <h3 className="text-sm font-semibold text-slate-800 mb-1">{item.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="bg-slate-800 text-white rounded-2xl p-6 text-center">
            <h2 className="text-lg font-bold mb-2">Рассчитайте свою ставку с учётом налога</h2>
            <p className="text-slate-300 text-sm mb-4">
              Введите желаемый доход и налоговый режим — калькулятор покажет минимальную ставку для вашей специальности.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link
                href="/"
                className="inline-block bg-indigo-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-400 transition-colors"
              >
                Калькулятор ставки →
              </Link>
              <Link
                href="/nalog/sravnenie"
                className="inline-block bg-slate-700 text-slate-200 font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-slate-600 transition-colors"
              >
                Сравнить с ИП
              </Link>
            </div>
          </section>

          {/* Bottom nav links */}
          <section className="bg-slate-50 rounded-2xl p-5">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
              Полезные материалы
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <Link
                href="/guide/kalkulyator-frilansera"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Как рассчитать ставку
              </Link>
              <Link
                href="/nalog/dogovor-gph"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Налог по договору ГПХ
              </Link>
              <Link
                href="/guide/ip-vs-samozanyatyj"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                ИП vs самозанятый
              </Link>
            </div>
          </section>

        </div>

        {/* Back nav */}
        <nav className="mt-8 text-center">
          <Link
            href="/stati"
            className="text-sm text-slate-400 hover:text-indigo-600 transition-colors"
          >
            ← Все статьи о фрилансе
          </Link>
        </nav>
      </main>
    </>
  );
}
