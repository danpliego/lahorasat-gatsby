import React from "react"
import Header from "../components/header";
import Layout from "../components/layout"
import Section from "../components/section";
import FooterBanner from "../components/footer-banner";
import SEO from "../components/seo"
import Slider from "../components/slider";

const IndexPage = ({ data }) => {
  // const [openModal, setOpenModal] = React.useState(false);

  // const handleClose = () => {
  //   setOpenModal(false);
  // }

  return (
    <Layout data={data}>
      <SEO title="Home" />  
      <Header />
      hi bitches
      {/* { data.allDatoCmsSection.edges.filter(section => section.node.page === 'home-hero').map((section) => (
          <Slider data={section.node} openModal={() => setOpenModal(true)} light={section.node.light} />
        )
      )} */}
    </Layout>
  )
}

// export const query = graphql`
//   query QueryHome {
//     allDatoCmsSection(filter: { page: { in: ["home-hero", "home", "home-banner"] } }, sort: { fields: [position], order: ASC }) {
//       edges {
//         node {
//           title
//           description
//           page
//           showContact
//         light
//           image {
//             url
//             fluid(maxWidth: 1400, forceBlurhash: false, imgixParams: { fm: "jpg", auto: "compress", fit: "crop" }) {
//               ...GatsbyDatoCmsFluid
//             }
//           }
//         }
//       }
//     }
//   }

// `;

export default IndexPage
