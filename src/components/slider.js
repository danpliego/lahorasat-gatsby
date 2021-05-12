import React from "react"
import Image from "gatsby-image"

const Slider = ({ data, openModal, light }) => {
  return (
    <div className={light ? 'hero hero-light' : 'hero hero-dark'}>
      {data.image && (
        <div className="hero-image">
          <Image fluid={data.image.fluid} />
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto text-center">
            <div className="hero-content">
              <h1 className="mb-5">{data.title}</h1>
              <p className="mb-5">{data.description}</p>
              <button onClick={openModal} className="btn btn-primary">Contact us <span className="ml-1">→</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
