import React, {Component} from 'react';

export default class Input extends Component {
    render() {
        return (
            <div className="group">
                <input autocomplete="false" required placeholder={this.props.content} name={this.props.title} value={this.props.text} className="" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>{this.props.title}</label>
            </div>
        );
    }
}