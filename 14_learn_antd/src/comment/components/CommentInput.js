import React, { PureComponent } from 'react';
import moment from "moment";

import { Input, Button } from 'antd';

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    }
  }

  render() {
    const { content } = this.state;

    return (
      <div>
        <Input.TextArea value={content} 
                        rows={4} 
                        allowClear
                        onChange={e => this.handleChange(e)}/>
        <Button type="primary"
                onClick={() => this.addComment()} 
                style={{marginTop: 10}}>
          添加评论
        </Button>
      </div>
    )
  }

  handleChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  addComment() {
    const commentInfo = {
      id: moment().valueOf(),
      avatar: "https://avatars2.githubusercontent.com/u/59048270?s=460&u=5422bec011e92d616c8e637439d247fc2df498d1&v=4",
      nickname: "coder_curry",
      datetime: moment(),
      content: this.state.content
    }

    this.props.submitComment(commentInfo);
    
    this.setState({
      content: ""
    })
  }
}
