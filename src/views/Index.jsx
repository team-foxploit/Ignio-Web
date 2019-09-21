import React from "react";
import { withRouter } from "react-router-dom";

// REDUX
import { connect } from "react-redux";
import { login } from "../store/actions/authActions";
import { fetchDataById } from "../store/actions/dataActions";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  CardTitle
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

class Index extends React.Component {

  // componentWillReceiveProps(nextProps){
  //   console.log(nextProps);
  //   if(nextProps.isAuthenticated && (nextProps.data.deviceData.length === 0)){
  //     if(nextProps.user.ignios.length !== 0){
  //       nextProps.user.ignios.forEach(device => {
  //         console.log(device);
  //         nextProps.fetchDataById(device);
  //       });
  //     }
  //   }
  // }

  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7 mb-4" fluid>
          <Row>
            <Col sm="12" lg="3">
              <Row className="mt-2">
                <Col sm="12">
                  <Card className="card-stats mb-4 mb-xl-0 bg-dark">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Temperature Reading
                          </CardTitle>
                            {/* {this.props.data.activeDeviceData ?
                                <span className="h1 font-weight-bold mb-0 text-success">
                                  {this.props.data.deviceData[0][this.props.data.deviceData[0].length-1].temperature}
                                </span>
                              :
                                <>
                                  loading...
                                </>
                            } */}
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                            <i className="fas fa-fire" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        {/* <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 0%
                        </span>{" "} */}
                        <span className="text-nowrap">'C</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col sm="12">
                  <Card className="card-stats mb-4 mb-xl-0 bg-dark">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            CO Reading
                          </CardTitle>
                          {/* {!this.props.data.isLoading && this.props.data.deviceData[0] ?
                            <span className="h1 font-weight-bold mb-0 text-success">
                              {this.props.data.deviceData[0].sensorData[this.props.data.deviceData[0].sensorData.length-1].co_ppm}
                            </span>
                          :
                            <>
                              loading...
                            </>
                          } */}
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                            <i className="fas fa-fire" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        {/* <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 0%
                        </span>{" "} */}
                        <span className="text-nowrap">ppm</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col sm="12" lg="6">
              <Card className="card-profile shadow bg-gradient-dark">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/safe.png")}
                          />
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4 bg-gradient-dark">
                  {/* <div>
                    <h2 className="text-purple">
                      Ignio at a glance
                    </h2>
                  </div> */}
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col  text-center">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <h1 className="text-success">You're Safe!</h1>
                      </div>
                    </div>
                  </Row>
                  <div className="text-center text-white">
                    <div className="h5 font-weight-300 text-success">
                      Your devices are working fine.
                    </div>
                    <hr className="my-4" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Show more
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col sm="12" lg="3">
              <Row className="mt-2">
                <Col sm="12">
                  <Card className="card-stats mb-4 mb-xl-0 bg-dark">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            LP Gas Reading
                          </CardTitle>
                          {/* {!this.props.data.isLoading && this.props.data.deviceData[0] ?
                            <span className="h1 font-weight-bold mb-0 text-success">
                              {this.props.data.deviceData[0].sensorData[this.props.data.deviceData[0].sensorData.length-1].lp_gas_ppm}
                            </span>
                          :
                            <>
                              loading...
                            </>
                          } */}
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                            <i className="fas fa-fire" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        {/* <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 0%
                        </span>{" "} */}
                        <span className="text-nowrap">ppm</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col sm="12">
                  <Card className="card-stats mb-4 mb-xl-0 bg-dark">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Particle Density Reading
                          </CardTitle>
                          {/* {!this.props.data.isLoading && this.props.data.deviceData[0] ?
                            <span className="h1 font-weight-bold mb-0 text-success">
                              {this.props.data.deviceData[0].sensorData[this.props.data.deviceData[0].sensorData.length-1].particle_ppm}
                            </span>
                          :
                            <>
                              loading...
                            </>
                          } */}
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                            <i className="fas fa-fire" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        {/* <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 0%
                        </span>{" "} */}
                        <span className="text-nowrap">ppm</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return (
    {
      user: state.auth.user,
      data: state.data,
      ignioToken: state.auth.ignioToken,
      isAuthenticated: state.auth.isAuthenticated,
      isLoading: state.auth.isLoading
    }
  );
}

export default withRouter(connect(mapStateToProps, { login, fetchDataById })(Index));
