import React, { useState, useEffect } from "react";
import DisplayGames from "../Components/DisplayGames";
import DisplayPlatformStats from "../Components/DisplayPlatformStats";

import SearchBar from "../Components/SearchBar";
import StatsByGame from "../Components/StatsByGame";

const DisplaySearchedGames = (props) => {
  return (
    <div>
      <h1>SEARCHED GAMES PAGE</h1>
      <SearchBar searchGames={props.searchGames} />

      <StatsByGame games={props.games} />
      <DisplayGames games={props.games} />
    </div>
  );
};

export default DisplaySearchedGames;
