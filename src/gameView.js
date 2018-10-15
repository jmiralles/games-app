import { qs, $on } from "./helpers";
import portfolioButton from "./components/portfolioButton";
import breadcrumb from "./components/breadcrumb";

const gamesPage = async (store, params) => {
  const $htmlContent = qs("#appContent");
  const updatePortfolioId = "updatePortfolio";
  const { short } = params;

  var state = {
    game: await store.getGameByName(short)
  };

  const addToPortfolio = () => {
    store.addGameToPortfolio(state.game.short);
    updateGame(state.game.short);
  };

  const removeFromPortfolio = () => {
    store.removeGameFromPortfolio(state.game.short);
    updateGame(state.game.short);
  };

  const updatePortfolio = () => {
    if (!state.game.portfolio) {
      addToPortfolio();
    } else {
      removeFromPortfolio();
    }
  };

  const updateGame = async shortName => {
    state.game = await store.getGameByName(shortName);
    render(state.game);
  };

  const renderPage = game => {
    const imageSrc = `http://royal1.midasplayer.com/images/games/${
      game.short
    }/tournamentPage/${game.short}_764x260.jpg`;
    return `<div>
            ${breadcrumb(game.name)}
              <section class="hero is-medium is-light">
                <div class="hero-body">
                  <div class="container">
                    <img src="${imageSrc}" alt="${game.name}">
                    <h2 class="title">
                      ${game.name}
                    </h2>
                    <p class="buttons">
                      ${portfolioButton(game)}
                      <a class="button is-primary">Play!</a>
                    </p>
                  </div>
                </div>
              </section>
            </div>`;
  };

  const render = game => {
    $htmlContent.innerHTML = renderPage(game);
    $on(qs(`#${updatePortfolioId}`), "click", updatePortfolio);
  };

  render(state.game);
};

export default gamesPage;
