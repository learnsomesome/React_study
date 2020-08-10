import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Button size="small">
          Small
        </Button>
        <Button size="medium">
          Medium
        </Button>
        <Button size="large">
          Large
        </Button>
      </div>
    )
  }
}
