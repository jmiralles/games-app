import titleHtml from "./components/title";
import portFolioButton from "./components/portfolioButton";
import {
  qs,
  $on
} from "./helpers";

const gamesPage = async (store, params) => {
  const $htmlContent = qs("#appContent");
  const {
    id
  } = params;

  const state = {
    game: await store.getGameByName(id)
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
    state.game = await store.getGameByName(id);
    render(state.game);
  }

  const renderPage = game => {
    console.log(game)

    const titleElement = titleHtml(game.name);
    return `<div>
              <a href="/">Back</a>
              ${titleElement}
              <div id="appList">
               <img src="http://royal1.midasplayer.com/images/games/${
                 game.short
               }/${game.short}_170x80.gif" />
               ${portFolioButton(game)}
              </div>
            </div>`;
  };

  const render = (game) => {
    $htmlContent.innerHTML = renderPage(game);
    $on(qs(`#updatePortfolio`), "click", updatePortfolio);
  }

  render(state.game);


};

export default gamesPage;