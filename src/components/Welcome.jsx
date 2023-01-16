import React, { Component } from "react"
import { Button, Jumbotron } from "react-bootstrap"

export class Welcome extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Epi BOOK</h1>
          <p>Making Your Book dream Come True</p>
          <p>
            <Button variant="primary">Shop Now</Button>
          </p>
        </Jumbotron>
      </div>
    )
  }
}

export default Welcome
