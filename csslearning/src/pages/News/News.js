import React, { Component } from 'react';
import './NewsCss.css';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom'

class News extends Component {
  render() {
    return (
      <div id="container">
        <div id="topNavi"></div>
        <div id="banner"></div>
        <div id="navi"></div>
        <div id="content" className="clearfix">
          <div id="c_left">
            asdfa
          </div>
          <div id="c_right">
            asdfasd
          </div>
        </div>
        <div id="footer"></div>
      </div>
    );
  }
}

export default News;