import React from "react";
import "./App.css";

const DisplayGames = (props) => {
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
                      <div>
                        {/* <form onSubmit={handleSearch}> */}
                        {/* <input
                            name="searchField"
                            type="text"
                            placeholder="Search Games"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                          /> */}
                        {/* <button
                            name="statsButton"
                            type="submit"
                            value={game.name}
                            onChange={(e) => setSearch(e.target.value)}
                            onClick={handleSearch}
                          >
                            VIEW STATS
                          </button>
                        </form> */}
                      </div>
                      <button onClick={props.DisplayPlatformStats}>
                        VIEW STATS
                      </button>
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
