interface WebpackContext {
  keys(): string[];
  <T>(id: string): T;
  resolve(id: string): string;
}

type ImportAllContext = WebpackContext;

const importAll = (r: ImportAllContext) => r.keys().map(r) as string[];

const htmlPortfolio = importAll(
  require.context("../assets/portfolio", false, /\.(png|jpe?g|svg)$/)
);
const michibeauty = importAll(
  require.context("../assets/michibeauty", false, /\.(png|jpe?g|svg)$/)
);
const topclassunisex = importAll(
  require.context("../assets/topclassunisex", false, /\.(png|jpe?g|svg)$/)
);

const siteProjectsData = [
  {
    id: "website-one",
    images: michibeauty,
    title: "Website",
    skills: ["HTML", "CSS", "Javascript", "CSS Frameworks(Bootstrap)"],
    description: "A simple cosmetic website with an active form for booking.",
    link: "https://michibeauty.net",
  },
  {
    id: "website-two",
    images: topclassunisex,
    title: "Website",
    skills: ["HTML", "CSS", "Javascript", "CSS Frameworks(Bootstrap)"],
    description: "A simple barbing saloon with active form for booking.",
    link: "https://topclassunisex.netlify.app",
  },
  {
    id: "website-three",
    images: htmlPortfolio,
    title: "Website",
    skills: ["HTML", "CSS", "Javascript", "CSS Frameworks(Bootstrap)"],
    description: "A simple Portfolio website.",
    link: "https://my-portfolio-victor.netlify.app",
  },
];

export default siteProjectsData;
