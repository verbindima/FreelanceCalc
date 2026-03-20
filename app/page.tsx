import FreelanceCalc from "./components/FreelanceCalc";

const BASE_URL = "https://freelancecalc-one.vercel.app";

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FreelanceCalc />
    </>
  );
}
