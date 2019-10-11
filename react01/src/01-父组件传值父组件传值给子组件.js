/*

  1. 新建连个组件 父组件和 子组件
  2. 父组件把值传给 子组件
  3. 子组件拿到父组件传过来的值
*/

// 1. 新建连个组件 父组件和 子组件

import React, { Component } from 'react'
//父组件
export default class App extends Component {

    state={
      inpValue: ''
    }

  render() {
    return (
      <div className="container">
        {/* 2. 父组件把值传给 子组件 */}
        <Son msg="回家吃饭！" />
        
      </div>
    )
  }
}

//子组件
 class Son extends Component {

  render() {
    return (
      <div>
        { this.props.msg }
      </div>
    )
  }
}

