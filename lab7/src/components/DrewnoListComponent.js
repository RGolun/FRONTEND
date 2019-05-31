import React, {Component} from 'react'

class DrewnoListComponent extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.drzewa.map((drewno) => <li>{drewno.gatunek}</li>)}
                </ul>
            </div>
        )
    }
}

export default DrewnoListComponent