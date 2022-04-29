import React, { useState, useEffect } from "react";
import DisplayPlatformStats from "../Components/DisplayPlatformStats";

const Home = (props) => {
  return (
    <div>
      <DisplayPlatformStats allGames={props.allGames} />
    </div>
  );
};

export default Home;
