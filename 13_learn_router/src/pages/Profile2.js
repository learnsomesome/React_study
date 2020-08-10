import React, { PureComponent } from 'react'

export default class Profile2 extends PureComponent {
  render() {
    const location = this.props.location;
    const search = location.search;

    return (
      <div>
        <h2>Profile2: {search}</h2>
      </div>
    )
  }
}
