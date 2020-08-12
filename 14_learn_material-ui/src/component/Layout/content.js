import React from 'react';
import { Grid } from "@material-ui/core";
import LeftPane from "../Exercises/LeftPane";
import RightPane from "../Exercises/RightPane";

const styles = {
  paper: {
    margin: "10px 0",
    padding: 30
  }
}

export default function Content() {

  return (
    <Grid container spacing={2}>
      <Grid item sm={6}>
        <LeftPane paperStyle={styles.paper}/>
      </Grid>
      <Grid item sm={6}>
        <RightPane paperStyle={styles.paper}/>
      </Grid>
    </Grid>
  )
}
