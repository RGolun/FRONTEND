import React, {Component} from 'react'
import DrewnoDetailsComponent from './DrewnoDetailsComponent';
import { withRouter } from 'react-router-dom'

class DrewnoListComponent extends Component {

    onAddClick = () => {
        this.context.history.push("/drewno");
    };

    render() {

        const AddButton = withRouter(({ history }) => (
            <button
                type='button'
                onClick={() => { history.push('/drewno') }}>
                Dodaj
            </button>
          ));
        
        const EditButton = withRouter(({ history }) => (
            <button
                type="button"
                onClick={() => {
                    if (this.props.drewno !== undefined) {
                        history.push('/drewno/' + this.props.drewno.gatunek);
                    }
                }}>
                Edytuj
            </button>
        ))

        return (
            <div>
                <div>
                    <ul>
                        {this.props.drzewa.map((drewno) => <li key={drewno.gatunek} onClick={(e) => this.props.onDrewnoClick(drewno)}>{drewno.gatunek}</li>)}
                    </ul>
                </div>
                <div>
                    <DrewnoDetailsComponent drewno={this.props.drewno}/>
                </div>
                <div>
                    <AddButton/>
                    <EditButton/>
                </div>
            </div>
        )
    }
}

export default DrewnoListComponent