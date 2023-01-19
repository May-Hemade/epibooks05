import React, { Component } from "react"
import { Form, InputGroup } from "react-bootstrap"

export class PostComment extends Component {
  state = {
    commentMain: {
      comment: "",
      rate: "3",
      elementId: this.props.id,
    },
  }

  setComment = (newComment) => {
    console.log(newComment)
    this.setState({
      commentMain: {
        ...this.state.commentMain,
        comment: newComment,
      },
    })
  }

  submitComment = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,

        {
          method: "POST",
          body: JSON.stringify(this.state.commentMain),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M2NzE5MDU3YjMwZDAwMTVkNzU5YjMiLCJpYXQiOjE2NzM5NDk1ODQsImV4cCI6MTY3NTE1OTE4NH0.2d7gSCxqL3b9vDvcnz-ZxmJsG28rK2IOSjlw4blGu2c",
          },
        }
      )
      if (response.ok) {
        alert("data saved successfully")
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
        <InputGroup>
          <InputGroup.Text onClick={this.submitComment}>Enter</InputGroup.Text>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            onChange={(event) => {
              this.setComment(event.target.value)
            }}
          />
        </InputGroup>
      </div>
    )
  }
}

export default PostComment
