import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";
const SLUG = "samozanyatyj-i-oficialnaya-rabota-2026";
const CANONICAL = `/stati/${SLUG}`;

export const metadata: Metadata = {
  title: "Самозанятый и официальная работа 2026: можно совмещать?",
  description:
    "Да, можно. Самозанятый вправе работать по трудовому договору одновременно. Разбираем ограничения, налоги, как оформить — и как это учесть в ставке фрилансера.",
  keywords: [
    "самозанятый и официальная работа",
    "можно ли быть самозанятым и работать официально",
    "самозанятый трудовой договор",
    "самозанятый и наёмный работник",
    "совмещение самозанятости и работы по найму",
    "самозанятый работает в компании 2026",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Самозанятый и официальная работа 2026: можно совмещать?",
    description:
      "Да, можно. Самозанятый вправе работать по трудовому договору одновременно — разбираем ограничения и как это влияет на ставку.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}${CANONICAL}`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}${CANONICAL}#article`,
      headline: "Самозанятый и официальная работа 2026: можно совмещать?",
      description:
        "Разбираем, можно ли быть самозанятым и работать по трудовому договору одновременно, какие ограничения есть и как правильно оформить.",
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
      datePublished: "2026-03-01",
      dateModified: "2026-03-22",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}${CANONICAL}`,
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
          name: "Самозанятый и официальная работа",
          item: `${BASE_URL}${CANONICAL}`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Можно ли быть самозанятым и работать официально по трудовому договору?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, закон это разрешает. Самозанятость (НПД) и трудовой договор — разные правовые статусы, которые не противоречат друг другу. Ограничение одно: нельзя зарегистрироваться как самозанятый на услуги для своего текущего или бывшего работодателя в течение 2 лет.",
          },
        },
        {
          "@type": "Question",
          name: "Нужно ли сообщать работодателю о статусе самозанятого?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет, законодательно уведомлять работодателя не нужно. Самозанятость — ваше личное дело. Исключение: если в трудовом договоре есть пункт о запрете иной деятельности. Уточните свой договор.",
          },
        },
        {
          "@type": "Question",
          name: "Как платить налоги, если совмещаешь работу и самозанятость?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "НДФЛ 13% с зарплаты удерживает работодатель автоматически. Налог на самозанятость (НПД 4% или 6%) вы платите сами через приложение «Мой налог» с доходов от своих клиентов. Декларации не требуется.",
          },
        },
        {
          "@type": "Question",
          name: "Влияет ли самозанятость на размер пенсионных накоплений?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет. Пенсионный стаж и взносы идут от работодателя через трудовой договор — самозанятость на них не влияет. Но доход от фриланса в пенсию не идёт, если вы не делаете доп. взносы в СФР добровольно.",
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

      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6 flex gap-1 items-center flex-wrap">
          <Link href="/" className="hover:text-indigo-600">FreelanceCalc</Link>
          <span>›</span>
          <Link href="/stati" className="hover:text-indigo-600">Статьи</Link>
          <span>›</span>
          <span className="text-slate-600">Самозанятый и официальная работа</span>
        </nav>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">
                Самозанятость
              </span>
              <span className="text-xs text-slate-400">8 мин чтения</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 leading-snug">
              Самозанятый и официальная работа 2026: можно ли совмещать?
            </h1>
            <p className="mt-3 text-slate-500 text-sm leading-relaxed">
              Короткий ответ — да, можно. Это один из самых частых вопросов начинающих фрилансеров. Разбираем, как это работает, какие ограничения есть, и как совмещение влияет на налоги и ставку.
            </p>
          </header>

          {/* Quick answer box */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-8">
            <p className="text-sm font-semibold text-emerald-800 mb-1">✅ Короткий ответ: да, совмещать можно</p>
            <p className="text-sm text-emerald-700 leading-relaxed">
              Закон о НПД (ФЗ-422) не запрещает иметь одновременно трудовой договор и статус самозанятого. Ограничение одно: нельзя выставлять чеки своему текущему работодателю — и бывшему в течение 2 лет.
            </p>
          </div>

          <h2 className="text-lg font-bold text-slate-800 mt-8 mb-3">
            Что говорит закон
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Федеральный закон № 422-ФЗ «О самозанятых» не содержит запрета на работу по трудовому договору. Налоговый режим НПД применяется к доходам от конкретной деятельности — фриланс-проектов, услуг, продажи товаров собственного производства.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Зарплата работника облагается НДФЛ 13% и отдельно платится работодателем. Доходы самозанятого — НПД 4% или 6%. Это две независимые налоговые базы.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            <strong>Единственное ограничение (ст. 6, п. 2 ФЗ-422):</strong> нельзя применять НПД к доходам от услуг своему действующему работодателю, а также работодателю, с которым вы расторгли трудовой договор менее 2 лет назад.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <p className="text-sm font-semibold text-red-800 mb-1">⚠️ Важное ограничение</p>
            <p className="text-sm text-red-700 leading-relaxed">
              Если ваша компания закажет у вас услуги как у самозанятого — это нарушение. Налоговая переквалифицирует доход как трудовые отношения, доначислит НДФЛ 13%, взносы и штрафы. Работодателю придётся за это отвечать.
            </p>
          </div>

          <h2 className="text-lg font-bold text-slate-800 mt-8 mb-3">
            Как это работает на практике
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            Представим типичную ситуацию: Алексей — frontend-разработчик в найме, зарплата 120 000 ₽. По вечерам берёт небольшие проекты на фрилансе через самозанятость.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-2 font-semibold text-slate-700 border border-slate-200">Источник дохода</th>
                  <th className="text-right p-2 font-semibold text-slate-700 border border-slate-200">Сумма</th>
                  <th className="text-right p-2 font-semibold text-slate-700 border border-slate-200">Налог</th>
                  <th className="text-left p-2 font-semibold text-slate-700 border border-slate-200">Кто платит</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-slate-200 text-slate-600">Зарплата (работодатель)</td>
                  <td className="p-2 border border-slate-200 text-slate-600 text-right">120 000 ₽</td>
                  <td className="p-2 border border-slate-200 text-slate-600 text-right">НДФЛ 13%</td>
                  <td className="p-2 border border-slate-200 text-slate-600">Работодатель удерживает автоматически</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-2 border border-slate-200 text-slate-600">Фриланс от физлиц</td>
                  <td className="p-2 border border-slate-200 text-slate-600 text-right">50 000 ₽</td>
                  <td className="p-2 border border-slate-200 text-slate-600 text-right">НПД 4%</td>
                  <td className="p-2 border border-slate-200 text-slate-600">Сам через «Мой налог»</td>
                </tr>
                <tr>
                  <td className="p-2 border border-slate-200 text-slate-600">Фриланс от юрлиц</td>
                  <td className="p-2 border border-slate-200 text-slate-600 text-right">80 000 ₽</td>
                  <td className="p-2 border border-slate-200 text-slate-600 text-right">НПД 6%</td>
                  <td className="p-2 border border-slate-200 text-slate-600">Сам через «Мой налог»</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Алексей платит НДФЛ через работодателя и НПД через «Мой налог» — и это абсолютно легально.
          </p>

          <h2 className="text-lg font-bold text-slate-800 mt-8 mb-3">
            Нужно ли сообщать работодателю?
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Законодательно — нет. ФНС не передаёт работодателю информацию о том, что вы зарегистрированы как самозанятый. Налоговая тайна.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Но: некоторые компании включают в трудовой договор или соглашение о неразглашении пункт о запрете работы на конкурентов или иной коммерческой деятельности. Проверьте свой договор.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800 mb-1">💡 Практический совет</p>
            <p className="text-sm text-amber-700 leading-relaxed">
              Перечитайте трудовой договор и NDA, особенно разделы «иная деятельность» и «конфиденциальность». Если работаете на конкурентов — это риск, даже если юридически легально. Лучше брать клиентов из других отраслей.
            </p>
          </div>

          <h2 className="text-lg font-bold text-slate-800 mt-8 mb-3">
            Как совмещение влияет на пенсию и страховой стаж
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Пенсионный стаж и взносы в СФР начисляются через трудовой договор — это обязанность работодателя. Самозанятость по умолчанию не влияет на стаж и пенсию.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Если вы работаете по найму и параллельно занимаетесь фрилансом — ваши пенсионные права защищены через трудовой договор. Это плюс совмещения по сравнению с «чистым» фрилансом.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <p className="text-sm font-semibold text-blue-800 mb-1">📌 Важно знать</p>
            <p className="text-sm text-blue-700 leading-relaxed">
              Доход от самозанятости <strong>не учитывается</strong> при расчёте пенсионных баллов. Хотите больше пенсионных баллов от фриланс-дохода — можно добровольно платить взносы в СФР. В 2026 году это около <strong>50 798 ₽/год</strong> за полный стаж от фриланса.
            </p>
          </div>

          <h2 className="text-lg font-bold text-slate-800 mt-8 mb-3">
            Как правильно рассчитать ставку при совмещении
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Когда у вас есть зарплата, ставку для фриланса многие занижают — «мне всё равно хватит». Это ошибка: фриланс-доход должен компенсировать своё время и риски.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            При расчёте учтите:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-sm text-slate-600">
            <li><strong>Ограниченное время:</strong> вечера и выходные — ресурс ограничен. Чем меньше часов, тем выше должна быть ставка.</li>
            <li><strong>Усталость:</strong> после 8-часового рабочего дня производительность ниже. Закладывайте это в коэффициент загрузки.</li>
            <li><strong>Налог 4–6%:</strong> НПД нужно заложить в цену. Калькулятор ниже делает это автоматически.</li>
            <li><strong>Отсутствие буфера:</strong> если основная работа покрывает базовые расходы, фриланс становится «сверхдоходом» — но не обесценивайте своё время.</li>
          </ul>

          <h2 className="text-lg font-bold text-slate-800 mt-8 mb-3">
            Как считает налоги «Мой налог» при совмещении
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            «Мой налог» — приложение ФНС для самозанятых — работает только с НПД-доходами. Зарплату туда не вносите — это не ваша задача.
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-6 text-sm text-slate-600">
            <li>Получили оплату от фриланс-клиента — сформировали чек в «Мой налог».</li>
            <li>Приложение автоматически рассчитывает 4% (физлица) или 6% (юрлица).</li>
            <li>Оплата налога — до 28-го числа следующего месяца.</li>
            <li>Никаких деклараций, отчётов — всё автоматически.</li>
          </ol>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            НДФЛ с зарплаты удерживает работодатель — это никак не пересекается с «Мой налог».
          </p>

          <h2 className="text-lg font-bold text-slate-800 mt-8 mb-3">
            Лимит 2,4 млн ₽: считается только фриланс-доход
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Лимит самозанятости — 2,4 млн ₽ в год — считается только от НПД-доходов. Зарплата не входит в этот лимит.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-2 font-semibold text-slate-700 border border-slate-200">Доход</th>
                  <th className="text-right p-2 font-semibold text-slate-700 border border-slate-200">Сумма в год</th>
                  <th className="text-left p-2 font-semibold text-slate-700 border border-slate-200">Входит в лимит НПД?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-slate-200 text-slate-600">Зарплата (трудовой договор)</td>
                  <td className="p-2 border border-slate-200 text-slate-600 text-right">1 440 000 ₽</td>
                  <td className="p-2 border border-slate-200 text-emerald-600 font-medium">❌ Нет</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-2 border border-slate-200 text-slate-600">Фриланс (самозанятость)</td>
                  <td className="p-2 border border-slate-200 text-slate-600 text-right">1 200 000 ₽</td>
                  <td className="p-2 border border-slate-200 text-amber-600 font-medium">✅ Да</td>
                </tr>
                <tr>
                  <td className="p-2 border border-slate-200 font-semibold text-slate-700">Итого НПД-доход</td>
                  <td className="p-2 border border-slate-200 font-semibold text-slate-700 text-right">1 200 000 ₽</td>
                  <td className="p-2 border border-slate-200 text-emerald-600 font-medium">✅ В пределах лимита</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            В этом примере лимит не превышен: 1,2 млн из 2,4 млн использовано. Даже при хорошей зарплате и активном фрилансе большинство людей не превышают 2,4 млн от клиентов.
          </p>

          <h2 className="text-lg font-bold text-slate-800 mt-8 mb-3">
            Когда совмещение перестаёт быть выгодным
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Совмещение имеет смысл, пока фриланс — дополнительный доход. Но если фриланс начинает приносить больше зарплаты, появляются новые вопросы:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-sm text-slate-600">
            <li><strong>Лимит 2,4 млн ₽/год</strong> от фриланса — если подходите к нему, пора думать об ИП.</li>
            <li><strong>Конкурирующая деятельность</strong> — риск конфликта с работодателем.</li>
            <li><strong>Налоговая нагрузка</strong> — при высоком фриланс-доходе ИП на УСН может быть выгоднее самозанятости.</li>
            <li><strong>Усталость</strong> — две полноценные работы нереально в долгосрочной перспективе.</li>
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Читайте наш гайд:{" "}
            <Link href="/stati/samozanyatyj-vs-ip-frilancer" className="text-indigo-600 hover:underline">
              Самозанятый или ИП: что выгоднее для фрилансера →
            </Link>
          </p>

          <h2 className="text-lg font-bold text-slate-800 mt-8 mb-3">
            Частые вопросы
          </h2>
          <div className="space-y-4 mb-8">
            {[
              {
                q: "Могу ли я работать как самозанятый у своего работодателя?",
                a: "Нет. Закон прямо запрещает применять НПД к услугам для текущего работодателя и бывшего в течение 2 лет. ФНС может переквалифицировать такие отношения в трудовые с доначислением налогов и штрафов.",
              },
              {
                q: "Нужна ли мне отдельная регистрация ИП для фриланса при наличии трудового договора?",
                a: "Нет. Самозанятость (НПД) — самый простой режим. Регистрация через «Мой налог» за 5 минут, без ИП. ИП нужно только если планируете доход от фриланса свыше 2,4 млн ₽/год.",
              },
              {
                q: "Повлияет ли самозанятость на мой кредитный рейтинг или ипотеку?",
                a: "Напрямую нет. Но дополнительный НПД-доход помогает подтвердить доход для банка. Читайте гайд об ипотеке для самозанятых.",
              },
              {
                q: "Можно ли стать самозанятым, если я госслужащий?",
                a: "Ограниченно. Государственным и муниципальным служащим разрешена самозанятость только для сдачи имущества в аренду. Иная деятельность запрещена.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="border border-slate-200 rounded-lg overflow-hidden"
              >
                <summary className="p-4 cursor-pointer font-medium text-sm text-slate-800 hover:bg-slate-50 transition-colors">
                  {item.q}
                </summary>
                <p className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          {/* CTA Calculator */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 mb-8">
            <p className="text-sm font-semibold text-indigo-800 mb-1">
              Рассчитайте ставку для фриланс-подработки
            </p>
            <p className="text-sm text-indigo-600 mb-3">
              Укажите желаемый доход от фриланса — калькулятор учтёт налог 4–6% и покажет минимальную ставку за час.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Открыть калькулятор →
            </Link>
          </div>

          {/* Related articles */}
          <div className="border-t border-slate-100 pt-6">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
              Читайте также
            </p>
            <div className="space-y-2">
              {[
                {
                  href: "/stati/kak-oformit-samozanyatost-2026",
                  title: "Как оформить самозанятость: пошаговая инструкция 2026",
                },
                {
                  href: "/stati/samozanyatyj-vs-ip-frilancer",
                  title: "Самозанятый или ИП: что выгоднее для фрилансера",
                },
                {
                  href: "/stati/stavka-samozanyatogo-2026",
                  title: "Ставка самозанятого: как учесть налог НПД",
                },
                {
                  href: "/stati/kak-raschitat-stavku-frilansera",
                  title: "Как рассчитать ставку фрилансера: пошаговое руководство",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
                >
                  → {link.title}
                </Link>
              ))}
            </div>
          </div>
        </article>

        <footer className="mt-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} FreelanceCalc &nbsp;·&nbsp;{" "}
          <Link href="/" className="hover:text-indigo-600">← Главная</Link>
          &nbsp;·&nbsp;
          <Link href="/stati" className="hover:text-indigo-600">Все статьи</Link>
        </footer>
      </main>
    </>
  );
}
