import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        {this.props.name}
      </div>
    )
  }
}

/* function enhanceComponent(WrappedComponent) {
  // 定义方式1
  class NewComponent extends PureComponent {
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }

  // 组件名称改写
  NewComponent.displayName =  "Curry";

  return NewComponent; 

  // 定义方式2
  const NewComponent = class extends PureComponent {
    ...
  }

  return NewComponent;

  // 定义方式3(匿名类)
  return class extends PureComponent {
    ...
  }
} */

function enhanceComponent2(WrappedComponent) {
  // 定义方式1
  /* return function NewComponent(props) {
    return <WrappedComponent {...props}/>
  } */

  // 定义方式2
  /* const NewComponent = props => {
    return <WrappedComponent {...props}/>
  }

  return NewComponent; */

  // 定义方式3(匿名函数)
  return props => {
    return <WrappedComponent {...props}/>
  }
}

const EnhanceComponent = enhanceComponent2(App);

export default EnhanceComponent;