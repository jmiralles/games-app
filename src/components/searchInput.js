const searchInput = () => {
  return `<form class="level">
                <div class="search-control">
                    <div class="field has-addons">
                        <div class="control">
                            <input class="input" type="text" id="site-search" name="search-input"
                                placeholder="Search game...">
                        </div>    
                        <div class="control">
                            <a class="button is-primary" id="searchButton">Search</a>
                        </div>
                        <div class="control">
                            <a class="button is-light" id="clearSearchButton">Clear</a>
                        </div>
                    </div>
                </div>
            </form>`;
};

export default searchInput;
