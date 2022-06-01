import * as React from "react"

import Layout from "../components/layout"
import PortfolioCard from "../components/PortfolioCard/portfolioCard"


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

      <section id="portfolio" aria-label="Portfolio">
        <title>Portfolio</title>

        <p>Examples here are of projects that are, or were, visible to the public.</p>

        <PortfolioCard>
          <h3>Intel Home Page Update 2021+</h3>

          <figure aria-hidden="true" className="fadeIn">
            <link rel="preload" href={intelHome} as="image" />
            <img src={intelHome} alt="" />

            <figcaption>Intel Home Page incremental update to be more modern, lightweight and accessible</figcaption>
          </figure>

          <div className="description">
            <p>
              Intel Home Page incremental update to be more modern, lightweight and accessible.
            </p>
          </div>

        </PortfolioCard>

        <PortfolioCard>
          <h3>Intel Contact Support 2021+</h3>

          <figure aria-hidden="true" className="fadeIn">
            <link rel="preload" href={intelContactSupport} as="image" />
            <img src={intelContactSupport} alt="" />

            <figcaption>Unified Contact Support (Contact Intel)</figcaption>
          </figure>

          <div className="description">
            <p>
              Contact Support updated with improved accessibility, including keyboard support.            
            </p>

            <p>
              Decided by stakeholders that this should be Best Known Practice ongoing for developing 
              Intel pages.
            </p>
          </div>

        </PortfolioCard>

        <PortfolioCard>
          <h3>Download Center Pages 2021+</h3>

          <figure aria-hidden="true" className="fadeIn">
            <link rel="preload" href={intelDownloadCenterPages} as="image" />
            <img src={intelDownloadCenterPages} alt="" />

            <figcaption>Download Center detail pages</figcaption>
          </figure>

          <div className="description">
            <p>
              <strong>Note:</strong> 
               This does not include the hub page for the Download Center.  
               (I also provided instructions and code on how improve that page to those responsible for that page.)
            </p>

            <p>
              Improved accessibility and design, inlcuding modal window.
            </p>
          </div>

        </PortfolioCard>

        <PortfolioCard>
          <h3>Malarkey Roofing via Harlo Interactive</h3>

          <figure aria-hidden="true" className="fadeIn">
            <link rel="preload" href={malarkeyHome} as="image" />
            <img src={malarkeyHome} alt="" />

            <figcaption>Malarkey.com home page</figcaption>
          </figure>

          <div className="description">
            <p>
              Implemented three-level responsive site (desktop, tablet, mobile), based on design specifications.
            </p>
          </div>


          <figure aria-hidden="true" className="fadeIn">
            <link rel="preload" href={malarkeyShingles} as="image" />
            <img src={malarkeyShingles} alt="" />

            <figcaption>Shingle Selector app</figcaption>
          </figure>

          <div className="description">
            <p>
              Developed the Shingle Selector tool, a responsive tool (desktop, tablet, mobile) 
              that allowed a user to browse information on a multitude of different shingle products and colors. 
              Consuming data provided by Laravel backend.             
            </p>
          </div>


        </PortfolioCard>

        <PortfolioCard>
          <h3>OregonGo.org</h3>

          <figure aria-hidden="true">
            <link rel="preload" href={oregonGo} as="image" />
            <img src={oregonGo} alt="" />

            <figcaption>OregonGo.org</figcaption>
          </figure>

          <div className="description">
            <p>
              Designed and developed independently with AngularJS and Bootstrap as an informational site for the local Go community.
            </p>
          </div>

        </PortfolioCard>

      </section>

    </Layout>
  )
}

export default PortfolioPage
