import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
import { withRouter } from 'react-router-dom';
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1
} from "variables/charts.jsx";
import { createDataSet } from 'variables/data.jsx';

import Header from "components/Headers/Header.jsx";
// REDUX
import { fetchDataById, setActiveDevice, setActiveDeviceData } from "store/actions/dataActions";
import { connect } from "react-redux";

class Details extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1",
    activeDeviceId: "",
    dataSet: {},
    data: {
      //Bring in data
      labels: ["Jan", "Feb", "March"],
      datasets: [
        {
          label: "Sales",
          data: [86, 67, 91],
        }
      ]
    },
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
    console.log("Load data from the server!");
    // console.log(this.props);

    this.props.fetchDataById("NODEIGNIOF101");
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.data.showChart && nextProps.data.deviceIds[0]) {
      // console.log(nextProps.data.deviceIds[0]);
      // console.log(chartExample1[this.state.chartExample1Data]);

      this.props.setActiveDevice(nextProps.data.deviceIds[0]);
      this.props.setActiveDeviceData(createDataSet(nextProps.data.deviceData, nextProps.data.deviceIds[0]));
      console.log(this.props);
      // this.setState({
      //   dataSet: createDataSet(nextProps.data.deviceData, nextProps.data.deviceIds[0])
      // }, () => {
      //   console.log(this.state);
      // });
    }

  }
  componentDidUpdate() {
    console.log(this.props.data["activeDeviceData"]["temperatureDataSet"]);
  }
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7 mb-4" fluid>
          <Row>
            <Col className="mb-6 mb-xl-3" xl="12">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h2 className="text-white mb-0">Carbon Monoxide PPM</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    {this.props.data.showChart ?
                      <Line
                        data={this.props.data["activeDeviceData"]["co_ppmDataSet"]}
                        options={chartExample1.ppmUnitOptions}
                        getDatasetAtEvent={e => console.log(e)}
                      />
                      :
                      <h3 className="text-primary">loading...</h3>
                    }
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="mb-6 mb-xl-3" xl="12">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h2 className="text-white mb-0">Temperature 'C</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Temperature Chart */}
                  <div className="chart">
                    {this.props.data.showChart ?
                      <Line
                        data={this.props.data["activeDeviceData"]["temperatureDataSet"]}
                        options={chartExample1.temperatureUnitOptions}
                        getDatasetAtEvent={e => console.log(e)}
                      />
                      :
                      <h3 className="text-primary">loading...</h3>
                    }
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col className="mb-6 mb-xl-3" xl="12">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h2 className="text-white mb-0">LP Gas PPM</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    {this.props.data.showChart ?
                      <Line
                        data={this.props.data["activeDeviceData"]["lp_gas_ppmDataSet"]}
                        options={chartExample1.ppmUnitOptions}
                        getDatasetAtEvent={e => console.log(e)}
                      />
                      :
                      <h3 className="text-primary">loading...</h3>
                    }
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="mb-6 mb-xl-3" xl="12">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h2 className="text-white mb-0">Smoke Particles Density</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    {this.props.data.showChart ?
                      <Line
                        data={this.props.data["activeDeviceData"]["particle_ppmDataSet"]}
                        options={chartExample1.ppmUnitOptions}
                        getDatasetAtEvent={e => console.log(e)}
                      />
                      :
                      <h3 className="text-primary">loading...</h3>
                    }
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Sensor Readings</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        See all
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">parameter</th>
                      <th scope="col">Last Synchronization</th>
                      <th scope="col">Percentage</th>
                      <th scope="col">variation rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Carbon Monoxide Gas</th>
                      <td>31 Jul 2019 12:40 PM</td>
                      <td>3.45%</td>
                      <td>
                        <i className="fas fa-arrow-up text-danger mr-3" /> 0.17%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Temperature</th>
                      <td>31 Jul 2019 12:40 PM</td>
                      <td>3.45%</td>
                      <td>
                        <i className="fas fa-arrow-up text-warning mr-3" />{" "}
                        1.23%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">LP Gas</th>
                      <td>31 Jul 2019 12:40 PM</td>
                      <td>6.85%</td>
                      <td>
                        <i className="fas fa-arrow-down text-success mr-3" />{" "}
                        5.12%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Other</th>
                      <td>31 Jul 2019 12:40 PM</td>
                      <td>0.91%</td>
                      <td>
                        <i className="fas fa-arrow-up text-primary mr-3" />{" "}
                        3.18%
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Alerts</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        See all
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Incident</th>
                      <th scope="col">Danger Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Node test</th>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">0%</span>
                          <div>
                            <Progress
                              max="100"
                              value="0"
                              barClassName="bg-gradient-danger"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Minor smoke</th>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">20%</span>
                          <div>
                            <Progress
                              max="100"
                              value="20"
                              barClassName="bg-gradient-success"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Major smoke</th>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">50%</span>
                          <div>
                            <Progress max="100" value="50" />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    data: state.data
  };
}

export default withRouter(connect(mapStateToProps, { fetchDataById, setActiveDevice, setActiveDeviceData })(Details));
