import React, { PureComponent } from 'react'

// 定义高阶组件(生命周期劫持)
function withRenderTime(WrappedComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now();
    }

    componentDidMount() {
      this.endTime = Date.now();
      const interval = this.endTime - this.beginTime;
      console.log(`${WrappedComponent.name}渲染时间:` + interval);
    }

    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}

class Home extends PureComponent {
  render() {
    return <h2>Home</h2>
  }
}

class About extends PureComponent {
  render() {
    return <h2>About</h2>
  }
}

const RenderTimeHome = withRenderTime(Home);
const RenderTimeAbout = withRenderTime(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <RenderTimeHome />
        <RenderTimeAbout />
      </div>
    )
  }
}
