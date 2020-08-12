import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Footer({tabLabels}) {
  
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value}
            aria-label="simple tabs example" 
            variant="fullWidth"
            onChange={handleChange}>
        {
          tabLabels.map((item, index) => <Tab label={item} key={item}/>)
        }
      </Tabs>
    </div>
  )
}

