import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

// markup
const AboutPage = () => {
  return (
    <Layout pageTitle="About this Site">
        <title>About this Site</title>

        <p>
           This page was written in React framework 
           <Link to="https://www.gatsbyjs.org">
           Gatsby
          </Link>.
        </p>
    </Layout>
  )
}

export default AboutPage
