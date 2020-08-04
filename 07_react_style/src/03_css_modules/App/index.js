import React, { PureComponent } from "react";
import Home from "../Home";

import AppStyle from "./style.module.css";

export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        <h2 className={AppStyle.title}>App</h2>
        <div>
          <p className={AppStyle.detail}>内容</p>
        </div>
        <Home />
      </div>
    )
  }
}
