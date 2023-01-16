import { Button, Card } from "react-bootstrap"

// function SingleBook(props) {
//   return (
//     <div>
//       <Card>
//         <Card.Img className="book-img" variant="top" src={props.book.img} />
//         <Card.Body>
//           <Card.Title className="text-truncate">{props.book.title}</Card.Title>
//         </Card.Body>
//       </Card>
//     </div>
//   )
// }

// export default SingleBook

import React, { Component } from "react"

export class SingleBook extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Img
            className="book-img"
            variant="top"
            src={this.props.book.img}
          />
          <Card.Body>
            <Card.Title className="text-truncate">
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default SingleBook
