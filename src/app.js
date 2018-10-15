import GameListView from "./gamesListView";
import GameView from "./gameView";
import Store from "./store";
import page from "page";
import "./styles/styles.scss";

// Init Store
const store = new Store();

// Router
page("/games/:short", context => GameView(store, context.params));
page("/", () =>
  GameListView({
    store,
    filterBy: null,
    title: "All Games"
  })
);
page("/portfolio", () =>
  GameListView({
    store,
    filterBy: {
      portfolio: true
    },
    title: "Portfolio Games"
  })
);
page();

// add 404
