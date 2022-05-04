import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.css'

const Header = ({ siteTitle }) => (
    <header>
        <div className="container">
            <h1>
                <Link
                    to="/"
                >
                    {siteTitle}
                    {/* : {pageTitle} */}
                </Link>
            </h1>
            <nav>
                <div className="nav-inner">
                    <Link
                        to="/"
                    >
                        About
                    </Link>
                    <Link
                        to="/portfolio"
                    >
                        Portfolio
                    </Link>
                    <Link
                        to="/resume"
                    >
                        R&eacute;sum&eacute;
                    </Link> 
                </div>
            </nav>
        </div>
    </header>
)

Header.propTypes = {
    // pageTitle: PropTypes.string,
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    // pageTitle: ``,
    siteTitle: `Glenn Peters`,
}

export default Header
