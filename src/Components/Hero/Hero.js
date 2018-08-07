import React, {Component} from 'react';
import './Hero.css';

export default class Hero extends Component {
    render() {
        return (
            <div className="hero">
                {this.props.children}
            </div>
        );
    }
}