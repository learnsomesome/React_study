import React, { PureComponent } from 'react'
import CommentItem from './components/CommentItem'
import CommentInput from './components/CommentInput'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      commentList: []
    }
  }

  render() {
    return (
      <div style={{width: 500, padding: 20}}>
        {
          this.state.commentList.map((item, index) => {
            return <CommentItem key={item.id} 
                                comment={item}
                                deleteComment={() => this.deleteComment(index)}/>
          })
        }
        <CommentInput submitComment={info => this.submitComment(info)}/>
      </div>
    )
  }

  submitComment(info) {
    this.setState({
      commentList: [...this.state.commentList, info]
    })
  }

  deleteComment(index) {
    const newCommentList = [...this.state.commentList];
    newCommentList.splice(index, 1);
    this.setState({
      commentList: newCommentList
    })
  }
}
