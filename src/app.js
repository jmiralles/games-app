import HomePage from "./home";
import GamesPage from "./games";
import PortfolioPage from "./portfolio";
import Store from "./store";
import page from "page";

// Init Store
const store = new Store();

// Router
page("/games/:id", context => GamesPage(store, context.params));
page("/", () => HomePage(store));
page("/portfolio", () => PortfolioPage());
