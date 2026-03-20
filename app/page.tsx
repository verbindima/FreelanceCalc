import type { Metadata } from "next";
import FreelanceCalc from "./components/FreelanceCalc";

const BASE_URL = "https://freelancecalc-one.vercel.app";

/** Dynamic OG image: reflects the user's actual calculated rate when they share their URL */
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}): Promise<Metadata> {
  const sp = await searchParams;
  const income = sp.income ?? "150000";
  const tax = sp.tax ?? "self_employed_fl";
  const hpd = sp.hpd ?? "8";
  const dpw = sp.dpw ?? "5";
  const vac = sp.vac ?? "28";
  const load = sp.load ?? "70";

  const ogParams = new URLSearchParams({ income, tax, hpd, dpw, vac, load });
  const ogImageUrl = `${BASE_URL}/api/og?${ogParams.toString()}`;

  return {
    openGraph: {
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "Моя ставка фрилансера — FreelanceCalc" }],
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImageUrl],
    },
  };
}

// SoftwareApplication schema — даёт приложению карточку в поиске
const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FreelanceCalc — калькулятор ставки фрилансера",
  description:
    "Бесплатный онлайн-калькулятор часовой и дневной ставки фрилансера с учётом налогов (самозанятый, ИП), отпуска и реальной загрузки.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: BASE_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "RUB",
  },
  inLanguage: "ru",
  author: {
    "@type": "Organization",
    name: "FreelanceCalc",
    url: BASE_URL,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
};

// HowTo schema — пошаговая инструкция: может показывать шаги прямо в поисковой выдаче
const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Как рассчитать ставку фрилансера онлайн",
  description:
    "Пошаговое руководство по расчёту справедливой часовой и дневной ставки фрилансера с учётом налогов, отпуска и реальной загрузки.",
  totalTime: "PT2M",
  tool: [
    {
      "@type": "HowToTool",
      name: "Калькулятор ставки FreelanceCalc",
    },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Укажите желаемый доход на руки",
      text: "Введите сумму, которую хотите получать чистыми в месяц после уплаты налогов. Например: 150 000 ₽.",
      url: "https://freelancecalc-one.vercel.app/#income",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Выберите налоговый режим",
      text: "Выберите свою систему налогообложения: самозанятый (НПД 4% с физлиц или 6% с юрлиц), ИП на УСН 6% или ИП на УСН 15%.",
      url: "https://freelancecalc-one.vercel.app/#tax",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Укажите рабочее время",
      text: "Задайте количество рабочих часов в день (обычно 6–8) и рабочих дней в неделю (чаще всего 5).",
      url: "https://freelancecalc-one.vercel.app/#hours",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Задайте количество дней отпуска",
      text: "Укажите, сколько дней в году вы планируете отдыхать. Стандарт — 28 дней. Это уменьшит количество рабочих дней в году.",
      url: "https://freelancecalc-one.vercel.app/#vacation",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Укажите коэффициент загрузки",
      text: "Загрузка — процент времени на оплачиваемых заказах. У опытных фрилансеров 65–75%, у начинающих — 40–50%.",
      url: "https://freelancecalc-one.vercel.app/#load",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Получите вашу ставку",
      text: "Калькулятор мгновенно покажет вашу минимальную часовую и дневную ставку с учётом всех факторов, а также сравнение с рыночным уровнем.",
      url: "https://freelancecalc-one.vercel.app/#result",
    },
  ],
};

// FAQPage schema — вызывает аккордеон с вопросами прямо в выдаче Яндекса/Google
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Как рассчитать ставку фрилансера?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Разделите желаемый месячный доход на количество оплачиваемых часов с учётом загрузки (обычно 60–70% рабочего времени). Прибавьте налог: 4–6% для самозанятых или 6% для ИП на УСН. Учтите отпуск — реальных рабочих дней около 247 в год. Калькулятор FreelanceCalc автоматизирует этот расчёт.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько должен брать за час работы фрилансер?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Зависит от специальности, опыта и региона. Средние ставки в 2026 году: дизайнер — 1 500–3 500 ₽/час, разработчик — 2 000–6 000 ₽/час, копирайтер — 800–2 500 ₽/час, маркетолог — 1 500–4 000 ₽/час. Используйте калькулятор, чтобы рассчитать ставку под свой желаемый доход.",
      },
    },
    {
      "@type": "Question",
      name: "Как учесть налог самозанятого при расчёте ставки?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Самозанятые платят 4% с доходов от физических лиц и 6% от юридических лиц. Чтобы получить 100 000 ₽ чистыми от физлиц, нужно выставить счёт на 104 167 ₽. Калькулятор FreelanceCalc автоматически закладывает налог в ставку.",
      },
    },
    {
      "@type": "Question",
      name: "Что такое реальная загрузка фрилансера?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Реальная загрузка — процент рабочего времени, когда фрилансер получает оплату. Остальное уходит на поиск клиентов, переговоры, тестовые задания и простой. Средняя загрузка опытного фрилансера — 65–75%. Начинающие могут иметь загрузку 40–50%.",
      },
    },
    {
      "@type": "Question",
      name: "Как рассчитать ставку ИП на УСН?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ИП на УСН 6% платят налог с дохода плюс фиксированные страховые взносы (около 49 500 ₽ в год в 2025 году). Общая налоговая нагрузка — 8–12% в зависимости от дохода. Калькулятор FreelanceCalc автоматически рассчитывает ставку с учётом режима ИП.",
      },
    },
    {
      "@type": "Question",
      name: "Почему реальный доход фрилансера меньше ожидаемого?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Три главные причины: 1) Не все часы оплачиваемые — часть времени уходит на административную работу без оплаты. 2) Налоги уменьшают итоговую сумму на 4–12%. 3) Отпуск и больничные сокращают рабочих дней в году с 260 до ~220–230. FreelanceCalc учитывает все три фактора.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FreelanceCalc />
    </>
  );
}
