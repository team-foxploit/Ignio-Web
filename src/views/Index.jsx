import React from "react";

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

class Tables extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7 mb-4" fluid>
          <Row>
            <Col sm="12" lg="3">
              <Row>
                <Col sm="12"className="">
                  <Card className="card-stats mb-4 bg-dark">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Sensor Reading
                            </CardTitle>
                          <span className="h1 font-weight-bold mb-0 text-success">
                            0
                            </span>
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
                <hr></hr>
                <br/>
                <Col sm="12"className="">
                  <Card className="card-stats mb-4 bg-dark">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Sensor Reading
                            </CardTitle>
                          <span className="h1 font-weight-bold mb-0 text-success">
                            0
                            </span>
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
            <Col sm="12" lg="6" className="mb-4">
              <Row>
                <Col>
                  <Card className="card-profile shadow bg-gradient-dark">
                    <Row className="justify-content-center">
                      <Col className="order-lg-2" lg="3">
                        <div className="card-profile-image">
                        </div>
                      </Col>
                    </Row>
                    <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4 bg-gradient-dark">
                      <div>
                        <h2 className="text-purple">
                          Ignio at a glance
                        </h2>
                      </div>
                    </CardHeader>
                    <CardBody className="pt-0 pt-md-4">
                      <Row>
                        <div className="col  text-center">
                          <div className="icon icon-shape icon-xl bg-success text-white rounded-circle shadow">
                            <i className="fas fa-check fa-7x" />
                          </div>
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
                        {/* <p>
                          Ignio takes care of you.
                        </p> */}
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Show more
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col sm="12" lg="3">
              <Row>
                <Col sm="12" className="">
                  <Card className="card-stats mb-4 bg-dark">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Sensor Reading
                            </CardTitle>
                          <span className="h1 font-weight-bold mb-0 text-success">
                            0
                            </span>
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
                <hr></hr>
                <br/>
                <Col sm="12" className="">
                  <Card className="card-stats mb-4 bg-dark">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Sensor Reading
                            </CardTitle>
                          <span className="h1 font-weight-bold mb-0 text-success">
                            0
                            </span>
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

export default Tables;
