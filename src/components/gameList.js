import gameItem from "./gameItem";

const gameList = itemList => {
  if (itemList.length > 0) {
    return `<div class="columns is-multiline">${itemList.map(gameItem).join("")}</div>`;
  } else {
    return `<div>No games to list</div>`;
  }
};

export default gameList;