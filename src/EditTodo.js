import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editTodo} from './actions/actions'
class EditTodo extends Component {
    state = {
        todo: this.props.todosArray.toUp[0].todo
    }
    handleChange = e => {
        this.setState({ todo: e.target.value });
    }
    modif = () => {
        this.props.edit({...this.state, id: this.props.todosArray.toUp[0].id, completed: this.props.todosArray.toUp[0].completed})
    }
    render() {
        return (
            <div className="input-group mb-3 ">            
                <input type="text" value={this.state.todo} onChange={this.handleChange} className="form-control"
                    placeholder="Add to do" aria-label="Recipient's username"
                    aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <input className="btn btn-danger" type="button"
                     id="button-addon2" value="Edit" onClick={this.modif} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todosArray: state.list
    }
}
const mapDispatchToProps =dispatch=> {
    return {
        edit: todoUpdate=>dispatch (editTodo(todoUpdate))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditTodo);