import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <ul className="nav-Links">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <b>Home</b>
        </Link>

        <li></li>
        <Link
          to="/DisplaySearchedGames"
          style={{ textDecoration: "none", color: "white" }}
        >
          <b>Search Games</b>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
