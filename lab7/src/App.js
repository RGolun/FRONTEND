import React, { Component } from 'react';
import './App.css';
import './components/DrewnoListComponent'
import drewnoModule from './services/drewnoModule'
import DrewnoListComponent from './components/DrewnoListComponent';
import Klasa from './models/Klasa'
import DrewnoDetailsComponent from './components/DrewnoDetailsComponent';

class App extends Component {

  constructor(props) {
    super(props);
    drewnoModule.create("Szara", 20, true, [new Klasa("tartak")]);
    drewnoModule.create("Biala", 30, true, []);
      this.state = {
        currentDrewno: drewnoModule.getAll()[0]
      };
    }

    onDrewnoClick = (drewno) => {
      this.setState({currentDrewno: drewno});
    }

  render() {    
    return (
      <div className="App">
        <header className="App-header">
          <DrewnoListComponent drzewa={drewnoModule.getAll()} onDrewnoClick={this.onDrewnoClick}/>
          <DrewnoDetailsComponent drewno={this.state.currentDrewno}/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
