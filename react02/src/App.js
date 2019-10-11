import React, { Component } from 'react';
import AppCls from './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h3 className={AppCls.myBorder} >我是css模块化</h3>
      </div>
    )
  }
}

