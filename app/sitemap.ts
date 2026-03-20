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
      url: `${BASE_URL}/goroda`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    ...specialtyPages,
    ...cityPages,
    ...specialtyCityPages,
  ];
}
