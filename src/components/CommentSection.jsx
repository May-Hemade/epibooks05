import React, { Component } from "react"
import CommentArea from "./CommentArea"
import PostComment from "./PostComment"

export class CommentSection extends Component {
  render() {
    return (
      <div>
        <CommentArea
          setLoading={this.props.setLoading}
          id={this.props.id}
        ></CommentArea>
        <PostComment id={this.props.id}></PostComment>
      </div>
    )
  }
}

export default CommentSection
