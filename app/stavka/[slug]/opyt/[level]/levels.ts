export type ExperienceLevel = {
  slug: "junior" | "middle" | "senior";
  name: string;       // "Junior"
  nameRu: string;     // "джуниор"
  nameGenRu: string;  // "джуниора"
  years: string;      // "0–1 год"
  yearsLong: string;  // "до 1 года опыта"
  incomeMultiplier: number; // относительно defaultIncome специальности
  description: string;      // краткое описание уровня
  context: string;          // контекст для intro
};

export const LEVELS: ExperienceLevel[] = [
  {
    slug: "junior",
    name: "Junior",
    nameRu: "джуниор",
    nameGenRu: "джуниора",
    years: "0–1 год",
    yearsLong: "до 1 года коммерческого опыта",
    incomeMultiplier: 0.55,
    description: "начинающий специалист с небольшим портфолио",
    context:
      "Начинающие специалисты только набирают первых клиентов и строят портфолио. Конкурентоспособная ставка — ключ к первым заказам, но занижать её ниже себестоимости нельзя.",
  },
  {
    slug: "middle",
    name: "Middle",
    nameRu: "мидл",
    nameGenRu: "мидла",
    years: "2–4 года",
    yearsLong: "2–4 года коммерческого опыта",
    incomeMultiplier: 1.0,
    description: "специалист с опытом и стабильным потоком клиентов",
    context:
      "Middle-специалисты — основа рынка фриланса. Они самостоятельно ведут проекты, имеют репутацию и уверенный поток заказов. Медианные ставки на этой странице отражают именно этот уровень.",
  },
  {
    slug: "senior",
    name: "Senior",
    nameRu: "сеньор",
    nameGenRu: "сеньора",
    years: "5+ лет",
    yearsLong: "5 и более лет коммерческого опыта",
    incomeMultiplier: 1.65,
    description: "эксперт с репутацией, выбирает проекты и клиентов",
    context:
      "Senior-специалисты работают с крупными клиентами, устанавливают правила взаимодействия и выбирают проекты. Их ставки отражают не только опыт, но и экономию времени клиента.",
  },
];

export function getLevel(slug: string): ExperienceLevel | undefined {
  return LEVELS.find((l) => l.slug === slug);
}
