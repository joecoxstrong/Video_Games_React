import React, { useState, useEffect } from "react";
import DisplayGames from "../Components/DisplayGames";

import SearchNav from "../Components/SearchNav";
import StatsByGame from "../Components/StatsByGame";
import Nav from "../Components/Nav";
import ClickedGameStats from "../Components/ClickedGameStats";

const SingleGameGraph = (props) => {
  return (
    <div>
      <Nav games={props.games} searchGames={props.searchGames} />
      <ClickedGameStats gameName={props.gameName} />
      {/* <DisplayGames games={props.games} /> */}
    </div>
  );
};

export default SingleGameGraph;
