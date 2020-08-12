import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core"

const useStyles = makeStyles({
  header: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: props => props.color
  }
});

export default function Header() {

  const props = {color: "#fff"};
  const classes = useStyles(props);

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography variant="h6">
          Header
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
