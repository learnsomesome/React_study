import React from 'react';

import { Comment, Avatar, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export default function CommentItem({ commentInfo, deleteComment }) {
  const { avatar, nickname, datetime, content } = commentInfo;

  return (
    <Comment
      author={<a href="/#">{nickname}</a>}
      avatar={
        <Avatar src={avatar} alt={nickname}/>
      }
      content={<p>{content}</p>}
      datetime={
        <Tooltip title={datetime.format('YYYY-MM-DD HH:mm:ss')}>
          <span>{datetime.fromNow()}</span>
        </Tooltip>
      }
      actions={[
        <span onClick={deleteComment}><DeleteOutlined />删除评论</span>
      ]}
    />
  )
}
