import React from 'react'

import { connect } from "react-redux";

import { subAction } from "../store/counter";

function About(props) {

  return (
    <div>
      <hr />
      <h2>About</h2>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={() => props.decrement(1)}>-1</button>
      <button onClick={() => props.decrement(5)}>-5</button>

      <h1>banner</h1>
      <ul>
        {
          props.banner.map(item => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>

      <h1>recommend</h1>
      <ul>
        {
          props.recommend.map(item => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
    </div>
  )

}

const mapStatToProps = state => ({
  counter: state.counterInfo.counter,
  banner: state.listInfo.banner,
  recommend: state.listInfo.recommend
})

const mapDispatchToProps = dispatch => ({
  decrement(num) {
    dispatch(subAction(num));
  }
})

export default connect(mapStatToProps, mapDispatchToProps)(About);
