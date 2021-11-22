import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Router, Routes } from "react-router-dom"
import { ReactSpring } from "./components/ReactSpring"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter>
      {/* <Router> */}
        {/* <Routes> */}
          <ReactSpring />
        {/* </Routes> */}
      {/* </Router> */}
    </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

