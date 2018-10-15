import { qs, $on } from "./helpers";
import gameList from "./components/gameList";
import titleHtml from "./components/title";
import searchHtml from "./components/searchInput";

const homePage = async ({ store, filterBy, title }) => {
  let $appList, $formInput;
  const $htmlContent = qs("#appContent");
  const searchButtonId = "searchButton";
  const clearSearchButtonId = "clearSearchButton";
  const appListId = "appList";

  var state = {
    games: await store.getGames(filterBy),
    title
  };

  const onSearch = e => {
    e.preventDefault();
    const searchValue = $formInput.value;

    restoreGames();

    if (searchValue) {
      state.games = filterGamesBysearch(searchValue);
    }
    renderList($appList);
  };

  const filterGamesBysearch = searchValue => {
    return state.games.filter(
      item => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    );
  };

  const restoreGames = async () => {
    state.games = await store.getGames(filterBy);
  };

  const clearSearch = () => {
    $formInput.value = "";
    renderList($appList);
  };

  const rendePage = (games, title) => {
    const titleElement = titleHtml(title);
    return `<div>
              ${titleElement}
              ${searchHtml()}
              <div id="${appListId}">
              ${gameList(games)}
              </div>
            </div>`;
  };

  const render = () => {
    $htmlContent.innerHTML = rendePage(state.games, state.title);
  };

  const renderList = () => {
    $appList.innerHTML = gameList(state.games);
  };

  render();

  $appList = qs(`#${appListId}`);
  $formInput = qs("form").elements["search-input"];

  // Listeners
  $on(qs(`#${searchButtonId}`), "click", onSearch);
  $on(qs("form"), "submit", onSearch);
  $on(qs(`#${clearSearchButtonId}`), "click", clearSearch);
};

export default homePage;
