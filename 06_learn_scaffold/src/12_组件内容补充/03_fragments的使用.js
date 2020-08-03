import React, { PureComponent, Fragment } from 'react'

export default class App extends PureComponent {
  render() {
    return (
      // <></> 短语法不能添加任何属性
      <Fragment>
        <h2>App</h2>
        <button>按钮</button>
      </Fragment>
    )
  }
}
