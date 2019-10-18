import React, { Component } from 'react';
import {connect} from "react-redux";
import shortid from 'shortid';
import { addTodo } from './actions/actions'
import EditTodo from './EditTodo';
class Header extends Component {
    state = {
        todo: '',
        obj:{},
        
       
    }
    handleChange = e => {
        this.setState({obj:{ todo: e.target.value }});
    }
    
    ajout = () => {
        this.props.addNewTodo({...this.state.obj,completed:false, id:shortid.generate()})
        this.setState({ obj:{ todo: '' }})
    }
    render() { 
        return ( <div className='container'>
            <h1>To do list</h1><br/>
            <div className="input-group mb-3 ">
            
        <input type="text" className="form-control"
         placeholder="Add to do" aria-label="Recipient's username" 
         aria-describedby="button-addon2" value={this.state.obj.todo} onChange={this.handleChange}/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" id="button-addon2" 
            onClick={this.ajout}>
                Add
            </button>
        </div>
      </div>
      {this.props.todoArray.toUp !== null &&
      <EditTodo/>}
      </div> );
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addNewTodo: newTodo => dispatch(addTodo(newTodo))
    }
}
const mapStateToProps =(state)=>{
    return {
        todoArray:state.list
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps) (Header);