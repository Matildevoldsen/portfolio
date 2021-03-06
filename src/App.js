import React, {Component} from 'react';
import './Styles/App.css';
import './Styles/Reset.css';
import Header from './Components/Header/Header';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import {NavLink, BrowserRouter, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

/*
TODO: Make the intro/first part of what you see on the site: #fff.
 */
class App extends Component {
    constructor(props) {
        super(props);

    }

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
                                <a target="_blank" href="https://medium.com/@matildewittrupenevoldsen"
                                   rel="noopener noreferrer">Blog</a>
                            </li>
                            <hr/>
                        </Navbar>
                    </Header>

                    <Route path="/" exact component={Home}/>

                    <Route path="/about" component={About}/>

                    <Route path="/contact" component={Contact}/>

                    <Footer>
                        <div className="left">
                            <p>Copyright &copy; {new Date().getFullYear()}-{new Date().getFullYear() + 1}</p>
                        </div>

                        <div className="right">
                            <a href="https://github.com/Matildevoldsen">Github</a>
                            <a href="https://twitter.com/MatildeWittrup">Twitter</a>
                            <a href="https://www.linkedin.com/in/matilde-wittrup-enevoldsen/">LinkedIn</a>
                        </div>
                    </Footer>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
