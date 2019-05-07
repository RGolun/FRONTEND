import React, { Component } from 'react';
import './App.css';
import './components/TigerListComponent'
import tigersModule from './services/tigersModule'
import TigerListComponent from './components/TigerListComponent';
import Toy from './models/Toy'
import TigerDetailsComponent from './components/TigerDetailsComponent';

class App extends Component {

  constructor(props) {
    super(props);
    tigersModule.create("Staś", 99, true, [new Toy("Piłka kauczukowa")]);
    tigersModule.create("Karolek", 94, true, []);
     this.state = {
       currentTiger: tigersModule.getAll()[0]
     };
  }

  onTigerClick = (tiger) => {
    this.setState({currentTiger: tiger});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TigerListComponent tigers={tigersModule.getAll()} onTigerClick={this.onTigerClick}/>
          <TigerDetailsComponent tiger={this.state.currentTiger}/>
        </header>
      </div>
    );
  }
}

export default App;
