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
        <div>--------------------------------------</div>
        <div className="box0">
          <div className="box1">
            <div className="box2">

            </div>
            <div className="box3"></div>
          </div>


        </div>
  
        <h2>--------------------------------------
          {'\n\n\n\n\n\n\n'}
          justify-content　　项目在主轴上的对齐方式
          align-items　　项目在交叉轴上如何对齐
          align-content　　定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
        </h2>
        <div className="boox0">
          <div className="boox1">
         1111111
            <div className="boox11">asdf</div>
            <div className="boox12">asdf</div>
          </div>
          <div className="boox2">
 222222
            <div className="boox21">asdf</div>
            <div className="boox22">asdf</div>
          </div>
        </div>
        <div>flex-direction　　容器内项目的排列方向(默认横向排列)
          flex-wrap　　容器内项目换行方式
          flex-flow　　以上两个属性的简写方式
          justify-content　　项目在主轴上的对齐方式
          align-items　　项目在交叉轴上如何对齐
          align-content　　定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</div>
        <div>order　　项目的排列顺序。数值越小，排列越靠前，默认为0。
          flex-grow　　项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
          flex-shrink　　项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
          flex-basis　　在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
          flex　　是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
          align-self　　允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</div>
      <WebHeader/>
      </div>
    );
  }
}

export default MoreMenu;
