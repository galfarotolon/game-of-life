import React from 'react';
import './App.css';

// import components
import Main from './components/Main'
import Rules from './components/Rules'
import Info from './components/Info'

function App() {
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <Main />
      <Rules />
      <Info />
    </div>
  );
}

export default App;
