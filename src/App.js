import React from 'react';
import './App.css';

// import components
import Main from './components/Main'
import Controls from './components/Controls'
import Rules from './components/Rules'
import Info from './components/Info'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <Main />
      <div className='modal-wrapper'>
        <Controls />
        <Rules />
        <Info />
      </div>
      <Footer />
    </div>
  );
}

export default App;
