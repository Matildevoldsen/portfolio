import React, {Component} from 'react';
import Hero from "../Components/Hero/Hero";
import ProjectBox from "../Components/ProjectBox/ProjectBox";

export default class Home extends Component {
    render() {
        return (
            <div className="xl-container">
                <Hero>
                    <div className="col-xs-12 col-md-12 col-lg-12">
                        <div className="typewriter--effect">
                            <h1>Welcome to my site, I'm a cat lover.</h1>
                        </div>
                    </div>

                    <div className="row hide-larger-screens">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <a href="https://github.com/Matildevoldsen/Restaurant-Stage-2">
                                <ProjectBox boxId="5">
                                    <h2>Restaurant Review</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <a href="https://github.com/Matildevoldsen/Neighborhood-Map-React-">
                                <ProjectBox boxId="1">
                                    <h2>London's Cafe's</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <a href="https://github.com/Matildevoldsen/myreads">
                                <ProjectBox boxId="4">
                                    <h2>MyReads</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12  col-sm-6  col-md-6 col-lg-6">
                            <a href="https://github.com/Matildevoldsen/Brooklyn">
                                <ProjectBox boxId="2">
                                    <h2>Brooklyn Film Festival</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12  col-sm-6 col-md-6 col-lg-6">
                            <a href="https://github.com/Matildevoldsen/FeedReader">
                                <ProjectBox boxId="6">
                                    <h2>FeedReader Testing</h2>
                                </ProjectBox>
                            </a>
                        </div>
                    </div>

                    <div className="row hide-md-sm-devices">
                        <div className="col-xs-12 col-md-12 col-lg-6 col-sm-12">
                            <a href="https://github.com/Matildevoldsen/Restaurant-Stage-2">
                                <ProjectBox boxId="5" Styles={{minHeight: '98%', height: '250px'}}>
                                    <h2>Restaurant Reviews</h2>
                                </ProjectBox>
                            </a>
                        </div>
                        <div className="col-xs-12 col-md-12 col-lg-6">
                            <div className="row">
                                <div className="col-xs-12 col-md-12 col-lg-6">
                                    <a href="https://github.com/Matildevoldsen/Neighborhood-Map-React-">
                                        <ProjectBox boxId="1">
                                            <h2>London's Cafe's</h2>
                                        </ProjectBox>
                                    </a>
                                </div>

                                <div className="col-xs-12 col-md-12 col-lg-6 ">
                                    <a href="https://github.com/Matildevoldsen/Brooklyn">
                                        <ProjectBox boxId="2">
                                            <h2>Brooklyn Film Festival</h2>
                                        </ProjectBox>
                                    </a>
                                </div>

                                <div className="col-xs-12 col-md-12 col-lg-6 ">
                                    <a href="https://github.com/Matildevoldsen/myreads">
                                        <ProjectBox boxId="4">
                                            <h2>MyReads</h2>
                                        </ProjectBox>
                                    </a>
                                </div>
                                <div className="col-xs-12 col-md-12 col-lg-6">
                                    <a href="https://github.com/Matildevoldsen/FeedReader">
                                        <ProjectBox boxId="6">
                                            <h2>FeedReader Testing</h2>
                                        </ProjectBox>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Hero>
            </div>
        );
    }
}