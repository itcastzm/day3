import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div  className="container">


        <h3>我是styled-jsx<span>我是less</span></h3>

        <style jsx> 
          {`

          h3{
              border: none;
              span {
                border: solid 1px black;
              }
            }
        `}
      </style>
      </div>
    )
  }
}
