import React, {Component} from 'react'

class DrewnoListComponent extends Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.drzewa.map((drewno) => <li key={drewno.gatunek} onClick={(e) => this.props.onDrewnoClick(drewno)}>{drewno.gatunek}</li>)}
                </ul>
            </div>
        )
    }
}

export default DrewnoListComponent