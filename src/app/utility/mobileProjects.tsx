interface WebpackContext {
  keys(): string[];
  <T>(id: string): T;
  resolve(id: string): string;
}

type ImportAllContext = WebpackContext;

const importAll = (r: ImportAllContext) => r.keys().map(r) as string[];

const ymfriends = importAll(
  require.context("../assets/ymfriends", false, /\.(png|jpe?g|svg)$/)
);
const game = importAll(
  require.context("../assets/game", false, /\.(png|jpe?g|svg)$/)
);

const mobileProjectsData = [
  {
    id: "mobile-app-one",
    images: game,
    title: "Mobile App",
    skills: ["React Native (expo)"],
    description:
      "Mobile App for playing tic-tac-toe, supports dual play with computer or human.",
  },
  {
    id: "mobile-app-two",
    images: ymfriends,
    title: "Mobile App",
    skills: ["React Native (expo)", "Django", "Python"],
    description:
      "Mobile App for streaming music. It is an extensions of my previous work on the web platform with extra features.",
  },
];

export default mobileProjectsData;
