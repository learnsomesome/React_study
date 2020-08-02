import React, { PureComponent, createRef } from 'react'

class Counter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+1</button>
      </div>
    )
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    
    this.titleEl = null;

    this.counterRef = createRef();
  }

  changeText() {
    /* 1.方式一：字符串(不推荐) */
    this.refs.titleRef.innerHTML = "Bye Bye";
    /* 2.方式二：对象(推荐方式) */
    this.titleRef.current.innerHTML = "Bye!";
    /* 3.方式三：回调函数 */
    this.titleEl.innerHTML = "Hi!";
  }

  handleCounter() {
    this.counterRef.current.increment();
  }

  render() {
    return (
      <div>
        {/* 1.方式一：字符串(不推荐) */}
        <h2 ref="titleRef">Hello React</h2>
        {/* 2.方式二：对象(推荐方式) */}
        <h2 ref={this.titleRef}>Hello React!</h2>
        {/* 3.方式三：回调函数 */}
        <h2 ref={arg => this.titleEl = arg}>Hello</h2>

        <button onClick={() => this.changeText()}>更改文本</button>

        <hr />

        <Counter ref={this.counterRef}/>
        <button onClick={() => this.handleCounter()}>App按钮</button>
      </div>
    )
  }
}
