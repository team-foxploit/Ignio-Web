import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

// REDUX
import { connect } from "react-redux";

const UserHeader = (props) => {
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
              <h1 className="display-3 text-white">
                {props.user.firstName && props.user.lastName ? 
                  props.user.firstName + " " + props.user.lastName
                  :
                  props.user.login
                }
              </h1>
              <h4 className="text-info">Currently on
                <span className="text-primary"> Premium Plan</span>
              </h4>
              <p className="text-white mt-0 mb-5">
                This is your account page. You can manage your profile and view device details.
              </p>
              <NavLink to="/admin/settings" className="btn btn-danger">
                  Edit Profile
              </NavLink>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(UserHeader);