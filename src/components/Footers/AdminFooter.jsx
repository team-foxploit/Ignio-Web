/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer bg-gradient-info">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-white">
              © 2019{" "}
              <a
                className="font-weight-bold ml-1"
                href="http://www.foxploit.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Foxploit
              </a>
            </div>
          </Col>

          <Col xl="6">
            <Nav className="nav-footer justify-content-center justify-content-xl-end">
              <NavItem>
                <NavLink
                  href="http://www.foxploit.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Foxploit
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="http://www.foxploit.com/about-us"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  About Us
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="http://www.foxploit.com/blog"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Blog
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://github.com/team-foxploit"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
