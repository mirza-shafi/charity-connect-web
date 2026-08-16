export type Appeal = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
};

// Static, hand-curated list for the homepage "Featured Appeals" section
// and its detail pages (/appeals/[slug]). Not tied to the `campaigns`
// table on purpose — the client wants this to keep the original
// card/carousel/detail-page look but run purely off frontend data
// instead of live DB campaigns.
export const APPEALS: Appeal[] = [
  {
    slug: "iftar-for-little-hearts",
    title: "Iftar for Little Hearts",
    category: "Humanitarian",
    description: "Providing warm iftar meals to orphaned and underprivileged children this Ramadan.",
    image: "/appeals/iftar-for-little-hearts.jpeg",
  },
  {
    slug: "ramadan-food-pack-for-families-in-need",
    title: "Ramadan Food Pack for Families in Need",
    category: "Humanitarian",
    description: "Delivering essential food packs to families struggling to make ends meet this Ramadan.",
    image: "/appeals/ramadan-food-pack.jpeg",
  },
  {
    slug: "free-mobile-medical-clinic",
    title: "Free Mobile Medical Clinic",
    category: "Healthcare",
    description: "Bringing free medical checkups and treatment directly to underserved communities.",
    image: "/appeals/free-mobile-medical-clinic.jpeg",
  },
  {
    slug: "hope-and-hygiene",
    title: "Hope and Hygiene",
    category: "Healthcare",
    description: "Distributing hygiene kits and clean-water essentials to families in need.",
    image: "/appeals/hope-and-hygiene.jpeg",
  },
  {
    slug: "building-hope",
    title: "Building Hope",
    category: "Humanitarian",
    description: "Rebuilding homes and futures for families who have lost everything.",
    image: "/appeals/building-hope.jpeg",
  },
  {
    slug: "flood-relief",
    title: "Flood Relief",
    category: "Emergency Relief",
    description: "Emergency food, shelter, and essentials for families affected by flooding across Bangladesh.",
    image: "/appeals/flood-relief.jpeg",
  },
];

export function getAppeal(slug: string): Appeal | undefined {
  return APPEALS.find((appeal) => appeal.slug === slug);
}
