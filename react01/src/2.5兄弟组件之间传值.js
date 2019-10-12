/*

1. 新建连个组件 父组件（需要state）和 两个子组件
2. 父组件把方法传给 子组件 A   把值传给子组件B
3. 子组件A拿到父组件传过来方法把值传给父组件
4. 父组件接收子组件A传来的值 更新到state
5. 子组件B拿到父组件传来的值
*/

// 1. 新建连个组件 父组件（需要state）和 两个子组件

import React, { Component } from 'react'
//父组件
export default class App extends Component {

    state={
      inpValue: 'a'
    }

    // 4. 父组件接收子组件A传来的值 更新到state
  getValue=(value)=> {
    this.setState({
      inpValue: value
    });
  }

  render() {
    return (
      <div className="container">
      {/* 2. 父组件把方法传给 子组件 A   把值传给子组件B */}
        <Son onSend={this.getValue} />
        <SonB msg={ this.state.inpValue }  />
        
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
       {/* 3. 子组件A拿到父组件传过来方法把值传给父组件 */}
        <input   type="text"  onChange={this.handleChange} />
      </div>
    )
  }
}

//函数式组件拿到props 方法 通过形参拿到props
function SonB(props) {

  return (
    <div>
      {/* 5. 子组件B拿到父组件传来的值 */}
      { props.msg }
    </div>
  )
}