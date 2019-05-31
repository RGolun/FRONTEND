import React, {Component} from 'react'

class DrewnoDetailsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drewnoIndex: 0
        };
    }

    increaseDrewnoIndex() {
        this.setState({
            drewnoIndex: this.state.drewnoIndex === this.props.drzewa.length - 1 ?
                            0 :
                            this.state.drewnoIndex + 1
        });
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.increaseDrewnoIndex(), 5000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <table>
                <tr>
                    <td>Gatunek</td>
                    <td>{this.props.drzewa[this.state.drewnoIndex].gatunek}</td>
                </tr>
                <tr>
                    <td>Długość</td>
                    <td>{this.props.drzewa[this.state.drewnoIndex].dlugosc}</td>
                </tr>
            </table>
        )
    }
}

export default DrewnoDetailsComponent;