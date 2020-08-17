import React, { useState } from 'react';
import moment from 'moment';

import { Input, Button } from 'antd';

export default function CommentInput({ submitComment }) {
  const [content, setContent] = useState("");

  const addComment = () => {
    const commentInfo = {
      id: moment().valueOf(),
      avatar: "https://avatars2.githubusercontent.com/u/59048270?s=460&u=5422bec011e92d616c8e637439d247fc2df498d1&v=4",
      nickname: "curry",
      datetime: moment(),
      content
    }
    submitComment(commentInfo);
    setContent("");
  }

  return (
    <div>
      <Input.TextArea rows={4} value={content} onChange={e => setContent(e.target.value)} />
      <Button style={{ marginTop: "10px" }}
        type="primary"
        onClick={addComment}>
        添加评论
      </Button>
    </div>
  )
}
