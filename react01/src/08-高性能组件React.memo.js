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

  constructor() {
    super();
    console.log('App=>constructor')
  }

  handleGetValue=(value)=> {
     this.setState({
       inpValue: value
     });
  }

  handleAdd=()=> {
     let { list , inpValue } = this.state;

     if (inpValue && list.indexOf(inpValue) == -1) {
       let newList = JSON.parse(JSON.stringify(list));
       newList.push(inpValue);
       this.setState({
         list: newList,
         inpValue: ''
       });
     }
  }

  handelDel=(index)=> {
     let { list } = this.state;
     // 深拷贝
     let newList = JSON.parse(JSON.stringify(list));
     // list.splice('索引', '删除几个元素')
     newList.splice(index, 1);
     this.setState({
       list: newList
     });
  }

  componentDidMount() {
    //一般在这个方法里 发ajax请求    只有在这个周期方法里面才能拿到真实Dom节点
   //  Document.querySelectorAll()
    console.log('App=>componentDidMount')
  }



  componentDidUpdate() {
    console.log('App=> componentDidUpdate');
  }

  render() {

   console.log('App=>render')

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


function ListComp (props) {

  console.log('函数式： List');

  return(
    <div>
    { props.list.map((v, i)=> <h4 onClick={() => {  props.onDel(i) } } key={ i } >{v}</h4>)}
  </div>
  );
}

//高阶组件  接收组件返回一个新组件
const List = React.memo(ListComp);