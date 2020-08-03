import React, { PureComponent } from 'react'

// 定义高阶组件(不修改原有代码情况下，添加新的props)
function enhanceRegionProps(WrappedComponent, otherProps) {
  return props => {
    return <WrappedComponent {...props} {...otherProps}/>
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home：{`昵称：${this.props.name} 等级：${this.props.level} 地区：${this.props.region}`}</h2>
      </div>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About：{`昵称：${this.props.name} 等级：${this.props.level} 地区：${this.props.region}`}</h2>
      </div>
    )
  }
}

const EnhanceHome = enhanceRegionProps(Home, {region: "中国"});
const EnhanceAbout = enhanceRegionProps(About, {region: "美国"});

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <EnhanceHome name="Curry" level={10}/>
        <EnhanceAbout name="Kobe" level={100}/>
      </div>
    )
  }
}
