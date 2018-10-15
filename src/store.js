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
      game.favorited = false;
      return game;
    });
    this.fetched = true;
    resolve(this.games);
  }

  getAllGames() {
    return this.fetch();
  }

  getFilteredGames(searchFilter) {
    return this.games.filter(item =>
      item.name.toLowerCase().startsWith(searchFilter.toLowerCase())
    );
  }

  getGameByName(id) {
    return this.games.filter(item => item.short === id)[0];
  }
}
