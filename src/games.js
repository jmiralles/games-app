import titleHtml from "./components/title";
import { qs, $on } from "./helpers";

const gamesPage = async (store, params) => {
  const $htmlContent = qs("#appContent");
  const { id } = params;
  const game = store.getGameByName(id);
  console.log(game);

  const rendePage = game => {
    const titleElement = titleHtml(game.name);
    const buttonText = game.favorited ? "Remove from" : "Add to";
    return `<div>
              <a href="/">Back</a>
              ${titleElement}
              <div id="appList">
               <img src="http://royal1.midasplayer.com/images/games/${
                 game.short
               }/${game.short}_170x80.gif" />
               <button>${buttonText} my collection</button>
              </div>
            </div>`;
  };

  $htmlContent.innerHTML = rendePage(game);
};

export default gamesPage;
