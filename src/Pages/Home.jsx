import React, { useState, useEffect } from "react";
import DisplayPlatformStats from "../Components/DisplayPlatformStats";
import GenreStats from "../Components/GenreStats";
import Nav from "../Components/Nav";

const Home = (props) => {
  return (
    <div>
      <Nav games={props.games} searchGames={props.searchGames} />
      <DisplayPlatformStats allGames={props.allGames} />
      <GenreStats allGames={props.allGames} />
    </div>
  );
};

export default Home;
