import React, { PureComponent } from 'react'

export default class Profile extends PureComponent {
  render() {
    const match = this.props.match;
    const id = match.params.id;

    return (
      <div>
        <h2>Profile：{id}</h2>
      </div>
    )
  }
}
