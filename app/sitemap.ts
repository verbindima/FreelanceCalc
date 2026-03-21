import { MetadataRoute } from "next";
import { CITIES as CITY_DATA } from "./goroda/cities";
import { SPECIALTIES as SPECIALTY_DATA } from "./stavka/[slug]/specialties";
import { LEVELS } from "./stavka/[slug]/opyt/[level]/levels";
import { CITY_PAIRS } from "./goroda/sravnenie/page";
import { NAJEM_DATA } from "./frilanc-vs-najm/najem-data";

// TODO: switch to custom domain once purchased & configured in Vercel
const BASE_URL = "https://freelancecalc-one.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const specialtyPages = SPECIALTY_DATA.map(({ slug }) => ({
    url: `${BASE_URL}/stavka/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const cityPages = CITY_DATA.map(({ slug }) => ({
    url: `${BASE_URL}/goroda/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 26 specialties × 24 cities = 624 cross-pages targeting long-tail queries
  const specialtyCityPages: MetadataRoute.Sitemap = [];
  for (const spec of SPECIALTY_DATA) {
    for (const city of CITY_DATA) {
      specialtyCityPages.push({
        url: `${BASE_URL}/stavka/${spec.slug}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });
    }
  }

  // 26 specialties × 3 levels = 78 experience-level pages targeting "ставка junior/middle/senior [профессия]"
  const experienceLevelPages: MetadataRoute.Sitemap = [];
  for (const spec of SPECIALTY_DATA) {
    for (const lvl of LEVELS) {
      experienceLevelPages.push({
        url: `${BASE_URL}/stavka/${spec.slug}/opyt/${lvl.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.75,
      });
    }
  }

  // 26 specialties × 3 levels × 24 cities = 1872 pages targeting "ставка junior frontend в Москве"
  const levelCityPages: MetadataRoute.Sitemap = [];
  for (const spec of SPECIALTY_DATA) {
    for (const lvl of LEVELS) {
      for (const city of CITY_DATA) {
        levelCityPages.push({
          url: `${BASE_URL}/stavka/${spec.slug}/opyt/${lvl.slug}/${city.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.65,
        });
      }
    }
  }

  // "Фриланс vs найм" hub + 30+ specialty pages
  const frilancVsNajmPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/frilanc-vs-najm`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    ...SPECIALTY_DATA
      .filter((s) => NAJEM_DATA[s.slug])
      .map(({ slug }) => ({
        url: `${BASE_URL}/frilanc-vs-najm/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
  ];

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/otchet-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stavka`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/rukovodstvo`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/stati/kak-oformit-samozanyatost-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati/kak-stat-frilanserom-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati/kak-najti-pervogo-klienta-frilansera-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati/portfolio-frilansera-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati/frilanser-inostrannyj-zakazchik-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati/srednyaya-stavka-frilansera-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/stati/stavka-samozanyatogo-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/stati/kak-raschitat-stavku-frilansera`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/stati/frilans-vs-naym-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/stati/kak-povysit-stavku-frilansera`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/stati/pochemu-frilansery-zanizhayt-stavki`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/stati/samozanyatyj-vs-ip-frilancer`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/stati/skolko-stoit-nanyat-frilansera`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/stati/skrytye-rashody-frilansera`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/stati/stavki-frilanserov-po-gorodam-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/stati/izmeneniya-samozanyatyh-2026`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati/samozanyatyj-ipoteka-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati/stavki-razrabotchikov-frilanserov-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati/stavki-razrabotchikov-po-yazykam-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati/stavki-dizajnerov-frilanserov-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati/stavki-marketologov-frilanserov-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati/stavki-analitikov-frilanserov-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati/stavki-kopirajterov-frilanserov-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati/stavki-yuristov-perevodchikov-frilanserov-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati/skolko-stoit-chas-raboty-programmista-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati/skolko-zarabatyvayut-frilansery-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati/finansy-frilansera-kak-raspredelyat-dohod`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/stati/stavki-qa-testerov-frilanserov-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati/dogovor-gph-nalogi-frilansera-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati/peregovory-o-stavke-s-zakazchikom`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stati/stavki-proekt-menedzherov-frilanserov-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/instrumenty`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/instrumenty/kalkulator-naloga-samozanyatogo`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/instrumenty/kalkulator-stoimosti-proekta`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/embed`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/goroda`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    // City comparison hub + 276 city-vs-city pages (all combinations of 24 cities)
    {
      url: `${BASE_URL}/goroda/sravnenie`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    ...CITY_PAIRS.map(({ city1, city2 }) => ({
      url: `${BASE_URL}/goroda/sravnenie/${city1}-vs-${city2}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    // Monetization page — benchmark PDF
    {
      url: `${BASE_URL}/benchmark`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // Rating page — linkable/shareable content
    {
      url: `${BASE_URL}/reyting`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // Competitor alternatives pages (high-intent SEO traffic)
    {
      url: `${BASE_URL}/alternativa`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/alternativa/moj-nalog-kalkulator`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/alternativa/fl-ru-kalkulator`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/alternativa/kwork-kalkulator`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/alternativa/klerk-ru-kalkulator`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/alternativa/cossa-kalkulator`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/alternativa/digital-broccoli`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/alternativa/tinkoff-kalkulator`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/alternativa/npd-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/alternativa/profi-ru-kalkulator`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/alternativa/youdo-kalkulator`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/alternativa/habr-freelance-kalkulator`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/alternativa/konsol-pro`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/alternativa/yandex-pay-kalkulator`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/alternativa/freelancehunt-kalkulator`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    // Specialty comparison pages (high-volume "X vs Y зарплата" searches)
    {
      url: `${BASE_URL}/sravnenie`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/sravnenie/frontend-vs-backend`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sravnenie/python-vs-frontend`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sravnenie/ui-ux-vs-graficheskij-dizajner`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sravnenie/smm-vs-targetolog`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sravnenie/kopirayter-vs-kontent-menedzher`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sravnenie/qa-vs-frontend`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sravnenie/data-analyst-vs-ml`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sravnenie/fullstack-vs-backend`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sravnenie/java-razrabotchik-vs-python-razrabotchik`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    // Missing sravnenie pages — added to ensure full indexing
    {
      url: `${BASE_URL}/sravnenie/1c-razrabotchik-vs-php`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sravnenie/android-vs-ios-razrabotchik`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/sravnenie/bitrix-razrabotchik-vs-wordpress-razrabotchik`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sravnenie/devops-vs-backend`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/sravnenie/golang-razrabotchik-vs-python-razrabotchik`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/sravnenie/java-razrabotchik-vs-golang-razrabotchik`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/sravnenie/net-razrabotchik-vs-java-razrabotchik`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/sravnenie/php-razrabotchik-vs-python-razrabotchik`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/sravnenie/seo-specialist-vs-smm-specialist`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sravnenie/menedzher-proektov-vs-biznes-analitik`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/sravnenie/seo-specialist-vs-targetolog`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/sravnenie/devops-vs-ml-inzhener`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/sravnenie/fullstack-vs-mobilnyj-razrabotchik`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/sravnenie/python-razrabotchik-vs-data-analyst`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    // /nalog/ cluster — tax regime calculators and comparison
    {
      url: `${BASE_URL}/nalog`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/nalog/ip-usn`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/nalog/sravnenie`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/nalog/sfr`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...specialtyPages,
    ...cityPages,
    ...specialtyCityPages,
    ...experienceLevelPages,
    ...levelCityPages,
    ...frilancVsNajmPages,
  ];
}
