import React, { Component } from 'react';
import './App.css'
import './css-reset.css'
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom'
import Home from "./pages/home/Home"
import News from './pages/News/News'
import Souhu from './pages/souhuweb/Souhu'
import Tencent from './pages/tencent/Tencent'
import MoreMenu from './pages/moreMenu/MoreMenu'
import NameSpace from './pages/namespace/NameSpace'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/tencent" component={Tencent}></Route>
            <Route exact path="/moremenu" component={MoreMenu}></Route>
            <Route exact path="/news" component={News}></Route>
            <Route exact path="/souhu" component={Souhu}></Route>
            <Route exact path="/namespace" component={NameSpace}></Route>
            <Redirect from='/' to='/'></Redirect>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
