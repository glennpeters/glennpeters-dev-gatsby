import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"

// import coastGlenn from "../images/2018-06-18_coast_glenn-crop-wide.jpg"

// import coastGlennSM from "../images/glenn-code-2022-sm.png" // instrinsic 400 x 400
// import coastGlennMD from "../images/glenn-code-2022-md.png" // instrinsic 923 x 738
// import coastGlennLG from "../images/glenn-code-2022-lg.png" // instrinsic 1312 x 738
// import coastGlennXL from "../images/glenn-code-2022-xl.png" // instrinsic 1920 x 738

// import coastGlennWide from "../images/glenn-code-2022-wide.png" // instrinsic 800 x 198


// import whiteGlenn400 from "../images/white-glenn-cat-code-2022-400.png" // instrinsic 400 x 200
import whiteGlenn800 from "../images/white-glenn-cat-code-2022-800.png" // instrinsic 800 x 200



// markup
const IndexPage = () => {
  return (
    // <main style={pageStyles}>
    <Layout pageTitle="Home Page" layoutClass="about">
      <title>About Glenn Peters</title>

      {/* <link rel="preload" href={whiteGlenn400} as="image" media="(max-width: 400px)" /> */}
      <link rel="preload" href={whiteGlenn800} as="image" />

      <section>
        <figure className="portrait fadeIn" aria-hidden="true">
          {/* <img src={coastGlennSM} className="responsive show-sm" alt="" /> */}
          {/* <img src={coastGlennMD} className="responsive show-md" alt="" /> */}
          {/* <img src={coastGlennLG} className="responsive show-lg" alt="" /> */}
          {/* <img src={coastGlennWide} className="responsive show-lg" alt="" /> */}
          {/* <img src={coastGlennXL} className="responsive show-xl" alt="" /> */}

          {/* <img src={whiteGlenn400} className="responsive show-sm" alt="" />
          <img src={whiteGlenn800} className="responsive show-lg" alt="" /> */}

          <img src={whiteGlenn800} alt="Hudson and cat with code" />

          {/* https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#how_do_you_create_responsive_images */}
          {/* <img srcset="{coastGlennSM} 400w,
                       {coastGlennMD} 923w,
                       {coastGlennLG} 1312w,
                       {coastGlennXL} 1920w"
                sizes="400w, (max-width: 600px) 480px, 800px"
                src="{coastGlennSM}"
                alt=""></img> */}
          {/* <picture>
            <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
            <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
            <img src="{coastGlennMD}" alt="" />
          </picture> */}
        </figure>

        <h3>Who</h3>

        <p>
          I'm an engineer with a focus on providing the best experience for the end user 
          while satisfying all the business needs.
        </p>

        <p>
          I currently focus on the front end of web development (HTML, CSS, JavaScript), but I have 
          experience developing on the deeper layers with .Net, PHP, and Perl.
          </p>

        <p>
          I've worked a wide range of company sizes and environments 
          including Intel, DSV, and Oracle to mid-size startups and agencies.  
        </p>

        <p>
          I have developed sites from scratch (e.g. Facteus sites Fraud Analytix and Match Validation).
          I've also worked on legacy sites (e.g. DSV OneView, Intel.com).  
          I frequently learn new technologies on the fly and am devoted 
          to finding the best solutions for both the client and the end user.  
        </p>
        
        <p>
          Just some examples of what I&apos;ve accomplished include: 
        </p>

        <ul>
          <li>
            Updating the intel.com Home page (2021), Download Center content pages (2021), 
            and Contact Support area (2021)
          </li>
          <li>
            A JavaScript SCORM wrapper 
            that allowed the sale of a developed set of courseware to the client when 
            the existing protocols didn&apos;t match the end client's Learning Management System.
          </li>
          <li>
            Implemented Google Analytics tracking in a micro-reward website, 
            allowing more detailed analysis of user flow.  
          </li>
        </ul>

        <p>
          In my spare time, I <a href="https://oregongo.org/" target="_blank" rel="noreferrer" title="oregongo.org - A site I developed for the Oregon Go community">play Go</a>  
          and practice 
          <a href="https://thinplaces.photo/" target="_blank" rel="noreferrer" title="thinplaces.photo - my personal curated site">photography.</a>  (I made these sites, too.)
        </p>

        {/* <p>
          To find out more about how this site was made, read the
          {' '}
          <Link to="/makingof">
            making of
          </Link>.
        </p> */}

      </section>
    </Layout>
  )
}

export default IndexPage
