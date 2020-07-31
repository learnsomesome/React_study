import React, { Component } from 'react'

function ProfileHeader(props) {
  const {nickName, level} = props;

  return (
    <div>
      <h2>用户名称: {nickName}</h2>
      <h2>用户等级: {level}</h2>
    </div>
  );
}

function Profile(props) {
  return (
    <div>
      {/* 属性展开 Spread Attributes*/}
      <ProfileHeader {...props}/>
      <ul>
        <li>设置1</li>   
        <li>设置2</li>   
        <li>设置3</li>   
      </ul>  
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickName: "Mike",
      level: 3
    };
  }

  render() {
    return (
      <div>
        <Profile {...this.state}/>
      </div>
    )
  }
}
