import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayGames from "./Components/DisplayGames";
import DisplayPlatformStats from "./Components/DisplayPlatformStats";
import SearchBar from "./Components/SearchBar";
import StatsByGame from "./Components/StatsByGame";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import "./Components/App.css";
import { useParams } from "react-router-dom";
import Home from "./Pages/Home";
import DisplaySearchedGames from "./Pages/DisplaySearchedGames";

function App() {
  const [games, setGames] = useState([]);
  const [allGames, setAllGames] = useState([]);
  useEffect(() => {
    getAllGames();
  }, []);

  //
  async function getAllGames() {
    try {
      const response = await axios.get(`https://localhost:7260/api/games/`);
      setAllGames(response.data);
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
      console.log(`ERROR in searchGames EXCEPTION: ${ex}`);
    }
  }

  async function viewStatsButton(gameName) {
    try {
      const response = await axios.get(
        `https://localhost:7260/api/games/${gameName}`
      );
      setGames(response.data);
      console.log("Search Results: ", response.data);
    } catch (ex) {
      console.log(`ERROR in viewStatsButton EXCEPTION: ${ex}`);
    }
  }

  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home allGames={allGames} />} />
        <Route
          path="/DisplaySearchedGames"
          element={
            <DisplaySearchedGames games={games} searchGames={searchGames} />
          }
        />
      </Routes>
    </div>

    //       <div>
    // <DisplayPlatformStats games={games} />
    //       </div>
    // <div>
    //   <SearchBar searchGames={searchGames} />

    // <DisplayPlatformStats games={games} />
    //   <StatsByGame games={games} />
    //   <div></div>
    //   <DisplayGames games={games} viewStatsButton={viewStatsButton} />
    // </div>
  );
}

export default App;
