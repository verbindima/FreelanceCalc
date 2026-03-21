import { NextResponse } from "next/server";

const BASE_URL = "https://freelancecalc-one.vercel.app";

const ARTICLES = [
  {
    slug: "stavki-qa-testerov-frilanserov-2026",
    title: "Ставки QA-тестировщиков-фрилансеров в России 2026: ручное и автоматизированное тестирование",
    description:
      "Сколько берёт QA-тестировщик-фрилансер в России в 2026 году? Медианные ставки для Manual QA, Automation QA, Mobile QA и нагрузочного тестирования. Реальные данные рынка.",
    tag: "Рынок",
    pubDate: "Sat, 21 Mar 2026 11:00:00 +0300",
  },
  {
    slug: "skolko-zarabatyvayut-frilansery-2026",
    title: "Сколько реально зарабатывают фрилансеры в 2026 году: честная математика",
    description:
      "44% фрилансеров зарабатывают менее 30 000 ₽/мес. Почему так — и как попасть в топ 21%, которые получают 100 000+. Реальные данные, честный расчёт.",
    tag: "Рынок",
    pubDate: "Sat, 21 Mar 2026 09:00:00 +0300",
  },
  {
    slug: "finansy-frilansera-kak-raspredelyat-dohod",
    title: "Финансы фрилансера: как распределять доход на налоги, подушку и жизнь",
    description:
      "Практическая формула 40-20-20-10-15 для распределения дохода. Сколько откладывать на налоги, финансовую подушку и развитие — с примерами расчёта.",
    tag: "Финансы",
    pubDate: "Fri, 20 Mar 2026 09:00:00 +0300",
  },
  {
    slug: "stavki-kopirajterov-frilanserov-2026",
    title: "Ставки копирайтеров-фрилансеров в России 2026: таблица по 8 специализациям",
    description:
      "Сколько берёт копирайтер-фрилансер в 2026 году? Медианные ставки для копирайтера, SEO-копирайтера, технического писателя, редактора, UX-писателя. Что меняет ИИ.",
    tag: "Рынок",
    pubDate: "Thu, 19 Mar 2026 09:00:00 +0300",
  },
  {
    slug: "stavki-yuristov-perevodchikov-frilanserov-2026",
    title: "Ставки юристов, переводчиков, бухгалтеров и фотографов-фрилансеров 2026",
    description:
      "Сколько берут юристы, переводчики, бухгалтеры и фотографы на фрилансе в России? Медианные ставки по 8 специализациям с учётом форматов оплаты. Реальные данные рынка 2026.",
    tag: "Рынок",
    pubDate: "Sat, 21 Mar 2026 10:00:00 +0300",
  },
  {
    slug: "stavki-analitikov-frilanserov-2026",
    title: "Ставки аналитиков-фрилансеров в России 2026: Data Analyst, БА, системный, продуктовый",
    description:
      "Сколько берёт аналитик-фрилансер в 2026 году? Медианные ставки для data analyst, бизнес-аналитика, системного и продуктового аналитика. Реальные данные рынка.",
    tag: "Рынок",
    pubDate: "Wed, 18 Mar 2026 09:00:00 +0300",
  },
  {
    slug: "stavki-marketologov-frilanserov-2026",
    title: "Ставки маркетологов-фрилансеров в России 2026: SMM, SEO, таргет, копирайтинг",
    description:
      "Сколько берёт маркетолог-фрилансер в 2026 году? Медианные ставки для SMM-менеджеров, SEO-специалистов, таргетологов, копирайтеров и контент-менеджеров.",
    tag: "Рынок",
    pubDate: "Tue, 17 Mar 2026 09:00:00 +0300",
  },
  {
    slug: "stavki-dizajnerov-frilanserov-2026",
    title: "Ставки дизайнеров-фрилансеров в России 2026: таблица по специализациям",
    description:
      "Сколько берёт дизайнер-фрилансер в 2026 году? Медианные ставки для UI/UX, графических дизайнеров, иллюстраторов, моушн и видеомонтажёров.",
    tag: "Рынок",
    pubDate: "Mon, 16 Mar 2026 09:00:00 +0300",
  },
  {
    slug: "stavki-razrabotchikov-frilanserov-2026",
    title: "Ставки разработчиков-фрилансеров в России 2026: таблица по 10 специализациям",
    description:
      "Сколько берёт программист-фрилансер в 2026 году? Медианные ставки для Frontend, Backend, Fullstack, Mobile, Python, DevOps, ML и других специализаций.",
    tag: "Рынок",
    pubDate: "Sun, 15 Mar 2026 09:00:00 +0300",
  },
  {
    slug: "stavki-frilanserov-po-gorodam-2026",
    title: "Ставки фрилансеров по городам России 2026: сравнение 15 городов",
    description:
      "Сколько берут фрилансеры в Москве, Петербурге, Екатеринбурге и других городах? Таблица медианных ставок по 15 городам с калькуляторами.",
    tag: "Рынок",
    pubDate: "Sat, 14 Mar 2026 09:00:00 +0300",
  },
  {
    slug: "skrytye-rashody-frilansera",
    title: "Скрытые расходы фрилансера 2026: полный список",
    description:
      "Налоги, простои, больничные, ПО, самообразование — всё, что надо заложить в ставку. Считаем реальную стоимость фриланс-часа.",
    tag: "Финансы",
    pubDate: "Fri, 13 Mar 2026 09:00:00 +0300",
  },
  {
    slug: "samozanyatyj-vs-ip-frilancer",
    title: "Самозанятый или ИП: что выгоднее для фрилансера в 2026",
    description:
      "Сравниваем НПД и ИП УСН 6%: налоги, взносы, реальные расчёты. При каком доходе переходить на ИП?",
    tag: "Налоги",
    pubDate: "Thu, 12 Mar 2026 09:00:00 +0300",
  },
  {
    slug: "kak-povysit-stavku-frilansera",
    title: "Как повысить ставку фрилансера: 7 проверенных способов",
    description:
      "Когда и как поднимать цену на свои услуги. Скрипты для переговоров с клиентами о повышении ставки.",
    tag: "Карьера",
    pubDate: "Wed, 11 Mar 2026 09:00:00 +0300",
  },
  {
    slug: "frilans-vs-naym-2026",
    title: "Фриланс vs найм 2026: что выгоднее финансово?",
    description:
      "Сравнение реального дохода фрилансера и офисного сотрудника с учётом всех расходов и налогов.",
    tag: "Аналитика",
    pubDate: "Tue, 10 Mar 2026 09:00:00 +0300",
  },
  {
    slug: "kak-raschitat-stavku-frilansera",
    title: "Как рассчитать ставку фрилансера: пошаговое руководство",
    description:
      "Формула расчёта почасовой ставки с учётом налогов, простоев и загрузки. Пошаговая инструкция + онлайн-калькулятор.",
    tag: "Руководство",
    pubDate: "Mon, 09 Mar 2026 09:00:00 +0300",
  },
  {
    slug: "stavka-samozanyatogo-2026",
    title: "Ставка самозанятого фрилансера: как учесть налог НПД",
    description:
      "Как налог 4–6% влияет на расчёт ставки. Разница между самозанятым и ИП для фрилансеров.",
    tag: "Налоги",
    pubDate: "Sun, 08 Mar 2026 09:00:00 +0300",
  },
  {
    slug: "srednyaya-stavka-frilansera-2026",
    title: "Средняя ставка фрилансера 2026: таблица по 22 специальностям",
    description:
      "Медианные часовые ставки разработчиков, дизайнеров, маркетологов и аналитиков в России. Реальные данные рынка.",
    tag: "Рынок",
    pubDate: "Sat, 07 Mar 2026 09:00:00 +0300",
  },
  {
    slug: "skolko-stoit-nanyat-frilansera",
    title: "Сколько стоит нанять фрилансера в 2026 году — ставки по специальностям",
    description:
      "Реальные ставки для разработчиков, дизайнеров, маркетологов. Типичные бюджеты на проекты, красные флаги и советы по переговорам для заказчиков.",
    tag: "Заказчикам",
    pubDate: "Fri, 06 Mar 2026 09:00:00 +0300",
  },
  {
    slug: "izmeneniya-samozanyatyh-2026",
    title: "Изменения для самозанятых в 2026 году: ставки, лимиты, новые правила",
    description:
      "Что реально изменилось в НПД в 2026 году: ставки сохранились (4%/6%), режим продлён до 2028. Новинка — добровольные взносы в СФР для больничных.",
    tag: "Налоги",
    pubDate: "Thu, 05 Mar 2026 09:00:00 +0300",
  },
  {
    slug: "skolko-stoit-chas-raboty-programmista-2026",
    title: "Сколько стоит час работы программиста-фрилансера в 2026 году",
    description:
      "Реальные данные о почасовых ставках программистов на фрилансе: по специализациям, опыту и городам. С калькулятором.",
    tag: "Рынок",
    pubDate: "Wed, 04 Mar 2026 09:00:00 +0300",
  },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>FreelanceCalc — статьи о ставках фрилансеров</title>
    <link>${BASE_URL}</link>
    <description>Гайды и статьи о расчёте ставки фрилансера, налогах самозанятых и рынке фриланса в России 2026</description>
    <language>ru</language>
    <managingEditor>hello@freelancecalc.ru (FreelanceCalc)</managingEditor>
    <webMaster>hello@freelancecalc.ru (FreelanceCalc)</webMaster>
    <lastBuildDate>Sat, 21 Mar 2026 09:00:00 +0300</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${BASE_URL}/og-image.png</url>
      <title>FreelanceCalc</title>
      <link>${BASE_URL}</link>
    </image>
${ARTICLES.map(
    (article) => `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${BASE_URL}/stati/${article.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/stati/${article.slug}</guid>
      <description>${escapeXml(article.description)}</description>
      <category>${escapeXml(article.tag)}</category>
      <pubDate>${article.pubDate}</pubDate>
    </item>`
  ).join("\n")}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
