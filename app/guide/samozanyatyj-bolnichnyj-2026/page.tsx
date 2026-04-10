import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Больничный для самозанятых в 2026 году: как оформить и сколько заплатят | FreelanceCalc",
  description:
    "С 1 января 2026 самозанятые могут получать больничные. Взносы от 1 344 ₽/мес, выплата до 50 000 ₽/мес. Пошаговая инструкция: как подключить добровольное соцстрахование через «Мой налог».",
  alternates: { canonical: `${BASE_URL}/guide/samozanyatyj-bolnichnyj-2026` },
  openGraph: {
    title: "Больничный для самозанятых 2026: как оформить",
    description:
      "Новый закон с 1 января 2026. Взносы 1 344–1 920 ₽/мес, выплата 35 000–50 000 ₽/мес. Подключение через «Мой налог» за 5 минут.",
    url: `${BASE_URL}/guide/samozanyatyj-bolnichnyj-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Больничный для самозанятых 2026: сколько платить и сколько получать",
    description:
      "Добровольное соцстрахование НПД с 2026 года: 1 344 ₽/мес → 35 000 ₽ при болезни. Пошаговое подключение.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Обязательно ли самозанятому подключать больничный в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет, участие полностью добровольное. Самозанятый сам решает, хочет ли платить взносы в СФР ради получения больничных. Если не подключится — режим НПД и налоги остаются без изменений.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько нужно платить за больничный самозанятому в 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Взнос составляет 3,84% от выбранной страховой суммы. При страховой сумме 35 000 ₽ — 1 344 ₽/месяц (16 128 ₽/год). При 50 000 ₽ — 1 920 ₽/месяц (23 040 ₽/год). Платить можно ежемесячно или разово за год.",
      },
    },
    {
      "@type": "Question",
      name: "Когда можно первый раз уйти на больничный после подключения?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Минимальный срок участия перед первой выплатой — 6 месяцев непрерывных взносов. Если заболеть раньше — больничный выплачен не будет, но взносы не возвращаются.",
      },
    },
    {
      "@type": "Question",
      name: "Как рассчитывается выплата по больничному для самозанятого?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Выплата = страховая сумма × процент компенсации ÷ количество дней в месяце × дни болезни. При стаже взносов до 8 лет — 70% страховой суммы, от 8 лет — 100%. Например: страховая сумма 50 000 ₽, стаж 3 года, болезнь 10 дней в 30-дневном месяце: 50 000 × 70% / 30 × 10 = 11 667 ₽.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли получить больничный самозанятому, если совмещаешь с работой по найму?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, но только одно пособие. Если вы одновременно работаете по трудовому договору (с уплатой взносов работодателем) и платите добровольные взносы как самозанятый — при болезни вы получите пособие либо по трудовому договору, либо по добровольному соцстрахованию. Двойные выплаты законом не предусмотрены.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Больничный для самозанятых в 2026 году: как оформить и сколько заплатят",
  description:
    "С 1 января 2026 года в России стартовал эксперимент по добровольному соцстрахованию самозанятых. Теперь плательщики НПД могут получать оплачиваемые больничные. Разбираем условия, размер взносов и порядок подключения.",
  url: `${BASE_URL}/guide/samozanyatyj-bolnichnyj-2026`,
  datePublished: "2026-04-10",
  dateModified: "2026-04-10",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Как самозанятому подключить больничный через «Мой налог»",
  description: "Пошаговая инструкция по добровольному соцстрахованию НПД",
  totalTime: "PT5M",
  step: [
    {
      "@type": "HowToStep",
      name: "Откройте приложение «Мой налог»",
      text: "Авторизуйтесь в официальном приложении ФНС «Мой налог» (доступно в RuStore, AppGallery, App Store, Google Play).",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "Найдите раздел «Социальное страхование»",
      text: "Перейдите во вкладку «Прочее» → «Социальное страхование» или «Добровольное страхование». Раздел появился в приложении с января 2026 года.",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "Выберите страховую сумму",
      text: "Выберите страховую сумму: 35 000 ₽ (взнос 1 344 ₽/мес) или 50 000 ₽ (взнос 1 920 ₽/мес). От суммы зависит максимальная выплата при больничном.",
      position: 3,
    },
    {
      "@type": "HowToStep",
      name: "Подайте заявление",
      text: "Нажмите «Подать заявление» и подтвердите данные. Заявление уходит напрямую в Социальный фонд России (СФР). Принимаются заявления до 30 сентября 2027 года.",
      position: 4,
    },
    {
      "@type": "HowToStep",
      name: "Оплатите первый взнос",
      text: "Оплатите через «Мой налог» или банковский перевод по реквизитам СФР. Взносы платятся ежемесячно или разово за год. Страхование начнёт действовать через 6 месяцев после первого взноса.",
      position: 5,
    },
  ],
};

export default function SamozanyatyBolnichny2026() {
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

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-50 to-green-50 border-b border-slate-200 py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
              <Link href="/" className="hover:text-blue-600">FreelanceCalc</Link>
              <span>→</span>
              <Link href="/guide" className="hover:text-blue-600">Гайды</Link>
              <span>→</span>
              <span>Больничный для самозанятых</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              🆕 Новый закон — действует с 1 января 2026
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Больничный для самозанятых в 2026 году: как оформить и сколько заплатят
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              С 1 января 2026 года самозанятые могут платить добровольные взносы в СФР и получать
              оплачиваемые больничные. Разбираем: сколько стоит, сколько выплатят, как подключить за 5 минут.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-500">
              <span className="bg-white border border-slate-200 rounded-full px-3 py-1">📅 Обновлено: апрель 2026</span>
              <span className="bg-white border border-slate-200 rounded-full px-3 py-1">💰 Взносы от 1 344 ₽/мес</span>
              <span className="bg-white border border-slate-200 rounded-full px-3 py-1">🏥 Выплата до 50 000 ₽/мес</span>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

          {/* Суть изменений */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Что изменилось с 2026 года</h2>
            <p className="text-slate-700 mb-4">
              До 2026 года самозанятые не имели права на больничные. Заболели — доход встал. Никаких
              компенсаций от государства не предусмотрено. Фрилансеры либо работали больными, либо теряли деньги.
            </p>
            <p className="text-slate-700 mb-4">
              С <strong>1 января 2026 года</strong> в России запущен эксперимент по добровольному
              социальному страхованию для самозанятых (Федеральный закон № 537-ФЗ). Программа действует
              до <strong>31 декабря 2028 года</strong>. Участие добровольное — каждый сам решает,
              подключаться или нет.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {[
                { icon: "🧑‍💼", title: "Кто может", text: "Все плательщики НПД — и физлица, и ИП на НПД. Без ограничений по региону." },
                { icon: "📅", title: "Когда вступает в силу", text: "Через 6 месяцев после первого взноса. Подать заявление можно до 30.09.2027." },
                { icon: "💊", title: "Что покрывает", text: "Болезнь, травма, уход за больным ребёнком, беременность и роды (ограниченно)." },
              ].map(({ icon, title, text }) => (
                <div key={title} className="bg-slate-50 rounded-xl p-4">
                  <div className="text-3xl mb-2">{icon}</div>
                  <div className="font-semibold text-slate-900 mb-1">{title}</div>
                  <div className="text-slate-600 text-sm">{text}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Сколько платить */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Сколько стоит больничный для самозанятого</h2>
            <p className="text-slate-700 mb-6">
              Тариф взносов — <strong>3,84% от страховой суммы</strong>. Страховую сумму выбираете
              сами при подключении: 35 000 ₽ или 50 000 ₽. Это максимальная сумма выплаты за один
              месяц болезни при 100% компенсации.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Страховая сумма</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Взнос в месяц</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Взнос в год</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Макс. выплата/мес</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-slate-200 px-4 py-3 font-medium text-slate-900">35 000 ₽</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">1 344 ₽</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">16 128 ₽</td>
                    <td className="border border-slate-200 px-4 py-3 text-emerald-700 font-semibold">35 000 ₽</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3 font-medium text-slate-900">50 000 ₽</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">1 920 ₽</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">23 040 ₽</td>
                    <td className="border border-slate-200 px-4 py-3 text-emerald-700 font-semibold">50 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-5">
              <p className="text-blue-900 font-semibold mb-2">Пример расчёта окупаемости</p>
              <p className="text-slate-700 text-sm">
                При страховой сумме 50 000 ₽ вы платите 23 040 ₽ в год. Если проболеете <strong>2 недели
                (14 дней)</strong> — получите: 50 000 ₽ × 70% / 30 × 14 ≈ <strong>16 333 ₽</strong>.
                При стаже взносов 8+ лет — 50 000 ₽ / 30 × 14 = <strong>23 333 ₽</strong>.
                Страхование окупается уже при 2-3 неделях болезни в год.
              </p>
            </div>
          </section>

          {/* Размер выплат */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Сколько заплатят по больничному</h2>
            <p className="text-slate-700 mb-5">
              Размер выплаты зависит от двух параметров: выбранной страховой суммы и общего страхового стажа
              (суммируется с трудовым стажем, если работали по найму).
            </p>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-amber-50 border-b border-slate-200 px-5 py-3">
                  <p className="font-semibold text-slate-900">Процент компенсации от страховой суммы</p>
                </div>
                <div className="p-5">
                  <div className="space-y-3">
                    {[
                      { stazh: "Менее 5 лет", pct: "60%", example35: "21 000 ₽", example50: "30 000 ₽" },
                      { stazh: "5–8 лет", pct: "80%", example35: "28 000 ₽", example50: "40 000 ₽" },
                      { stazh: "8 лет и более", pct: "100%", example35: "35 000 ₽", example50: "50 000 ₽" },
                    ].map(({ stazh, pct, example35, example50 }) => (
                      <div key={stazh} className="grid grid-cols-4 gap-3 items-center text-sm">
                        <div className="font-medium text-slate-900">{stazh}</div>
                        <div className="text-center bg-blue-100 text-blue-800 font-bold rounded-lg py-1">{pct}</div>
                        <div className="text-center text-slate-700">{example35}</div>
                        <div className="text-center text-slate-700">{example50}</div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-4 gap-3 items-center text-xs text-slate-500 mt-3 border-t border-slate-100 pt-3">
                    <div></div>
                    <div className="text-center">Компенсация</div>
                    <div className="text-center">При 35 000 ₽ (макс/мес)</div>
                    <div className="text-center">При 50 000 ₽ (макс/мес)</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-slate-500 text-sm mt-4">
              * Выплата за неполный месяц рассчитывается пропорционально: страховая сумма × % / количество
              дней в месяце × количество дней болезни.
            </p>
          </section>

          {/* Как подключить */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Как подключить больничный самозанятому — пошаговая инструкция</h2>

            <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
              <div className="bg-blue-600 text-white px-5 py-3 flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <span className="font-semibold text-lg">Через приложение «Мой налог» (рекомендуем)</span>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-slate-600 text-sm">С января 2026 года в «Мой налог» появился раздел «Социальное страхование». Весь процесс — 5 минут.</p>
                <ol className="space-y-3">
                  {[
                    { step: "1", text: "Обновите «Мой налог» до последней версии (RuStore, AppGallery, App Store, Google Play)" },
                    { step: "2", text: "Перейдите: «Прочее» → «Социальное страхование» → «Добровольное страхование»" },
                    { step: "3", text: "Выберите страховую сумму: 35 000 ₽ или 50 000 ₽" },
                    { step: "4", text: "Нажмите «Подать заявление» — данные автоматически уходят в СФР" },
                    { step: "5", text: "Оплатите первый взнос через «Мой налог» или банковским переводом по реквизитам СФР" },
                    { step: "6", text: "Через 6 месяцев непрерывных взносов страхование вступает в силу" },
                  ].map(({ step, text }) => (
                    <li key={step} className="flex gap-3 items-start">
                      <span className="bg-blue-100 text-blue-700 font-bold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">{step}</span>
                      <span className="text-slate-700">{text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
              <div className="bg-emerald-600 text-white px-5 py-3 flex items-center gap-3">
                <span className="text-2xl">🏛</span>
                <span className="font-semibold text-lg">Через Госуслуги</span>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-slate-600 text-sm">Альтернативный способ — через портал Госуслуг.</p>
                <ol className="space-y-3">
                  {[
                    { step: "1", text: "Авторизуйтесь на gosuslugi.ru" },
                    { step: "2", text: "В поиске введите: «Добровольное социальное страхование самозанятых»" },
                    { step: "3", text: "Заполните заявление, выберите страховую сумму" },
                    { step: "4", text: "Отправьте — ответ придёт в течение 1 рабочего дня" },
                  ].map(({ step, text }) => (
                    <li key={step} className="flex gap-3 items-start">
                      <span className="bg-emerald-100 text-emerald-700 font-bold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">{step}</span>
                      <span className="text-slate-700">{text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="font-semibold text-amber-900 mb-2">⚠️ Важный дедлайн</p>
              <p className="text-slate-700 text-sm">
                Заявления принимаются до <strong>30 сентября 2027 года</strong>. После этой даты
                присоединиться к программе эксперимента нельзя. Сам эксперимент действует до 31 декабря 2028 года.
              </p>
            </div>
          </section>

          {/* Как получить выплату */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Как получить выплату при болезни</h2>
            <p className="text-slate-700 mb-4">
              Когда заболели — нужно оформить больничный лист через врача (как обычно) и подать заявление
              на выплату в СФР.
            </p>
            <div className="space-y-3">
              {[
                { n: "1", title: "Оформите электронный больничный лист", desc: "У врача в поликлинике или через Госуслуги. Электронный листок нетрудоспособности (ЭЛН) — стандартная процедура с 2022 года." },
                { n: "2", title: "Подайте заявление на выплату в СФР", desc: "Через «Мой налог», Госуслуги или лично в отделении СФР. Прикрепите номер больничного листа. Срок — в течение 6 месяцев после закрытия больничного." },
                { n: "3", title: "Получите деньги на счёт", desc: "СФР перечисляет выплату в течение 10 рабочих дней с момента подачи заявления. Деньги поступают на счёт, указанный при регистрации." },
              ].map(({ n, title, desc }) => (
                <div key={n} className="flex gap-4 bg-slate-50 rounded-xl p-4">
                  <span className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">{n}</span>
                  <div>
                    <p className="font-semibold text-slate-900">{title}</p>
                    <p className="text-slate-600 text-sm mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Кому стоит подключать */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Кому стоит подключить больничный</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <p className="font-semibold text-green-900 mb-3">✅ Стоит подключить если:</p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex gap-2">
                    <span className="text-green-600 mt-0.5">•</span>
                    <span>Вы — единственный источник дохода в семье</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 mt-0.5">•</span>
                    <span>Нет финансовой подушки на 2-4 недели болезни</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 mt-0.5">•</span>
                    <span>Работаете физически или часто болеете</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 mt-0.5">•</span>
                    <span>Планируете беременность и роды</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 mt-0.5">•</span>
                    <span>Ваш доход нестабилен — болезнь = катастрофа</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <p className="font-semibold text-slate-900 mb-3">⚖️ Считайте перед подключением если:</p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex gap-2">
                    <span className="text-slate-400 mt-0.5">•</span>
                    <span>Болеете реже 1 раза в 2-3 года — взносы не отобьются</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-slate-400 mt-0.5">•</span>
                    <span>Есть финансовая подушка на 2+ месяца</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-slate-400 mt-0.5">•</span>
                    <span>Доход зависит не от рабочего времени (роялти, пассивный доход)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-slate-400 mt-0.5">•</span>
                    <span>Уже застрахованы отдельным ДМС</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Калькулятор CTA */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Рассчитайте чистую ставку с учётом взносов на страхование
            </h2>
            <p className="text-slate-600 mb-4">
              Взносы в СФР (1 344–1 920 ₽/мес) — это расходы. Калькулятор FreelanceCalc учитывает
              налоги и взносы и показывает, какую ставку нужно называть клиентам, чтобы получать нужный
              доход на руки.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку фрилансера →
            </Link>
            <p className="text-slate-500 text-sm mt-3">
              Бесплатно. Учитывает НПД, ИП УСН, НДФЛ и страховые взносы.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Обязательно ли самозанятому подключать больничный в 2026 году?",
                  a: "Нет, участие полностью добровольное. Самозанятый сам решает, хочет ли платить взносы в СФР ради получения больничных. Если не подключится — режим НПД и налоговые ставки (4% и 6%) остаются без изменений.",
                },
                {
                  q: "Сколько нужно платить за больничный самозанятому в 2026?",
                  a: "Взнос составляет 3,84% от выбранной страховой суммы. При страховой сумме 35 000 ₽ — 1 344 ₽/месяц (16 128 ₽/год). При 50 000 ₽ — 1 920 ₽/месяц (23 040 ₽/год). Платить можно ежемесячно или разово за год.",
                },
                {
                  q: "Когда можно первый раз уйти на больничный после подключения?",
                  a: "Минимальный срок участия перед первой выплатой — 6 месяцев непрерывных взносов. Если заболеть раньше — больничный выплачен не будет.",
                },
                {
                  q: "Как рассчитывается выплата по больничному для самозанятого?",
                  a: "Выплата = страховая сумма × процент компенсации ÷ количество дней в месяце × дни болезни. При стаже взносов до 5 лет — 60%, 5-8 лет — 80%, от 8 лет — 100%. Пример: страховая сумма 50 000 ₽, стаж 3 года, болезнь 10 дней: 50 000 × 60% / 30 × 10 = 10 000 ₽.",
                },
                {
                  q: "Можно ли получить больничный, если совмещаешь самозанятость с работой по найму?",
                  a: "Да, но только одно пособие. Если работаете по трудовому договору и одновременно платите добровольные взносы как самозанятый — при болезни получите пособие либо по трудовому договору, либо по добровольному соцстрахованию. Двойные выплаты законом не предусмотрены.",
                },
              ].map(({ q, a }, i) => (
                <details key={i} className="border border-slate-200 rounded-xl overflow-hidden group">
                  <summary className="px-5 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50 flex items-center justify-between">
                    {q}
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-5 pb-4 text-slate-700 leading-relaxed">
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Навигация */}
          <section className="border-t border-slate-200 pt-8">
            <h3 className="font-semibold text-slate-700 mb-4">Читайте также:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/nalog-samozanyatyj", label: "Налог самозанятого: ставки 4% и 6%" },
                { href: "/guide/kak-stat-samozanyatym-frilanser", label: "Как стать самозанятым фрилансеру" },
                { href: "/guide/ip-vs-samozanyatyj", label: "ИП vs самозанятый: что выбрать" },
                { href: "/guide/strahovye-vznosy-ip-2026", label: "Страховые взносы ИП в 2026 году" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 p-3 border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors text-sm text-slate-700 hover:text-blue-700"
                >
                  <span>📄</span>
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
