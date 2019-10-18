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
import { login, getUser } from "../../store/actions/authActions";
import { connect } from "react-redux";

class Login extends React.Component {

  state = {
    username: "",
    password: "",
    rememberMe: false,
    error: null
  };

  handleChange = (e) => {
    const target = e.target;
    if (target.type === 'checkbox') {
      this.setState({
        rememberMe: !this.state.rememberMe
      });
    } else {
      this.setState({
        [target.id]: target.value
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
      rememberMe: this.state.rememberMe
    }
    this.props.login(user);
  }

  render() {
    if(this.props.isAuthenticated){
      return (
        <Redirect to="/admin/index" />
      )
    }else if(!this.props.isAuthenticated && this.props.ignioToken){
      this.props.getUser();
    }else if(this.props.isAuthenticated && this.props.ignioToken){
      return (
        <Redirect to="/admin/index" />
      );
    }else if(this.props.isLoading){
      return (
        <div className="container">
          <div className="row ml-2">
            <div className="col mt-3">
              <h1>Loading...</h1>
            </div>
          </div>
        </div>
      );
    }
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent text-center">
              <h2>Login to review your safety!</h2>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" onSubmit={this.handleSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input 
                      placeholder="Username"
                      type="text"
                      id="username"
                      value={this.state.username}
                      onChange={this.handleChange.bind(this)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input 
                      placeholder="Password"
                      type="password"
                      id="password"
                      value={this.state.password}
                      onChange={this.handleChange.bind(this)}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" rememberMe"
                    type="checkbox"
                    value={this.state.rememberMe}
                    onChange={this.handleChange.bind(this)}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" rememberMe"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit">
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
    ignioToken: state.auth.ignioToken,
    isLoading: state.auth.isLoading
  }
}

export default withRouter(connect(mapStateToProps, { login, getUser })(Login));