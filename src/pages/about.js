import * as React from "react"

import Layout from "../components/layout"

// markup
const AboutPage = () => {
  return (
    <Layout pageTitle="About this Site">
        <h2>About this Site</h2>

        <p>
           This page was written in <a href="https://www.gatsbyjs.org">Gatsby</a>, a React framework.
        </p>
    </Layout>
  )
}

export default AboutPage
