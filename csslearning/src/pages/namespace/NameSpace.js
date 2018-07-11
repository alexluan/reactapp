
import React,{Component} from 'react'
import styles from './NameSpaceCss.css'
import immage from '../../sourceimg/hd-bg.jpg'

class NameSpace extends Component {
  render(){
    return(
      <div id={styles.container}>



        <div className={styles.son}>{"https://www.cnblogs.com/youthsnail/p/8996251.html"}</div>
        <img className={styles.img} src={immage }/>
        <div className={styles.son}>{"\\node_modules\\react-scripts\\config\\webpack.config.dev.js"}</div>
        <div className={styles.son}>{"然后找到如下代码，新增一个参数modules：true就可以了"}</div>

        <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
          <li>item4</li>
          <li>item5</li>
        </ul>

      </div>

    )
  }
}

export default NameSpace