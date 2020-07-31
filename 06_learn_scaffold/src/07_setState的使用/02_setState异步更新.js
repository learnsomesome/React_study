import React, { Component } from 'react'

class Home extends Component {
  render() {
    return <h2>{this.props.message}</h2>
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "before"
    };
  }

  componentDidUpdate() {
    // 获取异步更新结果方式二
    console.log(this.state.message);
  }

  handleClick() {
    this.setState({
      message: "update"
    }, () => {
      // 获取异步更新结果方式一
      console.log(this.state.message);
    })
    // console.log(this.state.message); // 打印的是修改之前的结果

    // 异步原因
    // 1.批量更新，提升性能
    // 2.保持 state 与 props 的一致性
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.handleClick()}>改变文本</button>
        <Home message={this.state.message}/>
      </div>
    )
  }
}
