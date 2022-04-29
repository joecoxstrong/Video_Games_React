import React, { useState } from "react";

const SearchBar = (props) => {
  const [search, setSearch] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    props.searchGames(search);
    console.log("Finished search with: ", search);
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          name="searchField"
          type="text"
          placeholder="Search Games"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
