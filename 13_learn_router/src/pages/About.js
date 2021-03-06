import React, { PureComponent } from 'react';
import { renderRoutes, matchRoutes } from "react-router-config";
import { 
  NavLink
  // Switch, 
  // Route 
} from 'react-router-dom'

export function AboutHistory(props) {
  return <h2>企业成立于2000年，拥有悠久的历史文化</h2>
}

export function AboutCulture(props) {
  return <h2>为客户创造价值的发动机精神</h2>
}

export function AboutContact(props) {
  return <h2>联系方式：xxxxxx</h2>
}

export function AboutJoin(props) {
  return <h2>join us!!!</h2>
}

export default class About extends PureComponent {
  render() {
    const branch = matchRoutes(this.props.route.routes, "/about/culture");
    console.log(branch);

    return (
      <div>
        <NavLink exact to="/about" activeClassName="about-active">企业历史</NavLink>
        <NavLink to="/about/culture" activeClassName="about-active">企业文化</NavLink>
        <NavLink to="/about/contact" activeClassName="about-active">联系我们</NavLink>
        <button onClick={() => this.jumpToJoin()}>加入我们</button>

        {/* <Switch>
          <Route exact path="/about" component={AboutHistory}></Route>
          <Route path="/about/culture" component={AboutCulture}></Route>
          <Route path="/about/contact" component={AboutContact}></Route>
          <Route path="/about/join" component={AboutJoin}></Route>
        </Switch> */}

        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }

  jumpToJoin() {
    this.props.history.push("/about/join");
  }
}
