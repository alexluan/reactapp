import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom'

export default class RouterDetailG extends Component{

  constructor (){
    super();

  }

  render(){
    console.log(this.props.location.query);
    var data =  this.props.location.query;
    console.log(data);
    var name = "isnull";
    if(data && data.hasOwnProperty("name")){
      name = data.name;
    }
    // var {tel,name,age} = data;
    return <div >
      <h2>这是Router详情页</h2>
      <p>{this.props.match.params.tel}</p>
      <p>{this.props.match.params.name}</p>
      <p>{name}</p>
    </div>
  }
}