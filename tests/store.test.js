import Store from "../src/store";

const sampleGames = [
  {
    name: "8-Ball Pool",
    short: "eightballpool",
    url: "/spel/sportspel/8-ball-pool/?language=sv",
    tags: "",
    hasBoosters: false,
    portfolio: true
  },
  {
    name: "9-Ball Pool",
    short: "nineballpool",
    url: "/spel/sportspel/9-ball-pool/?language=sv",
    tags: "",
    hasBoosters: false,
    portfolio: false
  },
  {
    name: "Abracadabra",
    short: "abracadabra",
    url: "/spel/strategispel/abracadabra/?language=sv",
    tags: "",
    hasBoosters: true,
    portfolio: false
  },
  {
    name: "Ace Solitaire",
    short: "acesolitaire",
    url: "/spel/kortspel/ace-solitaire/?language=sv",
    tags: "",
    hasBoosters: false,
    portfolio: false
  }
];

let GameStore;
beforeEach(() => {
  GameStore = new Store();
  GameStore.fetched = true;
  GameStore.games = sampleGames;
});
describe("Store", () => {
  test("Should return a list of games", async () => {
    const games = await GameStore.getGames();
    expect(games.length).toBe(4);
  });

  test("Should get a game by short name", async () => {
    const game = await GameStore.getGameByName("eightballpool");
    expect(game.name).toBe("8-Ball Pool");
  });

  test("Should filter by attribute ", async () => {
    const games = await GameStore.getGames({ hasBoosters: true });
    expect(games.length).toBe(1);
  });

  test("Should be able to add a game to the portfolio ", async () => {
    const games = await GameStore.addGameToPortfolio("acesolitaire");
    const game = await GameStore.getGameByName("eightballpool");
    expect(game.portfolio).toBe(true);
  });

  test("Should be able to add a game to the portfolio ", async () => {
    const games = await GameStore.removeGameFromPortfolio("eightballpool");
    const game = await GameStore.getGameByName("eightballpool");
    expect(game.portfolio).toBe(false);
  });
});
