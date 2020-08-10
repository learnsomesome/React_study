import React, { PureComponent } from 'react';
import { renderRoutes } from "react-router-config";

import routes from "./router";

import {
  // Route,
  NavLink,
  // Switch,
  withRouter
} from "react-router-dom";

import "./App.css";

/* import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import User from "./pages/User";
import NoMatch from "./pages/NoMatch";
import Login from './pages/Login';
import Product from './pages/Product';
import Profile2 from './pages/Profile2';
import Profile3 from './pages/Profile3'; */

class App extends PureComponent {

  render() {
    const id = 100;
    /* const info = {
      name: "curry",
      age: 18
    } */

    return (
      <div>

        <NavLink exact to="/" activeClassName="link-active">主页</NavLink>
        <NavLink to="/about" activeClassName="link-active">关于</NavLink>
        <NavLink to={`/profile/${id}`} activeClassName="link-active">我的</NavLink>
        {/* <NavLink to="/profile2?name=why&age=18" activeClassName="link-active">我的2</NavLink>
        <NavLink to={{
                  pathname: "/profile3",
                  search: "?name=mike",
                  state: info,
                  query: info
                 }} 
                 activeClassName="link-active">
          我的3
        </NavLink> */}
        <NavLink to="/user" activeClassName="link-active">用户</NavLink>
        {/* <button onClick={() => this.jumpToProduct()}>商品</button> */}

        {/* <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/profile/:id" component={Profile}></Route>
          <Route path="/profile2" component={Profile2}></Route>
          <Route path="/profile3" component={Profile3}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/product" component={Product}></Route>
          <Route component={NoMatch}></Route>
        </Switch> */}

        {renderRoutes(routes)}
      </div>
    )
  }

  jumpToProduct() {
    console.log(this.props.history);
    this.props.history.push("/product");
  }
}

// 普通组件获取history、location、match对象
export default withRouter(App);