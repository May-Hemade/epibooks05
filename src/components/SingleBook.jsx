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
import CommentArea from "./CommentArea"
import PostComment from "./PostComment"
import CommentSection from "./CommentSection"

export class SingleBook extends Component {
  state = {
    showComments: false,
  }
  render() {
    return (
      <div>
        <Card>
          <Card.Img
            className="book-img"
            variant="top"
            src={this.props.book.img}
            onClick={() => {
              this.setState({ showComments: !this.state.showComments })
            }}
          />
          <Card.Body>
            <Card.Title className="text-truncate">
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
        {this.state.showComments && (
          <div>
            {/* <CommentArea id={this.props.book.asin}></CommentArea>
            <PostComment id={this.props.book.asin}></PostComment> */}

            <CommentSection
              setLoading={this.props.setLoading}
              id={this.props.book.asin}
            ></CommentSection>
          </div>
        )}
      </div>
    )
  }
}

export default SingleBook
