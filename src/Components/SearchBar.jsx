import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState();
  function searchGames(rows) {
    const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(search.toLowerCase()) >
          -1
      )
    );
  }

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     props.searchGame(search);
  //     setSearch();
  //   }
  return (
    <input
      type="text"
      placeholder="Search Games"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

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
