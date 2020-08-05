import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import "./TransitionGroup.css";

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      names: ["mike", "tom"]
    }
  }

  render() {
    return (
      <div>
        <TransitionGroup>
          {
            this.state.names.map((item, index) => {
              return (
                <CSSTransition key={item} timeout={500} classNames="item">
                  <div>
                    {item}
                    <button onClick={() => this.removeName(index)}>删除当前名字</button>
                  </div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={() => this.addName()}>添加名字</button>
      </div>
    )
  }

  addName() {
    this.setState({
      names: [...this.state.names, "jack"]
    })
  }

  removeName(index) {
    this.setState({
      names: this.state.names.filter((item, indey) => index !== indey)
    })
  }
}
