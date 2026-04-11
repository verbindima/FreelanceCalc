import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Льготы самозанятым в 2026 году: субсидии, займы, поддержка государства | FreelanceCalc",
  description:
    "Полный список льгот для самозанятых в 2026: субсидия до 350 000 ₽ от ЦЗН, налоговый вычет 10 000 ₽, льготные займы до 5 млн ₽, бесплатное обучение. Как получить каждую льготу пошагово.",
  alternates: { canonical: `${BASE_URL}/guide/samozanyatyj-lgoty-2026` },
  openGraph: {
    title: "Льготы самозанятым 2026: 350 000 ₽ от государства — реально?",
    description:
      "Государство даёт самозанятым субсидии, льготные займы и бесплатное обучение. Разбираем каждую льготу: кому положена, куда идти, какие документы.",
    url: `${BASE_URL}/guide/samozanyatyj-lgoty-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Льготы самозанятым 2026: субсидии, займы, налоговый вычет",
    description:
      "Субсидия до 350 000 ₽, вычет 10 000 ₽, займы до 5 млн ₽ под 1-5%. Полный список мер поддержки для НПД-плательщиков.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какие льготы есть у самозанятых в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Самозанятым в 2026 году доступны: (1) налоговый вычет 10 000 ₽ при регистрации; (2) субсидия до 350 000 ₽ от центра занятости на открытие бизнеса; (3) социальный контракт до 350 000 ₽; (4) льготные займы от МСП-центров под 1–5% годовых до 5 млн ₽; (5) бесплатное обучение через «Мой бизнес»; (6) доступ к государственным тендерам по 223-ФЗ.",
      },
    },
    {
      "@type": "Question",
      name: "Как самозанятому получить субсидию 350 000 ₽ от государства?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нужно обратиться в центр занятости населения (ЦЗН) по месту регистрации. Условия: встать на учёт как безработный, пройти тест на предпринимательские способности, написать бизнес-план. После одобрения — зарегистрироваться как самозанятый (или ИП) и получить субсидию. Размер в разных регионах: от 60 000 до 350 000 ₽.",
      },
    },
    {
      "@type": "Question",
      name: "Положен ли самозанятому налоговый вычет 10 000 ₽?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Каждый новый плательщик НПД получает единовременный налоговый вычет 10 000 ₽ (ст. 12 ФЗ-422). Вычет применяется автоматически: ставка 4% снижается до 3%, ставка 6% — до 4%, пока суммарный вычет не составит 10 000 ₽. Деньги не выдаются наличными — они уменьшают сумму налога.",
      },
    },
    {
      "@type": "Question",
      name: "Может ли самозанятый получить льготный заём?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Фонды поддержки МСП в регионах выдают займы самозанятым под 1–5% годовых. Сумма: от 100 000 до 5 000 000 ₽ в зависимости от региона. Нужны: статус НПД от 3 месяцев, справка о доходах из приложения «Мой налог», бизнес-план. Найти фонд своего региона: мойбизнес.рф.",
      },
    },
    {
      "@type": "Question",
      name: "Могут ли самозанятые участвовать в государственных закупках?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. С 2020 года самозанятые вправе участвовать в закупках по 223-ФЗ (тендеры госкомпаний) наравне с малым бизнесом. По 44-ФЗ (госзакупки) — участие возможно как физлицо. Площадки: Сбербанк-АСТ, РТС-тендер, ЭТП ГПБ. Для участия нужна электронная подпись (ЭП).",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Льготы для самозанятых в 2026 году: полный гид по мерам поддержки государства",
  description:
    "Подробный разбор всех льгот для плательщиков НПД: субсидии от ЦЗН, налоговый вычет 10 000 ₽, льготные займы МСП, бесплатное обучение, доступ к тендерам.",
  url: `${BASE_URL}/guide/samozanyatyj-lgoty-2026`,
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function SamozanyatyjLgoty2026() {
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

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-50 to-green-50 border-b border-slate-200 py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
              <Link href="/" className="hover:text-blue-600">FreelanceCalc</Link>
              <span>→</span>
              <Link href="/guide" className="hover:text-blue-600">Гайды</Link>
              <span>→</span>
              <span>Льготы самозанятым 2026</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              🎁 Государственная поддержка НПД — 2026
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Льготы самозанятым в 2026 году: субсидии, займы и поддержка государства
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              9 млн плательщиков НПД имеют доступ к государственным льготам — но большинство о них не знает.
              Субсидия до <strong>350 000 ₽</strong>, займы под <strong>1–5% годовых</strong>,
              налоговый вычет <strong>10 000 ₽</strong> и бесплатное обучение — всё это реально получить.
            </p>
            {/* Быстрые факты */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-green-600">350К ₽</div>
                <div className="text-xs text-slate-500 mt-1">субсидия от ЦЗН</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-blue-600">10К ₽</div>
                <div className="text-xs text-slate-500 mt-1">налоговый вычет</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-purple-600">5 млн ₽</div>
                <div className="text-xs text-slate-500 mt-1">льготный заём</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-slate-800">0 ₽</div>
                <div className="text-xs text-slate-500 mt-1">обучение</div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Содержание */}
          <section className="mb-10 bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-3">Содержание</h2>
            <ul className="space-y-2 text-sm text-blue-600">
              <li><a href="#nalog-vychet" className="hover:underline">1. Налоговый вычет 10 000 ₽ — автоматически при регистрации</a></li>
              <li><a href="#subsidiya-czn" className="hover:underline">2. Субсидия от ЦЗН: до 350 000 ₽ на бизнес</a></li>
              <li><a href="#socialnyj-kontrakt" className="hover:underline">3. Социальный контракт: до 350 000 ₽</a></li>
              <li><a href="#lgotnyj-zajom" className="hover:underline">4. Льготные займы МСП: до 5 млн ₽ под 1–5%</a></li>
              <li><a href="#besplatnoe-obuchenie" className="hover:underline">5. Бесплатное обучение через «Мой бизнес»</a></li>
              <li><a href="#goszakupki" className="hover:underline">6. Государственные тендеры: доступ по 223-ФЗ</a></li>
              <li><a href="#regionalnye-lgoty" className="hover:underline">7. Региональные льготы: что добавляют субъекты РФ</a></li>
              <li><a href="#faq" className="hover:underline">8. FAQ</a></li>
            </ul>
          </section>

          {/* 1. Налоговый вычет */}
          <section id="nalog-vychet" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Налоговый вычет 10 000 ₽ — автоматически при регистрации
            </h2>
            <p className="text-slate-600 mb-4">
              Самая простая льгота — её получают <strong>все</strong> новые плательщики НПД без заявлений
              и документов. Основание: статья 12 Федерального закона № 422-ФЗ «О налоге на профессиональный доход».
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
              <h3 className="font-bold text-blue-900 mb-3">Как работает вычет</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-blue-800 border-b border-blue-200">
                      <th className="pb-2 pr-4">Тип дохода</th>
                      <th className="pb-2 pr-4">Обычная ставка</th>
                      <th className="pb-2">Ставка с вычетом</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-blue-100">
                      <td className="py-2 pr-4">От физлиц</td>
                      <td className="py-2 pr-4">4%</td>
                      <td className="py-2 font-semibold text-green-700">3% (до исчерпания 10 000 ₽)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">От юрлиц / ИП</td>
                      <td className="py-2 pr-4">6%</td>
                      <td className="py-2 font-semibold text-green-700">4% (до исчерпания 10 000 ₽)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-slate-100 rounded-xl p-5 mb-4">
              <h3 className="font-bold text-slate-800 mb-2">Пример расчёта</h3>
              <p className="text-slate-600 text-sm mb-2">
                Фрилансер Иван оказывает услуги юрлицам. Доход за первый месяц — <strong>100 000 ₽</strong>.
              </p>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Обычный налог: 100 000 × 6% = <strong>6 000 ₽</strong></li>
                <li>• С вычетом (ставка 4%): 100 000 × 4% = <strong>4 000 ₽</strong></li>
                <li>• Экономия за месяц: <strong>2 000 ₽</strong></li>
                <li>• Использовано вычета: <strong>2 000 ₽</strong> из 10 000 ₽</li>
              </ul>
              <p className="text-slate-500 text-xs mt-2">
                Вычет в 10 000 ₽ исчерпается при обороте ~167 000 ₽ от физлиц или ~250 000 ₽ от юрлиц.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-800 text-sm">
                <strong>Важно:</strong> вычет — это не деньги на карту. Он автоматически снижает налог
                в приложении «Мой налог». После исчерпания — стандартные ставки 4%/6%. Повторно вычет
                не предоставляется при повторной регистрации.
              </p>
            </div>
          </section>

          {/* 2. Субсидия ЦЗН */}
          <section id="subsidiya-czn" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Субсидия от ЦЗН: до 350 000 ₽ на открытие бизнеса
            </h2>
            <p className="text-slate-600 mb-4">
              Центры занятости населения (ЦЗН) выплачивают субсидию на организацию собственного дела.
              Программа работает в рамках нацпроекта «Малое и среднее предпринимательство».
              В 2026 году максимальный размер субсидии — <strong>350 000 ₽</strong> в большинстве регионов.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
              <h3 className="font-bold text-green-900 mb-3">Пошаговый алгоритм получения субсидии</h3>
              <ol className="space-y-3 text-sm text-green-800">
                <li className="flex gap-3">
                  <span className="w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <strong>Встаньте на учёт в ЦЗН</strong> как безработный — нужен паспорт, СНИЛС, трудовая книжка.
                    Если никогда не работали официально — это не проблема.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <strong>Пройдите тест</strong> на склонность к предпринимательству — формальность,
                    большинство проходит с первого раза.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <strong>Напишите бизнес-план</strong> — описание услуги, рынок, финансовый план.
                    Объём: 5–10 страниц. ЦЗН часто помогает с шаблоном.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <strong>Защитите план</strong> перед комиссией ЦЗН — обычно 2–3 человека,
                    задают базовые вопросы о планируемом бизнесе.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</span>
                  <div>
                    <strong>Зарегистрируйтесь</strong> как самозанятый в «Мой налог»
                    (или как ИП — зависит от планируемого оборота).
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">6</span>
                  <div>
                    <strong>Получите субсидию</strong> на расчётный счёт (или карту «Мир»).
                    Обычно перечисляют в течение 10 рабочих дней после подписания договора.
                  </div>
                </li>
              </ol>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-2 text-sm">✅ Кто может получить</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Безработные граждане РФ</li>
                  <li>• Пенсионеры (в ряде регионов)</li>
                  <li>• Молодёжь до 25 лет</li>
                  <li>• Люди с инвалидностью</li>
                  <li>• Многодетные родители</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-2 text-sm">❌ Кому откажут</h3>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Действующим ИП / ООО</li>
                  <li>• Нарушителям прошлых субсидий</li>
                  <li>• При неудовлетворительном бизнес-плане</li>
                  <li>• Если отчитались с нарушениями по прошлой субсидии</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-800 text-sm">
                <strong>После получения:</strong> вы обязаны проработать в статусе самозанятого
                (или ИП) не менее <strong>12 месяцев</strong> и отчитаться в ЦЗН о расходовании субсидии
                с чеками. Если закроете бизнес раньше — субсидию придётся вернуть.
              </p>
            </div>
          </section>

          {/* 3. Социальный контракт */}
          <section id="socialnyj-kontrakt" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Социальный контракт: до 350 000 ₽ для малоимущих
            </h2>
            <p className="text-slate-600 mb-4">
              Социальный контракт — отдельная программа Министерства труда. Её цель:
              помочь малоимущим гражданам стать финансово самостоятельными.
              Одно из направлений — открытие собственного дела.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700">
                    <th className="text-left p-3 border border-slate-200">Направление</th>
                    <th className="text-left p-3 border border-slate-200">Макс. сумма</th>
                    <th className="text-left p-3 border border-slate-200">Условие</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-3 border border-slate-200">Открытие ИП или самозанятость</td>
                    <td className="p-3 border border-slate-200 font-semibold text-green-700">350 000 ₽</td>
                    <td className="p-3 border border-slate-200">Доход ниже прожиточного минимума</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-3 border border-slate-200">Поиск работы</td>
                    <td className="p-3 border border-slate-200">3 прожит. минимума</td>
                    <td className="p-3 border border-slate-200">Безработный</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200">Ведение подсобного хозяйства</td>
                    <td className="p-3 border border-slate-200">200 000 ₽</td>
                    <td className="p-3 border border-slate-200">Сельская местность</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-600 mb-3">
              <strong>Куда обращаться:</strong> Управление социальной защиты населения по месту жительства
              или МФЦ. Предъявите справку о составе семьи и доходах — должно быть ниже прожиточного минимума
              в вашем регионе.
            </p>
            <p className="text-slate-600">
              Разница с субсидией ЦЗН: социальный контракт доступен и работающим гражданам с низким доходом,
              не только безработным. Обе программы можно получить, если нет пересечения по целям расходования.
            </p>
          </section>

          {/* 4. Льготные займы */}
          <section id="lgotnyj-zajom" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Льготные займы МСП: до 5 000 000 ₽ под 1–5% годовых
            </h2>
            <p className="text-slate-600 mb-4">
              Корпорация МСП и региональные фонды поддержки бизнеса выдают займы самозанятым
              на значительно более выгодных условиях, чем банки. Ставки в 2026 году:
              от <strong>1% до 5% годовых</strong> — против рыночных 20–25%.
            </p>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 mb-6">
              <h3 className="font-bold text-purple-900 mb-3">Виды льготных займов для самозанятых</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded-lg p-3 border border-purple-100">
                  <div className="flex justify-between items-start mb-1">
                    <strong className="text-purple-800">«Микрозаём» регионального фонда МСП</strong>
                    <span className="text-green-700 font-semibold ml-2 flex-shrink-0">1–5% годовых</span>
                  </div>
                  <p className="text-slate-600">До 5 млн ₽, срок до 3 лет. Залог: оборудование, поручительство. Требуется статус НПД от 3 месяцев.</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-purple-100">
                  <div className="flex justify-between items-start mb-1">
                    <strong className="text-purple-800">«Самозанятый» от МСП Банка</strong>
                    <span className="text-green-700 font-semibold ml-2 flex-shrink-0">до 4%</span>
                  </div>
                  <p className="text-slate-600">До 10 млн ₽ для самозанятых с оборотом от 1 млн ₽/год. Без залога до 500 000 ₽.</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-purple-100">
                  <div className="flex justify-between items-start mb-1">
                    <strong className="text-purple-800">Займы через «Мой бизнес»</strong>
                    <span className="text-green-700 font-semibold ml-2 flex-shrink-0">от 1%</span>
                  </div>
                  <p className="text-slate-600">От 50 000 ₽ до 1 млн ₽ без залога. Подходит для начинающих самозанятых с оборотом от 1 месяца.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 rounded-xl p-5 mb-4">
              <h3 className="font-bold text-slate-800 mb-2">Документы для льготного займа</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Паспорт гражданина РФ</li>
                <li>• Справка о постановке на учёт как НПД (из «Мой налог» → Настройки → Справка о постановке)</li>
                <li>• Справка о доходах за 3–12 месяцев (из «Мой налог» → Справка о доходах)</li>
                <li>• Краткий бизнес-план (1–3 стр.) — цель займа, планируемый доход</li>
                <li>• СНИЛС</li>
              </ul>
            </div>

            <p className="text-slate-600">
              <strong>Где найти фонд в своём регионе:</strong>{" "}
              <a href="https://мойбизнес.рф" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">мойбизнес.рф</a>{" "}
              → «Меры поддержки» → выберите ваш регион → «Финансирование».
            </p>
          </section>

          {/* 5. Бесплатное обучение */}
          <section id="besplatnoe-obuchenie" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Бесплатное обучение через «Мой бизнес»
            </h2>
            <p className="text-slate-600 mb-4">
              Центры «Мой бизнес» в каждом регионе предоставляют самозанятым бесплатные обучающие программы.
              Это не рекламные вебинары — это полноценные курсы с сертификатами.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-slate-200 rounded-xl p-4">
                <h3 className="font-semibold text-slate-800 mb-2">📚 Темы курсов</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Налоговый учёт и отчётность НПД</li>
                  <li>• Маркетинг и продвижение услуг</li>
                  <li>• Работа с маркетплейсами</li>
                  <li>• Юридические аспекты договоров</li>
                  <li>• Ценообразование и финансы</li>
                  <li>• Личный бренд в соцсетях</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4">
                <h3 className="font-semibold text-slate-800 mb-2">🎯 Форматы</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Онлайн-курсы (самостоятельное прохождение)</li>
                  <li>• Офлайн-тренинги в центре</li>
                  <li>• Индивидуальные консультации эксперта</li>
                  <li>• Акселераторы (3–6 месяцев)</li>
                  <li>• Менторинг от действующих предпринимателей</li>
                </ul>
              </div>
            </div>

            <p className="text-slate-600 mb-3">
              Помимо обучения, центры «Мой бизнес» бесплатно помогают:
              разработать бизнес-план для ЦЗН или банка, подготовить документы для тендера,
              получить консультацию юриста и бухгалтера.
            </p>
            <p className="text-slate-600">
              <strong>Запись:</strong>{" "}
              <a href="https://мойбизнес.рф" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">мойбизнес.рф</a>{" "}
              → выберите регион → «Записаться на мероприятие».
            </p>
          </section>

          {/* 6. Государственные тендеры */}
          <section id="goszakupki" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              6. Государственные тендеры: самозанятый вместо ООО
            </h2>
            <p className="text-slate-600 mb-4">
              Самозанятые вправе участвовать в закупках госкомпаний по <strong>223-ФЗ</strong>.
              Это огромный рынок — только в 2025 году объём закупок по 223-ФЗ превысил 25 трлн рублей.
              Для малых закупок (до 600 000 ₽) требования минимальны.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
              <h3 className="font-bold text-blue-900 mb-3">Что нужно для участия в тендерах</h3>
              <ol className="space-y-2 text-sm text-blue-800">
                <li className="flex gap-2">
                  <span className="font-bold">1.</span>
                  <span>Получите квалифицированную электронную подпись (КЭП) — около 2 000–4 000 ₽/год через аккредитованный УЦ.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">2.</span>
                  <span>Зарегистрируйтесь в ЕИС (Единая информационная система закупок): <a href="https://zakupki.gov.ru" className="underline" target="_blank" rel="noopener noreferrer">zakupki.gov.ru</a></span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">3.</span>
                  <span>Аккредитуйтесь на площадке: Сбербанк-АСТ, РТС-тендер, ЭТП ГПБ — бесплатно.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">4.</span>
                  <span>Ищите закупки по вашей специальности (ОКВЭД) и подавайте заявки.</span>
                </li>
              </ol>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-800 text-sm">
                <strong>По 44-ФЗ</strong> (классические госзакупки) самозанятый может участвовать
                как физическое лицо. При победе заказчик удержит 13% НДФЛ — учитывайте это
                при формировании цены заявки. Выгоднее участвовать через 223-ФЗ где нет удержания НДФЛ
                при работе как НПД.
              </p>
            </div>
          </section>

          {/* 7. Региональные льготы */}
          <section id="regionalnye-lgoty" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              7. Региональные льготы: что добавляют субъекты РФ
            </h2>
            <p className="text-slate-600 mb-4">
              Помимо федеральных программ, большинство регионов добавляют собственные меры поддержки.
              Суммы и условия различаются — уточняйте в центре «Мой бизнес» вашего региона.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700">
                    <th className="text-left p-3 border border-slate-200">Регион</th>
                    <th className="text-left p-3 border border-slate-200">Дополнительная льгота</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-3 border border-slate-200 font-medium">Москва</td>
                    <td className="p-3 border border-slate-200">Бесплатные коворкинги, поручительство Фонда Москвы по займам до 10 млн ₽</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-3 border border-slate-200 font-medium">Санкт-Петербург</td>
                    <td className="p-3 border border-slate-200">Субсидия 300 000 ₽ + компенсация 50% расходов на оборудование</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-3 border border-slate-200 font-medium">Татарстан</td>
                    <td className="p-3 border border-slate-200">Займы от 50 000 до 500 000 ₽ под 0% для приоритетных отраслей</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-3 border border-slate-200 font-medium">Краснодарский край</td>
                    <td className="p-3 border border-slate-200">Субсидия 350 000 ₽ для агроотрасли и туризма</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-medium">Другие регионы</td>
                    <td className="p-3 border border-slate-200">Проверяйте на мойбизнес.рф → ваш регион → «Меры поддержки»</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-100 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 mb-3">Как проверить льготы в вашем регионе</h3>
              <ol className="text-sm text-slate-700 space-y-2">
                <li><strong>1.</strong> Зайдите на <a href="https://мойбизнес.рф" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">мойбизнес.рф</a> и выберите свой регион.</li>
                <li><strong>2.</strong> Перейдите в раздел «Меры поддержки» → «Самозанятые».</li>
                <li><strong>3.</strong> Позвоните на горячую линию центра: единый номер 8-800-100-58-86 (бесплатно).</li>
              </ol>
            </div>
          </section>

          {/* Итоговая таблица */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Итого: сводная таблица льгот самозанятого в 2026
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-700 text-white">
                    <th className="text-left p-3 border border-green-600">Льгота</th>
                    <th className="text-left p-3 border border-green-600">Сумма</th>
                    <th className="text-left p-3 border border-green-600">Куда обращаться</th>
                    <th className="text-left p-3 border border-green-600">Кому</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200 bg-white">
                    <td className="p-3 border border-slate-200 font-medium">Налоговый вычет</td>
                    <td className="p-3 border border-slate-200 text-green-700 font-semibold">10 000 ₽</td>
                    <td className="p-3 border border-slate-200">Автоматически в «Мой налог»</td>
                    <td className="p-3 border border-slate-200">Всем НПД при регистрации</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-3 border border-slate-200 font-medium">Субсидия ЦЗН</td>
                    <td className="p-3 border border-slate-200 text-green-700 font-semibold">до 350 000 ₽</td>
                    <td className="p-3 border border-slate-200">Центр занятости (ЦЗН)</td>
                    <td className="p-3 border border-slate-200">Безработным</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-white">
                    <td className="p-3 border border-slate-200 font-medium">Социальный контракт</td>
                    <td className="p-3 border border-slate-200 text-green-700 font-semibold">до 350 000 ₽</td>
                    <td className="p-3 border border-slate-200">МФЦ, соцзащита</td>
                    <td className="p-3 border border-slate-200">Малоимущим гражданам</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-3 border border-slate-200 font-medium">Льготный заём МСП</td>
                    <td className="p-3 border border-slate-200 text-green-700 font-semibold">до 5 000 000 ₽</td>
                    <td className="p-3 border border-slate-200">мойбизнес.рф</td>
                    <td className="p-3 border border-slate-200">НПД от 3 мес.</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-white">
                    <td className="p-3 border border-slate-200 font-medium">Бесплатное обучение</td>
                    <td className="p-3 border border-slate-200 text-green-700 font-semibold">0 ₽</td>
                    <td className="p-3 border border-slate-200">мойбизнес.рф</td>
                    <td className="p-3 border border-slate-200">Всем НПД</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 border border-slate-200 font-medium">Тендеры 223-ФЗ</td>
                    <td className="p-3 border border-slate-200 text-green-700 font-semibold">рынок 25 трлн ₽</td>
                    <td className="p-3 border border-slate-200">zakupki.gov.ru</td>
                    <td className="p-3 border border-slate-200">Всем НПД + КЭП</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Калькулятор */}
          <section className="mb-12 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              💡 Рассчитайте свою ставку как самозанятый
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              Используйте калькулятор FreelanceCalc, чтобы узнать оптимальную ставку
              с учётом налогов НПД и сравнить с работой по ГПХ или трудовому договору.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Открыть калькулятор →
            </Link>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Частые вопросы о льготах самозанятых
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Можно ли получить субсидию ЦЗН и социальный контракт одновременно?",
                  a: "Теоретически — да, если цели расходования не пересекаются. На практике ЦЗН и соцзащита координируют выплаты. Уточняйте в обоих ведомствах: требование — не двойное финансирование одной цели.",
                },
                {
                  q: "Налоговый вычет 10 000 ₽ — сколько ждать выплаты?",
                  a: "Вычет не выплачивается деньгами — он автоматически снижает сумму налога к уплате. Отображается в «Мой налог» при начислении. Действует до полного исчерпания 10 000 ₽.",
                },
                {
                  q: "Если я перестану быть самозанятым и снова зарегистрируюсь, вычет дадут повторно?",
                  a: "Нет. Согласно п. 1 ст. 12 ФЗ-422, налоговый вычет предоставляется однократно за весь период действия режима НПД. При повторной регистрации — остаток вычета (если был использован не полностью) восстанавливается, новых 10 000 ₽ не добавляют.",
                },
                {
                  q: "Дают ли самозанятым льготную ипотеку?",
                  a: "Самозанятые имеют право на все государственные ипотечные программы (семейная, IT-ипотека и др.) наравне с работниками по найму. Банки принимают справку о доходах из «Мой налог». Трудность: многие банки требуют стаж НПД не менее 12 месяцев и стабильный доход. Подробнее — в гайде об ипотеке для самозанятых.",
                },
                {
                  q: "Можно ли получить льготный заём без залога?",
                  a: "Да — микрозаймы до 500 000 ₽ через «Мой бизнес» часто выдаются без залога под поручительство регионального гарантийного фонда. Суммы выше — требуют залог (оборудование, поручительство физлица) или подтверждённую выручку за 6–12 месяцев.",
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2">{q}</h3>
                  <p className="text-slate-600 text-sm">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Навигация */}
          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Читайте также</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { href: "/guide/nalog-samozanyatyj", label: "Налог самозанятого: 4% и 6%, расчёт" },
                { href: "/guide/samozanyatyj-bolnichnyj-2026", label: "Больничный для самозанятых 2026" },
                { href: "/guide/samozanyatyj-dekret-2026", label: "Декрет и пособия для самозанятых" },
                { href: "/guide/samozanyatyj-ipoteka-2026", label: "Ипотека для самозанятых 2026" },
                { href: "/guide/nalogovyj-vychet-samozanyatogo-2026", label: "Налоговый вычет 10 000 ₽: подробно" },
                { href: "/guide/kak-stat-samozanyatym-frilanser", label: "Как стать самозанятым: пошагово" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors text-sm text-slate-700 hover:text-blue-700"
                >
                  <span className="text-blue-400">→</span>
                  {label}
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
