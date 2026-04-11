import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Самозанятый на маркетплейсе в 2026 году: Wildberries, Ozon, Яндекс Маркет | FreelanceCalc",
  description:
    "Как работать самозанятым на маркетплейсах в 2026: налог НПД 4%, что можно и нельзя продавать, комиссия Wildberries и Ozon, лимит 2,4 млн ₽, синхронизация с «Мой налог». Таблица расчёта прибыли.",
  alternates: { canonical: `${BASE_URL}/guide/samozanyatyj-marketplejs-2026` },
  openGraph: {
    title: "Самозанятый на маркетплейсе 2026: налоги, ограничения, расчёты",
    description:
      "НПД 4% с продаж физлицам, нельзя перепродавать чужие товары, лимит 2,4 млн ₽. Подробный гайд по Wildberries, Ozon и Яндекс Маркету.",
    url: `${BASE_URL}/guide/samozanyatyj-marketplejs-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Самозанятый на Wildberries и Ozon 2026: всё что нужно знать",
    description:
      "Налог НПД 4%, запрет на перепродажу, синхронизация с Мой налог, что делать при превышении 2,4 млн ₽.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Может ли самозанятый торговать на Wildberries в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, но только товарами собственного производства (изделия ручной работы, хэндмейд, собственная косметика, одежда, выпечка и т.д.). Перепродажа покупных товаров на НПД запрещена — если ФНС обнаружит, статус аннулируется задним числом и доначислят НДФЛ 13% за весь период.",
      },
    },
    {
      "@type": "Question",
      name: "С какой суммы самозанятый платит налог на маркетплейсе — с полной цены или после комиссии?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "По разъяснениям ФНС (письмо от 2021), доходом самозанятого считается полная стоимость, которую заплатил покупатель, а не сумма после вычета комиссии маркетплейса. Например: товар продан за 1 000 ₽, комиссия WB 20% = 200 ₽. Налог НПД считается от 1 000 ₽ × 4% = 40 ₽. На счёт придёт 800 ₽, а налог платите со всей 1 000 ₽. Однако ряд маркетплейсов предлагает автоматическую синхронизацию с «Мой налог», где доход фиксируется корректно.",
      },
    },
    {
      "@type": "Question",
      name: "Какая ставка НПД при продаже на маркетплейсе?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "4% — если покупатель физическое лицо (это большинство покупок на Wildberries/Ozon). 6% — если заказчик юридическое лицо или ИП. Маркетплейс выступает посредником, но налог платится с дохода самозанятого, а не с выплаты от площадки.",
      },
    },
    {
      "@type": "Question",
      name: "Что будет, когда самозанятый на маркетплейсе превысит 2,4 млн рублей?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Статус НПД автоматически прекращается. Нужно в течение 20 дней зарегистрировать ИП на УСН (6% или 15%), иначе ФНС доначислит НДФЛ 13% на весь доход сверх лимита плюс штраф 20% по ст. 122 НК РФ. При активных продажах на маркетплейсе лимит 2,4 млн (=200 000 ₽/мес) достигается быстро — планируйте переход заранее.",
      },
    },
    {
      "@type": "Question",
      name: "Нужен ли самозанятому расчётный счёт для работы на маркетплейсе?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет, расчётный счёт ИП не нужен. Wildberries и Ozon могут перечислять выплаты на обычный счёт физического лица (карту). Самозанятый не обязан открывать отдельный счёт. Однако Wildberries требует указать реквизиты банковской карты или счёта при регистрации продавца.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Самозанятый на маркетплейсе в 2026 году: Wildberries, Ozon, Яндекс Маркет",
  description:
    "Полный гайд по работе самозанятого (НПД) на маркетплейсах в 2026 году: что можно продавать, ставки налога 4% и 6%, как считается доход с учётом комиссии, синхронизация с «Мой налог», лимит 2,4 млн ₽ и таблица сравнения с ИП УСН.",
  url: `${BASE_URL}/guide/samozanyatyj-marketplejs-2026`,
  datePublished: "2026-04-11",
  dateModified: "2026-04-11",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function SamozanyatyjMarketplejs2026() {
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
          <span>Самозанятый на маркетплейсе 2026</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4 leading-tight">
          Самозанятый на маркетплейсе в 2026 году: Wildberries, Ozon, Яндекс Маркет
        </h1>

        <p className="text-gray-500 text-sm mb-6">Обновлено: апрель 2026 · 9 мин чтения</p>

        <p className="text-lg text-gray-700 mb-8">
          Миллионы людей продают на маркетплейсах — и многие хотят сделать это как самозанятые,
          без регистрации ИП. Хорошая новость: это возможно. Плохая: только при продаже товаров{" "}
          <strong>собственного производства</strong>. Разбираем все нюансы НПД на маркетплейсах
          в 2026 году — с цифрами и расчётами.
        </p>

        {/* Блок преимущества НПД в 2026 */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-10">
          <h2 className="text-lg font-semibold text-green-800 mb-2">
            Преимущество НПД в 2026: НДС не касается
          </h2>
          <p className="text-green-900 text-sm">
            С 2025 года предприниматели на УСН с доходом от 60 млн ₽ обязаны платить НДС 5–20%.
            Плательщики НПД (самозанятые) освобождены от НДС независимо от дохода (в пределах
            2,4 млн ₽/год). Для малых продавцов хэндмейда и мастеров — это реальная экономия.
          </p>
        </div>

        {/* Что можно и нельзя */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Что можно продавать на НПД, а что нельзя</h2>
          <p className="mb-4 text-gray-700">
            Ключевое ограничение самозанятости на маркетплейсах — запрет на перепродажу. Это
            самый частый повод, по которому ФНС аннулирует статус НПД задним числом.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 rounded-xl p-5">
              <h3 className="font-semibold text-green-700 mb-3">✅ Разрешено на НПД</h3>
              <ul className="text-sm text-green-800 space-y-2">
                <li>• Изделия ручной работы: украшения, свечи, игрушки</li>
                <li>• Одежда и аксессуары собственного пошива</li>
                <li>• Домашняя косметика и мыло (при наличии декларации)</li>
                <li>• Картины, иллюстрации, принты</li>
                <li>• Выпечка и кондитерские изделия</li>
                <li>• Цифровые товары: шаблоны, арт-принты, паттерны</li>
                <li>• Сувениры и предметы интерьера ручной работы</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-5">
              <h3 className="font-semibold text-red-700 mb-3">❌ Запрещено на НПД</h3>
              <ul className="text-sm text-red-800 space-y-2">
                <li>• Перепродажа товаров с Aliexpress, оптовых поставщиков</li>
                <li>• Товары с обязательной маркировкой (одежда масс-маркет)</li>
                <li>• Подакцизные товары (алкоголь, табак)</li>
                <li>• Товары чужого производства под «своим» брендом</li>
                <li>• Добыча полезных ископаемых</li>
                <li>• Агентская продажа в чужих интересах</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <p className="text-orange-800 text-sm">
              <strong>Риск перепродажи:</strong> если ФНС признает товары покупными —
              статус НПД аннулируется за весь период. Доначислят НДФЛ 13% + штраф 20% по
              ст. 122 НК РФ. Wildberries и Ozon передают данные о продажах в ФНС автоматически.
            </p>
          </div>
        </section>

        {/* Ставки налога */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Ставки НПД при продаже на маркетплейсе</h2>
          <p className="mb-4 text-gray-700">
            Маркетплейс выступает <strong>агентом</strong>: он принимает деньги от покупателя и
            перечисляет вам за минусом комиссии. Для расчёта налога это важно.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Кто покупатель</th>
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Ставка НПД</th>
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold">База налога</th>
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Пример</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">Физическое лицо</td>
                  <td className="px-4 py-3 border border-gray-200 text-green-700 font-semibold">4%</td>
                  <td className="px-4 py-3 border border-gray-200">Полная цена товара</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-500">1 000 ₽ × 4% = 40 ₽</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">Юрлицо или ИП</td>
                  <td className="px-4 py-3 border border-gray-200 text-blue-700 font-semibold">6%</td>
                  <td className="px-4 py-3 border border-gray-200">Полная цена товара</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-500">1 000 ₽ × 6% = 60 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <p className="text-yellow-800 text-sm">
              <strong>Важно про базу налога:</strong> по разъяснениям ФНС, доходом считается
              полная сумма, оплаченная покупателем, — а не то, что пришло на ваш счёт после
              комиссии маркетплейса. Если товар продан за 1 000 ₽, а WB удержал 20% (200 ₽) —
              налог всё равно считается от 1 000 ₽.
            </p>
          </div>
        </section>

        {/* Расчёт прибыли */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Расчёт прибыли: НПД vs ИП УСН на Wildberries</h2>
          <p className="mb-4 text-gray-700">
            Сравниваем реальную прибыль продавца при цене товара 1 000 ₽ и комиссии Wildberries 20%.
            Себестоимость — 400 ₽.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Статья</th>
                  <th className="text-center px-4 py-3 border border-gray-200 font-semibold">Самозанятый (НПД)</th>
                  <th className="text-center px-4 py-3 border border-gray-200 font-semibold">ИП УСН 6%</th>
                  <th className="text-center px-4 py-3 border border-gray-200 font-semibold">ИП УСН 15%</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">Цена продажи</td>
                  <td className="text-center px-4 py-3 border border-gray-200">1 000 ₽</td>
                  <td className="text-center px-4 py-3 border border-gray-200">1 000 ₽</td>
                  <td className="text-center px-4 py-3 border border-gray-200">1 000 ₽</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">Комиссия WB (20%)</td>
                  <td className="text-center px-4 py-3 border border-gray-200 text-red-600">−200 ₽</td>
                  <td className="text-center px-4 py-3 border border-gray-200 text-red-600">−200 ₽</td>
                  <td className="text-center px-4 py-3 border border-gray-200 text-red-600">−200 ₽</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">Себестоимость</td>
                  <td className="text-center px-4 py-3 border border-gray-200 text-red-600">−400 ₽</td>
                  <td className="text-center px-4 py-3 border border-gray-200 text-red-600">−400 ₽</td>
                  <td className="text-center px-4 py-3 border border-gray-200 text-red-600">−400 ₽</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">Налог</td>
                  <td className="text-center px-4 py-3 border border-gray-200 text-orange-600">−40 ₽ (4% от 1 000)</td>
                  <td className="text-center px-4 py-3 border border-gray-200 text-orange-600">−60 ₽ (6% от 1 000)</td>
                  <td className="text-center px-4 py-3 border border-gray-200 text-orange-600">−60 ₽ (15% от 400 прибыли)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">Страх. взносы ИП (~45 842 ₽/год → на 1 продажу)</td>
                  <td className="text-center px-4 py-3 border border-gray-200 text-gray-400">0 ₽</td>
                  <td className="text-center px-4 py-3 border border-gray-200 text-orange-600">−~3,8 ₽*</td>
                  <td className="text-center px-4 py-3 border border-gray-200 text-orange-600">−~3,8 ₽*</td>
                </tr>
                <tr className="bg-gray-50 font-semibold">
                  <td className="px-4 py-3 border border-gray-200">Чистая прибыль</td>
                  <td className="text-center px-4 py-3 border border-gray-200 text-green-700">360 ₽</td>
                  <td className="text-center px-4 py-3 border border-gray-200 text-blue-700">~336 ₽</td>
                  <td className="text-center px-4 py-3 border border-gray-200 text-blue-700">~336 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            * Взносы ИП распределены условно на 12 000 продаж в год. При малом обороте (до 1 000 продаж/год)
            выгода НПД ещё выше — ИП взносы фиксированы независимо от дохода.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 text-sm">
              <strong>Вывод:</strong> для малых объёмов продаж (до ~12 000 продаж/год, доход до 2,4 млн ₽)
              НПД выгоднее ИП УСН — нет фиксированных страховых взносов 45 842 ₽/год, меньше
              отчётности, нет необходимости открывать ИП. При превышении лимита 2,4 млн ₽ — переход
              на ИП УСН становится обязательным.
            </p>
          </div>
        </section>

        {/* Синхронизация с Мой налог */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Синхронизация маркетплейсов с «Мой налог»</h2>
          <p className="mb-5 text-gray-700">
            Wildberries позволяет привязать личный кабинет продавца к приложению «Мой налог» —
            чеки за каждую продажу формируются автоматически. Это значительно упрощает учёт.
          </p>

          <div className="space-y-4 mb-6">
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔵</span>
                <h3 className="font-semibold text-lg">Wildberries</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                Поддерживает синхронизацию с «Мой налог». В личном кабинете продавца раздел
                «Настройки» → «Налоги» → «Привязать к НПД». После привязки чеки формируются
                автоматически при каждом перечислении выплат.
              </p>
              <p className="text-xs text-gray-500">Комиссия для самозанятых: 10–25% в зависимости от категории</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🟣</span>
                <h3 className="font-semibold text-lg">Ozon</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                Ozon принимает самозанятых. Регистрация как «Физическое лицо — НПД». Чеки
                нужно формировать вручную в «Мой налог» после получения выплат от Ozon.
                Автосинхронизация в 2026 году недоступна — следите за суммами в отчётах.
              </p>
              <p className="text-xs text-gray-500">Комиссия для самозанятых: 5–25% в зависимости от категории и схемы</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🟡</span>
                <h3 className="font-semibold text-lg">Яндекс Маркет</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                Принимает самозанятых-производителей. Регистрация через партнёрский портал.
                Выплаты — на карту физлица. Чеки формируются вручную. Удобен для продавцов
                цифровых товаров и хэндмейда.
              </p>
              <p className="text-xs text-gray-500">Комиссия: 2–9% + логистика при работе на складе Маркета</p>
            </div>
          </div>
        </section>

        {/* Лимит 2.4 млн */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Лимит 2,4 млн ₽ для продавца на маркетплейсе</h2>
          <p className="mb-4 text-gray-700">
            При активных продажах лимит НПД (2 400 000 ₽ = ~200 000 ₽/месяц) достигается быстро.
            Важно отслеживать накопленный доход и заранее готовиться к переходу.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-5">
            <h3 className="font-semibold text-blue-800 mb-3">Как считать: доход или выручка?</h3>
            <p className="text-blue-900 text-sm">
              Для лимита НПД учитывается <strong>полная выручка от продаж</strong> (цена, которую
              заплатил покупатель), а не сумма выплат от маркетплейса. Если вы продали товаров на
              2,4 млн ₽, но WB удержал комиссию 20% и перечислил вам 1,92 млн ₽ — лимит всё равно
              считается достигнутым.
            </p>
          </div>

          <h3 className="text-lg font-semibold mb-3">Пример: когда будет исчерпан лимит</h3>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Средний чек</th>
                  <th className="text-center px-4 py-3 border border-gray-200 font-semibold">Продаж в месяц для лимита</th>
                  <th className="text-center px-4 py-3 border border-gray-200 font-semibold">Месяц исчерпания при 100 продаж/мес</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">500 ₽</td>
                  <td className="text-center px-4 py-3 border border-gray-200">400 шт./мес</td>
                  <td className="text-center px-4 py-3 border border-gray-200 text-orange-600">48 месяцев (4 года)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">1 000 ₽</td>
                  <td className="text-center px-4 py-3 border border-gray-200">200 шт./мес</td>
                  <td className="text-center px-4 py-3 border border-gray-200 text-orange-600">24 месяца (2 года)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">2 000 ₽</td>
                  <td className="text-center px-4 py-3 border border-gray-200">100 шт./мес</td>
                  <td className="text-center px-4 py-3 border border-gray-200 text-red-600">12 месяцев (1 год)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">5 000 ₽</td>
                  <td className="text-center px-4 py-3 border border-gray-200">40 шт./мес</td>
                  <td className="text-center px-4 py-3 border border-gray-200 text-red-600">~5 месяцев при 100 шт/мес</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <p className="text-orange-800 text-sm">
              <strong>Совет:</strong> при доходе от 1,5 млн ₽ с начала года — начинайте подготовку
              к открытию ИП на УСН. Процедура занимает 1–5 рабочих дней через Госуслуги.
              Подробнее →{" "}
              <Link href="/guide/kak-otkryt-ip-frilanseru-2026" className="text-orange-700 underline">
                Как открыть ИП фрилансеру 2026
              </Link>
            </p>
          </div>
        </section>

        {/* Пошаговая регистрация */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Как зарегистрироваться продавцом-самозанятым на Wildberries: пошагово
          </h2>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
              <div>
                <p className="font-medium">Станьте самозанятым</p>
                <p className="text-gray-600 text-sm">
                  Скачайте приложение «Мой налог» (ФНС России) и зарегистрируйтесь — займёт 5 минут.
                  Подробнее:{" "}
                  <Link href="/guide/kak-stat-samozanyatym-frilanser" className="text-blue-600 hover:underline">
                    Как стать самозанятым
                  </Link>
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
              <div>
                <p className="font-medium">Зарегистрируйтесь на WB Sellers</p>
                <p className="text-gray-600 text-sm">
                  Перейдите на seller.wildberries.ru → «Стать продавцом» → выберите тип: «Физическое
                  лицо (самозанятый)». Введите ИНН и данные паспорта.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
              <div>
                <p className="font-medium">Подпишите оферту</p>
                <p className="text-gray-600 text-sm">
                  Ознакомьтесь с договором-офертой. Обратите внимание на ставку комиссии для вашей
                  категории товаров.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
              <div>
                <p className="font-medium">Привяжите «Мой налог» к кабинету WB</p>
                <p className="text-gray-600 text-sm">
                  Настройки → Налоги → Привязать статус самозанятого. После привязки чеки
                  формируются автоматически при каждой выплате.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">5</span>
              <div>
                <p className="font-medium">Создайте карточки товаров</p>
                <p className="text-gray-600 text-sm">
                  Укажите, что товар — собственного производства. Добавьте фото, описание,
                  габариты. Первая поставка возможна уже через 1–3 дня после одобрения карточки.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Ошибки */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">5 частых ошибок самозанятых на маркетплейсах</h2>
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-100 rounded-lg p-4">
              <p className="font-medium text-red-800 mb-1">1. Продажа покупных товаров под видом «хэндмейда»</p>
              <p className="text-red-700 text-sm">Самая частая причина потери статуса НПД. ФНС сверяет объём продаж с реальными возможностями производства.</p>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-lg p-4">
              <p className="font-medium text-orange-800 mb-1">2. Не формируют чеки вручную (Ozon)</p>
              <p className="text-orange-700 text-sm">На Ozon автосинхронизации нет. Каждое поступление от маркетплейса = чек в «Мой налог». Иначе — штраф по ст. 129.13 НК РФ.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
              <p className="font-medium text-yellow-800 mb-1">3. Считают доход с суммы выплат (а не с цены продажи)</p>
              <p className="text-yellow-700 text-sm">Налог платится с полной цены товара. Недоплата = штраф 20% + пени.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
              <p className="font-medium text-yellow-800 mb-1">4. Не следят за лимитом 2,4 млн ₽</p>
              <p className="text-yellow-700 text-sm">Неожиданное превышение без перехода на ИП — доначисление НДФЛ 13% + штраф. Следите в «Мой налог» → «Доходы» → «С начала года».</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
              <p className="font-medium text-gray-800 mb-1">5. Игнорируют требования маркировки</p>
              <p className="text-gray-700 text-sm">Ряд товаров требует маркировки «Честный знак» даже при продаже собственного производства (обувь, текстиль, меховые изделия). Нарушение = снятие товара и штраф.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold mb-2">Рассчитайте ставку и налоги как самозанятый</h2>
          <p className="text-gray-700 text-sm mb-4">
            Наш калькулятор покажет точный НПД с учётом вычета 10 000 ₽ и реальную чистую прибыль —
            чтобы цену на маркетплейсе ставить не наугад, а с запасом.
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
              href="/guide/nalog-samozanyatyj"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <p className="font-medium text-gray-800 text-sm">Налог самозанятого: НПД 4% и 6%</p>
              <p className="text-gray-500 text-xs mt-1">Как рассчитать и когда платить</p>
            </Link>
            <Link
              href="/guide/samozanyatyj-prevysil-limit"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <p className="font-medium text-gray-800 text-sm">Самозанятый превысил 2,4 млн ₽</p>
              <p className="text-gray-500 text-xs mt-1">Пошаговый план действий</p>
            </Link>
            <Link
              href="/guide/kak-stat-samozanyatym-frilanser"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <p className="font-medium text-gray-800 text-sm">Как стать самозанятым</p>
              <p className="text-gray-500 text-xs mt-1">Регистрация за 5 минут через Мой налог</p>
            </Link>
            <Link
              href="/guide/kak-otkryt-ip-frilanseru-2026"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <p className="font-medium text-gray-800 text-sm">Как открыть ИП фрилансеру</p>
              <p className="text-gray-500 text-xs mt-1">Когда НПД мало и нужно ИП</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
