// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Header from "./header"

import '../css/normalize.css'
import './layout.css'


const Layout = ({ pageTitle, layoutClass, children }) => {
  return (
    <>
      <Header pageTitle={pageTitle} className={layoutClass} />

      <main className={layoutClass}>
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
  layoutClass: PropTypes.string,
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  pageTitle: ``,
  layoutClass: ``,
}


export default Layout
