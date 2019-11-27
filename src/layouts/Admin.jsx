import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// REDUX
import { connect } from "react-redux";
import { getUser } from '../store/actions/authActions';
import { uxProcedure } from '../store/actions/combinedActions';
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.jsx";
import AdminFooter from "components/Footers/AdminFooter.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import AlertComponent from "components/Alert/AlertComponent.js";

import routes from "routes.js";

class Admin extends React.PureComponent {

  componentWillMount(){
    if(!this.props.isAuthenticated && this.props.ignioToken){
      // this.props.getUser();
      this.props.uxProcedure();
    }
  }  

  // componentDidUpdate(e) {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   this.refs.mainContent.scrollTop = 0;
  // }

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  render() {
    if(this.props.isLoading){
      return (
        <div className="container">
          <div className="row ml-2 mt-5">
            <div className="col mt-5">
              <h1>Loading...</h1>
            </div>
          </div>
        </div>
      );
    }else if(!this.props.ignioToken){
      return (
        <Redirect from="/admin/index" to="/auth/login"/>
      );
    }
    return (
      <>
        <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: "/admin/index",
            imgSrc: require("assets/img/brand/Asset 1mdpi.png"),
            imgAlt: "..."
          }}
        />
        <div className="main-content" ref="mainContent">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>
            {this.getRoutes(routes)}
            <Redirect from="/" to="/admin/index" />
          </Switch>
          <AlertComponent />
          <Container fluid className="bg-gradient-info">
            <AdminFooter />
          </Container>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return (
    {
      user: state.auth.user,
      data: state.data,
      ignioToken: state.auth.ignioToken,
      isAuthenticated: state.auth.isAuthenticated,
      isLoading: state.auth.isLoading
    }
  );
}

export default connect(mapStateToProps, { getUser, uxProcedure })(Admin);
