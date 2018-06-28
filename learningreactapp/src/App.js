import React, { Component } from 'react';

import ReactCssTransitionGroup from 'react-addons-css-transition-group'
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom'

import './App.css';
import Animation  from  './learningpoint/animation/Animation'
import RouterG from './learningpoint/router/Router'
import RouterDetailG from './learningpoint/router/RouterDetail'
import HomeG from './learningpoint/home/Home'
import Fluxg from './learningpoint/flux/Fluxg'
import Reduxg from './learningpoint/redux/Reduxg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className="navbar">
              <NavLink activeClassName="active" exact to='/'>HomeG</NavLink>
              <NavLink activeClassName="active"  exact to='/animation'>Animation</NavLink>
              <NavLink activeClassName="active"  exact to='/router'>Route 动态传参</NavLink>
              <NavLink activeClassName="active"  exact to='/flux'>FLUX 架构</NavLink>
              <NavLink activeClassName="active"  exact to='/redux'>Redux 架构</NavLink>
            </div>

            <Switch>  /*url 重定向*/
              <Route exact path="/" component={HomeG}></Route>
              <Route exact path="/animation" component={Animation}></Route>
              <Route exact path="/router" component={RouterG}></Route>
              <Route exact path="/flux" component={Fluxg}></Route>
              <Route exact path="/redux" component={Reduxg}></Route>
              <Route exact path="/detail/:tel？/:name？" component={RouterDetailG}></Route>
              <Route exact path="/detail" component={RouterDetailG}></Route>
              <Redirect from='/' to='/'></Redirect>
            </Switch>
          </div>
        </Router>
        <div className="TheG">
         this is body bottom!!!!
        </div>
      </div>
    );
  }
}

export default App;
