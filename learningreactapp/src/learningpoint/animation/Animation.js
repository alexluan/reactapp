import React, { Component } from 'react';
import './AnimationClass.css'

import ReactCssTransitionGroup from 'react-addons-css-transition-group'

export default class Animation extends Component{
  constructor (){
    super();
    this.state = {
      list:["1000","1001"],
      isflag:"aaaaaa"
    }

  }
  addItem =()=>{

    let str = this.refs.inputref.value;
    this.setState({
      list: [...this.state.list, str]
    })
  }

  deleteItem=(index)=>{
    let newItems = [...this.state.list];
    newItems.splice(index, 1);
    console.log(newItems);
    this.setState({list: newItems});

  }


  render(){
    console.log("render");
    return <div className="ComBg">
      <ReactCssTransitionGroup
        transitionName="reactAnim"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {this.state.list.map((item,index)=>{
          var keyvalue = item+index;
          return <div key={keyvalue}> <div>this is div {item}{index}</div>
            <button onClick={()=>this.deleteItem(index)}> delete </button>
          </div>
        })}
      </ReactCssTransitionGroup>

      <div>{this.state.isflag}</div>
      <input ref="inputref"/>
      <button onClick={()=>this.addItem()}>btn</button>
    </div>
  }
}
