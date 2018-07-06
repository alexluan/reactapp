
import React,{Component} from 'react'
import styles from './NameSpaceCss.css'

class NameSpace extends Component {
  render(){
    return(
      <div id={styles.container}>
        {"https://www.cnblogs.com/youthsnail/p/8996251.html"}<p/>
        {"\\node_modules\\react-scripts\\config\\webpack.config.dev.js"}<p/>
        {"然后找到如下代码，新增一个参数modules：true就可以了"}<p/>
      </div>
    )
  }
}

export default NameSpace