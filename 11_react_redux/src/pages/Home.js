import React, { PureComponent } from 'react'

import axios from "axios";

import { connect } from "react-redux";

import { 
  addAction,
  changeBannerAction,
  changeRecommendAction
} from "../store/actionCreators"; 

class Home extends PureComponent {
  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata"
    }).then(res => {
      const data = res.data.data;
      this.props.changeBanner(data.banner.list);
      this.props.changeRecommend(data.recommend.list);
    })
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
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  increment(num) {
    dispatch(addAction(num));
  },
  changeBanner(banner) {
    dispatch(changeBannerAction(banner));
  },
  changeRecommend(recommend) {
    dispatch(changeRecommendAction(recommend));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
