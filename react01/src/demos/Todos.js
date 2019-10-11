import React, { Component } from 'react'

export default class Todos extends Component {
    state={
        list: ['吃饭', '睡觉', '上课'],
        inpValue: ''
    }

    handleChange=(value)=> {
        this.setState({
            inpValue: value
        });
    }

    handleAdd=()=> {
        let { list , inpValue } = this.state;
        if (inpValue) {
            list.push(inpValue);
            this.setState({
                list,
                inpValue: ''
            });
        }
    }

    handleDel=(index)=> {
        let { list } = this.state;
        list.splice(index, 1);
        this.setState({
            list
        });
    }

    render() {
        return (
            <div className="container">
                <Input value={ this.state.inpValue } onAdd={this.handleAdd} onChange={this.handleChange} />
                <List list={this.state.list }  onDel={this.handleDel} />                
            </div>
        )
    }
}

function List (props) {

    return(
        <React.Fragment>
            { props.list.map((v, i)=> <h4 key={i} onClick={()=> {props.onDel(i)} } >{v}</h4>)}
        </React.Fragment>
    )
}

class Input extends Component {

    handleChange=(e)=> {
        this.props.onChange(e.target.value);
    }
    handleClick=()=> {
        this.props.onAdd();
    }

    render() {
        return(
        <React.Fragment>
            <input value={this.props.value} type="text" onChange={this.handleChange}  />
            <button onClick={this.handleClick} >todo</button>
        </React.Fragment>)
    }
}
