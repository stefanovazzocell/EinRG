import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="App-logo">
          <img src={require('./assets/ein_transpa03.5.jpg')} alt="Ein's head" width="200" height="200" />
        </div>
          <h2> I HAPPILY WASTE TIME FOR <font color="orange">FUN</font>.</h2>
          <h1> Hiiiiii, it's <font color="0xE499BD">ein</font>.</h1>
        </header>
      </div>
    );
  }
}

export default App;
