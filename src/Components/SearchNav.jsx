import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const SearchNav = (props) => {
  return (
    <nav>
      <ul className="nav-Links">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <b>Home</b>
        </Link>
        <li>
          {" "}
          <SearchBar searchGames={props.searchGames} />{" "}
        </li>
      </ul>
    </nav>
  );
};

export default SearchNav;
