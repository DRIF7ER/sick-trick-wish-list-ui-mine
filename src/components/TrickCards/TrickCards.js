import React from "react";

function TrickCards ({ apiTricks }) {
  console.log(apiTricks, '<-- IN TRICK CARDS FUNC')

  

  return(
    <div className="trick-card-wrapper">
      {apiTricks.map((trick) => {
        <div className="trick-card-inner">
          <h2 className="trick-title">{ trick.name }</h2>
          <p className="obstacle">{ trick.obstacle }</p>
          <p className="stance">{ trick.stance }</p>
          <href className="youtube-tutorial">{ trick.tutorial }</href>
        </div>
      })}
    </div>
  );
}

export default TrickCards