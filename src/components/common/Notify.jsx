import React, {Component} from 'react';

import Notification from 'grommet/components/Notification'

export class NotifyError extends Component {
    render() {
        return (
            <div>
                {!this.props.message ||
                    <Notification
                        status="critical"
                        message={this.props.title}
                        state={this.props.message}
                        closer={true}  />
                }
            </div>
        );
    }
}
export class NotifyLoading extends Component {
    render() {
        const message = `Loading ${this.props.message}`;
        return (
            <div>
                {!this.props.loading ||
                    <Notification
                        message={message} /> }
            </div>
        )
    }
}
