/**
 * 
 * 1. 新建三个组件  App  Input  List
    2. App 使用 Input  List  同时新建state
    3. App 传一个接收Input输入值的方法  同时还传一个响应组件Input 按钮点击事件的方法   同时把inpValue传给Input组件
    4. App list值给到List组件
    5. App传一个方法给到List 删除List元素
 */

// 1. 新建三个组件  App  Input  List
 import React, { Component } from 'react'
 
 export default class App extends Component {

   state  = {
      list: ['吃饭', '睡觉', '上课'],
      inpValue:''
   }

   handleGetValue=(value)=> {
      this.setState({
        inpValue: value
      });
   }

   handleAdd=()=> {
      let { list , inpValue } = this.state;

      if (inpValue && list.indexOf(inpValue) == -1) {
        list.push(inpValue);
        this.setState({
          list,
          inpValue: ''
        });
      }
   }

   handelDel=(index)=> {
      let { list } = this.state;
      // list.splice('索引', '删除几个元素')
      list.splice(index, 1);
      this.setState({
        list
      });
   }

   render() {
     return (
       <div className="container">
         {/* 2. App 使用 Input  List  同时新建state */}
         {/* 3. App 传一个接收Input输入值的方法  同时还传一个响应组件Input 按钮点击事件的方法   同时把inpValue传给Input组件 */}
         <Input   
          onGetValue={this.handleGetValue}
          onAdd={ this.handleAdd }
          value={ this.state.inpValue }
         />
         {/* 4. App list值给到List组件 */}
         {/* 5. App传一个方法给到List 删除List元素 */}
         <List list={ this.state.list } 
         
          onDel={this.handelDel}
         />
       </div>
     )
   }
 }

//新建Input组件
 class Input extends Component {

  handleChange=(e)=> {
    this.props.onGetValue(e.target.value);
  }

  handleClick=(e)=> {
    this.props.onAdd();
  }

   render() {
     return (
       <div>
         <input value={this.props.value } onChange={this.handleChange}  type="text" />
         <button onClick={this.handleClick}>todo</button>
       </div>
     )
   }
 }
 
//  新建List
  class List extends Component {

  handlClick(index) {
    this.props.onDel(index);
  }
   render() {
     return (
       <div>
         { this.props.list.map((v, i)=> <h4 onClick={this.handlClick.bind(this, i)} key={ i } >{v}</h4>)}
       </div>
     )
   }
 }
 
 