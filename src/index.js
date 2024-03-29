import React from "react"
import ReactDOM from "react-dom"
import "semantic-ui-css/semantic.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/fonts.css"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
)
