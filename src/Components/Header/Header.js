import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                {this.props.children}
            </div>
            /*TODO: Scroll Down To Next Project*/
            /*TODO: Type effect on welcome text.*/
            /*TODO: Make projects displayed in different sizes and forms.*/
        );
    }
}
