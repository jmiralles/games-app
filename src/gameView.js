import {
  qs,
  $on
} from "./helpers";
import titleHtml from "./components/title";
import portfolioButton from "./components/portfolioButton";
import breadcrumb from "./components/breadcrumb";

const gamesPage = async (store, params) => {
  const $htmlContent = qs("#appContent");
  const updatePortfolioId = "updatePortfolio";
  const {
    shortName
  } = params;

  const state = {
    game: await store.getGameByName(shortName)
  }

  const addToPortfolio = () => {
    store.addGameToPortfolio(state.game.short);
    updateGame();
  }

  const removeFromPortfolio = () => {
    store.removeGameFromPortfolio(state.game.short);
    updateGame();
  }

  const updatePortfolio = () => {
    if (!state.game.portfolio) {
      addToPortfolio();
    } else {
      removeFromPortfolio();
    }
  }

  const updateGame = async () => {
    state.game = await store.getGameByName(shortName);
    render(state.game);
  }

  const renderPage = game => {
    const titleElement = titleHtml(game.name);
    return `<div>
              ${breadcrumb()}
              ${titleElement}
              <div id="appList">
               <img src="http://royal1.midasplayer.com/images/games/${
                 game.short
               }/${game.short}_170x80.gif" />
               ${portfolioButton(game)}
              </div>
            </div>`;
  };

  const render = (game) => {
    $htmlContent.innerHTML = renderPage(game);
    $on(qs(`#${updatePortfolioId}`), "click", updatePortfolio);
  }

  render(state.game);
};

export default gamesPage;