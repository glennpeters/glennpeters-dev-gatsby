import * as React from "react"

import Layout from "../components/layout"


import intelHome from "../images/portfolio/intel.com-home-2022.png"
import intelContactSupport from "../images/portfolio/2022-Intel-contact-support.png"
import intelDownloadCenterPages from "../images/portfolio/intelcom_download-center-page-2022.png"

import oregonGo from "../images/portfolio/oregongo_2019-07-17.png"

import malarkeyHome from "../images/portfolio/MalarkeyRoofing_Screen-Shot_2015-04-20.png"
import malarkeyShingles from "../images/portfolio/MalarkeyRoofing_Screen-Shot_2015-04-20.png"


// markup
const PortfolioPage = () => {
  return (
    <Layout pageTitle="Portfolio">

      <div id="portfolio">
        <section>
          <h2>Portfolio</h2>

          <p>Examples here are of projects that are, or were visible to the public.</p>

          <section>
            <h3>Intel Home Page Update 2021+</h3>

            <figure>
              <img src={intelHome} alt="" />

              <figcaption>Intel Home Page incremental update to be more modern, lightweight and accessible</figcaption>
            </figure>

          </section>

          <section>
            <h3>Intel Contact Support 2021+</h3>

            <figure>
              <img src={intelContactSupport} alt="" />

              <figcaption>Contact Support updated with improved accessibility, including keyboard support</figcaption>
            </figure>

          </section>

          <section>
            <h3>Download Center Pages 2021+</h3>

            <figure>
              <img src={intelDownloadCenterPages} alt="" />

              <figcaption>Contact Support updated with improved accessibility, including keyboard support</figcaption>
            </figure>
          </section>

          <section>
            <h3>Malarkey Roofing via Harlo Interactive</h3>

            <figure>
              <img src={malarkeyHome} alt="" />

              <figcaption>Malarkey home page</figcaption>
            </figure>

            <p>
              Implemented three-level responsive site (desktop, tablet, mobile), based on design specifications. 
              (Malarkey Roofing via Harlo Interactive)
            </p>

            <figure>
              <img src={malarkeyShingles} alt="" />

              <figcaption>Shingle Selector app</figcaption>
            </figure>

            <p>
              Developed the Shingle Selector tool, a responsive tool (desktop, tablet, mobile) that allowed a user to browse information on a multitude of different shingle products.              
            </p>
          </section>

          <section>
            <h3>OregonGo.org</h3>

            <figure>
              <img src={oregonGo} alt="" />

              <figcaption>Shingle Selector</figcaption>
            </figure>

            <p>
              Designed and developed independently with AngularJS and Bootstrap as an informational site for the local Go community.
            </p>
          </section>


          

        </section>

      </div>

    </Layout>
  )
}

export default PortfolioPage
