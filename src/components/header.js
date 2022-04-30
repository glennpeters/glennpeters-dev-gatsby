import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// import '../css/header.css'

const Header = ({ pageTitle }) => (
    <>
        <h1>
            <Link
                to="/"
            >
                Home: {pageTitle}
            </Link>
        </h1>
        <nav>
            <div className="nav-inner">
                <Link
                    to="/about"
                >
                    About
                </Link> | 
                <Link
                    to="/portfolio"
                >
                    Portfolio
                </Link> | 
                <Link
                    to="/resume"
                >
                    R&eacute;sum&eacute;
                </Link> 
            </div>
        </nav>
    </>
)

// const Wrapper = styled.div`
//   input[type='radio'] {
//     margin: 0;
//     opacity: 0;
//     width: 0;
//     height: 0;
//     padding: 0;
//     background-color: red;
//   }
// `;

// const Header = ({ siteTitle }) => (
//   <header>
//     <div className="page-wide">
//       <h1>
//         <Link
//           to="/"
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//       <nav>
//         <div className="nav-inner">
//           <Link
//             to="/portfolio"
//           >
//             Portfolio
//           </Link> | 
//           <Link
//             to="/"
//           >
//             About
//           </Link>
//           <Link
//             to="/resume"
//           >
//             R&eacute;sum&eacute;
//           </Link> 
//         </div>
//       </nav>
//     </div>
//   </header>
// )

Header.propTypes = {
    pageTitle: PropTypes.string,
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    pageTitle: ``,
    siteTitle: ``,
}

export default Header
