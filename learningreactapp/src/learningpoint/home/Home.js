import React, { Component } from 'react';

export default class HomeG extends Component{
  // add = ()=>{
  //   window.undefined = null;
  //   var gb;
  //   console.log("----------")
  //   let g = []+[]
  //   console.log(undefined)
  // }
  add = ()=> {
    const maap = new Map();
    maap.set("name","alex");
    console.log(maap.get("name"));
    // maap.map(function(value,key){
    //   console.log(value)
    // })

  }


  test = ()=>{
    let undefined = 1
    let gg
    console.log(gg == undefined)
  }

  render(){

    return <div >

      <div >this is HomeG</div>
      <button onClick={this.add}>btn</button>
    </div>
  }
}