import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Как поднять ставку фрилансера на 30% за 3 месяца — 7 шагов | FreelanceCalc",
  description:
    "Практический гид: 7 конкретных шагов, чтобы поднять ставку фрилансера на 30% за 90 дней. Без поиска новых клиентов с нуля, без демпинга, с реальными примерами.",
  alternates: { canonical: `${BASE_URL}/guide` },
  openGraph: {
    title: "Как поднять ставку фрилансера на 30% — 7 шагов",
    description:
      "Практический гид: 7 конкретных шагов для роста ставки за 90 дней.",
    url: `${BASE_URL}/guide`,
    type: "article",
  },
};

const STEPS = [
  {
    num: 1,
    title: "Посчитай настоящую ставку — не «на глаз»",
    body: `Большинство фрилансеров называют цену интуитивно: «сосед берёт столько, возьму столько же» или «боюсь отпугнуть — возьму меньше». Это рецепт потерянных денег.

Формула простая: ставка = (желаемый доход + налоги) ÷ реальные оплачиваемые часы. Реальные — с учётом отпуска, больничных и времени на поиск клиентов.

Если берёте 1 000 ₽/час при загрузке 70% и 28 днях отпуска — это не 160 000 ₽/месяц «на руки», а значительно меньше. Калькулятор выше покажет точную цифру за 30 секунд.`,
    cta: { href: "/", text: "Рассчитать свою ставку →" },
  },
  {
    num: 2,
    title: "Узнай, где ты относительно рынка",
    body: `Знать свою ставку — полдела. Нужно понять, сколько берут такие же специалисты в твоём городе.

Медианная ставка Python-разработчика в Москве — 2 500 ₽/час. В Новосибирске — 1 800 ₽/час. Дизайнер интерфейсов: Москва 2 000 ₽/час, Краснодар 1 400 ₽/час. Если ты берёшь 1 200 ₽/час в Москве как Python-разработчик — ты отдаёшь клиентам 1 300 ₽ с каждого часа работы.

Большинство фрилансеров не поднимают ставку просто потому, что не знают, что рынок давно ушёл вперёд.`,
    cta: { href: "/stavka/python-razrabotchik", text: "Посмотреть ставки по специальностям →" },
  },
  {
    num: 3,
    title: "Пересобери портфолио: кейсы с цифрами, не просто «делал»",
    body: `«Разработал лендинг для компании N» — это не кейс, это описание. Кейс с цифрами звучит так: «Разработал лендинг → конверсия выросла с 1.2% до 3.8% → клиент получил +150 заявок в первый месяц».

Цифры переводят вас из категории «исполнитель» в категорию «человек, который решает бизнес-задачи». За решение бизнес-задач платят в 2–3 раза больше, чем за выполнение технического задания.

Возьмите 3 последних проекта. По каждому ответьте: какую метрику изменила ваша работа? Время, деньги, конверсия, количество ошибок — что угодно, но в числах.`,
    cta: null,
  },
  {
    num: 4,
    title: "Подними цену для следующего нового клиента — не для всех сразу",
    body: `Психологически сложно поднять ставку существующим клиентам. Начните с нового.

Правило: следующий входящий запрос — называйте ставку на 20–30% выше текущей. Если скажут «дорого» — ничего не потеряли (этот клиент пришёл бы по старой цене). Если согласятся — вы узнали новую рыночную цену для себя.

Страх: «а вдруг не возьмут?». Статистика: большинство фрилансеров, поднявших ставку на 20%, теряют менее 10% потенциальных клиентов. Но каждый оставшийся приносит на 20% больше.`,
    cta: null,
  },
  {
    num: 5,
    title: "Введи предоплату 30–50% — это фильтр, а не барьер",
    body: `Клиенты, которые не готовы платить предоплату, в 80% случаев оказываются проблемными: затягивают обратную связь, меняют ТЗ на ходу, задерживают финальную оплату.

Предоплата отсеивает случайных клиентов и привлекает серьёзных. Серьёзные клиенты, как правило, менее чувствительны к цене — они покупают результат, а не дешевизну.

Фраза, которая работает: «Я работаю с предоплатой 50% — это стандартная практика, которая позволяет мне выделить время под ваш проект и не брать параллельные заказы».`,
    cta: null,
  },
  {
    num: 6,
    title: "Специализируйся в нише — дженералисты зарабатывают меньше",
    body: `«Верстальщик» → «Верстальщик для e-commerce на Shopify» → ставка вырастает в 1.5–2 раза при той же технической квалификации.

Почему? Потому что нишевый специалист решает конкретную боль конкретного клиента. Shopify-магазин не хочет обучать верстальщика специфике платформы — он хочет человека, который уже знает все подводные камни.

Возьмите свою специальность и задайте вопрос: «В какой отрасли или на какой платформе я знаю больше всего?» Это и есть ваша ниша.`,
    cta: null,
  },
  {
    num: 7,
    title: "Поднимай ставку существующим клиентам раз в год — письменно и заранее",
    body: `Инфляция в России — 8–12% в год. Если вы не поднимаете ставку, вы фактически снижаете её в реальном выражении.

Правило: за 30 дней до завершения текущего проекта или в начале года отправьте письмо: «Начиная с [дата], моя ставка составит [новая цена]. Это плановое повышение, связанное с ростом стоимости жизни и расширением экспертизы. Рад продолжить сотрудничество на новых условиях».

Большинство долгосрочных клиентов принимают повышение на 10–15% без вопросов, если предупредить заранее.`,
    cta: null,
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Как поднять ставку фрилансера на 30% за 3 месяца",
  description:
    "7 конкретных шагов для роста ставки фрилансера: от пересчёта реальной ставки до специализации и работы с существующими клиентами.",
  totalTime: "P3M",
  estimatedCost: { "@type": "MonetaryAmount", currency: "RUB", value: "0" },
  step: STEPS.map((s) => ({
    "@type": "HowToStep",
    name: s.title,
    text: s.body,
    position: s.num,
  })),
};

export default function GuidePage() {
  return (
    <>
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
            Как поднять ставку на 30% за 3 месяца
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            7 конкретных шагов — без поиска новых клиентов с нуля и без демпинга.
            Работает для любой специальности.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>📖 7 минут на чтение</span>
            <span>·</span>
            <span>🗓 Обновлено Q1 2026</span>
          </div>
        </header>

        {/* Steps */}
        <div className="space-y-6">
          {STEPS.map((step) => (
            <article
              key={step.num}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-9 h-9 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                  {step.num}
                </span>
                <div className="flex-1">
                  <h2 className="text-base font-bold text-slate-800 leading-snug">
                    {step.title}
                  </h2>
                  <div className="mt-3 text-sm text-slate-600 leading-relaxed space-y-3">
                    {step.body.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  {step.cta && (
                    <Link
                      href={step.cta.href}
                      className="mt-3 inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      {step.cta.text}
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Summary CTA */}
        <section className="mt-8 bg-indigo-600 text-white rounded-2xl p-6 text-center">
          <h2 className="text-lg font-bold mb-2">Начни с шага 1 прямо сейчас</h2>
          <p className="text-indigo-200 text-sm mb-4">
            Рассчитай точную ставку с учётом налогов, отпуска и реальной загрузки. 30 секунд.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-indigo-700 font-semibold px-6 py-2.5 rounded-xl text-sm hover:bg-indigo-50 transition-colors"
          >
            Открыть калькулятор →
          </Link>
        </section>

        {/* Benchmark upsell */}
        <section className="mt-4 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">
              Шаг 2 — данные по рынку
            </p>
            <p className="text-sm font-bold text-slate-800">
              Посмотри медианные ставки по 22 специальностям и 10 городам — Бенчмарк PDF
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Junior / Mid / Senior · Q1 2026 · обновляется ежеквартально
            </p>
          </div>
          <Link
            href="/benchmark"
            className="shrink-0 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors"
          >
            Посмотреть — 249 ₽
          </Link>
        </section>

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
