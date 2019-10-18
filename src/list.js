import React, { Component } from 'react';
import {connect} from 'react-redux';
import {removeTodo, currentTodo} from './actions/actions';
import {editTodo} from './actions/actions';
import {toggle} from './actions/actions'

class List extends Component {
 state = {
   
   
 }
 
    render() { 

       
        return ( <div className='container'>
<ul className="list-group" >
    {this.props.todoArray.todos.map(el =>(
<li className="list-group-item row d-flex" key={el.id}>
 
<p className='col' style={el.completed ? {textDecoration:'line-through'}:{textDecoration:'none'} }> {el.todo}</p>  
<button className='col-2'onClick={()=>this.props.Delete(el.id)}>Remove</button>
<button className='col-2' onClick={()=>this.props.Toggle(el.id)}>{el.completed ?'undo':'complete'}</button>
<button className='col-2' onClick={()=>this.props.setTodo(el.id)}>edit</button></li>

 ))}
  </ul>
</div> );
    }
}

const mapStateToProps=(state)=>{
return {
    todoArray:state.list
}
}
const mapDispatchToProps=(dispatch)=>{
    return {
        Delete:id=>dispatch (removeTodo(id)),
        // Edit: el=> dispatch (editTodo(el)),
        Toggle:id =>dispatch (toggle(id)),
        setTodo: id => dispatch(currentTodo(id))
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(List);