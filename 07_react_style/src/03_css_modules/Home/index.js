import React, { PureComponent } from 'react';

import HomeStyle from "./style.module.css";

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <h2 className={HomeStyle.title}>Home</h2>
      </div>
    )
  }
}
