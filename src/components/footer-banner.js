import React from "react"
import Image from "gatsby-image"

const FooterBanner = ({ data, openModal, light }) => {

  return (
    <div className="section section-banner text-center" className={light ? 'section section-banner section-banner-light' : 'section section-banner'}>
      {data.image && (
        <div className="footer-image">
          <Image fluid={data.image.fluid} />
        </div>
      )}
      <div class="container banner-content">
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <h2 className="mb-4">{data.title}</h2>
            <p style={{ fontSize: "22px" }}>{data.description}</p>
            {data.showContact && (
              <button onClick={openModal} className="btn btn-light mt-4">Contact us  <span className="ml-1">→</span></button>
            )}
          </div>
        </div>
      </div>
    </div> 
  )
}

export default FooterBanner
