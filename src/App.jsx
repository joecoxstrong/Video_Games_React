import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayGames from "./Components/DisplayGames";
import DisplayPlatformStats from "./Components/DisplayPlatformStats";
import SearchBar from "./Components/SearchBar";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getAllGames();
  }, []);

  //
  async function getAllGames() {
    try {
      const response = await axios.get(`https://localhost:7260/api/games/`);
      setGames(response.data);
      console.log(response.data);
    } catch (ex) {
      console.log(`ERROR in getAllGames EXCEPTION: ${ex}`);
    }
  }

  async function searchGames(searchTerm) {
    try {
      const response = await axios.get(
        `https://localhost:7260/api/games/${searchTerm}`
      );
      setGames(response.data);
      console.log("Search Results: ", response.data);
    } catch (ex) {
      console.log(`ERROR in getAllGames EXCEPTION: ${ex}`);
    }
  }

  return (
    <div>
      <SearchBar searchGames={searchGames} />

      <DisplayPlatformStats games={games} />
      <DisplayGames games={games} />
    </div>
  );
}

export default App;
