import {Meteor} from 'meteor/meteor';
import React from 'react';
import PrivateHeader from './PrivateHeader';

export default class Dashboard extends React.Component {
    componentWillMount() {
        this.onEnterPrivatePage(this.props);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            this.onEnterPrivatePage(nextProps);
        }
    }
    onEnterPrivatePage(props) {
        if (!Meteor.userId()) {
            props
                .history
                .replace('/');
        }
    }
    render() {
        return (
            <div>
                <PrivateHeader title="Dashboard"/>
                <div className="page-content">
                    Dashboard page content.
                </div>
            </div>
        );
    }
}