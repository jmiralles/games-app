import {
  escapeForHTML
} from "../helpers";

const gameItem = item => {
  const imageSrc = `http://royal1.midasplayer.com/images/games/${
    item.short
  }/tournamentPage/${item.short}_764x260.jpg`;

  const url = `/games/${item.short}`;
  return `<div class="column is-3">
            <div class="card">
              <a href="${url}">
                  <h2>${escapeForHTML(item.name)}</h2>
                  <img src=${imageSrc} />
              </a>
            </div>  
        </div>`;
};

export default gameItem;