import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  render() {
    const pStyle = {
      color: "orange",
      textDecoration: "underline"
    }

    return (
      <div>
        <h2 style={{fontSize: "50px", color: "red"}}>标题</h2>
        <p style={pStyle}>内容</p>
      </div>
    )
  }
}
