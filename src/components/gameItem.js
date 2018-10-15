import { escapeForHTML } from "../helpers";

const gameItem = item => {
  const imageSrc = `http://royal1.midasplayer.com/images/games/${
    item.short
  }/tournamentPage/${item.short}_764x260.jpg`;

  const url = `/games/${item.short}`;
  return `<div class="column is-3">
            <div class="card">
              <a href="${url}">
                  <div class="card-image">
                    <figure class="image">
                        <img src=${imageSrc} alst="${item.name}"/>
                    </figure>
                  </div>
                  <div class="card-content">
                    <h2>${escapeForHTML(item.name)}</h2>
                  </div>
              </a>
            </div>  
        </div>`;
};

export default gameItem;
