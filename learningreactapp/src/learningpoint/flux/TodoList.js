import React, { Component } from 'react';
import './FluxgCss.css'

export default class TodoList extends Component{

  render(){

    return <div >

      <div >this is TodoList</div>
      <input type="text" ref="todoVal"/>
      <button onClick={()=>this.props.onClick(this.refs.todoVal.value)}>Add</button>
      <ul>
      {
        this.props.list.map((item)=>{
          return <li className="text" key={item}>{item}</li>
        })
      }
      </ul>
    </div>
  }
}