import React, { Component } from 'react'
import DrzewaListComponent from './DrewnoListComponent'
import DrzewaFormComponent from './DrzewaFormComponent'
import DrewnoDetailComponent from './DrewnoDetailsComponent'
import axios from 'axios'

class DrzewaComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { drzewa: [] };
        this.getAllDrzewa();
    }

    getAllDrzewa = async () => {
        let res = await axios.get('http://localhost:4000/api/drzewa');
        this.setState({ drzewa : res.data })
    };

    onDrewnoClick = (drewno) => {
        this.setState({currentDrewno: drewno});
    };

    render() {
        return (
            <div>
                <DrzewaFormComponent onDrewnoSubmited={this.getAllDrzewa}/>
                <br/>
                <DrzewaListComponent drzewa={this.state.Drzewa} onDrewnoClick={this.onDrewnoClick}/>
                <br/>
                <DrewnoDetailComponent drewno={this.state.currentDrewno}/>
            </div>
        )
    }
}

export default DrzewaComponent;