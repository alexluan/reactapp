import React, { Component } from 'react';
import './TencentCss.css';

import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom'
import WebHeader from '../WebHeader/WebHeader'
//http://www.chinwoo.org.cn/
class Tencent extends Component {
  render() {
    return (
      <div id="container" className="clearfix">
        <ul className="test1">
          <li><a href="#">首页1</a></li>
          <li><a href="#">首页2</a></li>
          <li><a href="#">首页3</a></li>
          <li><a href="#">首页4</a></li>
          <li><a href="#">首页5</a></li>
        </ul>
      </div>
    );
  }
}

export default Tencent;
