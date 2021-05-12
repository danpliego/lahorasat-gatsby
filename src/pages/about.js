import React from "react"
import Header from "../components/header";
import Layout from "../components/layout";
import Slider from "../components/slider";
import SEO from "../components/seo";

const About = ({ data }) => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClose = () => {
    setOpenModal(false);
  }

  return (
    <Layout openModal={openModal} closeModal={handleClose}>
      <SEO title="About" />
      <Header openModal={() => setOpenModal(true)} />
      {/* { data.allDatoCmsSection.edges.map((section) => (
         <Slider data={section.node} key={section.id} openModal={() => setOpenModal(true)} light={section.light} />
      ))} */}
    </Layout>
  )
}


// export const query = graphql`
//   query QueryAbout {
//     allDatoCmsSection(filter: { page: { in: ["about-hero"] } }, sort: { fields: [position], order: ASC }) {
//       edges {
//         node {
//           title
//           description
//           page
//           showContact
//           light
//           image {
//             url
//             fluid(maxWidth: 1400, forceBlurhash: false, imgixParams: { fm: "jpg", auto: "compress" }) {
//               ...GatsbyDatoCmsFluid
//             } 
//           }
//         }
//       }
//     }
//   }
// `;

export default About
