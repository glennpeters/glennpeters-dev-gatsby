import * as React from "react"

import Layout from "../components/layout"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const PortfolioPage = () => {
  return (
    <Layout pageTitle="Portfolio">

    <main style={pageStyles}>
      {/* <title>Glenn Peters: Portfolio</title> */}

      <h1 style={headingStyles}>
        Glenn Peters: Portfolio
      </h1>
      <div id="wrapper">
        <h1>Glenn Peters&rsquo; Portfolio</h1>

        <div>
            <p>
              <strong>Intel Home Page 2021-2022</strong>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Ornare massa eget egestas purus viverra accumsan in nisl. Tortor pretium viverra suspendisse potenti nullam. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Feugiat nisl pretium fusce id velit ut tortor pretium. Integer eget aliquet nibh praesent tristique magna sit. Convallis tellus id interdum velit. Ut faucibus pulvinar elementum integer enim neque volutpat. Et egestas quis ipsum suspendisse ultrices. Faucibus nisl tincidunt eget nullam non nisi est sit. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Adipiscing at in tellus integer feugiat. Sed augue lacus viverra vitae congue eu consequat ac felis. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris.
            </p>

            <p>
              <strong>Intel Contact Support</strong>
              
              Blandit aliquam etiam erat velit scelerisque in dictum. Proin fermentum leo vel orci porta non pulvinar neque. Morbi leo urna molestie at elementum eu. Semper eget duis at tellus at. Feugiat in ante metus dictum at tempor commodo ullamcorper a. In ornare quam viverra orci sagittis eu volutpat. Proin libero nunc consequat interdum varius sit. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Purus semper eget duis at tellus. Sagittis purus sit amet volutpat consequat mauris nunc. Nisl pretium fusce id velit ut tortor pretium viverra. Duis ultricies lacus sed turpis tincidunt id. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. At auctor urna nunc id cursus metus aliquam.
            </p>

            <p>
              <strong>Download Center Pages</strong>

              Penatibus et magnis dis parturient montes nascetur ridiculus mus. Amet massa vitae tortor condimentum lacinia. Amet porttitor eget dolor morbi non arcu risus quis. Nisl purus in mollis nunc. Massa tincidunt nunc pulvinar sapien et. Tristique senectus et netus et malesuada fames ac turpis egestas. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Lacinia at quis risus sed vulputate odio ut enim blandit. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Amet purus gravida quis blandit. Enim neque volutpat ac tincidunt vitae semper. In egestas erat imperdiet sed euismod nisi.
            </p>

            <p>
              <strong>Malarkey Shingle Selector</strong>

              Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Eget nulla facilisi etiam dignissim diam quis enim. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Velit aliquet sagittis id consectetur purus. Nec tincidunt praesent semper feugiat nibh. Tortor vitae purus faucibus ornare suspendisse sed. Nullam vehicula ipsum a arcu cursus. Turpis massa tincidunt dui ut ornare lectus. Sed felis eget velit aliquet sagittis id consectetur purus.
            </p>

            <p>Cras semper auctor neque vitae tempus quam pellentesque. Fringilla urna porttitor rhoncus dolor purus. Tellus at urna condimentum mattis pellentesque id. Tincidunt arcu non sodales neque sodales ut etiam. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Porta lorem mollis aliquam ut porttitor leo a diam. Sed libero enim sed faucibus turpis in eu mi. Lectus magna fringilla urna porttitor. Volutpat commodo sed egestas egestas fringilla phasellus. Sit amet venenatis urna cursus eget. Tellus rutrum tellus pellentesque eu. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Eu mi bibendum neque egestas congue quisque egestas. Vel pretium lectus quam id leo in. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Eget dolor morbi non arcu risus quis varius quam quisque. Libero volutpat sed cras ornare.</p>
        </div>
      </div>

    </main>

    </Layout>
  )
}

export default PortfolioPage
