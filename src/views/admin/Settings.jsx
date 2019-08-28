import React from "react";

// reactstrap components
import {
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button
} from "reactstrap";

// core components
import SettingsHeader from "components/Headers/SettingsHeader.jsx";
import classnames from "classnames";

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.isButtonClicked = this.isButtonClicked.bind(this);
    this.state = {
      disabled: true,
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  isButtonClicked() {
    // this.setState({
    //   disabled: false
    // });
    this.setState({ disabled: !this.state.disabled });
  }

  render() {
    return (
      <>
        <SettingsHeader />
        {/* Page content */}
        <Container className="mt--7 mb-4" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Manage Account</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <div>
                      <Nav tabs>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "1"
                            })}
                            onClick={() => {
                              this.toggle("1");
                            }}
                          >
                            Account
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "2"
                            })}
                            onClick={() => {
                              this.toggle("2");
                            }}
                          >
                            Billing
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "3"
                            })}
                            onClick={() => {
                              this.toggle("3");
                            }}
                          >
                            Emergency
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                          <Container className="mt-2">
                            <Row>
                              <Col sm="12" className="mt-2">
                                {/* User Information */}
                                <h6 className="heading-small text-muted mb-4">
                                  User information
                                </h6>
                                <div className="pl-lg-4">
                                  <Row>
                                    <Col lg="6">
                                      <FormGroup>
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-username"
                                        >
                                          Username
                                        </label>
                                        <Input
                                          className="form-control-alternative"
                                          defaultValue="parker.pete"
                                          id="input-username"
                                          placeholder="Username"
                                          type="text"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                      <FormGroup>
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-email"
                                        >
                                          Email address
                                        </label>
                                        <Input
                                          className="form-control-alternative"
                                          id="input-email"
                                          defaultValue="iamspider@marvel.com"
                                          placeholder="Email Address"
                                          type="email"
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg="6">
                                      <FormGroup>
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-first-name"
                                        >
                                          First name
                                        </label>
                                        <Input
                                          className="form-control-alternative"
                                          defaultValue="Peter"
                                          id="input-first-name"
                                          placeholder="First name"
                                          type="text"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                      <FormGroup>
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-last-name"
                                        >
                                          Last name
                                        </label>
                                        <Input
                                          className="form-control-alternative"
                                          defaultValue="Parker"
                                          id="input-last-name"
                                          placeholder="Last name"
                                          type="text"
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                  <hr className="my-4" />
                                  <Row>
                                    <Col className="text-right" xs="12">
                                      <Button
                                        color="primary"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                        size="sm"
                                      >
                                        Update
                                      </Button>
                                    </Col>
                                  </Row>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                        </TabPane>
                        <TabPane tabId="2">
                          <Container className="mt-2">
                            <Row>
                              <Col sm="12" className="mt-2">
                                {/* Billing Information */}
                                <h6 className="heading-small text-muted mb-4">
                                  Billing information
                                </h6>
                                <div className="pl-lg-4">
                                  <Row>
                                    <Col lg="6">
                                      <FormGroup>
                                        <label
                                          htmlFor="input-credit-card-number"
                                          className="form-control-label"
                                        >
                                          Credit Card Number
                                        </label>
                                        <Input
                                          type="text"
                                          className="form-control-alternative"
                                          defaultValue="4532187519556819"
                                          id="input-credit-card-number"
                                          placeholder="Your Credit Card Number"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col lg="2">
                                      <FormGroup>
                                        <label htmlFor="input-credit-card-type">
                                          Credit Card Type
                                        </label>
                                        <Input
                                          type="text"
                                          className="form-control-alternative"
                                          defaultValue="Visa"
                                          id="input-credit-card-type"
                                          placeholder="Credit Card Type"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col lg="2">
                                      <FormGroup>
                                        <label htmlFor="input-credit-card-cvv">
                                          CVV2
                                        </label>
                                        <Input
                                          type="text"
                                          className="form-control-alternative"
                                          defaultValue="092"
                                          id="input-credit-card-cvv"
                                          placeholder="CVV"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col lg="2">
                                      <FormGroup>
                                        <label htmlFor="input-credit-card-expire-date">
                                          Expires
                                        </label>
                                        <Input
                                          type="text"
                                          className="form-control-alternative"
                                          defaultValue="02/21"
                                          id="input-credit-card-expire-date"
                                          placeholder="MM/YY"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col md="12">
                                      <FormGroup>
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-address"
                                        >
                                          Billing Address
                                        </label>
                                        <Input
                                          className="form-control-alternative"
                                          defaultValue='"Valley of Death", Serpentine Road, Colombo 08'
                                          id="input-address"
                                          placeholder="Home Address"
                                          type="text"
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg="4">
                                      <FormGroup>
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-city"
                                        >
                                          City
                                        </label>
                                        <Input
                                          className="form-control-alternative"
                                          defaultValue="Colombo"
                                          id="input-city"
                                          placeholder="City"
                                          type="text"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col lg="4">
                                      <FormGroup>
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-country"
                                        >
                                          Country
                                        </label>
                                        <Input
                                          className="form-control-alternative"
                                          defaultValue="Sri Lanka"
                                          id="input-country"
                                          placeholder="Country"
                                          type="text"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col lg="4">
                                      <FormGroup>
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-country"
                                        >
                                          Postal code
                                        </label>
                                        <Input
                                          className="form-control-alternative"
                                          id="input-postal-code"
                                          defaultValue="11200"
                                          placeholder="Postal code"
                                          type="number"
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                </div>
                                <hr className="my-4" />
                                <div className="pl-lg-4">
                                  <h6 className="heading-small text-muted mb-4">
                                    Contact information
                                  </h6>
                                  <Row>
                                    <Col md="12">
                                      <FormGroup>
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-address"
                                        >
                                          Billing Address
                                        </label>
                                        <Input
                                          className="form-control-alternative"
                                          defaultValue='"Valley of Death", Serpentine Road, Colombo 08'
                                          id="input-address"
                                          placeholder="Home Address"
                                          type="text"
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg="4">
                                      <FormGroup>
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-city"
                                        >
                                          City
                                        </label>
                                        <Input
                                          className="form-control-alternative"
                                          defaultValue="Colombo"
                                          id="input-city"
                                          placeholder="City"
                                          type="text"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col lg="4">
                                      <FormGroup>
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-country"
                                        >
                                          Country
                                        </label>
                                        <Input
                                          className="form-control-alternative"
                                          defaultValue="Sri Lanka"
                                          id="input-country"
                                          placeholder="Country"
                                          type="text"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col lg="4">
                                      <FormGroup>
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-country"
                                        >
                                          Postal code
                                        </label>
                                        <Input
                                          className="form-control-alternative"
                                          id="input-postal-code"
                                          defaultValue="11200"
                                          placeholder="Postal code"
                                          type="number"
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                  <hr className="my-4" />
                                  <Row>
                                    <Col className="text-right" xs="12">
                                      <Button
                                        color="primary"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                        size="sm"
                                      >
                                        Update
                                      </Button>
                                    </Col>
                                  </Row>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                        </TabPane>
                        <TabPane tabId="3">
                          <Container className="mt-2">
                            <Row>
                              <Col sm="12" className="mt-2">
                                {/* Emergency Contact Information */}
                                <h6 className="heading-small text-muted mb-4">
                                  Fire Service information [Emergency authority]
                                </h6>
                                <Row>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-address"
                                  >
                                    Here contains critical info. Are you sure?
                                  </label>
                                  <Col className="text-left" xs="12">
                                    <Button
                                      color="warning"
                                      href="#pablo"
                                      onClick={this.isButtonClicked.bind(this)}
                                      // onClick={() => { this.isButtonClicked(); }}
                                      size="sm"
                                    >
                                      Yes, I understand
                                    </Button>
                                  </Col>
                                </Row>
                                <hr></hr>
                                <div className="pl-lg-4">
                                  <p className="text-success">
                                    Nearest Fire Station is @Colombo14
                                  </p>
                                  <Row>
                                    <Col md="8">
                                      <FormGroup>
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-address"
                                        >
                                          Address
                                        </label>
                                        <Input
                                          className="form-control-alternative"
                                          defaultValue="Sirimavo Bandaranayake, Mawatha, Colombo 14"
                                          id="input-address"
                                          placeholder="Station Address"
                                          type="text"
                                          disabled={this.state.disabled}
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col md="4">
                                      <FormGroup>
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-em-mail-address"
                                        >
                                          Email Address
                                        </label>
                                        <Input
                                          className="form-control-alternative"
                                          defaultValue="mharishchandrah@yahoo.com"
                                          id="input-em-mail-address"
                                          placeholder="Email Address"
                                          type="email"
                                          disabled={this.state.disabled}
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg="4">
                                      <FormGroup>
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-city"
                                        >
                                          City
                                        </label>
                                        <Input
                                          className="form-control-alternative"
                                          defaultValue="Colombo"
                                          id="input-city"
                                          placeholder="City"
                                          type="text"
                                          disabled={this.state.disabled}
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col lg="4">
                                      <FormGroup>
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-country"
                                        >
                                          Country
                                        </label>
                                        <Input
                                          className="form-control-alternative"
                                          defaultValue="Sri Lanka"
                                          id="input-country"
                                          placeholder="Country"
                                          type="text"
                                          disabled={this.state.disabled}
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col lg="4">
                                      <FormGroup>
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-country"
                                        >
                                          Postal code
                                        </label>
                                        <Input
                                          className="form-control-alternative"
                                          id="input-postal-code"
                                          defaultValue="12040"
                                          placeholder="Postal code"
                                          type="number"
                                          disabled={this.state.disabled}
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg="4">
                                      <FormGroup>
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-mobile-number-1"
                                        >
                                          Office Telephone 1
                                        </label>
                                        <Input
                                          className="form-control-alternative"
                                          id="input-mobile-number-1"
                                          defaultValue="+94112431353"
                                          placeholder="Postal code"
                                          type="text"
                                          disabled={this.state.disabled}
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col lg="4">
                                      <FormGroup>
                                        <label
                                          className="form-control-label"
                                          htmlFor="input-mobile-number-2"
                                        >
                                          Office Telephone 2
                                        </label>
                                        <Input
                                          className="form-control-alternative"
                                          id="input-mobile-number-2"
                                          defaultValue="+94112683370"
                                          placeholder="Postal code"
                                          type="text"
                                          disabled={this.state.disabled}
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                  <hr className="my-4" />
                                  <Row>
                                    <Col className="text-right" xs="12">
                                      <Button
                                        color="primary"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                        size="sm"
                                      >
                                        Update
                                      </Button>
                                    </Col>
                                  </Row>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                        </TabPane>
                      </TabContent>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Settings;
