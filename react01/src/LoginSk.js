/**
 *  1. 新建类组件
    2. 声明state
    3. 画jsx  两个输入框   一个按钮
    4. 实现两个输入框 受控表单
    5. 按钮提交事件回调
 * 
 */
// 1. 新建类组件
import React, { Component } from 'react'

export default class LoginSk extends Component {
    // 2. 声明state
    state={
        password:'123456',
        username: 'zhangsan'
    }

    handleUsername=(e)=> {
        this.setState({
            username: e.target.value
        });
    }

    handlePassword=(e)=> {
        this.setState({
            password: e.target.value
        });
    }

    handleClick=()=> {
        console.log(this.state);
    }

    render() {
        return (
            <div  className="container">
                {/* 3. 画jsx  两个输入框   一个按钮 */}
                {/* 4. 实现两个输入框 受控表单 */}
                <div>
                    <label  htmlFor="name" >姓名：</label>
                    <input value={this.state.username}  onChange={this.handleUsername} id="name" type="text"  />
                </div>
                <div>
                    <label  htmlFor="password" >密码：</label>
                    <input  value={this.state.password}  onChange={this.handlePassword} id="password" type="password"  />
                </div>
                {/* 5. 按钮提交事件回调 */}
                <button onClick={this.handleClick}>登录</button>
            </div>
        )
    }
}