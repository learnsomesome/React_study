import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.usernameRef = createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    // 通过 ref 获取 value
    console.log(this.usernameRef.current.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户：<input type="text"
                         id="username"
                         ref={this.usernameRef}/>
          </label>
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }
}
