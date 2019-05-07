import React, {Component} from 'react'

class DrewnoDetailsComponent extends Component {

    render() {
        return (
            <table>
                <tr>
                    <td>Gatunek</td>
                    <td>{this.props.drewno[this.state.drewnoIndex].gatunek}</td>
                </tr>
                <tr>
                    <td>Długość</td>
                    <td>{this.props.drewno[this.state.drewnoIndex].dlugosc}</td>
                </tr>
            </table>
        )
    }
}

export default DrewnoDetailsComponent;