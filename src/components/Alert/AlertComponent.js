import React, { Component } from 'react';
import NotificationAlert from 'react-notification-alert';

// REDUX
import { connect } from "react-redux";

var options = (message) => {
    return {
        place: 'tr',
        message: ` ${message}!`
        ,
        type: "warning",
        icon: "ni ni-like-2",
        autoDismiss: 7
    }
};

class AlertComponent extends Component {
    myFunc(){
        console.log(this.refs);
        console.log(options());
        
        this.refs.notify.notificationAlert(options("wow"));
    }
  render() {
      if(this.props.error.error != null){
        console.log(this.props.error.error);
      }
    return (
      <div>
            <NotificationAlert ref="notify" />
            <button onClick={() => this.myFunc()}>Hey</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      error: state.error,
      message: state.message.message
    };
};

export default connect(mapStateToProps)(AlertComponent);