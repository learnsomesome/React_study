import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      valid: ""
    }
  }

  handleSubmit(e) {
    const { username, password, valid } = this.state;
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(valid);
  }

  handleChange(e) {
    this.setState({
      // 计算属性名
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label htmlFor="username">
              用户：<input type="text"
                          id="username"
                          name="username"
                          value={this.state.username}
                          onChange={(e) => this.handleChange(e, "username")}/>
            </label>
          </div>
          <div>
            <label htmlFor="password">
              密码：<input type="text"
                          id="password" 
                          name="password"
                          value={this.state.password}
                          onChange={(e) => this.handleChange(e, "password")}/>
            </label>
          </div>
          <div>
            <label htmlFor="valid">
              验证码：<input type="text"
                          id="valid"
                          name="valid"
                          value={this.state.valid}
                          onChange={(e) => this.handleChange(e, "valid")}/>
            </label>
          </div>
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }
}
