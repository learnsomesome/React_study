import React, { PureComponent, memo } from 'react'

const MemoHeader = memo(function Header() {
  console.log("Header被调用");
  return <h2>Header组件</h2>
})

class Main extends PureComponent {
  render() {
    console.log("Main render被调用");
    return (
      <div>
        <Banner />
        <MemoProductList />
      </div>
    );
  }
}

class Banner extends PureComponent {
  render() {
    console.log("Banner render被调用");
    return <h2>Banner组件</h2>
  }
}

const MemoProductList = memo(function ProductList() {
  console.log("ProductList被调用");
  return (
    <ul>
      <li>商品列表1</li>    
      <li>商品列表2</li>    
      <li>商品列表3</li>    
      <li>商品列表4</li>    
      <li>商品列表5</li>    
    </ul>
  );
})

const MemoFooter = memo(function Footer() {
  console.log("Footer被调用");
  return <h2>Footer组件</h2>
})

export default class App extends PureComponent {
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
        <MemoHeader />
        <Main />
        <MemoFooter />
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.handleClick()}>+1</button>
      </div>
    )
  }
}
