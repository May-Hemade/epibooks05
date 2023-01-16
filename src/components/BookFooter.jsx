import React from "react"
import { Container } from "react-bootstrap"

function BookFooter() {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            BOOK SHOP
          </a>
        </div>
      </footer>
    </div>
  )
}

export default BookFooter
