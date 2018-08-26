import React, {Component} from 'react';
import Hero from "../Components/Hero/Hero";
import ProjectBox from "../Components/ProjectBox/ProjectBox";

export default class Home extends Component {
    componentDidMount = () => {
        fetch('https://api.github.com/users/Matildevoldsen/repos ')
            .then(res => res.json())
            .then(repos => console.log(repos))
    }

    render() {
        return (
            <div>
                <Hero>
                    <div className="col-xs-12 col-md-12 col-lg-12">
                        <div className="typewriter--effect">
                            <h1>Welcome to my portfolio</h1>
                        </div>
                    </div>

                    <div className="row hide-larger-screens">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <a href="https://github.com/Matildevoldsen/Neighborhood-Map-React-">
                                <ProjectBox boxId="1">
                                    <h2>London's Cafe's</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <a href="https://github.com/Matildevoldsen/Neighborhood-Map-React-">
                                <ProjectBox boxId="1">
                                    <h2>London's Cafe's</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <a href="https://github.com/Matildevoldsen/Neighborhood-Map-React-">
                                <ProjectBox boxId="1">
                                    <h2>London's Cafe's</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12  col-sm-6  col-md-6">
                            <a href="https://github.com/Matildevoldsen/Brooklyn">
                                <ProjectBox boxId="2">
                                    <h2>Brooklyn Film Festival</h2>
                                </ProjectBox>
                            </a>
                        </div>

                        <div className="col-xs-12  col-sm-6 col-md-6">
                            <a href="https://github.com/Matildevoldsen/Neighborhood-Map-React-">
                                <ProjectBox boxId="1">
                                    <h2>London's Cafe's</h2>
                                </ProjectBox>
                            </a>
                        </div>
                    </div>

                    <div className="row hide-md-sm-devices">
                        <div className="col-xs-12 col-md-12 col-lg-6 col-sm-6">
                            <ProjectBox Styles={{minHeight: '98%'}}>
                                <h2>Hello</h2>
                            </ProjectBox>
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
                                    <ProjectBox>
                                        <h2>Hello</h2>
                                    </ProjectBox>
                                </div>

                                <div className="col-xs-12 col-md-12 col-lg-6">
                                    <ProjectBox>
                                        <h2>Hello</h2>
                                    </ProjectBox>
                                </div>
                            </div>
                        </div>
                    </div>
                </Hero>
            </div>
        );
    }
}