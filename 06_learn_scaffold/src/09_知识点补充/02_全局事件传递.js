import React, { PureComponent } from 'react'

import { EventEmitter } from "events"

// 事件总线
const eventBus = new EventEmitter();

class Home extends PureComponent {
  componentDidMount() {
    // 监听事件
    eventBus.addListener("sayHi", this.handleListener);
  }

  componentWillUnmount() {
    // 取消监听
    eventBus.removeListener("sayHi", this.handleListener);
  }

  handleListener(msg, age) {
    // 监听器
    console.log(msg, age);
  }

  render() {
    return <h2>Home</h2>
  }
}

class Profile extends PureComponent {
  handleEmit() {
    // 发射事件
    eventBus.emit("sayHi", "Hi", 12);
  }

  render() {
    return <button onClick={() => this.handleEmit()}>btn</button>
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    )
  }
}
