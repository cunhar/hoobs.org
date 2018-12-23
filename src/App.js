import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-status">
            <div className="App-live">LIVE</div>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-body">

        </div>
      </div>
    );
  }
}

export default App;
