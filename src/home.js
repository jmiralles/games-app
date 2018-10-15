import { qs, $on } from "./helpers";
import gameList from "./components/gameList";
import titleHtml from "./components/title";
import searchHtml from "./components/searchInput";

const homePage = async store => {
  let $appList;
  const $htmlContent = qs("#appContent");
  const games = await store.getAllGames();
  const gameSearchId = "game-search";

  const onclickSearch = e => {
    e.preventDefault();
    const searchValue = qs("form").elements["q"].value;

    if (searchValue) {
      const gamesFiltered = store.getFilteredGames(searchValue);
      $appList.innerHTML = gameList(gamesFiltered);
    } else {
      renderList();
    }
  };

  const renderList = async games => {
    const gamesFiltered = await store.getAllGames();
    $appList.innerHTML = gameList(gamesFiltered);
  };

  const rendePage = (
    games,
    title = "All games",
    gameSearchId = "game-search"
  ) => {
    const titleElement = titleHtml(title);
    return `<div>
              ${titleElement}
              ${searchHtml(gameSearchId)}
              <div id="appList">
              ${gameList(games)}
              </div>
            </div>`;
  };

  $htmlContent.innerHTML = rendePage(games, "All games", gameSearchId);
  $appList = qs("#appList");

  $on(qs("#" + gameSearchId), "submit", onclickSearch);
};

export default homePage;
