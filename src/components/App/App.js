import './App.css';
import React from 'react';

import { useState, useEffect } from 'react';

import { fetchTricks } from '../ApiCalls/ApiCalls';
import TrickCards from '../TrickCards/TrickCards';



function App() {
  // useState
  // useEffect
  // const apiTricks = ApiCalls()

  const [ tricks, setTricks ] = useState([])

  useEffect(() => {
    fetchTricks()
      .then(data => {
        setTricks(data)
        console.log(data, '<-- DATA')
      })
      .catch(err => console.error(err));
  }, [])

  console.log(tricks, '<-- FROM API')



  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <div className="trick-cards-container">
        <TrickCards apiTricks={ tricks }/>
      </div>
    </div>
  );
}

export default App; 
