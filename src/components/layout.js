/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, Link } from "gatsby"

const Layout = ({ children, openModal, closeModal }) => {
  return (
    <>
      {/* <Contact openModal={openModal} closeModal={closeModal} /> */}
      {children}
      <footer>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/">Asesorias</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/cursos/">Cursos Online</Link>
          </li>
          <li className="nav-item">
            logo footer here
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/nosotros/">Nosotros</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/contacto/">Contacto</Link>
          </li>
        </ul>
        <div className="container">
          <p>
            © {new Date().getFullYear()} La Hora Sat. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  openModal: PropTypes.bool.isRequired,
}

export default Layout
