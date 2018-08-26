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
import ProjectBox from "./Components/ProjectBox/ProjectBox";
import Contact from "./Pages/Contact";

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
                                <NavLink exact activeClassName="selected" to="/contact">Contact</NavLink>
                            </li>

                            <li>
                                <a target="_blank" href="https://medium.com/@matildewittrupenevoldsen">Blog</a>
                            </li>
                        </Navbar>
                    </Header>

                    <Route path="/" exact component={Home}/>

                    <Route path="/about" component={About}/>

                    <Route path="/contact" component={Contact}/>

                    <Footer>
                        <p>Copyright &copy; {new Date().getFullYear()}-{new Date().getFullYear() + 1} powered by Matilde Wittrup Enevoldsen</p>
                    </Footer>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
