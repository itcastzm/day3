/*

1. 新建连个组件 父组件（需要state）和 子组件
2. 父组件把方法传给 子组件
3. 子组件拿到父组件传过来方法把值传给父组件
4. 父组件接收子组件传来的值 更新到state
*/

// 1. 新建连个组件 父组件（需要state）和 子组件

import React, { Component } from 'react'
//父组件
export default class App extends Component {

    state={
      inpValue: ''
    }

  //父组件定义好接收子组件数据的方法
  getValue=(value)=> {
    this.setState({
      inpValue: value
    });
  }

  render() {
    return (
      <div className="container">
        {/* 2. 父组件把方法传给 子组件 */}
        <Son onSend={this.getValue} />
        
      </div>
    )
  }
}

//子组件
 class Son extends Component {

  handleChange=(e)=> {
    this.props.onSend(e.target.value);
  }

  render() {
    return (
      <div>
        {/* 3. 子组件拿到父组件传过来方法把值传给父组件 */}
        <input   type="text"  onChange={this.handleChange} />
      </div>
    )
  }
}

