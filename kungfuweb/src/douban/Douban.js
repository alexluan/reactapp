import React, { Component } from 'react';
var styles = require('./DoubanCss.css')

class Douban extends Component {
  render() {
    return (
      <div className={styles.douban}>
        <div id="douban-nav"></div>
        <div id="douban-reg-new"></div>
        <div id="douban-sns"></div>
        <div id="douban-time"></div>
        <div id="douban-movie"></div>
      </div>
    );
  }
}

export default Douban;
