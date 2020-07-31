import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "before"
    };
  }

  componentDidMount() {
    // 使 setState 同步更新方式二
    document.getElementById("btn").addEventListener("click", () => {
      this.setState({
        message: "update"
      })
      console.log(this.state.message);
    })
  }

  handleClick() {
    // 使 setState 同步更新方式一
    setTimeout(() => {
      this.setState({
        message: "update"
      })
      console.log(this.state.message);
    }, 0);
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.handleClick()}>改变文本</button>
        <button id="btn">改变文本2</button>
      </div>
    )
  }
}
