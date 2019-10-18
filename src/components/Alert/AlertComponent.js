import React, { Component } from 'react';
import NotificationAlert from 'react-notification-alert';
// REDUX
import { connect } from "react-redux";

import { withOptions } from './withOptions';

class AlertComponent extends Component {

    componentDidUpdate(prevProps) {
        const { error, message } = this.props;
        var notificationOption = {};
        console.log(prevProps);
        if (error !== prevProps.error) {
            notificationOption = {
                type: "error",
                props: this.props.error
            }
            this.refs.notify.notificationAlert(withOptions(notificationOption));
        }else if (message !== prevProps.message) {
            notificationOption = {
                type: "message",
                props: this.props.message
            }
            this.refs.notify.notificationAlert(withOptions(notificationOption));
        }
      }

    render() {
        return (
        <div>
                <NotificationAlert ref="notify" />
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