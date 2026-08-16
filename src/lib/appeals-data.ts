export type Appeal = {
  title: string;
  image: string;
};

// Static, hand-curated list for the homepage "Featured Appeals" section.
// Not tied to the `campaigns` table on purpose — the client asked for a
// frontend-only, picture + title showcase instead of live DB campaigns.
export const APPEALS: Appeal[] = [
  { title: "Iftar for Little Hearts", image: "/appeals/iftar-for-little-hearts.jpeg" },
  { title: "Ramadan Food Pack for Families in Need", image: "/appeals/ramadan-food-pack.jpeg" },
  { title: "Free Mobile Medical Clinic", image: "/appeals/free-mobile-medical-clinic.jpeg" },
  { title: "Hope and Hygiene", image: "/appeals/hope-and-hygiene.jpeg" },
  { title: "Building Hope", image: "/appeals/building-hope.jpeg" },
  { title: "Flood Relief", image: "/appeals/flood-relief.jpeg" },
];
