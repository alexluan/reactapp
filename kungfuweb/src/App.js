import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import './App.css';
import './css-reset.css';
import Home from './home/Home'
import Douban from './douban/Douban'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/douban" component={Douban}></Route>
            <Redirect from='/' to='/'></Redirect>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
