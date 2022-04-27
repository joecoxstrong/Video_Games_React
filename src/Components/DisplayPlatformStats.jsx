import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const DisplayPlatformStats = ({ games }) => {
  function generateDataForChart() {
    // console.log(games);

    let filteredGames = games.filter((game) => game.year >= 2013);
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
      return [platform, totalGlobalSalesByPlatform, "silver"];
    });
    // console.log("Platform Arrays: ", platformArrays);
    const data = [["Platform", "Sales", { role: "style" }], ...platformArrays];

    // ["PS3", 8.94, "silver"],
    //   ["Silver", 10.49, "silver"],
    //   ["Gold", 19.3, "silver"],
    //   ["Platnum", 21.45, "silver"],
    return data;
  }
  return (
    <div>
      <h1>Platform By Global Sales in Millions</h1>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={generateDataForChart()}
      />
    </div>
  );
};

export default DisplayPlatformStats;
