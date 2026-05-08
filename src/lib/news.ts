export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
};

export const news: NewsItem[] = [
  {
    id: "1",
    title: "EMS Sénégal lance son nouveau service digital",
    excerpt:
      "Découvrez notre nouvelle plateforme de suivi en ligne et nos services connectés pour une meilleure expérience client, accessibles 24/7.",
    date: "8 Janvier 2026",
    author: "La Rédaction",
    image: "https://ems.sn/assets/img/EMSiter.png",
  },
  {
    id: "2",
    title: "Partenariat stratégique pour la logistique",
    excerpt:
      "EMS Sénégal signe un accord majeur pour renforcer sa présence internationale et accélérer les délais de livraison de ses clients.",
    date: "8 Janvier 2026",
    author: "La Rédaction",
    image: "https://ems.sn/assets/img/EMSnational.jpg",
  },
  {
    id: "3",
    title: "Nouveaux tarifs 2026 : plus accessibles",
    excerpt:
      "Nous avons révisé nos tarifs pour vous offrir le meilleur rapport qualité-prix du marché. Envoyez plus, payez moins.",
    date: "8 Janvier 2026",
    author: "La Rédaction",
    image: "https://ems.sn/assets/img/emsportdu.jpg",
  },
];