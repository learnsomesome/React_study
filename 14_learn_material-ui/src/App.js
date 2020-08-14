import React, { Fragment, createContext, useState, useCallback } from 'react';
import {
  Header,
  Content,
  Footer
} from "./component/Layout";
import { tabLabels, tabInfo } from "./mockData";
import { handleTabInfo } from "./utils/handleTabInfo";

export const newDataContext = createContext();

const initData = Object.entries(handleTabInfo(tabLabels, tabInfo));

export default function App() {
  
  const [leftPaneContent, setLeftPaneContent] = useState(initData);

  const tabChange = useCallback(tabValue => {
    const newData = [];
    if (tabValue !== 0) {
      newData.push(initData[tabValue - 1]);
      setLeftPaneContent(newData);
    } else {
      setLeftPaneContent(initData);
    }
  }, [])

  return (
    <Fragment>
      <Header />
      <newDataContext.Provider value={leftPaneContent}>
        <Content tabInfo={tabInfo} />
      </newDataContext.Provider>
      <Footer tabLabels={tabLabels} tabChange={tabChange}/>
    </Fragment>
  )
  
}
