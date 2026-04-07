import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Как стать самозанятым фрилансеру в 2026 году: пошаговая инструкция | FreelanceCalc",
  description:
    "Как оформить самозанятость фрилансеру за 10 минут: регистрация в «Мой налог», ставки 4% и 6%, первый чек, договор с заказчиком. Пошаговая инструкция 2026.",
  alternates: { canonical: `${BASE_URL}/guide/kak-stat-samozanyatym-frilanser` },
  openGraph: {
    title: "Как стать самозанятым фрилансеру в 2026: пошаговая инструкция",
    description:
      "Регистрация самозанятого за 10 минут, первый чек, налоги 4%/6%, договор с компанией. Всё что нужно знать фрилансеру.",
    url: `${BASE_URL}/guide/kak-stat-samozanyatym-frilanser`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Как стать самозанятым фрилансеру 2026: инструкция за 10 минут",
    description:
      "Регистрация через «Мой налог», ставки 4%/6%, первый чек, работа с компаниями. Онлайн-калькулятор ставки.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько времени занимает регистрация самозанятого в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Регистрация через приложение «Мой налог» занимает от 5 до 10 минут. Нужны паспорт и смартфон. Статус самозанятого присваивается автоматически — обычно в течение нескольких минут, иногда до одного рабочего дня.",
      },
    },
    {
      "@type": "Question",
      name: "Может ли фрилансер оформить самозанятость без ИП?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Самозанятость оформляется напрямую как физическое лицо — без регистрации ИП. Это основное преимущество режима: минимальная бюрократия. ИП тоже может применять НПД (налог на профессиональный доход), но для фрилансера без сотрудников физлицо-самозанятый — оптимальный вариант.",
      },
    },
    {
      "@type": "Question",
      name: "Какой налог платит самозанятый фрилансер?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "4% — если заказчик физическое лицо (частный человек). 6% — если заказчик юридическое лицо или ИП (компании, агентства, стартапы). Большинство фрилансеров, работающих с бизнесом, платят 6%. Ставки зафиксированы до 2028 года.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли работать по договору с компанией как самозанятый?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Компании охотно работают с самозанятыми: они платят 6% налога и выдают чек, который компания использует как подтверждение расходов. Важно: нельзя быть самозанятым у своего бывшего работодателя в течение 2 лет после увольнения.",
      },
    },
    {
      "@type": "Question",
      name: "Что будет, если превысить лимит дохода 2,4 млн рублей?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Статус самозанятого автоматически прекращается. С суммы превышения нужно уплатить НДФЛ 13%. Если планируете зарабатывать больше — заранее зарегистрируйте ИП (можно совмещать: ИП на НПД) или перейдите на ИП УСН 6%.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как стать самозанятым фрилансеру в 2026 году: пошаговая инструкция",
  description:
    "Полное руководство по оформлению самозанятости для фрилансера: регистрация, налоги 4%/6%, первый чек, работа с компаниями.",
  url: `${BASE_URL}/guide/kak-stat-samozanyatym-frilanser`,
  datePublished: "2026-04-07",
  dateModified: "2026-04-07",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Как стать самозанятым фрилансеру в 2026 году",
  description: "Пошаговая инструкция по регистрации самозанятого через приложение «Мой налог»",
  totalTime: "PT10M",
  step: [
    {
      "@type": "HowToStep",
      name: "Скачайте приложение «Мой налог»",
      text: "Установите официальное приложение ФНС России «Мой налог» из App Store, Google Play, RuStore или AppGallery.",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "Пройдите регистрацию",
      text: "Войдите через Госуслуги (рекомендуется) или сфотографируйте паспорт прямо в приложении. Укажите регион деятельности.",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "Подтвердите регистрацию",
      text: "Получите уведомление о постановке на учёт в качестве плательщика НПД. Обычно занимает несколько минут.",
      position: 3,
    },
    {
      "@type": "HowToStep",
      name: "Выдайте первый чек",
      text: "После получения оплаты зафиксируйте доход в «Мой налог»: нажмите «Новая продажа», укажите сумму и тип клиента (физлицо или юрлицо). Отправьте чек заказчику.",
      position: 4,
    },
  ],
};

export default function KakStatSamozanyatymFrilanserPage() {
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
            Как стать самозанятым фрилансеру в 2026 году
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            Пошаговая инструкция: регистрация за 10 минут, налоги 4% и 6%, первый чек, как работать с компаниями.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>Время чтения: 8 минут</span>
            <span>·</span>
            <span>Обновлено апрель 2026</span>
          </div>
        </header>

        {/* Quick CTA */}
        <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-5 text-center">
          <p className="text-sm font-semibold text-indigo-800 mb-1">
            Стали самозанятым — рассчитайте ставку
          </p>
          <p className="text-xs text-indigo-600 mb-3">
            Сколько выставлять клиенту, чтобы получить нужный доход после налога 6%?
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
          >
            Открыть калькулятор ставки →
          </Link>
        </div>

        <div className="space-y-8">

          {/* Section 1 — Что такое самозанятость для фрилансера */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Почему фрилансеры выбирают самозанятость
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Самозанятость (официально — налог на профессиональный доход, НПД) — самый простой способ легально работать фрилансером в России. Режим действует с 2019 года и в 2026 году доступен во всех регионах страны.
              </p>
              <p>
                В отличие от ИП, самозанятый не платит обязательные страховые взносы (~53 658 ₽ в год в 2026 году), не сдаёт декларации и не нуждается в кассовом аппарате. Весь учёт — в приложении «Мой налог» на смартфоне.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs text-green-800 font-semibold mb-2">Плюсы самозанятости для фрилансера:</p>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>✓ Ставка 4–6% вместо НДФЛ 13%</li>
                    <li>✓ Нет обязательных взносов</li>
                    <li>✓ Регистрация за 10 минут</li>
                    <li>✓ Компании охотно работают официально</li>
                    <li>✓ Автоматический расчёт налога</li>
                    <li>✓ Чек — вместо кассы</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-xs text-red-800 font-semibold mb-2">Ограничения самозанятости:</p>
                  <ul className="text-xs text-red-700 space-y-1">
                    <li>✗ Лимит дохода 2,4 млн ₽/год</li>
                    <li>✗ Нельзя нанимать сотрудников</li>
                    <li>✗ Не идёт пенсионный стаж (без доп. взносов)</li>
                    <li>✗ Нельзя работать с бывшим работодателем 2 года</li>
                    <li>✗ Не подходит для перепродажи товаров</li>
                  </ul>
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-2">
                Для большинства фрилансеров с доходом до 200 000 ₽/месяц самозанятость — оптимальный выбор. При более высоком доходе рассмотрите{" "}
                <Link href="/guide/ip-vs-samozanyatyj" className="text-indigo-600 hover:underline">
                  ИП УСН 6%
                </Link>.
              </p>
            </div>
          </section>

          {/* Section 2 — Пошаговая инструкция */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как зарегистрироваться самозанятым: пошагово
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">

              <p>
                Самый быстрый способ — через приложение <strong>«Мой налог»</strong> (разработано ФНС России). Занимает 5–10 минут.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold flex items-center justify-center">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Скачайте приложение «Мой налог»</p>
                    <p className="text-slate-500 text-xs mt-1">
                      Официальное приложение ФНС. Доступно в App Store, Google Play, RuStore и AppGallery. Поиск: «Мой налог» от ФНС России. Это бесплатно.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Выберите способ входа</p>
                    <p className="text-slate-500 text-xs mt-1">
                      Рекомендуем: <strong>«Войти через Госуслуги»</strong> — не нужно фотографировать паспорт, данные подтягиваются автоматически. Если нет аккаунта Госуслуг — выберите «Регистрация с паспортом»: сфотографируйте разворот паспорта и своё лицо.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-2">
                      <p className="text-xs text-blue-700">
                        Альтернативы: Госуслуги (сайт gosuslugi.ru → Налоги → Самозанятость), личный кабинет на nalog.ru, или через банк (Сбербанк, Тинькофф, Альфа-банк, ВТБ и другие).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Укажите регион деятельности</p>
                    <p className="text-slate-500 text-xs mt-1">
                      Регион — это где вы фактически работаете, не где прописаны. Для удалённых фрилансеров — регион основного заказчика или город проживания. Если работаете по всей России — укажите Москву или регион с наибольшим оборотом.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold flex items-center justify-center">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Подтвердите регистрацию</p>
                    <p className="text-slate-500 text-xs mt-1">
                      Получите уведомление «Вы поставлены на учёт в качестве плательщика НПД». Обычно — мгновенно, иногда до одного рабочего дня. С этого момента вы официально самозанятый.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-amber-800 font-semibold mb-1">Важно: ИНН у вас уже есть</p>
                <p className="text-xs text-amber-700">
                  ИНН (индивидуальный номер налогоплательщика) присваивается каждому гражданину России автоматически. Узнать свой ИНН можно через Госуслуги или на nalog.ru по паспортным данным. Специально получать ИНН перед регистрацией не нужно.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 — Налоги */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Какой налог платит самозанятый фрилансер
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Всё зависит от того, кто ваш заказчик:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-blue-700 mb-1">4%</p>
                  <p className="text-xs font-semibold text-blue-800 mb-2">Физическое лицо</p>
                  <p className="text-xs text-blue-600">
                    Частные заказчики, репетиторство, услуги соседям, разовые задачи от обычных людей
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-purple-700 mb-1">6%</p>
                  <p className="text-xs font-semibold text-purple-800 mb-2">Юридическое лицо / ИП</p>
                  <p className="text-xs text-purple-600">
                    Разработка для компаний, дизайн для агентств, B2B-фриланс — большинство сделок
                  </p>
                </div>
              </div>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Пример расчёта за месяц</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                <p className="font-semibold text-slate-700 mb-2">Frontend-разработчик, апрель 2026:</p>
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-500">Проект для ООО «Технологии» (6%)</span>
                  <span className="font-medium">150 000 ₽ → налог 9 000 ₽</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-500">Лендинг для частного заказчика (4%)</span>
                  <span className="font-medium">20 000 ₽ → налог 800 ₽</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="font-bold text-slate-800">Итого налог</span>
                  <span className="font-bold text-indigo-700">9 800 ₽ (~5,8%)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>На руки</span>
                  <span className="font-medium text-slate-600">160 200 ₽</span>
                </div>
              </div>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Налоговый вычет 10 000 ₽</h3>
              <p>
                При регистрации ФНС автоматически даёт налоговый вычет — <strong>10 000 рублей</strong>. Пока вычет не исчерпан, ставки ниже: 3% (вместо 4%) и 4% (вместо 6%). На первые месяцы это ощутимая экономия.
              </p>

              <p>
                Страховые взносы (<em>пенсионные, медицинские</em>) — не обязательны. Платите по желанию для формирования пенсионного стажа. При доходе 100 000 ₽/месяц экономия на взносах по сравнению с ИП составляет ~53 658 ₽/год.
              </p>
            </div>
          </section>

          {/* Section 4 — Первый чек */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как выдать первый чек и работать с компанией
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Для компаний чек самозанятого — это документ, подтверждающий оплату услуг. Без чека бухгалтерия клиента не сможет учесть расходы. Поэтому выдача чека — обязательна.
              </p>

              <h3 className="font-semibold text-slate-800 text-base">Как выдать чек: пошагово</h3>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full text-xs font-bold flex items-center justify-center">1</span>
                  <div>
                    <p className="font-semibold text-slate-700">Получили оплату на карту или счёт</p>
                    <p className="text-slate-500 text-xs mt-0.5">Принимать деньги можно на любую карту физлица — специальный счёт не нужен.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full text-xs font-bold flex items-center justify-center">2</span>
                  <div>
                    <p className="font-semibold text-slate-700">Зафиксируйте доход в «Мой налог»</p>
                    <p className="text-slate-500 text-xs mt-0.5">«Новая продажа» → введите сумму → выберите «Юридическому лицу» → укажите название компании и ИНН заказчика (для корпоративного чека).</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full text-xs font-bold flex items-center justify-center">3</span>
                  <div>
                    <p className="font-semibold text-slate-700">Отправьте чек заказчику</p>
                    <p className="text-slate-500 text-xs mt-0.5">Скачайте PDF чека и отправьте на email бухгалтера или прямо в мессенджер. Или поделитесь ссылкой — чек хранится в системе ФНС.</p>
                  </div>
                </li>
              </ol>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-2">
                <p className="text-xs font-semibold text-slate-700 mb-2">Когда выдавать чек?</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• При оплате наличными — в момент получения денег</li>
                  <li>• При безналичной оплате — до 9-го числа следующего месяца</li>
                  <li>• При предоплате — после получения аванса</li>
                </ul>
              </div>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Договор с компанией — нужен ли?</h3>
              <p>
                Для разовых задач можно работать без договора — чек является достаточным документом. Но для долгосрочного сотрудничества рекомендуется договор ГПХ (гражданско-правового характера) на оказание услуг. Это защищает обе стороны и упрощает закрытие актом.
              </p>
              <p>
                Важно: в договоре нужно указать, что исполнитель является плательщиком НПД. Компания-заказчик в этом случае не является налоговым агентом и не платит за вас взносы.
              </p>
            </div>
          </section>

          {/* Section 5 — Ставка */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как рассчитать ставку с учётом налога самозанятого
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Распространённая ошибка: называть заказчику цену, из которой потом вычитать налог. Правильно — сразу закладывать 6% в ставку, чтобы на руки получить нужную сумму.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-slate-700 mb-2">Формула расчёта ставки (заказчик — юрлицо, 6%):</p>
                <p className="font-mono text-sm text-indigo-700 font-bold">
                  Ставка клиенту = Желаемый доход ÷ 0,94
                </p>
                <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                  {[
                    ["1 000 ₽/час на руки", "→ 1 064 ₽/час клиенту"],
                    ["1 500 ₽/час на руки", "→ 1 596 ₽/час клиенту"],
                    ["2 000 ₽/час на руки", "→ 2 128 ₽/час клиенту"],
                    ["3 000 ₽/час на руки", "→ 3 191 ₽/час клиенту"],
                    ["5 000 ₽/час на руки", "→ 5 319 ₽/час клиенту"],
                  ].map(([want, result]) => (
                    <div key={want} className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span>{want}</span>
                      <span className="font-medium text-slate-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                Калькулятор FreelanceCalc автоматически рассчитывает ставку с учётом налога, загрузки, отпусков и рабочих расходов — и сравнивает её с рыночными данными по вашей специальности.
              </p>

              <div className="text-center pt-2">
                <Link
                  href="/"
                  className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
                >
                  Рассчитать свою ставку →
                </Link>
              </div>
            </div>
          </section>

          {/* Section 6 — Частые ситуации */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Частые вопросы при переходе на самозанятость
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">

              <div className="border-b border-slate-100 pb-4">
                <p className="font-semibold text-slate-800 mb-1">Я работаю удалённо в найме — могу ли стать самозанятым дополнительно?</p>
                <p className="text-slate-500 text-xs">
                  Да, это законно. Многие совмещают трудовой договор и самозанятость. Работодатель платит НДФЛ 13% с зарплаты, а подработки вы оформляете как самозанятый. Главное правило: нельзя быть самозанятым у своего текущего или бывшего (в течение 2 лет) работодателя.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-4">
                <p className="font-semibold text-slate-800 mb-1">Нужно ли сообщать клиентам о статусе самозанятого?</p>
                <p className="text-slate-500 text-xs">
                  Да, обязательно — чтобы компания знала, что не должна удерживать с вас НДФЛ и платить страховые взносы. Достаточно сказать: «Я плательщик НПД» и выдать чек через «Мой налог». Многие компании сами просят справку о постановке на учёт — её можно скачать из приложения.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-4">
                <p className="font-semibold text-slate-800 mb-1">Можно ли принимать оплату в валюте (USD, EUR) как самозанятый?</p>
                <p className="text-slate-500 text-xs">
                  Технически — да, но сложнее. Самозанятый фиксирует доход в рублях. Если получаете оплату в валюте, нужно пересчитать по курсу ЦБ на дату получения. Для регулярной работы с иностранными клиентами удобнее ИП с валютным счётом.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-1">Что будет, если не выдать чек?</p>
                <p className="text-slate-500 text-xs">
                  Штраф — 20% от суммы дохода при первом нарушении, 100% при повторном нарушении в течение 6 месяцев. Минимальная сумма штрафа — 1 000 рублей. Выдавать чек обязательно на каждую операцию.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">FAQ по самозанятости для фрилансера</h2>
            <div className="space-y-5">
              {[
                {
                  q: "Сколько времени занимает регистрация самозанятого в 2026 году?",
                  a: "5–10 минут через приложение «Мой налог». Статус присваивается автоматически, обычно в течение нескольких минут.",
                },
                {
                  q: "Может ли фрилансер оформить самозанятость без ИП?",
                  a: "Да. Самозанятость оформляется как физическое лицо — без регистрации ИП. Это максимально просто: нужны только паспорт и смартфон.",
                },
                {
                  q: "Какой налог платит самозанятый фрилансер?",
                  a: "4% с доходов от физических лиц и 6% с доходов от компаний и ИП. Ставки зафиксированы законом до 2028 года.",
                },
                {
                  q: "Можно ли работать по договору с компанией как самозанятый?",
                  a: "Да. Компании охотно работают с самозанятыми: они платят 6% налога и выдают чек. Нельзя только работать с бывшим работодателем в течение 2 лет после увольнения.",
                },
                {
                  q: "Что будет, если превысить лимит дохода 2,4 млн рублей?",
                  a: "Статус самозанятого прекращается автоматически. С суммы превышения платится НДФЛ 13%. Чтобы этого избежать — заранее зарегистрируйте ИП или перейдите на ИП УСН 6%.",
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
            <h2 className="text-lg font-bold mb-2">Оформили самозанятость — теперь рассчитайте ставку</h2>
            <p className="text-slate-300 text-sm mb-4">
              Сколько выставлять клиентам, чтобы получить нужный доход после налога? Калькулятор учитывает налог, загрузку, отпуск и сравнивает с рыночными ставками.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link
                href="/"
                className="inline-block bg-indigo-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-400 transition-colors"
              >
                Калькулятор ставки →
              </Link>
              <Link
                href="/guide/nalog-samozanyatyj"
                className="inline-block bg-slate-700 text-slate-200 font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-slate-600 transition-colors"
              >
                Налоги самозанятого →
              </Link>
            </div>
          </section>

          {/* Internal links */}
          <section className="bg-slate-50 rounded-2xl p-5">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
              Читайте также
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <Link
                href="/guide/nalog-samozanyatyj"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Налог самозанятого 4% и 6%
              </Link>
              <Link
                href="/guide/ip-vs-samozanyatyj"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                ИП или самозанятый?
              </Link>
              <Link
                href="/guide/nalog-programmist-frilanser"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Налоги IT-фрилансера
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
