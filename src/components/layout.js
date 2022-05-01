// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Header from "./header"

import './layout.css'


const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header pageTitle={pageTitle} />

      <div className="page-layout page-wide">
        <main>{children}</main>

        <footer>
          <div className="page-wide">
            © {new Date().getFullYear()} Glenn Peters
          </div>
        </footer>
      </div>
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
