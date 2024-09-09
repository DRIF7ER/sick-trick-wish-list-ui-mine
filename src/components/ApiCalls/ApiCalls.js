import React from "react";

function ApiCalls () {

  let trickData = []

  function fetchTricks () {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then(data => {
        console.log('THIS IS THE DATA: ', data)
        data.forEach((trick) => {
          trickData.push(trick)
        })
      })
  }

  fetchTricks()

  console.log('THIS IS TRICKDATA: ', trickData)

  return (
    {trickData}
  );
};

export default ApiCalls;