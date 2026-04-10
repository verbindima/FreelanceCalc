import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Пенсия самозанятого в 2026 году: идёт ли стаж, сколько платить | FreelanceCalc",
  description:
    "Самозанятый и пенсия 2026: по умолчанию стаж не идёт. Добровольные взносы в СФР — 57 390 ₽/год за полный год стажа. Расчёт выгоды и инструкция как подключить через «Мой налог».",
  alternates: { canonical: `${BASE_URL}/guide/samozanyatyj-pensiya-2026` },
  openGraph: {
    title: "Пенсия самозанятых 2026: идёт ли стаж и стоит ли платить взносы",
    description:
      "57 390 ₽/год → ~+500 ₽/мес к пенсии. Считаем реальную окупаемость и рассказываем как подключить добровольное пенсионное страхование.",
    url: `${BASE_URL}/guide/samozanyatyj-pensiya-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Пенсия самозанятых 2026: стаж, взносы, выгода",
    description:
      "По умолчанию пенсионный стаж у самозанятых не идёт. Разбираем: стоит ли платить 57 390 ₽/год ради пенсии.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Идёт ли пенсионный стаж у самозанятых?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "По умолчанию — нет. Налог на профессиональный доход (НПД) не включает пенсионные взносы. Если самозанятый не платит добровольные взносы в СФР и нигде не работает официально — пенсионный стаж не копится и баллы не начисляются.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько стоит 1 год пенсионного стажа для самозанятого в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "В 2026 году полный год страхового стажа стоит 57 390 ₽ (такой же тариф как у ИП на добровольном страховании). Это минимальный взнос: за него начисляется 1 год стажа и индивидуальные пенсионные коэффициенты (баллы). Можно внести меньше — тогда зачтётся пропорциональный период. Например, 38 941 ₽ дают ~6 месяцев 16 дней стажа.",
      },
    },
    {
      "@type": "Question",
      name: "Как самозанятому подключить добровольное пенсионное страхование?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Через приложение «Мой налог»: раздел «Прочее» → «Страхование» → «Пенсионное страхование» → «Подать заявление». Либо через сайт СФР (sfr.gov.ru) или Госуслуги. После подачи заявления нужно оплатить взнос до 31 декабря текущего года.",
      },
    },
    {
      "@type": "Question",
      name: "Что будет с пенсией самозанятого, если не платить взносы?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Если самозанятый всю жизнь работает только по НПД без добровольных взносов — у него не будет страховой пенсии по старости. При достижении пенсионного возраста (65 лет для мужчин, 60 лет для женщин) он получит только социальную пенсию — около 7 500 ₽/месяц (для мест с районными коэффициентами — выше). Социальная пенсия назначается на 5 лет позже страховой.",
      },
    },
    {
      "@type": "Question",
      name: "Выгодно ли самозанятому платить пенсионные взносы?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Математически — спорно. 57 390 ₽ взносов дают примерно +500 ₽/мес к страховой пенсии. Чтобы отбить вложение, нужно получать пенсию ~9,5 лет (до 74–75 лет). При этом деньги можно инвестировать самостоятельно. Для молодых фрилансеров разумная альтернатива — совместить: работать часть времени по трудовому договору (работодатель платит взносы) или вести ИП параллельно.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Пенсия самозанятого в 2026 году: идёт ли стаж, сколько платить и стоит ли вообще",
  description:
    "Разбираем пенсионные права самозанятых: почему по умолчанию стаж не копится, как подключить добровольное страхование в СФР, сколько это стоит и честная математика окупаемости.",
  url: `${BASE_URL}/guide/samozanyatyj-pensiya-2026`,
  datePublished: "2026-04-10",
  dateModified: "2026-04-10",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function SamozanyatyPensiyaPage() {
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

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-3xl mx-auto px-4 py-10">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-blue-600">
                FreelanceCalc
              </Link>
              {" → "}
              <Link href="/guide" className="hover:text-blue-600">
                Гайды
              </Link>
              {" → "}
              <span>Пенсия самозанятого</span>
            </nav>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Пенсия самозанятого в 2026 году: идёт ли стаж и стоит ли платить взносы
            </h1>
            <p className="text-lg text-gray-600">
              По умолчанию НПД не даёт пенсионного стажа — это сюрприз для многих фрилансеров.
              Разбираем: что происходит с пенсией на НПД, как подключить добровольное страхование
              и честная математика — стоит ли игра свеч.
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
              <span>Обновлено: апрель 2026</span>
              <span>·</span>
              <span>Время чтения: ~5 мин</span>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

          {/* Alert: главный факт */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-amber-800 font-medium text-base">
              ⚠️ Важно: налог НПД (6% или 4%) не включает пенсионные взносы. Если вы работаете
              только как самозанятый и не платите добровольно в СФР — пенсионный стаж{" "}
              <strong>не идёт</strong>, баллы <strong>не начисляются</strong>.
            </p>
          </div>

          {/* Раздел 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему у самозанятого нет пенсии «по умолчанию»
            </h2>
            <p className="text-gray-700 mb-4">
              Самозанятость (НПД) — самый дешёвый налоговый режим в России: 4% с физлиц,
              6% с юрлиц. Именно поэтому взносы в пенсионную систему туда не включены — иначе
              ставка была бы выше.
            </p>
            <p className="text-gray-700 mb-4">
              Когда вы платите НПД, деньги уходят в два места:
            </p>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Куда идёт налог</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Доля (с физлиц, 4%)</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Доля (с юрлиц, 6%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-gray-700">ФОМС (медицина)</td>
                    <td className="px-4 py-3 text-right text-gray-700">37% от налога (1,5%)</td>
                    <td className="px-4 py-3 text-right text-gray-700">25% от налога (1,5%)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Региональный бюджет</td>
                    <td className="px-4 py-3 text-right text-gray-700">63% от налога (2,5%)</td>
                    <td className="px-4 py-3 text-right text-gray-700">75% от налога (4,5%)</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="px-4 py-3 font-medium text-red-700">ПФР / СФР (пенсия)</td>
                    <td className="px-4 py-3 text-right font-bold text-red-700">0 ₽</td>
                    <td className="px-4 py-3 text-right font-bold text-red-700">0 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700">
              Вывод: медицинская страховка включена, пенсионная — нет.
            </p>
          </section>

          {/* Раздел 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Что будет с пенсией, если ничего не платить
            </h2>
            <p className="text-gray-700 mb-4">
              Если самозанятый проработал только на НПД и не делал добровольных взносов — при
              достижении пенсионного возраста он получает{" "}
              <strong>социальную пенсию</strong>, а не страховую.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">Страховая пенсия</div>
                <div className="text-xl font-bold text-gray-900">от 20 000 ₽/мес</div>
                <div className="text-sm text-gray-600 mt-2">
                  При наличии минимум 15 лет стажа и 28,2 баллов. Возраст: 65 лет (м) / 60 лет (ж)
                </div>
              </div>
              <div className="bg-white border border-red-100 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">Социальная пенсия (без стажа)</div>
                <div className="text-xl font-bold text-red-600">~7 500 ₽/мес</div>
                <div className="text-sm text-gray-600 mt-2">
                  Назначается на 5 лет позже: 70 лет (м) / 65 лет (ж). Индексируется ежегодно.
                </div>
              </div>
            </div>
            <p className="text-gray-700">
              Разница — примерно 12 500 ₽/мес и 5 дополнительных лет ожидания. Это существенно.
            </p>
          </section>

          {/* Раздел 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Добровольные взносы в СФР: сколько стоит пенсионный стаж в 2026 году
            </h2>
            <p className="text-gray-700 mb-4">
              Самозанятый может добровольно вступить в систему пенсионного страхования и платить
              взносы самостоятельно. Тариф в 2026 году:
            </p>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Период</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Взнос</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Стаж</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Полный 2026 год</td>
                    <td className="px-4 py-3 text-right font-bold text-gray-900">57 390 ₽</td>
                    <td className="px-4 py-3 text-right text-gray-700">12 месяцев</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Минимальный взнос (≈6,5 мес)</td>
                    <td className="px-4 py-3 text-right font-bold text-gray-900">38 941 ₽</td>
                    <td className="px-4 py-3 text-right text-gray-700">~6 мес 16 дней</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Максимальный взнос</td>
                    <td className="px-4 py-3 text-right font-bold text-gray-900">572 204 ₽</td>
                    <td className="px-4 py-3 text-right text-gray-700">12 мес + макс. баллы</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Важно:</strong> оплатить взносы нужно до <strong>31 декабря</strong> текущего
              года. Платёж за 2026 год — до 31 декабря 2026.
            </p>
            <p className="text-gray-700">
              Пропорциональный расчёт: если внесёте 28 695 ₽ (половину от 57 390 ₽) — получите
              6 месяцев стажа.
            </p>
          </section>

          {/* Раздел 4: честная математика */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Честная математика: стоит ли платить пенсионные взносы
            </h2>
            <p className="text-gray-700 mb-4">
              Давайте посчитаем реальную доходность добровольных пенсионных взносов.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
              <h3 className="font-semibold text-blue-900 mb-3">Пример расчёта</h3>
              <div className="space-y-2 text-sm text-blue-800">
                <div className="flex justify-between">
                  <span>Взнос за 1 год (2026)</span>
                  <span className="font-bold">57 390 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Прирост пенсии (примерно)</span>
                  <span className="font-bold">+500 ₽/мес</span>
                </div>
                <div className="flex justify-between">
                  <span>Лет до окупаемости</span>
                  <span className="font-bold">57 390 ÷ (500 × 12) ≈ 9,5 лет</span>
                </div>
                <div className="flex justify-between border-t border-blue-200 pt-2 mt-2">
                  <span>Окупится в возрасте (если вышли в 65)</span>
                  <span className="font-bold">~74–75 лет</span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              Получается: чтобы «отбить» взнос, нужно прожить после выхода на пенсию почти
              10 лет. Средняя ожидаемая продолжительность жизни в России (2025) — около
              73–74 лет для мужчин и 78 лет для женщин. Математика работает только если вы
              доживёте значительно дальше средних показателей.
            </p>

            <p className="text-gray-700 mb-4">
              Альтернатива: те же 57 390 ₽ на ИИС с консервативным портфелем (облигации ОФЗ,
              ~12% годовых) за 30 лет превратятся в ~1 600 000 ₽ — что даст ежемесячный доход
              ~13 000 ₽ при капитализации.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Вывод: когда платить взносы всё же стоит</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-green-600 flex-shrink-0">✓</span>
                  Вам не хватает нескольких лет для минимального стажа (15 лет) — доплатить выгоднее,
                  чем потерять всю страховую пенсию
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 flex-shrink-0">✓</span>
                  У вас уже есть большой стаж (работали по трудовому договору) и хотите добрать
                  до 15 лет
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 flex-shrink-0">✓</span>
                  Вы не склонны к самостоятельному инвестированию и хотите «принудительные сбережения»
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 flex-shrink-0">✗</span>
                  Молодой фрилансер, далеко до пенсии, умеете инвестировать — лучше ИИС/брокерский счёт
                </li>
              </ul>
            </div>
          </section>

          {/* Раздел 5: как подключить */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как самозанятому подключить добровольное пенсионное страхование
            </h2>
            <p className="text-gray-700 mb-5">
              Три способа подать заявление на добровольное вступление в систему ОПС:
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Через «Мой налог»",
                  desc: "Откройте приложение → «Прочее» → «Страхование» → «Пенсионное страхование» → «Подать заявление». Самый быстрый способ — займёт 2 минуты.",
                  tag: "Рекомендуем",
                  tagColor: "bg-green-100 text-green-700",
                },
                {
                  step: "2",
                  title: "Через Госуслуги",
                  desc: "Зайдите на gosuslugi.ru, найдите услугу «Добровольное вступление в правоотношения по ОПС» (ФНС России). Заявление уходит в СФР автоматически.",
                  tag: "Онлайн",
                  tagColor: "bg-blue-100 text-blue-700",
                },
                {
                  step: "3",
                  title: "Лично в отделении СФР",
                  desc: "Приходите в ближайшее отделение Социального фонда России с паспортом и СНИЛС. Сотрудник оформит заявление на месте.",
                  tag: "Офлайн",
                  tagColor: "bg-gray-100 text-gray-600",
                },
              ].map(({ step, title, desc, tag, tagColor }) => (
                <div key={step} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    {step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900">{title}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColor}`}>{tag}</span>
                    </div>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-600">
              <strong>После подачи заявления:</strong> оплатите взносы до 31 декабря текущего года
              через «Мой налог», Госуслуги или в отделении банка. Реквизиты для оплаты предоставит
              СФР после регистрации заявления (обычно в течение 5 рабочих дней).
            </div>
          </section>

          {/* Раздел 6: альтернативы */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Альтернативы: как накопить пенсионный стаж без доп. расходов
            </h2>
            <p className="text-gray-700 mb-4">
              Платить 57 000 ₽/год из своего кармана — не единственный вариант.
            </p>
            <div className="space-y-3">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Совмещать НПД с работой по трудовому договору
                </h3>
                <p className="text-sm text-gray-600">
                  Закон разрешает быть самозанятым и одновременно работать по найму у другого
                  работодателя. Пока работаете официально — работодатель платит взносы в СФР за вас
                  (22% от зарплаты). Стаж идёт автоматически.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Открыть ИП и платить фиксированные взносы
                </h3>
                <p className="text-sm text-gray-600">
                  ИП на УСН платит фиксированные страховые взносы: в 2026 году — 53 658 ₽/год
                  (ОПС + ОМС). Взносы ОПС дают пенсионный стаж. Для фрилансера с доходом
                  от 1 млн ₽/год ИП может быть выгоднее НПД ещё и по налоговой нагрузке.
                </p>
                <Link
                  href="/guide/ip-vs-samozanyatyj"
                  className="text-sm text-blue-600 hover:underline mt-1 inline-block"
                >
                  Сравнение ИП и самозанятости →
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Негосударственный пенсионный фонд (НПФ) или ИИС
                </h3>
                <p className="text-sm text-gray-600">
                  Стаж и баллы СФР не даст, но может обеспечить более высокий доход на пенсии.
                  ИИС типа Б освобождает доход от НДФЛ — при горизонте 10+ лет это существенный
                  плюс. Годовой взнос аналогичного размера (57 000 ₽) при доходности 12% через
                  30 лет превратится в ~1,6 млн ₽.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {faqJsonLd.mainEntity.map((item, i) => (
                <details
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden group"
                >
                  <summary className="px-5 py-4 cursor-pointer font-medium text-gray-900 hover:bg-gray-50 flex justify-between items-center">
                    {item.name}
                    <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-2">
                      ↓
                    </span>
                  </summary>
                  <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                    {item.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA / навигация */}
          <section className="bg-blue-600 rounded-2xl p-6 text-white">
            <h2 className="text-xl font-bold mb-2">Рассчитайте свою ставку фрилансера</h2>
            <p className="text-blue-100 mb-4 text-sm">
              Зная сколько тратите на пенсионные взносы — можно точнее рассчитать дневную ставку,
              чтобы покрыть все расходы и выйти на нужный доход.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-600 font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Открыть калькулятор →
            </Link>
          </section>

          {/* Смотри также */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Смотрите также</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/samozanyatyj-bolnichnyj-2026", label: "Больничный для самозанятых 2026" },
                { href: "/guide/ip-vs-samozanyatyj", label: "ИП или самозанятый: что выгоднее" },
                { href: "/guide/nalog-samozanyatyj", label: "Налог самозанятого: всё о НПД" },
                { href: "/guide/strahovye-vznosy-ip-2026", label: "Страховые взносы ИП в 2026 году" },
                { href: "/guide/kak-stat-samozanyatym-frilanser", label: "Как стать самозанятым фрилансером" },
                { href: "/guide/kak-zakryt-samozanyatost-2026", label: "Как закрыть самозанятость" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 hover:border-blue-300 hover:text-blue-700 transition-colors"
                >
                  {label} →
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
