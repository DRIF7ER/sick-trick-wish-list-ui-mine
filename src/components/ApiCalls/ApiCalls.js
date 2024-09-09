import React from "react";

export function fetchTricks() {
  return (
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          throw new Error('Could\'nt get tricks.');
        }
      })
      .then(response => response.json())
  )
}

export default fetchTricks;