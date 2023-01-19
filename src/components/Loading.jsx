import React, { Component } from "react"
import { Spinner } from "react-bootstrap"

export class Loading extends Component {
  render() {
    return (
      <div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }
}
export default Loading
