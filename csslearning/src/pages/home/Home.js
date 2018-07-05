import React, { Component } from 'react';
import './HomeCss.css';

import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom'
import WebHeader from '../WebHeader/WebHeader'
//http://www.chinwoo.org.cn/
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="homeContainer">
          <div className="topNavi"></div>
          <div className="banner"></div>
          <div id="content"></div>
          <div id="footer">

          </div>
        </div>

        <div id="footerbottom" className="clearfix">
          <div className="l_footer"></div>
          <div className="r_footer"></div>
        </div>

      </div>
    );
  }
}

export default Home;
