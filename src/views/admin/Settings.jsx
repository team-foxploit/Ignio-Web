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
  Card
} from "reactstrap";

// core components
import SettingsHeader from "components/Headers/SettingsHeader.jsx";
import classnames from "classnames";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

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
                    <Col md="8">
                      <h3 className="mb-0">Manage Account</h3>
                    </Col>
                    <Col md="4">
                      <small className="text-success">
                        Last Modified:{" "}
                        <span className="text-info">
                          {this.props.user.lastModifiedDate ? 
                              new Date(this.props.user.lastModifiedDate).toLocaleString()
                            :
                              null
                          }
                        </span>
                      </small >
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
                                          defaultValue={this.props.user.login ? 
                                                            this.props.user.login
                                                          :
                                                            null
                                                        }
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
                                          defaultValue={this.props.user.email ? 
                                                            this.props.user.email
                                                          :
                                                            null
                                                        }
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
                                          defaultValue={this.props.user.firstName ? 
                                                            this.props.user.firstName
                                                          :
                                                            null
                                                        }
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
                                          defaultValue={this.props.user.lastName ? 
                                                            this.props.user.lastName
                                                          :
                                                            null
                                                        }
                                          id="input-last-name"
                                          placeholder="Last name"
                                          type="text"
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                  <hr className="my-4" />
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
                                          defaultValue={this.props.user.billingInfo ? 
                                                            this.props.user.billingInfo.creditCardNumber
                                                          :
                                                            null
                                                        }
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
                                          defaultValue={this.props.user.billingInfo ? 
                                                            this.props.user.billingInfo.creditCardType
                                                          :
                                                            null
                                                        }
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
                                          defaultValue={this.props.user.billingInfo ? 
                                                            this.props.user.billingInfo.cvv2
                                                          :
                                                            null
                                                        }
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
                                          defaultValue={this.props.user.billingInfo ? 
                                                            this.props.user.billingInfo.expiresOn
                                                          :
                                                            null
                                                        }
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
                                          defaultValue={this.props.user.billingInfo ? 
                                                            this.props.user.billingInfo.billingAddress
                                                          :
                                                            null
                                                        }
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
                                          defaultValue={this.props.user.billingInfo ? 
                                                            this.props.user.billingInfo.city
                                                          :
                                                            null
                                                        }
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
                                          defaultValue={this.props.user.billingInfo ? 
                                                            this.props.user.billingInfo.country
                                                          :
                                                            null
                                                        }
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
                                          defaultValue={this.props.user.billingInfo ? 
                                                            this.props.user.billingInfo.postalCode
                                                          :
                                                            null
                                                        }
                                          placeholder="Postal code"
                                          type="number"
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                </div>
                                <hr className="my-4" />
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
                                  <Col className="text-left" md="12">
                                    <label
                                      className="form-control-label"
                                      htmlFor="input-address"
                                    >
                                      Here contains, critical information. Are you sure you want to make changes?
                                    </label>
                                  </Col>
                                  <Col className="text-left" md="1">
                                    <label className="custom-toggle">
                                      <input defaultChecked={false} type="checkbox" onClick={this.isButtonClicked.bind(this)} />
                                      <span className="custom-toggle-slider rounded-circle" />
                                    </label>
                                    <span className="clearfix" />
                                  </Col>
                                  <Col className="text-left ml-2" md="10">
                                    <div className="text-warning">{" "}Yes, I understand</div>
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
                                </div>
                              </Col>
                            </Row>
                          </Container>
                        </TabPane>
                      </TabContent>
                      <Row>
                        <Col className="text-right" xs="12">
                          <button
                            className="btn btn-primary"
                            onClick={e => e.preventDefault()}
                            type="submit"
                          >
                            Update
                          </button>
                        </Col>
                      </Row>
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

const mapStateToProps = (state) => {
  return{
    user: state.auth.user
  }
}

export default withRouter(connect(mapStateToProps, { })(Settings));
