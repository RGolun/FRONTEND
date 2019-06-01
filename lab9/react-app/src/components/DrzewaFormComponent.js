import React, { Component } from 'react'
import axios from 'axios'
import Drewno from '../models/Drewno'
import { withRouter } from 'react-router-dom'

class DrzewaFormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tGatunek: '',
            tDlugosc: 10,
            tIsTartak: false,
            inputNameDisabled: false
        }
    }

    componentDidMount() {
        const { gatunek } = this.props.match.params;
        if (gatunek !== undefined) {
            this.loadDrewno(gatunek);
            this.setState({ inputNameDisabled : true })
        }
    }

    loadDrewno = async (drewnoGatunek) => {
        let res = await axios.get("http://localhost:4000/api/drzewa/" + drewnoGatunek);
        const { gatunek, dlugosc, isTartak } = res.data;
        this.setState({ tGatunek: gatunek,
                        tDlugosc: dlugosc,
                        tIsTartak: isTartak });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

    render() {    

        const SaveButton = withRouter(({history}) => (
            <button
                type="button"
                onClick={async () => {
                    const { tGatunek, tDlugosc, tIsTartak } = this.state;
                    await axios.post('http://localhost:4000/api/drzewa', new Drewno(tGatunek, tDlugosc, tIsTartak));
                    await this.props.onDrewnoSubmited();
                    history.push("/");
                }}>
                Zapisz
            </button>
        ))

        const { tGatunek, tDlugosc, tIsTartak, inputNameDisabled } = this.state;
        return (
            <form>
                Gatunek:<br/>
                <input
                    type="text"
                    name="tGatunek"
                    disabled={inputNameDisabled}
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
                <SaveButton/>
            </form>
        )
    }
}

export default DrzewaFormComponent;