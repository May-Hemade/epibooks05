import logo from "./logo.svg"
import "./App.css"
import BookNav from "./components/Nav"
import BookFooter from "./components/BookFooter"
import Welcome from "./components/Welcome"
import AllBooks from "./components/AllBooks"

function App() {
  return (
    <div className="App">
      <BookNav></BookNav>
      <Welcome></Welcome>
      <AllBooks></AllBooks>
      <BookFooter></BookFooter>
    </div>
  )
}

export default App
