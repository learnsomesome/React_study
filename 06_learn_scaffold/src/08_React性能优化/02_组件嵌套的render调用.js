import React, { Component } from 'react'

function Header() {
  console.log("Header被调用");
  return <h2>Header组件</h2>
}

class Main extends Component {
  render() {
    console.log("Main render被调用");
    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    );
  }
}

class Banner extends Component {
  render() {
    console.log("Banner render被调用");
    return <h2>Banner组件</h2>
  }
}

function ProductList() {
  return (
    <ul>
      <li>商品列表1</li>    
      <li>商品列表2</li>    
      <li>商品列表3</li>    
      <li>商品列表4</li>    
      <li>商品列表5</li>    
    </ul>
  );
}

function Footer() {
  return <h2>Footer组件</h2>
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    console.log("App render被调用");
    return (
      <div>
        <Header />
        <Main />
        <Footer />
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.handleClick()}>+1</button>
      </div>
    )
  }
}
