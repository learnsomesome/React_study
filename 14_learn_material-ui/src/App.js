import React, { Fragment, createContext } from 'react';
import {
  Header,
  Content,
  Footer
} from "./component/Layout";
import { tabLabels, tabInfo } from "./mockData";
import { handleTabInfo } from "./utils/handleTabInfo";

export const newDataContext = createContext(Object.entries(handleTabInfo(tabLabels, tabInfo)));

export default function App() {
  
  return (
    <Fragment>
      <Header />
      <Content/>
      <Footer tabLabels={tabLabels}/>
    </Fragment>
  )
  
}
