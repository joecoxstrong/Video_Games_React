import React from "react";
import { Chart } from "react-google-charts";
import "./App.css";

const StatsByGame = ({ games }) => {
  function generateDataForChart() {
    // console.log(games);

    let filteredGames = games.filter((game) => game.year >= 1940);
    // console.log("Filter Games: ", filteredGames);

    let platforms = filteredGames.map((game) => {
      return game.platform;
    });
    // console.log("Platforms: ", platforms);

    // uniq = [...new Set(array)];
    let distinctPlatforms = [...new Set(platforms)];
    // console.log("Single platforms: ", distinctPlatforms);

    let platformArrays = distinctPlatforms.map((platform) => {
      let allGamesForPlatform = filteredGames.filter(
        (game) => game.platform == platform
      );
      console.log("All games for platform: ", allGamesForPlatform);

      for (let i = 0; i < allGamesForPlatform.length; i++) {
        var totalGlobalSalesByPlatform = allGamesForPlatform.reduce(function (
          prev,
          cur
        ) {
          return prev + cur.globalSales;
        },
        0);
      }
      console.log(totalGlobalSalesByPlatform);
      return [platform, totalGlobalSalesByPlatform, " rgb(142, 11, 168)"];
    });
    // console.log("Platform Arrays: ", platformArrays);
    const data = [
      ["Platform", "Global Sales in Millions", { role: "style" }],
      ...platformArrays,
    ];

    return data;
  }
  return (
    <div>
      <h1 className="graph-header">{games.name}'S GLOBAL SALES PER CONSOLE</h1>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={generateDataForChart()}
      />
    </div>
  );
};

export default StatsByGame;
