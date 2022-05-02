// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Header from "./header"

import './layout.css'


const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header pageTitle={pageTitle} />

      <main>
        <div className="container">
          {children}
        </div>
      </main>

      <footer>
        <div className="container">
          © {new Date().getFullYear()} Glenn Peters
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  pageTitle: ``,
}


export default Layout
