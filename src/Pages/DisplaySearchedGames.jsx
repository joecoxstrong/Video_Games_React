import React, { useState, useEffect } from "react";
import DisplayGames from "../Components/DisplayGames";
import DisplayPlatformStats from "../Components/DisplayPlatformStats";

import SearchBar from "../Components/SearchBar";
import SearchNav from "../Components/SearchNav";
import StatsByGame from "../Components/StatsByGame";

const DisplaySearchedGames = (props) => {
  return (
    <div>
      {/* <SearchBar searchGames={props.searchGames} /> */}
      <SearchNav games={props.games} searchGames={props.searchGames} />
      <StatsByGame games={props.games} />
      <DisplayGames games={props.games} />
    </div>
  );
};

export default DisplaySearchedGames;
