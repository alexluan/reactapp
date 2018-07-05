import React, { Component } from 'react';
import './ReduxgCss.css'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import ReduxTodoList from './ReduxTodoList'
import thunk from 'redux-thunk'

// const reducer =(state={list:[]},action={})=>{
//   console.log("reducer-----")
//   switch(action.type){
//     case 'ADD_TODO':
//       const newState = Object.assign({},state);
//       newState.list.push(action.payload)
//       return newState;
//     default:
//       return state;
//   }
//   }

const TodoListReducer = (state=[],action={})=>{
    console.log("reducer------")
  switch(action.type){
    case 'ADD_TODO':
      // const newState = state.slice(0);
      // 数组深拷贝
      const newState = [...state];
      newState.push(action.payload)
      return newState;
    default:
      return state;
  }
}

const CountReducer = (state = 0,action={})=>{
  console.log("ContReducer----")
  switch(action.type){
    case 'ADD_ONE':
      return state + action.payload;
    default:
      return state;
  }
}



const reducer = combineReducers({
  list:TodoListReducer,
  count:CountReducer,
})

const store = createStore(reducer,{list:[]},applyMiddleware(thunk));

// const state = store.getState();
store.subscribe(renderPage);
function renderPage () {
  console.log("renderPage -- Action -- finish - 刷新界面")
}





export default class Reduxg extends Component{

  render(){
    return <div >
      <div >this is Reduxg Start</div>
      <ReduxTodoList store = {store}/>
      <div >this is Reduxg End</div>

    </div>
  }
}