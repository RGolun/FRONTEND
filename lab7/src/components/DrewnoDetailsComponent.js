import React, {Component} from 'react'

class DrewnoDetailsComponent extends Component {

    render() {
        return (
            <table>
                <tr>
                    <td>Gatunek</td>
                    <td>{this.props.drewno.gatunek}</td>
                </tr>
                <tr>
                    <td>Długość</td>
                    <td>{this.props.drewno.dlugosc}</td>
                </tr>
            </table>
        )
    }
}

export default DrewnoDetailsComponent;