import React from "react"
import PropTypes from "prop-types"
import ContactForm from "./contact-form"
import { StaticQuery } from "gatsby"

const Contact = ({ openModal, closeModal }) => {

  const openModalClass = openModal ? 'modal-open' : 'modal-close';

  return (
    <>
      {/* <div className={`contact-modal ${openModalClass}`}>
        <div className="contact-content">
          <div className="row no-gutters">
            <div className="col-lg-6 p-3 p-lg-5">
              <h4 className="mb-3">Contact us</h4>
              <ContactForm />
            </div>
            <div className="col-lg-6 contact-info">
              <button className="close-icon" onClick={closeModal}><img src={Close} alt="Close Modal" /></button>
              <StaticQuery
                query={graphql`
                  query ContactQuery {
                    datoCmsContact {
                      address
                      phone
                      email
                    }
                  }
                `}
                render={data => (
                  <>
                    <ul>
                      <li>
                        <img src={Location} alt="Address" />
                        <span style={{ whiteSpace: 'pre'}}>{data.datoCmsContact.address}</span>
                      </li>
                      <li>
                        <img src={Phone} alt="Phone" />
                        {data.datoCmsContact.phone}
                      </li>
                      <li>
                        <img src={Envelope} alt="Email" style={{ marginTop: '7px' }} />
                        <a href={"mailto:" + data.datoCmsContact.email}>{data.datoCmsContact.email}</a>
                      </li>
                    </ul>
                  </>
                )}
              />
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className={`contact-back ${openModalClass}`} onClick={closeModal} onKeyDown={closeModal} role="button" tabIndex={0}  aria-label="Close Modal"></div> */}
    </>
  )
}

Contact.propTypes = {
  openModal: PropTypes.bool.isRequired,
}

export default Contact
