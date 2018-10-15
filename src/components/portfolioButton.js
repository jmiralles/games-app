const portfolioButton = game => {
    if (!game.portfolio) {
        return `<a id="updatePortfolio" class="button is-primary">Add to my portfolio</a>`;
    } else {
        return `<a id="updatePortfolio" class="button is-warning">Remove from my portfolio</a>`;
    }
};

export default portfolioButton;