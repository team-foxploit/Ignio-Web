import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

class Icons extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className=" mt--7 mb-8" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Your Devices</h3>
                </CardHeader>
                <CardBody>
                  <Row className=" icon-examples">
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          id="tooltip982655500"
                          type="button"
                        >
                          <div>
                            <i className=" ni ni-box-2" />
                            <span>INDB1S1</span>
                          </div>
                        </button>
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip982655500"
                      >
                        {this.state.copiedText === "active-40"
                          ? "Copied"
                          : "INDB1S1"}
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="air-baloon"
                          id="tooltip47550434"
                          type="button"
                        >
                          <div>
                            <i className=" ni ni-box-2" />
                            <span>INDB1S2</span>
                          </div>
                        </button>
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip47550434"
                      >
                        {this.state.copiedText === "air-baloon"
                          ? "Copied"
                          : "INDB1S2"}
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="album-2"
                          id="tooltip945481346"
                          type="button"
                        >
                          <div>
                            <i className=" ni ni-box-2" />
                            <span>INDB1S3</span>
                          </div>
                        </button>
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip945481346"
                      >
                        {this.state.copiedText === "album-2"
                          ? "Copied"
                          : "INDB1S3"}
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="3" md="6">
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="align-center"
                          id="tooltip662352101"
                          type="button"
                        >
                          <div>
                            <i className=" ni ni-box-2" />
                            <span>INDB1S4</span>
                          </div>
                        </button>
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip662352101"
                      >
                        {this.state.copiedText === "align-center"
                          ? "Copied"
                          : "INDB1S4"}
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Icons;
