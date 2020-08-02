import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      isOk: false
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.username);
    console.log(this.state.isOk);
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleCheck(e) {
    this.setState({
      isOk: e.target.checked
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户：<input type="text"
                         id="username" 
                         value={this.state.username}
                         onChange={(e) => this.handleChange(e)}/>
          </label>
          <hr />
          <label htmlFor="isOk">
            yes? <input type="checkbox"
                        name="isOk"
                        id="isOk"
                        checked={this.state.isOk}
                        onChange={(e) => this.handleCheck(e)}/>
          </label>
          <hr />
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }
}
