import React, { useContext, Fragment } from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { newDataContext } from "../../App";

export default function Leftpane({ paperStyle }) {

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
                      <ListItem key={item.level}>
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
}