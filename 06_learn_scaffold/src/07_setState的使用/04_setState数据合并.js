import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "before",
      name: "mike"
    };
  }

  handleClick() {
    // Object.assign({}, prevState, partialState)
    this.setState({
      message: "update"
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.handleClick()}>改变文本</button>
      </div>
    )
  }
}
