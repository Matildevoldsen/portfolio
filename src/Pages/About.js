import React, {Component} from 'react';

export default class About extends Component {
    render() {

        return (
            <div className="about-page">
                <section id="about" className="section section-about">
                    <div>
                        <div className="section-box">
                            <div className="profile p-3 p-md-4 p-lg-5">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="profile-photo mw-100">
                                            <img alt="" src="https://scontent.fcph2-1.fna.fbcdn.net/v/t1.0-9/29426111_619322285076797_3976231470011510933_n.jpg?_nc_cat=0&oh=173f90911df1a0b86611420c941c7c1b&oe=5C2D4124" className="img-fluid photo"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="profile-info">
                                            <div className="profile-items clearfix">
                                                <div className="profile-preword"><span>Hello</span></div>
                                            </div>
                                            <h1 className="profile-title">
                                                <span>I'm </span>
                                                Matilde Enevoldsen
                                            </h1>
                                            <h2 className="profile-position">Full Stack Web Developer</h2></div>
                                        <ul className="profile-list">
                                            <li className="clearfix">
                                                <strong className="title">Location</strong>
                                                <span className="cont">Copenhagen, Denmark</span>
                                            </li>
                                            <li className="clearfix">
                                                <strong className="title">E-mail</strong>
                                                <span className="cont">matilde.enevoldsen@gmail.com</span>
                                            </li>
                                            <li className="clearfix">
                                                <strong className="title">Phone</strong>
                                                <span className="cont">0045 20878716</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}