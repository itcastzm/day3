import React, { Component } from 'react'

const arr = ['HTML Document', ['HTML', 'css'], ['Dom Tree(Dom 树)', 'CSSOM Tree(样式结构体)'], '构建渲染树', '布局渲染树', '绘制渲染树'];
export default class Dom extends Component {

    state={
        list: ['HTML Document']
    }

    handleNext=()=> {
        let { list } = this.state;
        let lt = [];
        if (list.length < 6) {
            lt = arr.slice(0, list.length + 1);
            this.setState({
                list: lt
            });
        }
    }

    handlePre=()=> {
        let { list } = this.state;
        let lt = [];
        if (list.length > 1) {
            lt = arr.slice(0, list.length -1);
            this.setState({
                list: lt
            });
        }
    }

    render() {
        return (
            <div className="container">

            { this.state.list.map((v, i)=> {
                if(typeof v === 'string') {
                    return <div class="level" key={i}><button className="btn">{v}</button></div>
                } else {
                   return(
                   <div class="level"  key={i} > 
                        {
                            v.map((v, i)=>{
                                return <button key={i} className="btn">{v}</button>
                            })
                        }
                    </div>) 
                }

               
            })} 
                <div>
                    { this.state.list.length === 6 ? null : <button onClick={this.handleNext}>下一步</button>}
                    { this.state.list.length === 1 ? null : <button onClick={this.handlePre}>上一步</button>}
                </div>           
            </div>
        )
    }
}
