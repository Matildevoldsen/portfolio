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
import LoadingScreen from 'react-loading-screen';

/*
TODO: Make the intro/first part of what you see on the site: #fff.
 */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        console.log(this.state)
        this.setState({isLoading: false});
        console.log(this.state)
    }

    render() {
        return (
            <BrowserRouter>
                <LoadingScreen
                    loading={this.state.isLoading}
                    bgColor='#f1f1f1'
                    spinnerColor='#9ee5f8'
                    textColor='#676767'
                    text='Loading something awesome!'
                >
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
                                <hr/>
                            </Navbar>
                        </Header>

                        <Route path="/work" exact component={Home}/>

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
                </LoadingScreen>
            </BrowserRouter>
        );
    }
}

export default App;
