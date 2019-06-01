import React, { Component } from 'react'
import axios from 'axios'
import Drewno from '../models/Drewno'

class DrzewaFormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tGatunek: '',
            tDlugosc: 10,
            tIsTartak: false
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.gatunek]: e.target.value });
    }

    onIsTartakChange = () => {
        this.setState({ tIsTartak: !this.state.tIsTartak });
        console.log(this.state.tIsTartak);
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const { tGatunek, tDlugosc, tIsTartak } = this.state;
        await axios.post('http://localhost:4000/api/drzewa', new Drewno(tGatunek, tDlugosc, tIsTartak));
        await this.props.onDrewnoSubmited();
    }

    render() {
        const { tGatunek, tDlugosc, tIsTartak } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                Gatunek:<br/>
                <input
                    type="text"
                    name="tGatunek"
                    value={tGatunek}
                    onChange={this.onChange}/><br/>
                Długość:<br/>
                <input
                    type="number"
                    name="tDlugosc"
                    value={tDlugosc}
                    onChange={this.onChange}/><br/>
                <input
                    id="isTartakCheckbox"
                    type="checkbox"
                    name="tIsTartak"
                    value={tIsTartak}
                    onClick={this.onIsTartakChange}/>
                <label>Czy tartak?</label><br/>
                <button type="submit">Dodaj</button>
            </form>
        )
    }
}

export default DrzewaFormComponent;