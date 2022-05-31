import * as React from "react"

import Layout from "../components/layout"

// markup
const AboutPage = () => {
  return (
    <Layout pageTitle="About this Site">
        <title>About this Site</title>

        <p>
           This page was written in <a href="https://www.gatsbyjs.org">Gatsby</a>, a React framework.
        </p>
    </Layout>
  )
}

export default AboutPage
