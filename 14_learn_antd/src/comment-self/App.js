import React, { useState } from 'react';

import CommentInput from "./components/CommentInput";
import CommentItem from "./components/CommentItem";

export default function App() {
  const [commentList, setCommentList] = useState([]);

  const submitComment = info => {
    console.log("add");
    setCommentList([...commentList, info]);
  }

  const deleteComment = index => {
    console.log("delete");
    const newCommentList = [...commentList];
    newCommentList.splice(index, 1);
    setCommentList(newCommentList);
  }

  return (
    <div style={{width: "500px", padding: "20px"}}>
      {
        commentList.map((item, index) => {
          return <CommentItem key={item.id} commentInfo={item} deleteComment={() => deleteComment(index)}/>
        })
      }
      <CommentInput submitComment={info => submitComment(info)}/>
    </div>
  )
}
