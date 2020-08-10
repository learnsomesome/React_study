import React, { PureComponent } from 'react'

export default class Profile3 extends PureComponent {
  render() {
    const location = this.props.location;
    // console.log(location);
    const info = location.state;

    return (
      <div>
        <h2>Profile3: {info.name}</h2>
      </div>
    )
  }
}
