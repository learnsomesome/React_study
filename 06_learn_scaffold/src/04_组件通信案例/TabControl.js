import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class TabControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  itemClick(index) {
    const {tabClick} = this.props;
    this.setState({
      currentIndex: index
    });
    tabClick(index);
  }

  render() {
    const {titles} = this.props;
    const {currentIndex} = this.state;

    return (
      <div className="tab-control">
        {
          titles.map((item, index) => {
          return (
            <div className={"tab-item " + (currentIndex === index ? "active" : "")}
                 onClick={() => this.itemClick(index)}
                 key={item}>
              <span>{item}</span>
            </div>
          );
          })
        }
      </div>
    )
  }
}

TabControl.propTypes = {
  titles: PropTypes.array.isRequired
}
