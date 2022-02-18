import searchIcon from "../../../assets/images/icon/search.svg"

const Search = () => {
    return (
        <div className="search-input-wrapper">
            <form className="search-input">
                <div className="search-input-field">
                    <button
                        className="search-button"
                        arial-label="button-search"
                    >
                        <img src={searchIcon} alt="Search" />
                    </button>
                    <input
                        type='text'
                        placeholder="Search products, articles, topics. branch, etc"
                        autoComplete="off"
                    />
                </div>
            </form>
        </div>
    )
}

export default Search