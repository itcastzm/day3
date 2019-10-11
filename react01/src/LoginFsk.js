/**
 * 
 * 1. 新建类组件
    2. 在构造函数中创建两个引用
    3. 画jsx 两个输入框   一个按钮
    4. 把引用ref跟表单做绑定
    5. 按钮提交事件回调
 */
// 1. 新建类组件
import React, { Component } from 'react'

export default class LoginFsk extends Component {

    // 2. 在构造函数中创建两个引用
    constructor() {
        super();
        this.nameRef = React.createRef();
        this.pwdRef = React.createRef();
    }

    // props
    state={
        username: 'zhagnsan',
        password: '123456'
    }

    handleClick=()=> {
        console.log(
            this.nameRef.current.value,
            this.pwdRef.current.value
        );
    }

    render() {
        return (
            <div  className="container">
                {/* 3. 画jsx 两个输入框   一个按钮 */}
                {/* 4. 把引用ref跟表单做绑定 */}
                <div>
                    <label  htmlFor="name" >姓名：</label>
                    <input  defaultValue={this.state.username } ref={this.nameRef} id="name" type="text"  />
                </div>
                <div>
                    <label  htmlFor="password" >密码：</label>
                    <input  defaultValue={this.state.password } ref={this.pwdRef}  id="password" type="password"  />
                </div>
                {/* 5. 按钮提交事件回调 */}
                <button onClick={this.handleClick}>登录</button>
            </div>
        )
    }
}
