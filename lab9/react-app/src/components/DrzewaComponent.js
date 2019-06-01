import React, { Component } from 'react'
import DrzewaListComponent from './DrewnoListComponent'
import DrzewaFormComponent from './DrzewaFormComponent'
import DrewnoDetailComponent from './DrewnoDetailsComponent'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class DrzewaComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { drzewa: [] };
        this.getAllDrzewa();
    }

    getAllDrzewa = async () => {
        let res = await axios.get('http://localhost:4000/api/drzewa');
        this.setState({ drzewa : res.data });

        if (this.state.currentDrewno !== undefined) {
            let newCurrentDrewno = res.data.find(d => d.gatunek === this.state.currentDrewno.gatunek);
            this.setState({ currentDrewno: newCurrentDrewno });
        }
    };

    onDrewnoClick = (drewno) => {
        this.setState({currentDrewno: drewno});
    };

    render() {
        return (
            <Router>
                <div className="container">
                    <Link to="/">Drzewa</Link>

                    <Route exact path="/" render={(props) => <DrzewaListComponent {...props} drzewa={this.state.drzewa} onDrewnoClick={this.onDrewnoClick} drewno={this.state.currentDrewno} />}/>
                    <Route path="/drewno/:gatunek" render={(props) => <DrzewaFormComponent {...props} onDrewnoSubmited={this.getAllDrzewa} />}/>
                    <Route exact path="/drewno" render={(props) => <DrzewaFormComponent {...props} onDrewnoSubmited={this.getAllDrzewa} />}/>
                </div>
            </Router>
        )
    }
}

export default DrzewaComponent;