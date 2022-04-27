import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayGames from "./Components/DisplayGames";
import DisplayPlatformStats from "./Components/DisplayPlatformStats";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getAllGames();
  }, []);
  async function getAllGames() {
    try {
      const response = await axios.get("https://localhost:7260/api/games");
      setGames(response.data);
      console.log(response.data);
    } catch (ex) {
      console.log(`ERROR in getAllGames EXCEPTION: ${ex}`);
    }
  }

  return (
    <div>
      <DisplayPlatformStats games={games} />
      <DisplayGames games={games} />
    </div>
  );
}

export default App;
