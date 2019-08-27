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
            <Col sm="12" md="3">
              <Col sm="12">
                <Card className="card-stats mb-4 mb-xl-0 bg-dark">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Sensor Reading
                          </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
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
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 0%
                        </span>{" "}
                      <span className="text-nowrap">ppm</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <hr></hr>
              <Col sm="12">
                <Card className="card-stats mb-4 mb-xl-0 bg-dark">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Sensor Reading
                          </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
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
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 0%
                        </span>{" "}
                      <span className="text-nowrap">ppm</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Col>

            <Col sm="12" lg="6">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">

                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">

                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <h1 className="text-success">You're Safe!</h1>
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      Ignio at a glance
                    </h3>
                    <div className="h5 font-weight-300">
                      Your devices are working fine.
                    </div>

                    <hr className="my-4" />
                    <p>
                      Ignio is taking care of you.
                    </p>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Show more
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="3">
              <Col sm="12">
                <Card className="card-stats mb-4 mb-xl-0 bg-dark">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Sensor Reading
                          </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
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
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 0%
                        </span>{" "}
                      <span className="text-nowrap">ppm</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <hr></hr>
              <Col sm="12">
                <Card className="card-stats mb-4 mb-xl-0 bg-dark">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Sensor Reading
                          </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
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
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 0%
                        </span>{" "}
                      <span className="text-nowrap">ppm</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Tables;
