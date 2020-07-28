import React, { Component } from 'react'
import PropTypes from "prop-types"

function ChildCpn(props) {
  const {names} = props;

  return (
    <div>
      <ul>
        {
          names.map(item => <li>{item}</li>)
        }
      </ul>
    </div>
  );
}

// 类型验证
ChildCpn.propTypes = {
  names: PropTypes.array.isRequired
}

// 默认值
ChildCpn.defaultProps = {
  names: ["mike", "jack"]
}

export default class App extends Component {
  // 类组件属性验证和默认值
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div>
        <ChildCpn />
      </div>
    )
  }
}

