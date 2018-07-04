import React, { Component } from 'react';
import './SouhuCss.css';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom'

class Souhu extends Component {
  render() {
    return (
      <div>
        <div className="wrap">
          <div id="topNavi">topNavi</div>
        </div>
          <div id="container">
            <div id="header" className="clearfix">
              <div id="l_logo"></div>
              <div id="r_header"></div>
            </div>
            <div id="banner">banner</div>
            <div id="content" className="clearfix">
              <div id="l_content" className="clearfix">
                <div id="l1"> l1 </div>
                <div id="l2"> l2 </div>
              </div>
              <div id="r_content">r_content</div>

            </div>
            <div id="footer">footer</div>
          </div>
      </div>

    );
  }
}

export default Souhu;