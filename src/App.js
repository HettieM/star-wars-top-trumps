import React from "react";
import './App.css';
import Player from './components/player';
import Computer from './components/computer';
import Score from './components/score';

function App() {
  return (
    <div className="App">
      <div className="card-row">
        <Player />
        <Computer />
      </div>
      <Score />
    </div>
  );
}

export default App;
