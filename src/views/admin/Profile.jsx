import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.jsx";

// REDUX
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";

const Profile = (props) => {
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7 mb-4" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl={{ size: 6, offset: 3 }}>
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-5-800x800.png")}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="sm"
                  >
                    Billing
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="sm"
                  >
                    Devices
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">
                        {props.user.billingInfo ? 
                          props.user.billingInfo.ignios.length
                          :
                          "Not available!"
                        }
                        </span>
                        <span className="description">Devices</span>
                      </div>
                      <div>
                        <span className="heading">1</span>
                        <span className="description">Locations</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    {props.user.login ? 
                      props.user.firstName + " " + props.user.lastName
                      :
                      "Not available!"
                    }
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="fas fa-map-marker-alt mr-2" />
                    {props.user.billingInfo ? 
                      props.user.billingInfo.billingAddress
                      :
                      "Not available!"
                    }
                  </div>
                  <div className="h5 mt-4">
                    <i className="far fa-star mr-2" />
                    Premeium User
                  </div>
                  <div>
                    <i className="fas fa-envelope mr-2" />
                    {props.user.email ? 
                      props.user.email
                      :
                      "Not available!"
                    }
                  </div>
                  <hr className="my-4" />
                  <NavLink to="/admin/settings">
                    Account Settings
                  </NavLink>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return{
    user: state.auth.user
  }
}

export default withRouter(connect(mapStateToProps)(Profile));
