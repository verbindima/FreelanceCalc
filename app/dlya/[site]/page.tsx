import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";
const WIDGET_URL = `${BASE_URL}/widget`;

// Personalized data for each target site/publication
const SITES: Record<
  string,
  {
    name: string;
    greeting: string;
    hook: string;
    relevance: string;
    examples: string[];
    audience: string;
    cta: string;
  }
> = {
  vc: {
    name: "VC.ru",
    greeting: "Привет, VC.ru",
    hook: "Ваши читатели постоянно спрашивают: «Сколько брать за проект?» Вот готовый ответ — прямо в статье.",
    relevance:
      "VC.ru — главная площадка для материалов о фрилансе, самозанятости и IT-карьере в России. Каждая статья о ставках или налогах получит +50% к времени на сайте, если читатель сможет сразу посчитать.",
    examples: [
      "«Сколько зарабатывают фрилансеры в 2026»",
      "«Как стать самозанятым: пошаговый гайд»",
      "«Фриланс vs найм: что выгоднее в 2026»",
    ],
    audience: "IT-специалисты, дизайнеры, маркетологи — именно те, кто смотрит ставки",
    cta: "Добавьте виджет в свою следующую статью о фрилансе",
  },
  habr: {
    name: "Habr",
    greeting: "Привет, Habr",
    hook: "Статьи о зарплатах и ставках — одни из самых читаемых на Habr. Дайте читателям посчитать самим.",
    relevance:
      "Habr — сообщество разработчиков, дизайнеров и продакт-менеджеров. Половина из них работает на фрилансе или думает об этом. Калькулятор в статье = практическая польза сразу.",
    examples: [
      "«Как считать часовую ставку для зарубежного клиента»",
      "«Самозанятый разработчик: налоги и ставки»",
      "«Junior vs Senior: разница в ставках по городам»",
    ],
    audience: "Разработчики, дата-инженеры, DevOps — высокомаржинальная аудитория",
    cta: "Встройте виджет в статью — читатели оценят",
  },
  kadrof: {
    name: "Kadrof.ru",
    greeting: "Привет, Kadrof.ru",
    hook: "Kadrof — один из главных ресурсов для фрилансеров в Рунете. Ваши читатели ищут именно этот инструмент.",
    relevance:
      "Ваши статьи о ставках, налогах и карьере фрилансера уже ранжируются по нужным запросам. Встроенный калькулятор сделает их ещё полезнее и увеличит глубину просмотра.",
    examples: [
      "«Сколько берут фрилансеры в 2026»",
      "«Как правильно назначить цену на услуги»",
      "«Фриланс-биржи: сравнение и советы»",
    ],
    audience: "Начинающие и опытные фрилансеры — ваша core-аудитория",
    cta: "Виджет идеально дополнит ваши топовые статьи",
  },
  tproger: {
    name: "Tproger",
    greeting: "Привет, Tproger",
    hook: "Разработчики на Tproger постоянно обсуждают зарплаты и ставки. Дайте им инструмент прямо в статье.",
    relevance:
      "Tproger — самый посещаемый IT-ресурс среди разработчиков в СНГ. Материалы о карьере и доходах стабильно в топе. Калькулятор ставки = практичный интерактив для вашей аудитории.",
    examples: [
      "«Сколько зарабатывают программисты в 2026»",
      "«Фриланс для разработчика: с чего начать»",
      "«React vs Vue: ставки на рынке труда»",
    ],
    audience: "Разработчики всех уровней — от джунов до тимлидов",
    cta: "Один тег — калькулятор прямо в вашей статье",
  },
  freelancehunt: {
    name: "Freelancehunt",
    greeting: "Привет, Freelancehunt",
    hook: "Ваши пользователи каждый день задают вопрос: «Сколько просить за этот проект?» Вот готовый инструмент.",
    relevance:
      "Freelancehunt — крупнейшая русскоязычная биржа. Блог и FAQ читают тысячи фрилансеров в поисках ответов на вопросы о ставках. Встроенный калькулятор усилит доверие к платформе.",
    examples: [
      "«Как установить цену на проект»",
      "«Ставки фрилансеров по специальностям»",
      "«Как не продешевить: гайд по переговорам»",
    ],
    audience: "Активные фрилансеры на вашей бирже — самый целевой сегмент",
    cta: "Добавьте в блог — читатели будут возвращаться",
  },
  rb: {
    name: "RB.ru",
    greeting: "Привет, RB.ru",
    hook: "RB.ru — голос предпринимателей. Ваши читатели нанимают фрилансеров и хотят знать справедливые ставки.",
    relevance:
      "Материалы о найме, аутсорсе и фрилансе на RB.ru охватывают обе стороны рынка. Калькулятор поможет и фрилансерам обосновать цену, и заказчикам оценить адекватность.",
    examples: [
      "«Как нанять фрилансера и не переплатить»",
      "«Аутсорс vs штат: что выгоднее в 2026»",
      "«Сколько стоит разработка сайта у фрилансера»",
    ],
    audience: "Предприниматели и менеджеры, нанимающие фрилансеров",
    cta: "Виджет одинаково полезен заказчикам и исполнителям",
  },
};

type Props = {
  params: Promise<{ site: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { site } = await params;
  const data = SITES[site];
  if (!data) return {};

  return {
    title: `FreelanceCalc × ${data.name} — бесплатный виджет для ваших статей`,
    description: `${data.hook} Бесплатный iframe-калькулятор для встройки в статьи ${data.name}.`,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: `/dlya/${site}` },
    robots: { index: false }, // персонализированные страницы не должны индексироваться
  };
}

export async function generateStaticParams() {
  return Object.keys(SITES).map((site) => ({ site }));
}

const EMBED_CODE = `<iframe
  src="${WIDGET_URL}"
  width="100%"
  height="420"
  frameborder="0"
  style="border-radius:12px;border:1px solid #e2e8f0"
  title="Калькулятор ставки фрилансера"
></iframe>`;

export default async function PersonalizedEmbedPage({ params }: Props) {
  const { site } = await params;
  const data = SITES[site];

  if (!data) notFound();

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      {/* Header with personalization */}
      <header className="mb-10">
        <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          Специально для {data.name}
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
          {data.greeting} — вот инструмент для ваших читателей
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">{data.hook}</p>
      </header>

      {/* Why it fits */}
      <section className="mb-8 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-base font-semibold text-slate-800 mb-2">Почему это нужно вашим читателям</h2>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">{data.relevance}</p>
        <div className="text-xs text-slate-500">
          <p className="font-semibold mb-2">Подойдёт для статей типа:</p>
          <ul className="space-y-1">
            {data.examples.map((ex) => (
              <li key={ex} className="flex items-start gap-2">
                <span className="text-indigo-400 mt-0.5">›</span>
                <span>{ex}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-xs text-indigo-700 bg-indigo-50 rounded-lg px-3 py-2">
          👥 <strong>Аудитория:</strong> {data.audience}
        </p>
      </section>

      {/* Live preview */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-slate-800 mb-3">Как выглядит виджет</h2>
        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
          <iframe
            src={WIDGET_URL}
            width="100%"
            height="420"
            frameBorder="0"
            title="Калькулятор ставки фрилансера — предпросмотр"
          />
        </div>
        <p className="mt-2 text-xs text-slate-400 text-center">
          Интерактивный — читатели считают прямо в статье
        </p>
      </section>

      {/* Embed code */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-slate-800 mb-3">Код для вставки — одна строка</h2>
        <pre className="bg-slate-900 text-green-400 rounded-xl p-4 text-sm overflow-x-auto whitespace-pre">
          {EMBED_CODE}
        </pre>
        <p className="mt-2 text-xs text-slate-400">
          Работает в любом CMS. Адаптивный. Без рекламы. Бесплатно навсегда.
        </p>
      </section>

      {/* Benefits */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Что это даёт редакции</h2>
        <div className="grid grid-cols-1 gap-3">
          {[
            { icon: "⏱️", title: "Время на сайте", desc: "Интерактивный инструмент держит читателя дольше — в среднем +2–3 минуты" },
            { icon: "🔁", title: "Возвращаемость", desc: "Читатель сохраняет статью, чтобы вернуться и пересчитать ставку при смене проекта" },
            { icon: "🎯", title: "Практическая ценность", desc: "Статья превращается из «прочитал и забыл» в реальный инструмент" },
            { icon: "💸", title: "Бесплатно", desc: "Никаких договоров, API-ключей или оплаты. Просто скопируйте код" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4">
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white rounded-2xl p-6 text-center">
        <h2 className="font-bold text-xl mb-2">{data.cta}</h2>
        <p className="text-indigo-200 text-sm mb-5">
          Вопросы? Напишите — отвечу в течение дня.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:hello@freelancecalc.ru?subject=Виджет для статей"
            className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
          >
            Написать по почте
          </a>
          <Link
            href="/embed"
            className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors border border-indigo-400"
          >
            Страница виджета →
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="mt-8 text-center text-xs text-slate-400">
        <p>
          FreelanceCalc — бесплатный калькулятор ставки фрилансера.{" "}
          <Link href="/" className="text-indigo-500 hover:underline">Открыть калькулятор →</Link>
        </p>
      </section>
    </main>
  );
}
