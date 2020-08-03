import React, { PureComponent } from 'react'

// 定义高阶组件(登录鉴权操作)
function withAuth(WrappedComponent) {
  const NewCpn = props => {
    const {isLogin} = props;
    return isLogin ? <WrappedComponent {...props}/> : <LoginPage />
  }

  NewCpn.displayName = "AuthCpn";
  return NewCpn;
}

class LoginPage extends PureComponent {
  render() {
    return (
      <div>
        LoginPage
      </div>
    )
  }
}

class CartPage extends PureComponent {
  render() {
    return (
      <div>
        CartPage
      </div>
    )
  }
}

const AuthCartPage = withAuth(CartPage);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCartPage isLogin={false}/>
      </div>
    )
  }
}
