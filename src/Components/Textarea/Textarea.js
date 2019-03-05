import React, {Component} from 'react';

export default class Textarea extends Component {
    render() {
        return (
            <div className="group">
                <textarea required placeholder={this.props.content} name={this.props.name} value={this.props.text} ></textarea>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>{this.props.title}</label>
            </div>
        );
    }
}