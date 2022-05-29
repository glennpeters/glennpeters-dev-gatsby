import * as React from "react"

import Layout from "../components/layout"

import '../css/resume.css'

// markup
const ResumePage = () => {
  return (
    <Layout pageTitle="Resume" layoutClass="resume">
        <title>Resume</title>

        <section className="myInfo" aria-label="My Info">
          <ul className="unstyled-list">
            <li className="mail">
              <a href="mailto:work@glennpeters.dev">work@glennpeters.dev</a>
            </li>
            <li className="location">
                Remote | Portland, OR
            </li>
            {/* <li className="phone">
              <a href="tel:503-753-4919">503 753-4919</a>
            </li> */}
          </ul>
        </section>

        <section id="technologies">
          <h3>Technologies</h3>

          <section>
            <h4>Languages and libraries</h4>
            <p>
              HTML5, CSS3 (Responsive, Media Queries), 
              LESS, SASS, JavaScript 
              (including jQuery, React, Vue, Angular, Knockout, Greensock, 
              Handlebars, etc.), 
              SQL, PHP, Perl
            </p>
          </section>
          <section>
            <h4>Tools and Protocols</h4>
            <p>
              VS Code, Visual Studio, 
              Jira/Atlassian Suite, Snowflake, 
              mySQL, SQL Server, 
              SQL Developer, Oracle, IIS, Apache, Photoshop,
              Tableau, Git, Visual SourceSafe, CVS, Subversion
            </p>
          </section>
        </section>

        <section id="workExperience">

          <h3>Work Experience</h3>

          <section className="job">
            <h4>Artech LLC</h4>

            <div className="position">
              <div className="title">Developer (contract)</div>
              <div className="dates">January 2020 - April 2022</div>
            </div>

            <ul>
              <li>Implementation, debug, and analysis of content, custom code and components on intel.com with 
                improved accessibility, responsiveness, and decreased page load (Adobe Experience Manager, 
                HTML5, CSS3, JavaScript, Aria accessibility)</li>
              <li>
                Implementing and troubleshooting custom code for A/B testing on intel.com
                (Adobe Target, HTML5, CSS3, JavaScript, jQuery)
              </li>
              <li>
                Intel.com standards advocacy and documentation
              </li>
              <li>
                Prominent projects:
                <ul>
                  <li>New intel.com home page template, 2020—2021 </li>
                  <li>New Contact Support page, 2021 (Notable for keyboard support)</li>
                  <li>New Download Center download pages, 2021 (notable for accessible support, including modal, the most used pages on the site)</li>
                  <li>New alternate home heroes, 2021—2022</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="job">
            <h4>PCD Group</h4>

            <div className="position">
              <div className="role">Contract</div>
              <div className="title">Developer</div>
              <div className="dates">April 2019 - June 2019</div>
            </div>

            <ul>
              <li>
                Development of Citibank Gold microsite, responsive design implementation and 
                integration with a focus on 503 compliance. (JavaScript, SVG, jQuery, CSS3, SASS, Perl)
              </li>
            </ul>
          </section>

          <section className="job">
            <h4>ARM Insight</h4>

            <div className="position">
              <div className="title">Senior UI Developer (direct hire)</div>
              <div className="dates">April 2017 - February 2019</div>
            </div>

            <ul>
              <li>Maintenance and new features for a micro-rewards management system, including adding 
                Google Analytics tracking (JavaScript: KnockoutJS, .Net, SQL Server) </li>
              <li>Development of SecurLock Analytix website (JavaScript: VueJS, Vue Material, .Net, SQL Server)</li>
              <li>Development of Match Validation website (JavaScript: VueJS, Vue Material, .Net, SQL Server)</li>
            </ul>
          </section>

          <section className="job">
            <h4>DSV</h4>

            <div className="position">
              <div className="title">Senior Software Engineer</div>
              <div className="dates">August 2015 - December 2016</div>
            </div>

            <ul>
              <li>Maintenance of 1View freight management application -- bug fixes and new features (HTML, CSS, Javascript,
                jQuery, JavaScriptMVC, StealJS, Ruby, Eclipse IDE, RTC, Node.js)</li>
              <li>Development of new feature: Job Costing reports (DOM manipulation, AJAX calls, asynchronous promises)</li>
              <li>Researched ReactJS as potential new technology to use  for development, developed small test applications</li>
            </ul>

            <p className="note">(UTi was purchased by DSV January 2016, department was eliminated December 2016.)</p>
          </section>

          <section className="job">
            <h4>IGNW</h4>

            <div className="position">
              <div className="role">Ricochet Partners (contract)</div>
              <div className="title">Web Developer</div>
              <div className="dates">January 2015 - April 2015</div>
            </div>

            <ul>
              <li>Developed Bridge (JavaScript, SCORM 1.2) between Storyline Articulate (SCORM Driver) and the Intel Learning Network LMS</li>
              <li>Development of custom websites: Responsive page creation, Hubspot integration, customized jQuery plugins  (Expression Engine, Hubspot, HTML5, CSS3, Responsive Design, Media Queries, JavaScript, jQuery)</li>
              <li>Created and updated Hubspot landing pages and template (Hubspot, HTML5, CSS3 (Responsive Design, Media Queries), JavaScript, jQuery)</li>
            </ul>
          </section>

          <section className="job">
            <h4>RazorFish</h4>

            <div className="position">
              <div className="role">Direct Contract</div>
              <div className="title">Senior Presentation Layer Engineer </div>
              <div className="dates">October 2014 ~ June 2015</div>
            </div>

            <ul>
              <li>Added chromeless hotspot functionality to Youtube player in advertisement (JavaScript, CSS, HTML)</li>
              <li>Updated advertisement with new desktop/mobile layout and animated banner content (JavaScript, HTML5, CSS3, Responsive Design, Media Queries)</li>
              <li>Updated advertisement with new desktop/mobile section including new animation and behaviors
                (JavaScript, jQuery, Greensock, Handlebars, HTML5, CSS3 (Responsive Design, Media Queries), SASS, Git, Grunt, Node.js)</li>
              <li>Updated advertisement site with new section including new animation and behaviors, both desktop/mobile, adding tracking, pushing site live
                (Compass, JavaScript, jQuery, Greensock, Handlebars, HTML5, CSS3 (Responsive Design, Media Queries))</li>
            </ul>
          </section>

          <section className="job">
            <h4>Vircon</h4>

            <div className="position">
              <div className="role">Harlo Interactive (contract)</div>
              <div className="title">Web Developer</div>
              <div className="dates">July 2014 - August 2014</div>
            </div>

            <ul>
              <li>Updated Malarkey Roofing commercial website
                to complex responsive design.
                (JavaScript, jQuery, HTML5, CSS3 (Responsive Design, Media Queries), SASS, Gulp, Git, Node.js, Laravel templating)</li>
              <li>Including responsive integration of news carousel</li>
              <li>Development of "shingle selector" responsive application</li>
            </ul>

            <div className="position">
              <div className="role">PCD Group (contract)</div>
              <div className="title">Software Engineer</div>
              <div className="dates">August 2013 - July 2014</div>
            </div>

            <ul>
              <li>Responsible for updating content and adding features to security-focused websites.
              (JavaScript, jQuery, HTML5, CSS3 (Responsive Design, Media Queries), Perl, Mojolicious, Template Toolkit, SASS, SQL,
              CoffeeScript, SVN)</li>

              <li>Major re-build  of content management system.
              (Frontend.  Using JavaScript, jQuery, HTML5, CSS3 – Responsive, Photoshop, Perl, Mojolicious, Template Toolkit,
              SASS, SQL, Handlebars, SVN)</li>
            </ul>
          </section>

          <section className="job">
            <h4>Yesmail</h4>

            <div className="position">
              <div className="title">Web Developer</div>
              <div className="dates">April 2013 - August 2013</div><br />
              <div className="title">Contractor via Teksystems</div>
              <div className="dates">September 2012 - January 2013</div>
            </div>

            <ul>
              <li>Created and modified e-mail messages in a high-pressure,
              fast-paced environment using custom server side coding and HTML
              coded with very rigorous compliance standards. (JavaScript, HTML5, CSS3 &mdash; Responsive, Photoshop)</li>
              <li>Developed process improvement tools (JavaScript, jQuery, HTML5, CSS3)</li>
            </ul>
          </section>

          <section className="job extended">
            <h4>Floating Dock Comics</h4>

            <div className="position">
              <div className="title">Direct contract</div>
              <div className="dates">2012</div>
            </div>

            <ul>
              <li>Developed online media reader, using JavaScript/jQuery with object oriented JavaScript, and AJAX-based DOM insertion (using JSON).</li>
            </ul>
          </section>

          <section className="job extended">
            <h4>Sparta eBusiness</h4>

            <div className="position">
              <div className="role">Direct Contract</div>
              <div className="dates">Spring 2012</div>
            </div>

            <ul>
              <li>Developed interactions for update to major charity website (JavaScript, jQuery, mobile)</li>
              <li>jQuery front-end work, including form validation, custom jQuery plugin managing infinite slider/scroller (with mobile controls), YouTube video management.</li>
            </ul>
          </section>

          <section className="job extended">
            <h4>Clarity Innovations</h4>

            <div className="position">
              <div className="role">Direct Contract</div>
              <div className="dates">February 2011 - September 2011</div>
            </div>

            <ul>
              <li>Developed new courseware interactions and abstracted infrastructure (Drupal, HTML, CSS, JavaScript, PHP, VNC/RDP, and jQuery)</li>
              <li>Created "caricature" model to allow users to select and save a customized avatar (JavaScript, jQuery, Drupal)</li>
              <li>Modified desktop application with C#, .Net</li>
            </ul>
          </section>

          <section className="job extended">
            <h4>Capstone Technology</h4>

            <div className="position">
              <div className="title">Programmer Analyst</div>
              <div className="role">Contract, converted to full-time</div>
              <div className="dates">January 2010 - September 2010</div>
            </div>

            <ul>
              <li>Working with team to develop new version of Learning Management software, using HTML, CSS, C#, ASP.NET, JavaScript, Telerik, and jQuery libraries.</li>
            </ul>
          </section>

          <section className="job extended">
            <h4>TEKsystems</h4>

            <div className="position">
              <div className="title">Developer (contract)</div>
              <div className="company">OCP</div>
              <div className="dates">June 2008 - Nov 2008</div>
            </div>

            <ul>
              <li>Re-engineering sites using Drupal (OOP PHP5), HTML, CSS, JavaScript, jQuery, AJAX,
              JSON, and MySQL</li>
            </ul>
          </section>

          <section className="job extended">
            <h4>Via Training, LLC</h4>

            <div className="position">
              <div className="title">Senior Software Engineer</div>
              <div className="dates">April 2006 - Dec 2007</div>
              <div className="title">Software Engineer</div>
              <div className="dates">July 2003 - April 2006</div>
            </div>

            <ul>
              <li>Developed complex Flash to Docent Outliner
              for Harley-Davidson Sportster course, others
              (Docent Outliner, HTML, JavaScript)</li>
              <li>Converted courses to AICC, SCORM and Docent Outliner
              for Motorola phones (Docent Outliner, JavaScript)</li>
              <li>Developed secure tool for viewing customer sales data
              for Hewlett-Packard, stored in database, to be sent
              daily through e-mail, also built admin and support tools.
              (PHP, MySQL, Perl, VNC/RDP)</li>
              <li>Development of Docent LMS customization for proposal
              (Docent JavaScript)</li>
              <li>Technical consultation on proposals</li>
              <li>Documentation on internal standards, including migration
              to SCORM</li>
              <li>Primary support for Plone-based intranet</li>
              <li>Updated and debugged Microsoft sales content (Visual Studio)</li>
            </ul>
          </section>

          <section className="job extended">
            <h4>CoreMedia Training Solutions</h4>

            <div className="position">
              <div className="title">Software Engineer</div>
              <div className="dates">November 2001 - July 2003</div>
            </div>

            <ul>
              <li>Created web based training SCORM courses
              (ASP, HTML, CSS, JavaScript/DHTML, SQL Server)</li>
              <li>Helped write administrative and e-mail application (PHP Fusebox)</li>
              <li>Expert SCORM panelist at ASTD Cascadia e-Learning Standards presentation</li>
            </ul>
          </section>

          <section className="job extended">
            <div className="info">
              <div className="company">
                Oracle
              </div>
              <div className="position">
                <div className="title">Senior Consultant</div>
                <div className="dates">July 2000 - January 2001</div>
              </div>
            </div>

            <ul>
              <li>Designed UI and documentated template interface for
              Oracle's Content Platform Accelerator (HTML, CSS, JSP,
              Oracle DB, Tomcat)</li>
              <li>Created a series of web page demos for Oracle's Customer
              Loyalty program (JavaScript)</li>
            </ul>
          </section>

          <section className="job extended">
            <h4>CMD</h4>

            <div className="position">
              <div className="title">Senior Consultant</div>
              <div className="dates">July 2000 - January 2001</div>
            </div>

            <ul>
              <li>Created two new versions of 
              Creative Media corporate website 
              (Cold Fusion, SQL Server, HTML, DHTML/JavaScript, CSS)</li>
              <li>Technical director for a product launch for Parke-Davis
              involving live broadcast to a total of 5,000 participants (Cold
              Fusion, HTML, JavaScript, SQL Server, RealServer,
              Netpodium)</li>
              <li>Recreated Paxton/Patterson website, et al 
              (Cold Fusion, HTML, JavaScript)</li>
            </ul>
          </section>

          <section className="job extended">
            <h4>Ledge Multimedia</h4>

            <div className="position">
              <div className="title">Senior Webmaster</div>
              <div className="dates">February 1997 - November 1998</div>
            </div>

            <ul>
              <li>Created US Olympic Committee and
              IHS websites (HTML, JavaScript,
              Blitz, Oracle DB)</li>
              <li>Reworked MusicMatch
              website (HTML, Perl, Bash shell scripting)</li>
              <li>Supervised other webmasters in creation of websites for
              clients as company shifted to work for hire model.</li>
              <li>Designed and supervised creation of Intranet. (HTML,
              Photoshop)</li>
            </ul>
          </section>

          <section className="job extended">
            <h4>Creative Multimedia</h4>

            <div className="info">
              <div className="company">
                
              </div>
              <div className="position">
                <div className="title">Graphics Production, Webmaster</div>
                <div className="dates">December 1995 - February 1997</div>
              </div>
            </div>

            <ul>
              <li>Coordinated development, coded HTML, and defined CGI
              interaction for Health and Movie franchise
              web sites for Creative Multimedia, (corporate site and
              intranet), including clients and partners, notably the award
              winning Dr. Ruth Online,
              The Family Doctor,
              The Health Explorer, and
              MovieMatch. (HTML, JavaScript, Perl, bash shell scripting)</li>
              <li>Introduced and explained the Internet and web development
              method to team and company.</li>
              <li>Contributing member of UI and database committees.  Chaired
              Online group meetings.</li>
              <li>Helped develop Blitz, an extensible, template based tool
              which allowed webmasters to quickly write CGI incorporating
              HTML design</li>
              <li>Spoke at the Oregon Multimedia Education Group Conference,
              1997</li>
              <li>Guest speaker at PSU web development classes, 1997</li>
              <li>Managed Macintosh hardware and scanning room.</li>
            </ul>
        </section>

        {/* <section id="note" aria-label="Previous Experience">
          <h4>Previous Experience Upon Request &mdash; including Oracle, CMD, and Via Training. </h4>
        </section> */}

        <section id="personal">
          <h3>Other Projects</h3>

          <section className="job">
            <h4>
              Portland Go Club
            </h4>

            <ul>
              <li>
                Designed and created (and hosted) 
                {' '}
                <a href="https://oregongo.org/" target="_blank" rel="noopener noreferrer">oregongo.org</a> for
                local Go community (Angular, Bootstrap, HTML, CSS, PHP)
              </li>
            </ul>
          </section>
        </section>
        </section>

        {/* <section id="education">
          <h3>Education</h3>

          <ul>
            <h4 className="mobile-block">Hampshire College</h4>
            <p></p>
            1989-1991
            
            <p>Concentration in Computer Communications</p>
          </ul>
        </section> */}

    </Layout>
  )
}

export default ResumePage
