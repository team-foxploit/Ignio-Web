import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";
import DeviceTableRow from "components/DeviceTableRow/DeviceTableRow.js";
import DeviceDetailRow from "../../components/DeviceDetailRow/DeviceDetailRow";

// REDUX
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchDeviceDetailById } from "../../store/actions/dataActions";

class Devices extends React.Component {
  state = {
    selectedDevice: this.props.data.activeDevice
  };

  handleDeviceSelection = (deviceId) => {
    console.log(deviceId);
    this.setState({
      selectedDevice: deviceId
    }, () => {
      this.props.fetchDeviceDetailById(this.state.selectedDevice);
    });
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className=" mt--7 mb-8" fluid>
          <Row className="mb-4">
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Device Activity</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">
                      <i className="ni ni-archive-2"></i>
                        {" "} Device ID
                      </th>
                      <th scope="col">
                      <i className="ni ni-sound-wave"></i>
                        {" "} Status
                      </th>
                      <th scope="col">
                        <i className="ni ni-atom"></i>
                        {" "} Last Activity
                      </th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.props.data.deviceData ? 
                        this.props.data.deviceData.map((deviceData, index) => 
                          <DeviceTableRow deviceData={deviceData} key={index}/>
                        )
                      :
                      null
                    }
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Your Devices</h3>
                </CardHeader>
                <CardBody>
                  <Row className=" icon-examples">
                    {this.props.billingInfo ? 
                      this.props.billingInfo.ignios.map((deviceId, index) => 
                        <Col lg="3" md="6" key={index}>
                          <button
                            className={this.state.selectedDevice === deviceId ?
                              "btn-icon-clipboard btn btn-secondary"
                              :
                              "btn-icon-clipboard"

                            }
                            id={deviceId}
                            type="button"
                            onClick={() => this.handleDeviceSelection(deviceId)}
                          >
                            <div>
                              <i className=" ni ni-box-2" />
                              <span>{deviceId}</span>
                            </div>
                          </button>
                          <UncontrolledTooltip
                            delay={0}
                            trigger="hover focus"
                            target={deviceId}
                          >
                            {this.state.copiedText === "active-40"
                              ? "Copied"
                              : deviceId}
                          </UncontrolledTooltip>
                        </Col>
                      )
                      :
                        <p className="text-warning">
                          There's been some error with your device configurations!
                        </p>
                    }
                  </Row>
                </CardBody>
                {this.props.data.activeDeviceDetails ?
                      <Table className="align-items-center table-flush mt -3" responsive>
                        <thead className="thead-light">
                          <tr>
                            <th scope="col" className="text-left">
                              <i className="ni ni-archive-2"></i>
                              {" "} Device ID
                            </th>
                            <th scope="col" className="text-center">
                              <i className="ni ni-calendar-grid-58"></i>
                              {" "} Manufactured Date
                            </th>
                            <th scope="col" className="text-center">
                              <i className="ni ni-circle-08"></i>
                              {" "} Owner ID
                            </th>
                            <th scope="col" className="text-center">
                              <i className="ni ni-calendar-grid-58"></i>
                              {" "} Purchased Date
                            </th>
                            <th scope="col" />
                          </tr>
                        </thead>
                        <tbody>
                          {this.props.data.activeDeviceDetails ?
                                <DeviceDetailRow deviceData={this.props.data.activeDeviceDetails} />
                              :
                                null
                          }
                        </tbody>
                      </Table>
                    :
                      <div className="container text-center">
                        <p>Select a device to view details...</p> 
                      </div>
                }
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    billingInfo: state.auth.user.billingInfo,
    data: state.data
  }
}

export default withRouter(connect(mapStateToProps, { fetchDeviceDetailById })(Devices));
