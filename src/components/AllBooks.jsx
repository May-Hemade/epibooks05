import React, { Component } from "react"
import { Col, Container, Row } from "react-bootstrap"
import books from "../books/history.json"
import SingleBook from "./SingleBook"

export class AllBooks extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            {books.map((book) => (
              <Col className="mt-4" lg="3" md="4" xs="6">
                <SingleBook book={book}></SingleBook>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    )
  }
}

export default AllBooks
