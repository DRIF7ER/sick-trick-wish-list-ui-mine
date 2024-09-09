import React from "react";

function TrickCards ({ someTricks }) {
  console.log(someTricks, '<-- IN TRICK CARDS FUNC')

  

  return(
    <div className="trick-card">
      {someTricks.map((trick) => {})}
      <h2 className="trick-title">{ trick.name }</h2>
      <p className="obstacle">{ trick.obstacle }</p>
      <p className="stance">{ trick.stance }</p>
      <href className="youtube-tutorial">{ trick.tutorial }</href>
    </div>
  );
}

export default TrickCards