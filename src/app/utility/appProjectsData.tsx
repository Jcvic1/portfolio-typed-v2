interface WebpackContext {
  keys(): string[];
  <T>(id: string): T;
  resolve(id: string): string;
}

type ImportAllContext = WebpackContext;

const importAll = (r: ImportAllContext) => r.keys().map(r) as string[];

const workforce = importAll(
  require.context("../assets/workforce", false, /\.(png|jpe?g|svg)$/)
);
const ymgroup = importAll(
  require.context("../assets/YMgroup", false, /\.(png|jpe?g|svg)$/)
);
const cinema = importAll(
  require.context("../assets/cinema", false, /\.(png|jpe?g|svg)$/)
);

const appProjectsData = [
  {
    id: "web-app-three",
    images: cinema,
    title: "Web App",
    skills: ["HTML", "CSS", "Javascript", "FastAPI", "Python", "React"],
    description:
    "Web App for streaming movies, frontend is built on react while backend is built on fastAPI which generates movie data on the fly and also authenticates registered users, allowing them to store and retrieve persnalized movie data.",
    link: "https://cinema-moviz.vercel.app",
  },
  {
    id: "web-app-two",
    images: ymgroup,
    title: "Web App",
    skills: ["HTML", "CSS", "Javascript", "htmx", "Django", "Python"],
    description:
    "Web App for streaming music from Yandex.Music with an environment that allows multiple users to share tracks and listen to each others music. It is strictly django based app with no front end framework which resulted in the complex use of django templating to achieve the looks. It runs on django framework utilizing it's ready made environment to kick start an app, it uses an external database on postgresql for storing data and aws bucket s3 for storing media like profile pictures.",
    link: "https://ymgroup.onrender.com",
  },
  {
    id: "web-app-one",
    images: workforce,
    title: "Web App",
    skills: ["HTML", "CSS", "Javascript", "CSS Frameworks(Bootstrap)"],
    description:
      "Web App for keeping tab of patients and physicians in a clinic, including planning visits for patients. It runs on python flask,using a database on postgresql for storing data.",
    link: "https://workforce.fly.dev",
  },
];

export default appProjectsData;
