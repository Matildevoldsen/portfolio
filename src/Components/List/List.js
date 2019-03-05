import React, {Component} from 'react';

export default class List extends Component {
    render() {
        return (
            <li className="clearfix">
                <strong className="title">{this.props.title}</strong>
                <span className="cont">{this.props.cont}</span>
            </li>
        );
    }
}