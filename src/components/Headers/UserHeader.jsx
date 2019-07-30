import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class UserHeader extends React.Component {
  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "600px"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-warning opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="7" md="10">
                <h1 className="display-2 text-white">Peter Parker</h1>
                <h4 className="text-info">Currently on
                  <span className="text-primary"> Personal Plan</span>
                </h4>
                <p className="text-white mt-0 mb-5">
                  This is your account page. You can manage your profile and view device details.
                </p>
                <Button
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Edit profile
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default UserHeader;
