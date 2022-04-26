import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayGames from "./Components/DisplayGames";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getAllGames();
  }, []);
  async function getAllGames() {
    let response = await axios.get("https://localhost:7260/api/games");
    setGames(response.data);
    console.log(getAllGames, response.data);
  }

  return (
    <div>
      <DisplayGames games={games} />
    </div>
  );
}

export default App;
