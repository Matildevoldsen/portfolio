import React, {Component} from 'react';

export default class ProjectBox extends Component {
    render() {
        return (
            <div className="box" style={this.props.Styles} id={"box" + this.props.boxId}>
                {this.props.children}
            </div>
        );
    }
}