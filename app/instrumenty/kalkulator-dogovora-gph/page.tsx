import type { Metadata } from "next";
import Link from "next/link";
import GphCalc from "./GphCalc";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Калькулятор договора ГПХ 2026 — НДФЛ и сравнение с самозанятым",
  description:
    "Рассчитайте НДФЛ 13% по договору ГПХ онлайн. Сколько получите на руки? Сравнение с самозанятым: кто выгоднее для вас и клиента. Бесплатно, без регистрации.",
  keywords: [
    "калькулятор договора ГПХ",
    "договор ГПХ калькулятор онлайн",
    "расчет НДФЛ ГПХ",
    "сколько получу по договору ГПХ",
    "ГПХ или самозанятый что выгоднее",
    "договор гражданско-правового характера калькулятор",
    "ГПХ НДФЛ 13 процентов онлайн",
    "расчет налога договор подряда",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/instrumenty/kalkulator-dogovora-gph" },
  openGraph: {
    title: "Калькулятор договора ГПХ 2026 — НДФЛ и сравнение с НПД",
    description:
      "Укажите сумму договора — калькулятор покажет сколько удержат НДФЛ, сколько вы получите, и насколько самозанятый выгоднее ГПХ.",
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/instrumenty/kalkulator-dogovora-gph`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Калькулятор договора ГПХ",
      description:
        "Онлайн-калькулятор расчёта НДФЛ 13% по договору ГПХ с сравнением самозанятого и профессионального вычета 20%.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: `${BASE_URL}/instrumenty/kalkulator-dogovora-gph`,
      offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Инструменты", item: `${BASE_URL}/instrumenty` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Калькулятор ГПХ",
          item: `${BASE_URL}/instrumenty/kalkulator-dogovora-gph`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько НДФЛ удержат по договору ГПХ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "По договору ГПХ заказчик удерживает НДФЛ 13% из суммы договора и перечисляет в бюджет. Если применить профессиональный вычет 20% (ст. 221 НК РФ), эффективная ставка снижается до 10.4% от суммы договора.",
          },
        },
        {
          "@type": "Question",
          name: "ГПХ или самозанятый — что выгоднее?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Для фрилансера самозанятый выгоднее: налог НПД 4% (от физлица) или 6% (от юрлица) — против НДФЛ 13% по ГПХ. При сумме 100 000 ₽ самозанятый получает 94 000 ₽, по ГПХ — 87 000 ₽. Клиенту самозанятый тоже выгоднее: нет страховых взносов ~27% сверху.",
          },
        },
        {
          "@type": "Question",
          name: "Кто платит страховые взносы по договору ГПХ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "По договору ГПХ страховые взносы (Пенсионный, ОМС — около 27.1% от суммы договора) платит заказчик, а не исполнитель. Это скрытые расходы клиента — именно поэтому многие заказчики предпочитают работать с самозанятыми, где никаких взносов нет.",
          },
        },
        {
          "@type": "Question",
          name: "Что такое профессиональный вычет 20% по ГПХ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Профессиональный вычет 20% (ст. 221 НК РФ) позволяет уменьшить налогооблагаемую базу: НДФЛ рассчитывается с 80% суммы договора, а не со 100%. Нужно письменно заявить вычет заказчику до выплаты. В итоге эффективная ставка НДФЛ = 10.4% вместо 13%.",
          },
        },
      ],
    },
  ],
};

export default function KalkulyatorGph() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-indigo-600">FreelanceCalc</Link>
          <span className="mx-1.5">›</span>
          <Link href="/instrumenty" className="hover:text-indigo-600">Инструменты</Link>
          <span className="mx-1.5">›</span>
          <span className="text-slate-600">Калькулятор ГПХ</span>
        </nav>

        {/* Header */}
        <header className="mb-7">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 leading-tight">
            Калькулятор договора ГПХ — НДФЛ и сравнение с самозанятым
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
            Укажите сумму договора — калькулятор покажет сколько удержат НДФЛ 13%, сколько вы получите
            на руки, и сравнит с самозанятым (НПД 4% или 6%). Учитывает профессиональный вычет 20%.
          </p>
        </header>

        {/* Calculator */}
        <GphCalc />

        {/* FAQ */}
        <section className="mt-10 space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Частые вопросы о налогах по договору ГПХ</h2>

          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900 mb-2">Кто платит НДФЛ по договору ГПХ?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                НДФЛ 13% удерживает и перечисляет в бюджет <strong>заказчик</strong> — он выступает налоговым
                агентом. Вы получаете на руки уже «чистую» сумму. Подавать декларацию самостоятельно не нужно,
                если у вас только один работодатель/заказчик.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900 mb-2">Почему самозанятый выгоднее ГПХ для обеих сторон?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                При работе через самозанятость (НПД 6% с юрлица): исполнитель платит всего 6% вместо 13% НДФЛ.
                Заказчик не платит страховые взносы ~27% сверху. Итог — при том же бюджете клиента фрилансер
                получает значительно больше. Калькулятор выше показывает конкретные цифры для вашей ситуации.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900 mb-2">Можно ли совмещать ГПХ и самозанятость?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Да — если заказчик по ГПХ и заказчик по НПД разные компании. <strong>Нельзя</strong> выставлять
                чек самозанятого работодателю, с которым у вас официальный трудовой договор или договор ГПХ
                (ограничение 2 года после расторжения). В остальном — совмещение законно.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900 mb-2">Как заказчик экономит на самозанятом vs ГПХ?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                По ГПХ заказчик платит страховые взносы ~27.1% от суммы договора <em>сверху</em> (ОПС + ОМС,
                без ВНиМ). При контракте на 100 000 ₽ реальные расходы заказчика — 127 100 ₽. С самозанятым —
                ровно 100 000 ₽. Это частая причина, по которой компании охотно переходят на работу
                с самозанятыми.
              </p>
            </div>
          </div>
        </section>

        {/* Related tools CTA */}
        <section className="mt-10 bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
          <h2 className="font-bold text-indigo-900 mb-4">Связанные инструменты</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              href="/"
              className="block bg-white border border-indigo-100 rounded-xl p-4 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
            >
              <div className="font-semibold text-slate-800 text-sm mb-1">🧮 Калькулятор ставки фрилансера</div>
              <div className="text-xs text-slate-500">Рассчитайте почасовую ставку с учётом налогов, отпуска и загрузки</div>
            </Link>
            <Link
              href="/instrumenty/kalkulator-naloga-samozanyatogo"
              className="block bg-white border border-indigo-100 rounded-xl p-4 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
            >
              <div className="font-semibold text-slate-800 text-sm mb-1">📱 Калькулятор НПД</div>
              <div className="text-xs text-slate-500">НПД 4% и 6%, бонус первого года, лимит 2.4М₽</div>
            </Link>
            <Link
              href="/stati/dogovor-gph-nalogi-frilansera-2026"
              className="block bg-white border border-indigo-100 rounded-xl p-4 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
            >
              <div className="font-semibold text-slate-800 text-sm mb-1">📋 Договор ГПХ: налоги и риски</div>
              <div className="text-xs text-slate-500">Подробная статья о ГПХ для фрилансеров в 2026 году</div>
            </Link>
            <Link
              href="/stati/samozanyatyj-vs-ip-frilancer"
              className="block bg-white border border-indigo-100 rounded-xl p-4 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
            >
              <div className="font-semibold text-slate-800 text-sm mb-1">⚖️ Самозанятый vs ИП</div>
              <div className="text-xs text-slate-500">Сравнение налоговых режимов для фрилансеров</div>
            </Link>
          </div>
        </section>

        {/* Rate calculator CTA */}
        <section className="mt-6 bg-slate-900 rounded-2xl p-6 text-white text-center">
          <p className="text-sm text-slate-400 mb-2">Оформитесь как самозанятый и повысьте ставку</p>
          <p className="font-bold text-lg mb-4">
            Сколько нужно брать в час, чтобы выйти на нужный доход с учётом НПД?
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            Рассчитать ставку фрилансера →
          </Link>
        </section>

        {/* Back link */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <Link href="/instrumenty" className="text-sm text-indigo-600 hover:underline">
            ← Все калькуляторы для фрилансеров
          </Link>
        </div>
      </div>
    </>
  );
}
