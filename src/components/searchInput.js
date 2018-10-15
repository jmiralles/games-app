const searchInput = searchId => {
  return `<form role="search" id="${searchId}">
            <div class="search-control">
                <input type="search" id="site-search" name="q"
                    placeholder="Search the site..."
                    aria-label="Search through site content">
                <button>Search</button>
            </div>
         </form>`;
};

export default searchInput;
