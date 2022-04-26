import React, { useState } from "react";

const DisplayGames = (props) => {
  return (
    <div>
      <div>
        {props.games.map((game, index) => {
          return (
            <div>
              <table>
                <tr>
                  <td>{index + 1}</td>
                  <td>{game.name}</td>
                  <td>{game.platform}</td>
                  <td>{game.year}</td>
                  <td>{game.publisher}</td>
                  <td>{}</td>
                </tr>
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
