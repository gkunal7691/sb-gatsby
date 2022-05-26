import React from "react"
// import logo from "../../images/logo.png"
import { StaticImage } from "gatsby-plugin-image"
import "../../assets/styles/header.scss"
import { Link } from "gatsby"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import services from "../../assets/json/services.json"
import technologies from "../../assets/json/technologies.json"

const Header = ({ active }) => {
  return (
    <React.Fragment>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
      >
        <Container>
          <Navbar.Brand className="logo mt-2">
            <Link to="https://www.softobotics.com/">
              <StaticImage src="../../images/logo.png" alt="menu" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navbar-link">
              <Nav.Link>
                <Link className={active === "index" ? "active" : ""} to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className={active === "about-us" ? "active" : ""}
                  to="/about-us"
                >
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className={active === "portfolios" ? "active" : ""}
                  to="/portfolios"
                >
                  Portfolios
                </Link>
              </Nav.Link>
              <NavDropdown
                className={active === "web-apps" ? "active" : ""}
                title="Services"
                id="collasible-nav-dropdown"
              >
                {services.map(s => (
                  <NavDropdown.Item>
                    <Link
                      className="dropdown-style"
                      to={`/services/${s.slug}/`}
                    >
                      {s.name}
                    </Link>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link>
                <Link to="/tools">Tools</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/blog">Blogs</Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className={active === "careers" ? "active" : ""}
                  to="/careers"
                >
                  Careers
                </Link>
              </Nav.Link>
            </Nav>
            {/* <Nav></Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

export default Header
