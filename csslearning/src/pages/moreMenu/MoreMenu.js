import React, { Component } from 'react';
import './MoreMenuCss.css';

import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom'
import WebHeader from '../WebHeader/WebHeader'
//http://www.chinwoo.org.cn/
class MoreMenu extends Component {
  render() {
    return (
      <div>
        <div id="container">
        <ul className="test1">
          <li><a href="#">首页1</a></li>
          <li><a href="#">首页2</a></li>
          <li className="menu">
            <dl>
                <dt><a href="#">首页31</a></dt>
                <div>
                  <dd lang="1"><a href="#">首页32</a></dd>
                  <dd lang="2"><a href="#">首页33</a></dd>
                  <dd lang="3"><a href="#">首页34</a></dd>
                </div>
            </dl>
          </li>
          <li><a href="#">首页4</a></li>
          <li><a href="#">首页5</a></li>
        </ul>
        </div>
        <div className="box0">
          <div className="box1">
            <div className="box2">

            </div>
            <div className="box3"></div>
          </div>


        </div>
      </div>
    );
  }
}

export default MoreMenu;
