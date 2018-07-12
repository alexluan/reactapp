import React,{Component} from 'react'
import cssReset from '../../css-reset.css'
import styles from './HistoryCss.css'

import file from '../../sources/a.json'
import abc from '../../sources/a.json'

// http://www.discuz.net/forum.php

class History extends Component {
  constructor(props){
    super(props)

    this.contnet = "this is content"

    this.state = {
      selectedindex: 1
    }
    // this.$nextTick(() => {
    //   this.readFileContent(this.state.selectedindex)
    // })
  }

  componentWillMount () {
    this.file1 = new File(['text1'], file, {type: 'text/plain'});

    this.readFileContent(this.state.selectedindex)

  }

  readFileContent = (index)=>{
    this.contnet = "zong h ui jie sao" + index


     this.setState({
       selectedindex:index
     })


  }


  readJson = ()=>{

  }

  render(){
    // const content = this.contnet;
    const content = abc.content
    console.log(content)
    return (
      <div>
        <div id={styles.homebody} className={cssReset.clearfix}>
          {/*this is history {this.props.name}*/}
          <div className={styles.pageleft}>
            <ul className={styles.list}>
              <li><a className={(this.state.selectedindex === 1)?styles.listactive : {}} onClick={()=>{
                this.readFileContent(1)
              }}>总会介绍</a></li>
              <li><a className={(this.state.selectedindex === 2)?styles.listactive : {}} onClick={()=>{
                this.readFileContent(2)
              }}>创始人</a></li>
              <li><a className={(this.state.selectedindex === 3)?styles.listactive : {}} onClick={()=>{
                this.readFileContent(3)
              }}>领导机构</a></li>
              <li><a className={(this.state.selectedindex === 4)?styles.listactive : {}} onClick={()=>{
                this.readFileContent(4)
              }}>组织结构</a></li>
              <li><a className={(this.state.selectedindex === 5)?styles.listactive : {}} onClick={()=>{
                this.readFileContent(5)
              }}>会旗会徽会歌</a></li>
              <li><a className={(this.state.selectedindex === 6)?styles.listactive : {}} onClick={()=>{
                this.readFileContent(6)
              }}>精武章程</a></li>
            </ul>


          </div>
          <div className={styles.pageright}>
            {"pageindex:--"+this.props.pageindex}
            <div dangerouslySetInnerHTML={{__html: content}}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default History;