import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectVal: "apple"
    }
  }

  handleSelect(e) {
    this.setState({
      selectVal: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="selectFruits">
            水果：
            <select name="fruits"
                    id="selectFruits"
                    value={this.state.selectVal}
                    onChange={e => this.handleSelect(e)}>
              <option value="apple">苹果</option>
              <option value="banana">香蕉</option>
              <option value="orange">橘子</option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}
