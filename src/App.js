import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I have changed this line. Can you see it?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       </header>
       <Carousel/>
     </div>
  );
}

export default App;
