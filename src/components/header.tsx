import * as React from "react"
import { Nav, Navbar, Container } from "react-bootstrap"
import PropTypes from "prop-types"

import { FaTwitter, FaTwitch, FaFacebook, FaEnvelope } from "react-icons/fa"
import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar bg="dark" variant="dark" fixed="top" className="navbar-sticky-top">
      <Container>
        <Navbar.Brand href="/">
          <StaticImage
            src="../images/haunted-logo.png"
            placeholder="none"
            width="32"
            alt={siteTitle}
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Item>
            <GatsbyLink to="/" className="nav-link" activeClassName="active">
              Home
            </GatsbyLink>
          </Nav.Item>
          <Nav.Item>
            <GatsbyLink
              to="/news"
              className="nav-link"
              activeClassName="active"
            >
              News
            </GatsbyLink>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="https://www.wowprogress.com/guild/eu/thrall/haunted"
              target="_blank"
            >
              <div>WoWProgress</div>
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link href="">Bewerben</Nav.Link>
          </Nav.Item> */}
        </Nav>
        <Nav>
          <Nav.Item>
            <Nav.Link href="mailto:contact@haunted-guild.de">
              <FaEnvelope />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://twitter.com/hauntedguild" target="_blank">
              <FaTwitter />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="https://www.facebook.com/Haunted-104616588663255/"
              target="_blank"
            >
              <FaFacebook />
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link href=""><FaTwitch /></Nav.Link>
          </Nav.Item> */}
        </Nav>
      </Container>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
