/** Specialty-specific article mapping: slug → { href, title }
 *  Used in /stavka/[slug], /stavka/[slug]/[city], /stavka/[slug]/opyt/[level] etc.
 *  Maps each specialty to the most relevant rate-benchmark article.
 */
export const SPECIALTY_ARTICLES: Record<string, { href: string; title: string }> = {
  // Разработчики (общий стек)
  "frontend-razrabotchik": { href: "/stati/stavki-razrabotchikov-frilanserov-2026", title: "Ставки разработчиков-фрилансеров 2026: таблица по 15 специализациям" },
  "backend-razrabotchik": { href: "/stati/stavki-razrabotchikov-frilanserov-2026", title: "Ставки разработчиков-фрилансеров 2026: таблица по 15 специализациям" },
  "fullstack-razrabotchik": { href: "/stati/stavki-razrabotchikov-frilanserov-2026", title: "Ставки разработчиков-фрилансеров 2026: таблица по 15 специализациям" },
  "android-razrabotchik": { href: "/stati/stavki-razrabotchikov-frilanserov-2026", title: "Ставки разработчиков-фрилансеров 2026: таблица по 15 специализациям" },
  "ios-razrabotchik": { href: "/stati/stavki-razrabotchikov-frilanserov-2026", title: "Ставки разработчиков-фрилансеров 2026: таблица по 15 специализациям" },
  "mobilnyj-razrabotchik": { href: "/stati/stavki-razrabotchikov-frilanserov-2026", title: "Ставки разработчиков-фрилансеров 2026: таблица по 15 специализациям" },
  "wordpress-razrabotchik": { href: "/stati/stavki-razrabotchikov-frilanserov-2026", title: "Ставки разработчиков-фрилансеров 2026: таблица по 15 специализациям" },
  "devops-inzhener": { href: "/stati/stavki-razrabotchikov-frilanserov-2026", title: "Ставки разработчиков-фрилансеров 2026: таблица по 15 специализациям" },
  // Разработчики (по языкам)
  "react-razrabotchik": { href: "/stati/stavki-razrabotchikov-po-yazykam-2026", title: "Ставки фрилансеров по языкам и стекам 2026" },
  "python-razrabotchik": { href: "/stati/stavki-razrabotchikov-po-yazykam-2026", title: "Ставки фрилансеров по языкам и стекам 2026" },
  "java-razrabotchik": { href: "/stati/stavki-razrabotchikov-po-yazykam-2026", title: "Ставки фрилансеров по языкам и стекам 2026" },
  "php-razrabotchik": { href: "/stati/stavki-razrabotchikov-po-yazykam-2026", title: "Ставки фрилансеров по языкам и стекам 2026" },
  "golang-razrabotchik": { href: "/stati/stavki-razrabotchikov-po-yazykam-2026", title: "Ставки фрилансеров по языкам и стекам 2026" },
  "net-razrabotchik": { href: "/stati/stavki-razrabotchikov-po-yazykam-2026", title: "Ставки фрилансеров по языкам и стекам 2026" },
  // 1С / Bitrix
  "1c-razrabotchik": { href: "/stati/stavki-1c-razrabotchikov-frilanserov-2026", title: "Ставки 1С-разработчиков на фрилансе 2026: сколько стоит час работы" },
  "bitrix-razrabotchik": { href: "/stati/stavki-1c-razrabotchikov-frilanserov-2026", title: "Ставки 1С-разработчиков на фрилансе 2026: сколько стоит час работы" },
  // ML / Аналитика
  "ml-inzhener": { href: "/stati/stavki-analitikov-frilanserov-2026", title: "Ставки аналитиков-фрилансеров в России 2026: данные, бизнес, продукт" },
  "biznes-analitik": { href: "/stati/stavki-analitikov-frilanserov-2026", title: "Ставки аналитиков-фрилансеров в России 2026: данные, бизнес, продукт" },
  "data-analyst": { href: "/stati/stavki-analitikov-frilanserov-2026", title: "Ставки аналитиков-фрилансеров в России 2026: данные, бизнес, продукт" },
  // Дизайнеры
  "dizajner-ui-ux": { href: "/stati/stavki-dizajnerov-frilanserov-2026", title: "Ставки дизайнеров-фрилансеров в России 2026: таблица по специализациям" },
  "graficheskij-dizajner": { href: "/stati/stavki-dizajnerov-frilanserov-2026", title: "Ставки дизайнеров-фрилансеров в России 2026: таблица по специализациям" },
  "moushon-dizajner": { href: "/stati/stavki-dizajnerov-frilanserov-2026", title: "Ставки дизайнеров-фрилансеров в России 2026: таблица по специализациям" },
  "illustrator-frilanser": { href: "/stati/stavki-dizajnerov-frilanserov-2026", title: "Ставки дизайнеров-фрилансеров в России 2026: таблица по специализациям" },
  "dizajner-intererov": { href: "/stati/stavki-dizajnerov-frilanserov-2026", title: "Ставки дизайнеров-фрилансеров в России 2026: таблица по специализациям" },
  "3d-vizualizator": { href: "/stati/stavki-dizajnerov-frilanserov-2026", title: "Ставки дизайнеров-фрилансеров в России 2026: таблица по специализациям" },
  "videomontazhyor": { href: "/stati/stavki-dizajnerov-frilanserov-2026", title: "Ставки дизайнеров-фрилансеров в России 2026: таблица по специализациям" },
  // Копирайтеры / Контент
  "kopirayter": { href: "/stati/stavki-kopirajterov-frilanserov-2026", title: "Ставки копирайтеров-фрилансеров 2026: таблица по 8 специализациям" },
  "kontent-menedzher": { href: "/stati/stavki-kopirajterov-frilanserov-2026", title: "Ставки копирайтеров-фрилансеров 2026: таблица по 8 специализациям" },
  "tekhnicheskij-pisatel": { href: "/stati/stavki-kopirajterov-frilanserov-2026", title: "Ставки копирайтеров-фрилансеров 2026: таблица по 8 специализациям" },
  // Маркетинг / Реклама
  "marketolog-frilanser": { href: "/stati/stavki-marketologov-frilanserov-2026", title: "Ставки маркетологов-фрилансеров в России 2026: SMM, SEO, таргет" },
  "smm-specialist": { href: "/stati/stavki-marketologov-frilanserov-2026", title: "Ставки маркетологов-фрилансеров в России 2026: SMM, SEO, таргет" },
  "targetolog": { href: "/stati/stavki-marketologov-frilanserov-2026", title: "Ставки маркетологов-фрилансеров в России 2026: SMM, SEO, таргет" },
  "seo-specialist": { href: "/stati/stavki-marketologov-frilanserov-2026", title: "Ставки маркетологов-фрилансеров в России 2026: SMM, SEO, таргет" },
  // QA / Тестирование
  "testirovshchik-qa": { href: "/stati/stavki-qa-testerov-frilanserov-2026", title: "Ставки QA-тестировщиков-фрилансеров в России 2026: ручное и автоматизированное тестирование" },
  // PM / Product
  "menedzher-proektov": { href: "/stati/stavki-proekt-menedzherov-frilanserov-2026", title: "Ставки проект-менеджеров и продакт-менеджеров фрилансеров 2026" },
  "product-manager-frilanser": { href: "/stati/stavki-proekt-menedzherov-frilanserov-2026", title: "Ставки проект-менеджеров и продакт-менеджеров фрилансеров 2026" },
  // Юристы, переводчики, бухгалтеры, фотографы
  "yurist-frilanser": { href: "/stati/stavki-yuristov-perevodchikov-frilanserov-2026", title: "Ставки юристов, переводчиков, бухгалтеров и фотографов-фрилансеров 2026" },
  "perevodchik": { href: "/stati/stavki-yuristov-perevodchikov-frilanserov-2026", title: "Ставки юристов, переводчиков, бухгалтеров и фотографов-фрилансеров 2026" },
  "perevodchik-frilanser": { href: "/stati/stavki-yuristov-perevodchikov-frilanserov-2026", title: "Ставки юристов, переводчиков, бухгалтеров и фотографов-фрилансеров 2026" },
  "buhgalter-frilanser": { href: "/stati/stavki-yuristov-perevodchikov-frilanserov-2026", title: "Ставки юристов, переводчиков, бухгалтеров и фотографов-фрилансеров 2026" },
  "fotograf-frilanser": { href: "/stati/stavki-yuristov-perevodchikov-frilanserov-2026", title: "Ставки юристов, переводчиков, бухгалтеров и фотографов-фрилансеров 2026" },
  // Прочие
  "psiholog-frilanser": { href: "/stati/stavki-yuristov-perevodchikov-frilanserov-2026", title: "Ставки юристов, переводчиков, бухгалтеров и фотографов-фрилансеров 2026" },
  "repetitor": { href: "/stati/srednyaya-stavka-frilansera-2026", title: "Средняя ставка фрилансера в России 2026: таблица по 22 специальностям" },
};
