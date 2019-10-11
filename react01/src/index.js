import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import List from './demos/List';
import Dom from './demos/Dom';
import Todos from './demos/Todos';

import LoginSk from './LoginSk';
import LoginFsk from './LoginFsk';

// React.createElement()
// console.log(<List />);
console.log((
    <div class="container">
        <h2>蜀国名将榜</h2>
        <h3>赵云</h3>
        <h3>关羽</h3>
        <h3>马超</h3>
        <h3>张飞</h3>
        <h3>黄忠</h3>
        <h3>魏延</h3>
        <h3>姜维</h3>
        <button class="btn">改变</button>
    </div>
))

ReactDOM.render(<App />, document.getElementById('root'));