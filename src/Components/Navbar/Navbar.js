import React, {Component} from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    {this.props.children}
                </ul>
            </nav>
        );
    }
}
