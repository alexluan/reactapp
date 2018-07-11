import React, { Component } from 'react';
import './HomeCss.css';

import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom'
import WebHeader from '../WebHeader/WebHeader'
//http://www.chinwoo.org.cn/
class Home extends Component {


  constructor (props){
    super(props);
    this.state={
      indexf:0,
      ready:0,
      message:"null",
      messageList:[]
    }
  }

  componentWillMount(){

  }
  componentDidMount(){
    setTimeout(()=>{
      if (window.WebViewJavascriptBridge) {
        this.bridge = window.WebViewJavascriptBridge;
          this.connectWebViewJavascriptBridge(this.bridge);
        // window.WebViewJavascriptBridge.registerHandler('testJavascriptHandler', (data, responseCallback)=> {
        //     var responseData = { 'Javascript Says':'Right back atcha!' }
        //   this.addmessage(data);
        //     responseCallback(responseData)
        //   })
        // callback("WebViewJavascriptBridge")
        this.addmessage("存在bridge")
      } else {
        this.addmessage("不存在bridge，addlistener")
        document.addEventListener('testJavascriptHandler', (data,responseCallback)=> {
          // callback(WebViewJavascriptBridge)
          const g = this.state.ready;
          this.isready(g+1);
          this.add();
          this.addmessage("执行了，testJavascriptHandler responseCallback 方法")
          // this.setState({
          //   message:data,
          //   callback:callback
          // })

          responseCallback(data)
          return "alexluan";
        }, false)
      }
    },100);
    document.addEventListener("shareResult",this.add());
  }
  // connectWebViewJavascriptBridge(callback) {
  //   if (window.WebViewJavascriptBridge) {
  //     callback(WebViewJavascriptBridge)
  //   } else {
  //     document.addEventListener('WebViewJavascriptBridgeReady', function() {
  //       callback(WebViewJavascriptBridge)
  //     }, false)
  //   }
  // }

  connectWebViewJavascriptBridge=((bridge) =>{
    var uniqueId = 1


    this.bridge.init(function(message, responseCallback) {
      var data = { 'Javascript Responds':'Wee!' }
      responseCallback(data)
    })

    this.bridge.registerHandler('testJavascriptHandler', function(data, responseCallback) {
      var responseData = { 'Javascript Says':'Right back atcha!' }
      this.addmessage("test")
      responseCallback(responseData)
    }.bind(this))

    this.bridge.callHandler('testObjcCallback', {'foo': 'bar'}, (response) =>{
        this.addmessage(response)
    })
  })

  isready = (flag)=> {
    this.setState({
      ready:flag
    })
  }
  add = ()=>{
    this.addmessage("添加计数方法执行")
    const pa = this.state.indexf;
    this.setState({
      indexf:pa+1
    })
  }

  nativeaction = (one,two,three)=>{
    window.webkit.messageHandlers.Share.postMessage({title:'测试分享的标题',content:'测试分享的内容',url:'https://github.com/maying1992'});

  }
  nativesend = (content) => {
    if(this.bridge){
      this.bridge.send("thisisname",(conent)=>{
        this.addmessage(conent);
      })
    }
  }
  shareResult =function(one,two,three){
    this.add();
    this.nativeaction("one","two","three");
  }

  addmessage = (content)=>{
    const newlist = [...this.state.messageList,content]
    this.setState({
      messageList:newlist
    })
  }
  clearmessage = ()=>{
    this.setState({
      messageList:[]
    })
  }
  render() {
    return (
      <div className="Home">
        <div className="homeContainer">
          <div className="topNavi"></div>
          <div className="banner"></div>
          <div id="content"></div>
          <div id="footer">
              <button onClick={this.add}>click me {this.state.indexf}</button>
            <button onClick={this.nativeaction}> native action (messagehandler)</button>
            <button onClick={this.clearmessage}>clearmessage</button>
            <div>{
              (this.state.ready==0)?(<div>{"no has ready"}</div>):(<div>{"has ready"}{this.state.ready}</div>)
            }</div>
          </div>
          <button onClick={this.nativesend}>nativesend</button>
          <div>{this.state.message}</div>
        </div>
        {
          this.state.messageList.map((content)=>{
          return <div>{content}</div>
          })
        }
        <div id="footerbottom" className="clearfix">
          <div className="l_footer"></div>
          <div className="r_footer"></div>
        </div>

      </div>
    );
  }
}

export default Home;
