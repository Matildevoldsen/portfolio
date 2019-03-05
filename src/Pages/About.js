import React, {Component} from 'react';
import Box from '../Components/Box/Box'
import List from "../Components/List/List";

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
                                            <img alt="Matilde Wittrup Enevoldsen"
                                                 src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/29426111_619322285076797_3976231470011510933_n.jpg?_nc_cat=109&_nc_ht=scontent-lht6-1.xx&oh=062f30eb0aae60b764f9d841ad392e38&oe=5D1A8F24"
                                                 className="img-fluid photo"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 profile-center">
                                        <div className="profile-info">
                                            <div className="profile-items">
                                                <div className="profile-preword"><span>Hello there!</span></div>
                                            </div>
                                            <h1 className="profile-title">
                                                <span>I'm </span>
                                                Matilde Enevoldsen
                                            </h1>
                                            <h2 className="profile-position">Full Stack Web Developer</h2></div>
                                        <ul className="profile-list">
                                            <List
                                                title="Location"
                                                cont="London, United Kingdom"
                                            />

                                            <List
                                                title="E-mail"
                                                cont="matilde.enevoldsen@gmail.com"
                                            />

                                            <List
                                                title="Phone"
                                                cont="0044 07449474947"
                                            />

                                            <List
                                                title="Education"
                                                cont="BSc Full-stack web development - 2018-2019 (part-time)"
                                            />

                                            <List
                                                title="Job"
                                                cont="Junior Full Stack Developer"
                                            />

                                            <List
                                                title="Working at"
                                                cont="Zodiac Media"
                                            />

                                            <List
                                                title="Educational Institution"
                                                cont="OpenClassrooms"
                                            />
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