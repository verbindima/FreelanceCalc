import { MetadataRoute } from "next";
import { CITIES as CITY_DATA } from "./goroda/cities";
import { SPECIALTIES as SPECIALTY_DATA } from "./stavka/[slug]/specialties";

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

  // 22 specialties × 16 cities = 352 cross-pages targeting long-tail queries
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

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
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
    // Monetization page — benchmark PDF
    {
      url: `${BASE_URL}/benchmark`,
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
    ...specialtyPages,
    ...cityPages,
    ...specialtyCityPages,
  ];
}
