import React from "react"

const Section = ({ data }) => {

  return (
    <div className="section">
      <div className="container">
        <div className="row no-gutters align-items-center">
          <div className="col-lg-6 content-column">
            <h3 className="mb-4">{data.title}</h3>
            <p>{data.description}</p>
          </div>
          <div className="col-lg-6">
            {data.image && (
              <img className="img-fluid" src={data.image.url} alt={data.title} /> 
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
