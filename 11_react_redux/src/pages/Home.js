import React, { PureComponent } from 'react'

import { connect } from "react-redux";

import { addAction } from "../store/counter";
import { getHomeMultidataAction } from "../store/list";

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultidata();
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={() => this.props.increment(1)}>+1</button>
        <button onClick={() => this.props.increment(5)}>+5</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counterInfo.counter
})

const mapDispatchToProps = dispatch => ({
  increment(num) {
    dispatch(addAction(num));
  },
  getHomeMultidata() {
    dispatch(getHomeMultidataAction);
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
