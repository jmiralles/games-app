const portfolioButton = game => {
    console.log("inside", game)
    if (!game.portfolio) {
        return `<a id="updatePortfolio" class="button is-primary">Add to my collection</a>`;
    } else {
        return `<a id="updatePortfolio" class="button is-warning">Remove my collection</a>`;
    }
};

export default portfolioButton;