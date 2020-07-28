import React, { Component } from 'react'

function ChildCpn(props) {
  const {name, age} = props;

  return (
    <h2>{`name: ${name}, age: ${age}`}</h2>
  );
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="小明" age="20"/>
      </div>
    )
  }
}

