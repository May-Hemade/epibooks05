import "./App.css"
import BookNav from "./components/Nav"
import BookFooter from "./components/BookFooter"
import Welcome from "./components/Welcome"
import AllBooks from "./components/AllBooks"
import { Row } from "react-bootstrap"
import CommentSection from "./components/CommentSection"

function App() {
  return (
    <div className="App">
      <BookNav></BookNav>
      <Welcome></Welcome>
      {/* <Row>
        <Col lg={8}> */}
      <AllBooks></AllBooks>
      {/* </Col>
        <Col lg={4}>
          <CommentSection></CommentSection>
        </Col>
      </Row> */}
      <BookFooter></BookFooter>
    </div>
  )
}

export default App
