import React, { Component } from 'react'
import TabControl from "./TabControl"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.tabList = ["流行", "新款", "推荐"];
    this.state = {
      tabContent: "流行"
    };
  }

  tabClick(index) {
    this.setState({
      tabContent: this.tabList[index]
    });
  }

  render() {
    const {tabContent} = this.state;

    return (
      <div>
        <TabControl tabClick={index => this.tabClick(index)} titles={this.tabList}/>
        <h2>{tabContent}</h2>
      </div>
    )
  }
}
