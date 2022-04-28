import React, { useState } from "react";
import "./App.css";

const DisplayGames = ({ games }) => {
  return (
    <div>
      <div>
        <table id="customers">
          <tr>
            <td id="customers-color">Title</td>
            <td id="customers-color">Platform</td>
            <td id="customers-color">Release Year</td>
            <td id="customers-color">Publisher</td>
          </tr>
        </table>

        {games.map((game) => {
          return (
            <div key={game.id}>
              <table id="customers">
                <tbody>
                  <tr>
                    <td>{game.name}</td>
                    <td>{game.platform}</td>
                    <td>{game.year}</td>
                    <td>{game.publisher}</td>
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

// export default function DisplayGames({ games }) {
//   const columns = games[0] && Object.keys(games[0]);

//   return (
//     <div key={games.id}>
//       <table>
//         <thead>
//           <tr>{games[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
//         </thead>
//         <tbody>
//           {games.map((row) => (
//             <tr>
//               {columns.map((column) => (
//                 <td>{row[column]}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
