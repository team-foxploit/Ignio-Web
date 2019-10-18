import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";

// REDUX
import { connect } from "react-redux";
import { logout } from "../../store/actions/authActions";

class AdminNavbar extends React.Component {

  state = {
    redirect: false
  }

  handleLogOut = (e) => {
    e.preventDefault();
    this.props.logout();
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/auth/login" />;
    }
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/"
            >
              {this.props.brandText}
            </Link>
            <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
              <FormGroup className="mb-0">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Search" type="text" />
                </InputGroup>
              </FormGroup>
            </Form>
            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    <i className=" ni ni-circle-08" />
                    <Media className="ml-2 d-none d-lg-block">
                      {this.props.username ?
                        <span className="mb-0 text-sm font-weight-bold">
                          {this.props.username}
                        </span>
                        :
                        <span className="mb-0 text-sm font-weight-bold">
                          User
                        </span>
                      }
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-info m-0">
                      Welcome{" "}
                      {this.props.username ?
                        <span className="mb-0 text-blue font-weight-700">
                          {this.props.username}
                        </span>
                        :
                        <span className="mb-0 text-blue font-weight-700">
                          User
                        </span>
                      }{"!"}
                    </h6>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-single-02" />
                    <span>My profile</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/settings" tag={Link}>
                    <i className="ni ni-settings-gear-65" />
                    <span>Settings</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/history" tag={Link}>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Activity</span>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="#pablo" onClick={this.handleLogOut}>
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.auth.user.login
  };
}

export default withRouter(connect(mapStateToProps, { logout })(AdminNavbar));
