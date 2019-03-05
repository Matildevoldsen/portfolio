import React, {Component} from 'react';

export default class Box extends Component {
    render() {
        return(
            <div className="section-box">
                {this.props.children}
            </div>
        );
    }
}