import React, { PureComponent } from 'react'
import classNames from "classnames";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: true
    }
  }

  render() {
    const { isActive }  = this.state;

    return (
      <div>
        <h2 className="foo bar baz">title</h2>
        <h2 className={classNames("foo", "bar", "baz")}>title1</h2>
        <h2 className={classNames({"foo": isActive}, "bar", "baz")}>title2</h2>
        <h2 className={classNames(["foo", "bar", "baz"])}>title3</h2>
        <h2 className={classNames([{"foo": isActive}, "bar", "baz"])}>title4</h2>
      </div>
    )
  }
}
