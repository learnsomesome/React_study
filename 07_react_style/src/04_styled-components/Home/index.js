import React, { PureComponent } from 'react'

import {HomeWrapped} from "./style";

export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrapped>
        <h2 className="title">Home</h2>
        <p className="content">Home 内容</p>
      </HomeWrapped>
    )
  }
}
