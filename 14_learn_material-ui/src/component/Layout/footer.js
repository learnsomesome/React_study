import React, { useState, useEffect, memo } from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default memo(function Footer({tabLabels, tabChange}) {
  console.log("Footer");
  
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    tabChange(value);
  }, [value, tabChange])

  return (
    <div>
      <Tabs value={value}
            aria-label="simple tabs example" 
            variant="fullWidth"
            onChange={handleChange}>
        <Tab label="全部" />
        {
          tabLabels.map((item, index) => <Tab label={item} key={item} />)
        }
      </Tabs>
    </div>
  )
})

