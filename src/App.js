import React, {Component} from 'react';
import './Styles/App.css';
import './Styles/Reset.css';
import Header from './Components/Header/Header';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import {NavLink, BrowserRouter, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Hero from "./Components/Hero/Hero";

/*
TODO: Make the intro/first part of what you see on the site: #fff.
 */
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header>
                        <Navbar>
                            <li>
                                <NavLink exact activeClassName="selected" to="/">Work</NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName="selected" to="/about">About</NavLink>
                            </li>
                            <li>
                                <a target="_blank" href="https://medium.com/@matildewittrupenevoldsen">Blog</a>
                            </li>
                        </Navbar>

                        <Hero>
                            <div className="typewriter--effect">
                                <h1>Welcome to my portfolio</h1>
                            </div>
                        </Hero>
                    </Header>


                    <Route path="/" exact component={Home}/>

                    <Route path="/about" component={About}/>


                    <Footer>

                    </Footer>
                    /*Footer here*/
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
