import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom'

export default class RouterG extends Component{

  constructor (){
    super();
    this.state = {list:["10010","10016","10086"]}
  }

  render(){
    return <div >
      <ul>
        {this.state.list.map((item)=>{
          var data = {tel:110,name:"alexluan",age:36};
          var path = {
            pathname:'/detail',
            query:data,
          }
          return <li>
            <Link to={path}>{item}</Link>
          </li>
        })}
        <Link to={`/detail/tel199/alexluan`}>{"传值手机号"}></Link>
        <Link to={`/gggg/index`}>{"不存在的路径在主页"}></Link>
      </ul>
    </div>
  }
}