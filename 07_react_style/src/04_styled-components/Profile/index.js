import React, { PureComponent } from "react";
import Styled from "styled-components";

// 特点
// 1.props穿透
// 2.attrs的使用
// 3.传入state作为props属性

const ProfileInput = Styled.input.attrs({
  placeholder: "请输入",
  bColor: "red"
})`
  border-color: ${props => props.bColor};
  color: ${props => props.color};
`;

export default class Profile extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      color: "purple"
    }
  }

  render() {
    return (
      <div>
        <h2>Profile</h2>
        <ProfileInput type="text" color={this.state.color}/>
      </div>
    )
  }
}
