import type { Metadata } from "next";
import Link from "next/link";
import CopyButton from "./CopyButton";

const BASE_URL = "https://freelancecalc-one.vercel.app";
const WIDGET_URL = `${BASE_URL}/widget`;

export const metadata: Metadata = {
  title: "Встроить калькулятор ставки фрилансера на сайт — бесплатный iframe-виджет",
  description:
    "Добавьте интерактивный калькулятор ставки фрилансера на свой блог или сайт одной строкой кода. Бесплатно, без регистрации. Подходит для статей о фрилансе, HR-блогов и IT-изданий.",
  keywords: [
    "виджет калькулятор фрилансера",
    "встроить калькулятор на сайт",
    "iframe калькулятор ставки",
    "калькулятор фрилансера для блога",
    "бесплатный виджет для сайта",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/embed" },
  openGraph: {
    title: "Встроить калькулятор ставки фрилансера — бесплатный виджет",
    description: "Одна строка кода — интерактивный калькулятор на вашем сайте.",
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/embed`,
    siteName: "FreelanceCalc",
  },
};

const EMBED_CODE = `<iframe
  src="${WIDGET_URL}"
  width="100%"
  height="420"
  frameborder="0"
  style="border-radius:12px;border:1px solid #e2e8f0"
  title="Калькулятор ставки фрилансера"
></iframe>`;

export default function EmbedPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-indigo-600">FreelanceCalc</Link>
        <span className="mx-2">›</span>
        <span>Встроить виджет</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Встроить калькулятор на свой сайт
        </h1>
        <p className="mt-3 text-slate-500 text-base">
          Бесплатный iframe-виджет для блогов, статей и сайтов о фрилансе.
          Добавьте интерактивный калькулятор одной строкой кода.
        </p>
      </header>

      {/* Preview */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-slate-800 mb-3">Предпросмотр</h2>
        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
          <iframe
            src={WIDGET_URL}
            width="100%"
            height="420"
            frameBorder="0"
            title="Калькулятор ставки фрилансера — предпросмотр виджета"
          />
        </div>
      </section>

      {/* Embed code */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-slate-800 mb-3">Код для вставки</h2>
        <p className="text-sm text-slate-500 mb-3">
          Скопируйте и вставьте в HTML-код вашей страницы:
        </p>
        <div className="relative">
          <pre className="bg-slate-900 text-green-400 rounded-xl p-4 text-sm overflow-x-auto whitespace-pre">
            {EMBED_CODE}
          </pre>
          <CopyButton text={EMBED_CODE} />
        </div>
        <p className="mt-3 text-xs text-slate-400">
          Высоту <code className="bg-slate-100 px-1 rounded">height=&quot;420&quot;</code> можно
          увеличить до 460–500 для большего комфорта.
        </p>
      </section>

      {/* Why embed */}
      <section className="mb-8 bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
        <h2 className="text-base font-semibold text-indigo-900 mb-3">Зачем добавлять виджет?</h2>
        <ul className="space-y-2 text-sm text-indigo-800">
          <li>✅ <strong>Повышает ценность статьи</strong> — читатели могут посчитать ставку прямо в вашем материале</li>
          <li>✅ <strong>Увеличивает время на сайте</strong> — интерактивный инструмент удерживает внимание</li>
          <li>✅ <strong>Бесплатно и без рекламы</strong> — виджет показывает только калькулятор</li>
          <li>✅ <strong>Работает на мобильных</strong> — адаптивная вёрстка</li>
        </ul>
      </section>

      {/* Подходит для */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Кому подойдёт</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: "✍️", title: "Блоги о фрилансе", desc: "Статьи «как назначить ставку», «сколько брать за проект»" },
            { icon: "👔", title: "HR и рекрутинг", desc: "Статьи о найме фрилансеров, бюджетировании проектов" },
            { icon: "💻", title: "IT-издания", desc: "Материалы о самозанятых, ИП, налогах фрилансера" },
            { icon: "🎓", title: "Образование", desc: "Курсы, школы, подготовка начинающих фрилансеров" },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-4">
              <span className="text-xl">{item.icon}</span>
              <p className="font-semibold text-slate-800 text-sm mt-1">{item.title}</p>
              <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-800 text-white rounded-2xl p-6 text-center">
        <h2 className="font-bold text-lg mb-2">Нужен полный калькулятор?</h2>
        <p className="text-slate-300 text-sm mb-4">
          На FreelanceCalc — калькуляторы по 22 специальностям, 16 городам и сравнение с рынком.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-slate-900 hover:bg-slate-100 font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
        >
          Открыть FreelanceCalc →
        </Link>
      </section>
    </main>
  );
}
