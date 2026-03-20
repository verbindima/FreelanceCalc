import { MetadataRoute } from "next";

// TODO: switch to custom domain once purchased & configured in Vercel
const BASE_URL = "https://freelancecalc-one.vercel.app";

const SPECIALTIES = [
  "frontend-razrabotchik",
  "backend-razrabotchik",
  "fullstack-razrabotchik",
  "mobilnyj-razrabotchik",
  "dizajner-ui-ux",
  "graficheskij-dizajner",
  "kopirayter",
  "smm-specialist",
  "seo-specialist",
  "menedzher-proektov",
  "testirovshchik-qa",
  "data-analyst",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const specialtyPages = SPECIALTIES.map((slug) => ({
    url: `${BASE_URL}/stavka/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

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
    ...specialtyPages,
  ];
}
