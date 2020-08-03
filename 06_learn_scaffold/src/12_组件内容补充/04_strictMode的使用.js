import React, { PureComponent, StrictMode } from 'react'

class Home extends PureComponent {
  constructor(props) {
    super(props);
    // 严格模式下 constructor 执行两次
    console.log("Home constructor");
  }

  // 严格模式下报错
  UNSAFE_componentWillMount() {}

  render() {
    return (
      <div>
        {/* 严格模式下报错 */}
        <h2 ref="title">Home</h2>
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home />
        </StrictMode>
      </div>
    )
  }
}
