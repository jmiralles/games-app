import HomePage from "./home";
import PortfolioPage from "./portfolio";
import Navigo from "navigo";

const router = new Navigo();

router
  .on({
    "/": HomePage,
    portfolio: PortfolioPage,
    "*": HomePage
  })
  .resolve();
