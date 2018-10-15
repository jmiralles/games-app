export default class Store {
  constructor() {
    this.games = [];
    this.fetched = false;
  }

  fetch() {
    if (this.fetched) return new Promise(resolve => resolve(this.games));

    return new Promise((resolve, reject) => {
      fetch("../data/games.json")
        .then(response => response.json())
        .then(data => this.onData(data, resolve))
        .catch(error => {
          console.error("Error retrieving data:", error);
          reject();
        });
    });
  }

  onData(data = this.games, resolve) {
    this.games = data.games.map(game => {
      game.portfolio = false;
      return game;
    });
    this.fetched = true;
    resolve(this.games);
  }

  getGames(filterBy) {
    return this.fetch().then(() => {
      if (filterBy) {
        const key = Object.keys(filterBy)[0];
        return this.games.filter(item => item[key] === filterBy[key]);
      } else {
        return this.games;
      }
    });
  }

  getGameByName(shortName) {
    return this.fetch().then(() => this.games.filter(item => item.short === shortName)[0]);
  }

  changePortfolio(shortName, val) {
    this.games = this.games.map(game => {
      if (game.short === shortName) {
        game.portfolio = val;
      }
      return game;
    });
  }

  addGameToPortfolio(shortName) {
    this.changePortfolio(shortName, true);
  }

  removeGameFromPortfolio(shortName) {
    this.changePortfolio(shortName, false);
  }
}