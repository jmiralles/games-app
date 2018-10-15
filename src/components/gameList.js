import gameItem from "./gameItem";

const gameList = itemList => {
  return `<div>${itemList.map(gameItem).join("")}</div>`;
};

export default gameList;
