export function handleTabInfo(tabLabels, tabInfo) {
  const tabLevel = tabLabels.reduce((preVal, item) => {
    return {
      ...preVal,
      [item]: []
    }
  }, {})
  
  tabInfo.forEach(item => {
    tabLevel[item.label].push(item);
  })

  return tabLevel;
}