import { Link } from "gatsby"
import React from "react"

const Header = () => {

  const [scrollPosition, setScrollPosition] = React.useState(0);

  const [showMenu, setShowMenu] = React.useState(false);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

  React.useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const logo = 

  return (
    <header className={scrollPosition > 0 ? 'sticky' : null}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <button className="navbar-toggler" type="button" onClick={() => setShowMenu(!showMenu)}>
            {/* <a className="navbar-brand mr-4" href="/"><img alt="Finsera" height="30" src={logo} /></a> logo mobile */}
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={showMenu ? "navbar-collapse" : "collapse navbar-collapse" }>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/">Asesorias</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/cursos/">Cursos Online</Link>
              </li>
              <li className="nav-item">
                logo here
                <a className="navbar-brand mr-4" href="/"><img alt="La Hora Sat" height="30" src={logo} /></a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/nosotros/">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/contacto/">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
