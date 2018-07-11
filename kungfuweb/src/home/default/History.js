import React,{Component} from 'react'
import styles from './HistoryCss.css'

class History extends Component {
  constructor(props){
    super(props)

  }

  render(){

    return (
      <div>
        <div id={styles.homebody}>
          this is history {this.props.name}
          <h1>一个定义列表：</h1>
          <dl>
            <dt>css网站</dt>
            <dd>网址为www.divcss5.com</dd>
            <dt>div css网站</dt>
            <dd>网址为www.divcss5.com</dd>
            <dt>div+css网站</dt>
            <dd>网址为www.divcss5.com</dd>
          </dl>
        </div>
      </div>
    )
  }
}

export default History;