import './App.css';
import React from 'react';

import ApiCalls from '../ApiCalls/ApiCalls';
import TrickCards from '../TrickCards/TrickCards';



function App() {
  const apiTricks = ApiCalls()

  console.log(apiTricks, '<-- FROM API')



  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <div className="trick-cards-container">
        <TrickCards />
      </div>
    </div>
  );
}

export default App; 
