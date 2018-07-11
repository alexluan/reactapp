import React,{Component} from 'react'
import styles from './FooterCss.css'

class Footer extends Component {
  render(){
    return (<div className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.address}>地址：上海市虹口区四川北路1702弄30号     邮政编码：200080      E-mail:chinwoo@citiz.net     总会电话：021-63241162</p>
        <p className={styles.address}>Copyright by 上海精武体育总会 & made by 虎扑体育     沪ICP备10014512号</p>
      </div>
    </div>)
  }
}

export default Footer