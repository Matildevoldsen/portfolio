import React, {Component} from 'react';
import Box from '../Components/Box/Box'

export default class About extends Component {
    render() {

        return (
            <div className="about-page">
                <section id="about" className="section section-about">
                    <div>
                        <Box>
                            <div className="profile">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="profile-photo mw-100">
                                            <img alt="A photo of me"
                                                 src="https://scontent.fcph2-1.fna.fbcdn.net/v/t1.0-9/29426111_619322285076797_3976231470011510933_n.jpg?_nc_cat=0&oh=173f90911df1a0b86611420c941c7c1b&oe=5C2D4124"
                                                 className="img-fluid photo"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 profile-center">
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
                                            <li className="clearfix">
                                                <strong className="title">Education</strong>
                                                <span className="cont">BSc Full-stack web development - 2018-2019 (part-time)</span>
                                            </li>
                                            <li className="clearfix">
                                                <strong className="title">Educational Institution</strong>
                                                <span className="cont"><a
                                                    href="https://www.openclassrooms.com">OpenClassrooms</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </div>
                </section>

                <section className="about--content">
                    <h3>Personal Statement</h3>
                    <p>A strong conceptual thinker who has a keen interest in all things related to the Internet. She is
                        committed to having an impact on the future of any company that she works for and possesses the
                        enthusiasm and commitment to learn and develop her career within a fast paced and growing
                        business. She has a track record of building fluid and dynamic websites that are user-friendly.
                        Right now she is looking for a suitable opportunity that will not only take her career to the
                        next level but will also allow her to work alongside a very specialized team.</p>
                </section>

            </div>
        );
    }
}