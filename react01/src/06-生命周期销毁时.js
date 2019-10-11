/*

1. 新建一个父组件  一个子组件
2. 父组件中使用子组件  
3. 父组件新建state  存储一个布尔值
4. 父组件有一个按钮  点按钮  把布尔值置非
*/

import React, { Component } from 'react'

// 1. 新建一个父组件  一个子组件
export default class App extends Component {
  // 3. 父组件新建state  存储一个布尔值
  state={
    show: true
  }

  handleClick=()=> {
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    return (
      <div className="container">
        {/* 4. 父组件有一个按钮  点按钮  把布尔值置非 */}
        <button onClick={this.handleClick}>销毁</button>
        {/* 2. 父组件中使用子组件  */}
        { this.state.show  ? <Son/>  : null }
        
      </div>
    )
  }
}

class Son extends Component {

componentWillUnmount() {
  console.log('componentWillUnmount');
}

  render() {
    return (
      <div>
          我是子组件
      </div>
    )
  }
}

