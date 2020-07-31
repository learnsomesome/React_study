import React, { Component } from 'react'
import NavBar from "./NavBar"
import NavBar2 from "./NavBar2"

export default class App extends Component {
  render() {
    return (
      <div>
        { /* 1.标签内部传递：放置于 props.children 中 */ }
        { /* 根据索引值取元素，需要严格按照顺序 */ }
        <NavBar>
          <a href="/">left</a>
          <span>center</span>
          <a href="/">right</a>
        </NavBar>

        { /* 2.标签属性传递：放置于 props 中 */ }
        { /* 根据属性取元素，精确取值 */ }
        <NavBar2 leftSlot={<a href="/">left</a>}
                 centerSlot={<span>center</span>}
                 rightSlot={<a href="/">right</a>}/>
      </div>
    )
  }
}
