import axios from "axios";
import React, { useState, useEffect } from "react";

const SearchBar = (props) => {
  const [search, setSearch] = useState();

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     props.searchGame(search);
  //     setSearch();
  //   }

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

    // <div>
    //   <form
    //     onSubmit={handleSubmit}
    //     placeholder="Search Games"
    //     onChange={(event) => setSearch(event.target.value)}
    //   >
    //     <input type="text"></input>
    //     <button type="submit">Search</button>
    //   </form>
    // </div>
  );
};

export default SearchBar;
