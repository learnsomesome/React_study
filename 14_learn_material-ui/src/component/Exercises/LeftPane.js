import React, { useContext, Fragment, memo } from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { newDataContext } from "../../App";

export default memo(function Leftpane({ paperStyle, handleClick }) {

  console.log("Leftpane");
  const newData = useContext(newDataContext);

  return (
    <Paper style={paperStyle}>
      {
        newData.map(info => {
          return (
            <Fragment key={info[0]}>
              <Typography variant="h6">{info[0]}</Typography>
              <List>
                {
                  info[1].map(item => {
                    return (
                      <ListItem button key={item.level} onClick={() => handleClick(item.level)}>
                        <ListItemText>{item.level}</ListItemText>
                      </ListItem>
                    )
                  })
                }
              </List>
            </Fragment>
          )
        })
      }
    </Paper>
  )
})