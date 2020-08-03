import React, { PureComponent, createRef, forwardRef } from 'react'

const Profile = forwardRef((props, ref) => {
  return <h2 ref={ref}>Profile</h2>
})

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.profileRef = createRef();
  }

  fetchRef() {
    console.log(this.profileRef.current);
  }

  render() {
    return (
      <div>
        <Profile ref={this.profileRef}/>
        <button onClick={() => this.fetchRef()}>获取Ref</button>
      </div>
    )
  }
}
