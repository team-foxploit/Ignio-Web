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
  Badge,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table

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
          <Row className="mb-4">
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Device Activity</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">DeviceID</th>
                      {/* <th scope="col">Budget</th> */}
                      <th scope="col">Status</th>
                      {/* <th scope="col">Users</th> */}
                      <th scope="col">Sensor accuracy</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <i className="ni ni-box-2 mr-3"></i>
                        INDB1S1
                      </th>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-danger" />
                          Not-active
                        </Badge>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">60%</span>
                          <div>
                            <Progress
                              max="100"
                              value="60"
                              barClassName="bg-danger"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <i className="ni ni-box-2 mr-3"></i>
                        INDB1S2
                      </th>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-info" />
                          Active
                        </Badge>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">100%</span>
                          <div>
                            <Progress
                              max="100"
                              value="100"
                              barClassName="bg-primary"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <i className="ni ni-box-2 mr-3"></i>
                        INDB1S3
                      </th>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-info" />
                          Active
                        </Badge>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">98%</span>
                          <div>
                            <Progress
                              max="100"
                              value="98"
                              barClassName="bg-primary"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <i className="ni ni-box-2 mr-3"></i>
                        INDB1S4
                      </th>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-info" />
                          Active
                        </Badge>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">100%</span>
                          <div>
                            <Progress
                              max="100"
                              value="100"
                              barClassName="bg-primary"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
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
            {/* <Col xl="4">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Performance
                      </h6>
                      <h2 className="mb-0">Device Activity</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody> */}
            {/* Chart */}
            {/* <div className="chart">
                    <Bar
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </>
    );
  }
}

export default Icons;
