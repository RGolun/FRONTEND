import React, { Component } from 'react';
import './App.css';
import './components/DrewnoListComponent'
import drewnoModule from './services/drewnoModule'
import DrewnoListComponent from './components/DrewnoListComponent';
import Klasa from './models/Klasa'
import DrewnoDetailsComponent from './components/DrewnoDetailsComponent';

class App extends Component {
  render() {
    drewnoModule.create("Szara", 20, true, [new Klasa("tartak")]);
    drewnoModule.create("Biala", 30, true, []);
    return (
      <div className="App">
        <header className="App-header">
          <DrewnoListComponent drewno={drewnoModule.getAll()}/>
          <DrewnoDetailsComponent drewno={drewnoModule.getAll()}/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
