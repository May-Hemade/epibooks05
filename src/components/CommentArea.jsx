import React, { Component } from "react"
import { Card, ListGroup } from "react-bootstrap"

export class GetComment extends Component {
  state = {
    comments: [],
  }

  getComments = async () => {
    try {
      // start loading
      this.props.setLoading(true, false)
      // no error

      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M2NzE5MDU3YjMwZDAwMTVkNzU5YjMiLCJpYXQiOjE2NzM5NDk1ODQsImV4cCI6MTY3NTE1OTE4NH0.2d7gSCxqL3b9vDvcnz-ZxmJsG28rK2IOSjlw4blGu2c",
          },
        }
      )

      if (response.ok) {
        this.props.setLoading(false, false)
        // no error

        const data = await response.json()
        this.setState({ comments: data })
        console.log(data)
      } else {
        // error appears
        this.props.setLoading(false, true)
        console.log("error while fetching")
      }
    } catch (e) {
      // stop loading

      this.props.setLoading(false, true)

      // error appears
      console.log(e)
    }
  }
  componentDidMount = () => {
    this.getComments()
  }
  deleteComment = async (commentId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M2NzE5MDU3YjMwZDAwMTVkNzU5YjMiLCJpYXQiOjE2NzM5NDk1ODQsImV4cCI6MTY3NTE1OTE4NH0.2d7gSCxqL3b9vDvcnz-ZxmJsG28rK2IOSjlw4blGu2c",
          },
        }
      )
      if (response.ok) {
        this.getComments()
      } else {
        console.log("error while deleting")
      }
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    return (
      <div>
        <Card>
          <Card.Header>Featured</Card.Header>
          <ListGroup variant="flush">
            {this.state.comments.map((comment) => (
              <ListGroup.Item key={comment._id}>
                {comment.comment}
                <button onClick={() => this.deleteComment(comment._id)}>
                  🗑️
                </button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>
    )
  }
}

export default GetComment
