import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import StatsByGame from "./StatsByGame";

const DisplayGames = (props) => {
  function clicked(game) {
    console.log("This game is " + game);
    props.searchGames(game);
  }
  return (
    <div>
      <div>
        <table id="customers">
          <tr>
            <td id="customers-color">Title</td>
            <td id="customers-color">Platform</td>
            <td id="customers-color">Release Year</td>
            <td id="customers-color">Publisher</td>
            <td id="customers-color">Game Stats</td>
          </tr>
        </table>

        {props.games.map((game) => {
          return (
            <div key={game.id}>
              <table id="customers">
                <tbody>
                  <tr>
                    <td>{game.name}</td>
                    <td>{game.platform}</td>
                    <td>{game.year}</td>
                    <td>{game.publisher}</td>

                    <td>
                      {/* <Link to="/SingleGameGraph"> */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          clicked(game);
                        }}
                      >
                        VIEW STATS
                      </button>
                      {/* </Link> */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayGames;
