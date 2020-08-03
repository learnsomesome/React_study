import React, { PureComponent } from 'react'
import { createPortal } from "react-dom"

class Modal extends PureComponent {
  render() {
    // 将子节点渲染到存在于父组件以外的 DOM 节点
    return createPortal(
      this.props.children,
      document.getElementById("modal")
    )
  }
}

class Home extends PureComponent {
  render() {
    return (
      <h2>Home</h2>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Modal>
          <h2>title</h2>
        </Modal>
      </div>
    )
  }
}
