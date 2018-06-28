import React, { Component } from 'react';
import './FluxgCss.css'
import TodoActions from './TodoAction'
import TodoList from './TodoList'
import Store from './TodoStore'

export default class Fluxg extends Component{

constructor (){
  super();
  this.state = {
    list:[],
  }
}

componentDidMount(){
  Store.addChangeListener(this.refreshData)
}
refreshData =()=>{
  let listData = Store.getTodoListData();
  this.setState({
    list:listData
  });
}
  addTodo = (data)=>{

    TodoActions.addTodo(data)
  }

  render(){
    return <div >
      <div >this is Fluxg Start</div>
  <TodoList onClick={this.addTodo} list={this.state.list}/>
      <div >this is Fluxg End</div>

    </div>
  }
}