import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
// REDUX
import { connect } from "react-redux";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.jsx";
import AuthFooter from "components/Footers/AuthFooter.jsx";
import AlertComponent from "components/Alert/AlertComponent.js";

import routes from "routes.js";

class Auth extends React.Component {
  componentDidMount() {
    document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    if(this.props.ignioToken){
      return (
        <Redirect from="/auth/" to="/admin/index"/>
      );
    }else{
      return (
        <>
          <div className="main-content">
            <AuthNavbar />
            <div className="header bg-gradient-warning pb-8 pt-5">
              <Container>
                <div className="header-body text-center mb-4">
                  <Row className="justify-content-center">
                    <Col lg="5" md="6">
                      <h1 className="text-white">Welcome!</h1>
                      <p className="text-lead text-light">
                        Use your credentials to view your devices and your safety!
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              <div className="separator separator-bottom separator-skew zindex-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-default"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </div>
            {/* Page content */}
            <Container className="mt--8">
              <Row className="justify-content-center">
                <Switch>{this.getRoutes(routes)}</Switch>
              </Row>
              <AlertComponent />
            </Container>
          </div>
          <AuthFooter />
        </>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return (
    {
      ignioToken: state.auth.ignioToken
    }
  );
}

export default connect(mapStateToProps)(Auth);