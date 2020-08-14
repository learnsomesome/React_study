import React, { useState, memo, useCallback } from 'react';
import { Grid } from "@material-ui/core";
import LeftPane from "../Exercises/LeftPane";
import RightPane from "../Exercises/RightPane";

const styles = {
  paper: {
    margin: "10px 0",
    padding: 30
  }
}

export default memo(function Content({tabInfo}) {

  const [detail, setDetail] = useState({});

  const handleClick = useCallback(level => {
    const newDetail = tabInfo.find(item => {
      return item.level === level;
    })
    setDetail(newDetail);
  }, [tabInfo])

  return (
    <Grid container spacing={2}>
      <Grid item sm={6}>
        <LeftPane handleClick={handleClick} paperStyle={styles.paper}/>
      </Grid>
      <Grid item sm={6}>
        <RightPane paperStyle={styles.paper} detail={detail}/>
      </Grid>
    </Grid>
  )
})
