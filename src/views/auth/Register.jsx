import React from "react";
import { Redirect, withRouter } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

// REDUX
import { register } from "../../store/actions/authActions";
import { connect } from "react-redux";

class Register extends React.Component {

  state = {
    user: {
      firstName: "",
      lastName: "",
      email: "",
      login: "",
      password: "",
      confirmpassword: ""
    },
    validations: {
      email: false,
      login: false,
      password: false,
      confirmpassword: false
    },
    formValidity: false
  }

  handleChange = (e) => {
    const target = e.target;
    let updatedUser = this.state.user;
    let updatedValidations = this.state.validations;
    let validity = true;
    updatedUser[target.id] = target.value;
    if (updatedValidations.hasOwnProperty(target.id)) {
      updatedValidations[target.id] = this.validateField(target.id, target.value);
    }
    for (const key in this.state.validations) {
      validity = validity && this.state.validations[key];
    }
    this.setState({
      user: updatedUser,
      validations: updatedValidations,
      formValidity: validity
    });
  };

  validateField = (id, value) => {
    switch(id){
      case "email":
        const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        return emailTest.test(value);
      case "password":
        return value.length >= 8;
      case "confirmpassword":
        return (this.state.user.password === value);
      default:
        return (value.trim() !== "");
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.formValidity) {
      const user = {
        firstName: this.state.user.firstName,
        lastName: this.state.user.lastName,
        email: this.state.user.email,
        login: this.state.user.login,
        password: this.state.user.password,
        confirmpassword: this.state.user.confirmpassword,
        imageUrl: "<No-Image>",
        authorities: [
          "ROLE_USER"
        ],
        langKey: "EN",
        activated: true,
        createdBy: this.state.user.login,
        createdDate: new Date().toISOString().toString(),
        lastModifiedBy: "system",
        lastModifiedDate: new Date().toISOString().toString()
      }
      console.log(this.state, user);
      this.props.register(user);
    }
  }

  render() {
    if(this.props.isRegisterSuccess){
      return (
        <Redirect to="/admin/index" />
      );
    }
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent text-center">
              <h3>Sign up with Ignio to feel more security arround fire!</h3>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" onSubmit={this.handleSubmit}>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-circle-08" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                          id="firstName"
                          placeholder="First Name"
                          type="text"
                          value={this.state.user.firstName}
                          onChange={this.handleChange.bind(this)}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-circle-08" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                          id="lastName"
                          placeholder="Last Name"
                          type="text"
                          value={this.state.user.lastName}
                          onChange={this.handleChange.bind(this)}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input 
                      id="email"
                      placeholder="Email Address"
                      type="email"
                      value={this.state.user.email}
                      onChange={this.handleChange.bind(this)}
                    />
                  </InputGroup>
                  <div className="text-muted font-italic">
                    <small>
                      {this.state.validations.email ? 
                          null
                        :
                          <span className="text-info font-weight-700">Valid email address is required!</span>
                      }
                    </small>
                  </div>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="login"
                      placeholder="Username"
                      type="text"
                      value={this.state.user.login}
                      onChange={this.handleChange.bind(this)}
                    />
                  </InputGroup>
                  <div className="text-muted font-italic">
                    <small>
                      {this.state.validations.login ? 
                          null
                        :
                          <span className="text-info font-weight-700">Username is required!</span>
                      }
                    </small>
                  </div>
                </FormGroup>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="password"
                          placeholder="Password"
                          type="password"
                          value={this.state.user.password}
                          onChange={this.handleChange.bind(this)}
                        />
                      </InputGroup>
                      <div className="text-muted font-italic">
                        <small>
                          Password strength:{" "}
                          {this.state.validations.password ? 
                              <span className="text-success font-weight-700">strong</span>
                            :
                              <span className="text-danger font-weight-700">weak</span>
                          }
                        </small>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="confirmpassword"
                          placeholder="Confirm Password"
                          type="password"
                          value={this.state.user.confirmpassword}
                          onChange={this.handleChange.bind(this)}
                        />
                      </InputGroup>
                      <div className="text-muted font-italic">
                        <small>
                          {this.state.validations.confirmpassword ? 
                              <span className="text-success font-weight-700">Passwords match!</span>
                            :
                              <span className="text-info font-weight-700">Passwords should be matched!</span>
                          }
                        </small>
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="submit">
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isRegisterSuccess: state.auth.isRegisterSuccess
  }
}

export default withRouter(connect(mapStateToProps, { register })(Register));
