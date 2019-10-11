import React, { Component } from 'react'

/**
 * 诗为：
 * 一吕二赵三典韦，四关五马六张飞，
 * 黄许孙太两夏侯（夏侯惇，夏侯渊），二张(张辽，张郃)徐庞甘周魏，
 * 神枪张绣与文颜，虽勇无奈命太悲。三国二十四名将，打末文鸯与姜维。
 */

const list = ['赵云', '关羽',  '马超', '张飞' ,'黄忠', '魏延', '姜维'];
const arr = ['吕布', '赵云', '典韦', '关羽', '马超', '张飞', '黄忠'];
export default class List extends Component {
    state={
        list: list
    }
    handleClick=()=> {
        
        this.setState({
            list: this.state.list === arr ? list : arr
        });
    }
    render() {
        return (
            <div className="container">
                <h2>{this.state.list === arr ? '三国': '蜀国'}名将榜</h2>
                { this.state.list.map((v, i)=> <h3 key={i}>{v}</h3>)}
                <button onClick={this.handleClick} className="btn">改变</button>
            </div>
        )
    }
}


// 1. 批量修改
// 2. 减少Dom修改范围