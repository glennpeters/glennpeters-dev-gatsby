// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// import '../css/header.css'
import Header from "./header"

const Layout = ({ pageTitle, children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header siteTitle={pageTitle} />
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

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

Layout.propTypes = {
  pageTitle: PropTypes.string,
}

Layout.defaultProps = {
  pageTitle: ``,
}


export default Layout
