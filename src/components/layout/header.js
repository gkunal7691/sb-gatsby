import React from "react"
import logo from "../../images/logo.png"
import { StaticImage } from "gatsby-plugin-image"
import "../../assests/styles/header.scss"
import { Link } from "gatsby"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
const Header = () => {
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
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about-us">About us</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/portfolios">Portfolios</Link>
              </Nav.Link>
              <NavDropdown title="Service" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link className="dropdown-style" to="/services">
                    Mobile Apps
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="dropdown-style" to="/service-page/web-app/">
                    Web Apps
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="dropdown-style"
                    to="/service-page/front-end/"
                  >
                    Fron End
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="dropdown-style" to="/service-page/back-end/">
                    Back End
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="dropdown-style" to="/service-page/seo/">
                    SEO
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="dropdown-style"
                    to="/service-page/outsourcing/"
                  >
                    Outsourcing
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/tools">Tools</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/blog">Blogs</Link>
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
