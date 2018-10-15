import { escapeForHTML } from "../helpers";

const gameItem = item => {
  const imageSrc = `http://royal1.midasplayer.com/images/games/${
    item.short
  }/tournamentPage/${item.short}_764x260.jpg`;

  const url = `/games/${item.short}`;
  return `<div>
            <a href="${url}">
                <h3>${escapeForHTML(item.name)}</h3>
                <img src=${imageSrc} />
            </a>
        </div>`;
};

export default gameItem;
