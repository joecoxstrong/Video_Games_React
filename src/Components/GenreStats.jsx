import React from "react";
import { Chart } from "react-google-charts";
import "./App.css";

const GenreStats = ({ allGames }) => {
  function generateDataForChart() {
    console.log(allGames);

    let filteredGames = allGames.filter((game) => game.year >= 2013);
    console.log("Filter Games: ", filteredGames);

    let genres = filteredGames.map((game) => {
      return game.genre;
    });
    // console.log("Platforms: ", platforms);

    // uniq = [...new Set(array)];
    let distinctGenres = [...new Set(genres)];
    // console.log("Single platforms: ", distinctPlatforms);

    let genreArrays = distinctGenres.map((genre) => {
      let allGamesForGenre = filteredGames.filter(
        (game) => game.genre == genre
      );
      console.log("All games for genre: ", allGamesForGenre);

      for (let i = 0; i < allGamesForGenre.length; i++) {
        var totalGlobalSalesByGenre = allGamesForGenre.reduce(function (
          prev,
          cur
        ) {
          return prev + cur.globalSales;
        },
        0);
      }
      console.log(totalGlobalSalesByGenre);
      return [genre, totalGlobalSalesByGenre, " rgb(142, 11, 168)"];
    });
    // console.log("Platform Arrays: ", platformArrays);
    const data = [
      ["Genre", "Global Sales in Millions", { role: "style" }],
      ...genreArrays,
    ];

    return data;
  }
  return (
    <div>
      <h1 className="graph-header">Global Sales By Genre in Millions</h1>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={generateDataForChart()}
      />
    </div>
  );
};

export default GenreStats;
