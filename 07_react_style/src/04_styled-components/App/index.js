import React, { PureComponent } from "react";

import Home from "../Home";
import Profile from "../Profile";
import Styled, { ThemeProvider } from "styled-components";

// 特性
// 1.继承
// 2.主题

const OneBtn = Styled.button`
  padding: 10px 20px;
  color: red;
  background-color: #fff;
`;

// 继承样式
const TwoBtn = Styled(OneBtn)`
  background-color: #000;
`;

export default class App extends PureComponent {
  render() {
    return (
      // 植入主题
      <ThemeProvider theme={{themeColor: "pink"}}>
        <h2>App</h2>
        <OneBtn>按钮1</OneBtn>
        <TwoBtn>按钮2</TwoBtn>
        <Home />
        <Profile />
      </ThemeProvider>
    )
  }
}
