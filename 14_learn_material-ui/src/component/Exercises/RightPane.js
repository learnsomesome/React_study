import React, { Fragment, memo } from 'react';
import { Paper, Typography } from "@material-ui/core";

export default memo(function RightPane({ paperStyle, detail }) {
  console.log("RightPane");

  return (
    <Paper style={paperStyle}>
      {
        Object.keys(detail).length !== 0
        ? <Fragment>
            <Typography variant="h6">内容：{detail.content}</Typography>
            <Typography variant="body1">id：{detail.id}</Typography>
            <Typography variant="overline">级别：{detail.level}</Typography>
          </Fragment>
        : <Fragment>
            <Typography variant="h6">Welcome</Typography>
          </Fragment>
      }
    </Paper>
  )
})
