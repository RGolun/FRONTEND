import React, {Component} from 'react'

class DrewnoDetailsComponent extends Component {

    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <td>Gatunek:</td>
                    <td>{this.props.drewno !== undefined ? this.props.drewno.gatunek : ""}</td>
                </tr>
                <tr>
                    <td>Długość:</td>
                    <td>{this.props.drewno !== undefined ? this.props.drewno.dlugosc : ""}</td>
                </tr>
                <tr>
                    <td>Czy tartaczka?</td>
                    <td>{this.props.drewno !== undefined ? (this.props.drewno.isTartak ? "Tak" : "Nie") : ""}</td>
                </tr>
                </tbody>
            </table>
        )
    }
}

export default DrewnoDetailsComponent;