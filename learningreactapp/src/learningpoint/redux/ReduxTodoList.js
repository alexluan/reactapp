import React, { Component } from 'react';
import './ReduxgCss.css'
import {createStore,combineReducers} from 'redux'


export default class ReduxTodoList extends Component{

  constructor (){
    super();

  }

  addTodo = ()=>{
    console.log("redux_addTodo")
    this.props.store.dispatch({
    type:"ADD_TODO",
    payload:this.refs.todoVal.value
                              });
}
  addOne = ()=>{
    this.props.store.dispatch((dispatch,state)=>{
      setTimeout(function () {
        dispatch({
          type:'ADD_ONE',
          payload:1
        })
      },2000)
    })
  }
  render(){
    const list = this.props.store.getState().list;
    const count = this.props.store.getState().count;
    return <div >
      <div >this is Reduxg TodoList</div>
      <input type="text" ref="todoVal"/>
      <button onClick={()=>this.addTodo()}> Add Todod</button>
      <hr/>
      <button onClick={this.addOne}>{count}+1</button>
  <ul>
    {
      list.map((item,index)=>{
        return <li key={item + index}>{item}</li>
      })
    }
  </ul>
    </div>
  }
}