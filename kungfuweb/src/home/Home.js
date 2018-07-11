import React, { Component } from 'react';
import History from './history/History'
import Footer from '../footer/Footer'
var styles = require('./HomeCss.css')



// http://www.chinwoo.org.cn/page/section/1
class Home extends Component {

  constructor (props){
    super(props)

    this.state = {
      txvalue:"",
      historyname:"defaultmmm",
      activeIndex: 1,
      pagename:""
    }

  }

  componentWillMount(){
    this.changeBodyContainer(1)
  }

  changeBodyContainer = (index)=>{
    console.log(index)
    let pagename = "default"


      switch (index) {
        case 1:
          pagename = "首页"
          break;
        case 2:
          pagename = "精武架"
          break;
        case 3:
          pagename = "精武历史"
          break;
        case 4:
          pagename = "精武要闻"
          break;
        case 5:
          pagename = "精武文化"
          break;
        case 6:
          pagename = "精武精华"
          break;
        case 7:
          pagename = "精武活动"
          break;
        case 8:
          pagename = "世界精武"
          break;
        default:
          pagename = "default"
          break
      }
    this.setState({
      historyname:pagename,
      activeIndex: index,
      pagename:pagename
    })
  }

  historypage = ()=>{
    console.log("historypage action"+this.state.historyname)
    return (<History ref="history" name={this.state.historyname}/>)
  }
  render() {
    return (
      <div className={styles.home}>
        <div className={styles.header}>
          <div id={styles.contaiter} className="clearfix">
            <div className={styles.welcome}>欢迎访问上海精武体育总会官方网站</div>
            <div className={styles.time}>2018-7-9 星期一农历五月廿六</div>
            <div className={styles.topbanner}>

            </div>
            <div className={styles.menu + ' ' + styles.empty}>
              <ul className={`${styles.nav_bar}`}>
                <li style={{width: '76px'}} className={(this.state.activeIndex === 1)? styles.btnactivity : {} }><button onClick={()=>{
                  this.changeBodyContainer(1)
                }} src="#"></button></li>
                <li style={{width: '110px'}} className={(this.state.activeIndex === 2)? styles.btnactivity : {} }><button onClick={()=>{
                  this.changeBodyContainer(2)
                }} src="#"></button></li>
                <li style={{width: '110px'}} className={(this.state.activeIndex ===3)? styles.btnactivity : {} }><button onClick={()=>{
                  this.changeBodyContainer(3)
                }} src="#"></button></li>
                <li style={{width: '110px'}} className={(this.state.activeIndex === 4)? styles.btnactivity : {} }><button onClick={()=>{
                  this.changeBodyContainer(4)
                }} src="#"></button></li>
                <li style={{width: '110px'}} className={(this.state.activeIndex === 5)? styles.btnactivity : {} }><button onClick={()=>{
                  this.changeBodyContainer(5)
                }} src="#"></button></li>
                <li style={{width: '110px'}} className={(this.state.activeIndex === 6)? styles.btnactivity : {} }><button onClick={()=>{
                  this.changeBodyContainer(6)
                }} src="#"></button></li>
                <li style={{width: '110px'}} className={(this.state.activeIndex === 7)? styles.btnactivity : {} }><button onClick={()=>{
                  this.changeBodyContainer(7)
                }} src="#"></button></li>
                <li style={{width: '110px'}} className={(this.state.activeIndex === 8)? styles.btnactivity : {} }><button onClick={()=>{
                  this.changeBodyContainer(8)
                }} src="#"></button></li>
              </ul>
            </div>

          </div>
        </div>
        <div id={styles.bodycontainer} ref="webcontainer" className="clearfix">

            <History ref="history" name={this.state.historyname} pageindex={this.state.activeIndex}/>

        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
