import * as React from "react"

import Layout from "../components/layout"

import coastGlenn from "../images/2018-06-18_coast_glenn-crop-wide.jpg"

// markup
const IndexPage = () => {
  return (
    // <main style={pageStyles}>
    <Layout pageTitle="Home Page">
      <title>About Glenn Peters</title>

      <figure>
        <img src={coastGlenn} />
      </figure>

      <section>
        <h2>About Me</h2>

        <p>
          I am a front end web developer who have worked at 
          big companies like Intel, DSV, and Oracle as well as small to mid-size startups and agencies.  
        </p>

        <p>
          The sites I've worked on I&apos;ve both developed from scratch as well as legacy
          site involving many teams.  I frequently learn new tech on the fly and am devoted 
          to finding the best solutions for both the client and the end user.  
        </p>
        
        <p>
          Just some examples of what he&apos;s accomplished include: 
        </p>

        <ul>
          <li>
            A JavaScript SCORM wrapper 
            that allowed the sale of a developed set of courseware to the client when 
            the existing protocols didn&apos;t match the end client's Learning Management System.
          </li>
          <li>
            Updating the intel.com Home page (2021), Download Center content pages (2021), 
            and Contact Support area (2021)
          </li>
          <li>
            Implemented Google Analytics tracking in a micro-reward website, 
            allowing more detailed analysis of user flow.  
          </li>
        </ul>

      </section>
    </Layout>
  )
}

export default IndexPage
