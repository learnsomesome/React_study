import React, { PureComponent, Fragment } from 'react';
import {
  Header,
  Content,
  Footer
} from "./component/Layout";

export default class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <Content />
        <Footer />
      </Fragment>
    )
  }
}
