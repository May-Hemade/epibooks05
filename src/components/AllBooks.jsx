import React, { Component } from "react"
import { Alert, Col, Container, Row } from "react-bootstrap"
import books from "../books/history.json"
import Loading from "./Loading"
import SingleBook from "./SingleBook"

export class AllBooks extends Component {
  state = {
    loading: false,
    error: false,
  }

  setLoading = (value, error) => {
    this.setState({
      loading: value,
      error: error,
    })
  }

  render() {
    return (
      <div>
        <Container>
          <div>
            {this.state.loading && <Loading />}
            {this.state.error && (
              <div variant="danger">Give it a click if you like.</div>
            )}
          </div>
          <Row>
            {books.map((book) => (
              <Col className="mt-4" lg="3" md="4" xs="6" key={book.asin}>
                <SingleBook
                  setLoading={this.setLoading}
                  book={book}
                ></SingleBook>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    )
  }
}

export default AllBooks
