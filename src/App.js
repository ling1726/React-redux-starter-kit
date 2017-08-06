import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';


// COMPONENT IMPORTS
import Nav from './components/Nav';
import Home from './components/Home';

// The parent component of the entire app
// also controls routing for the app with the React router
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header>
                    </header>

                    <Nav/> 

                    <main>
                    {/* DECLARE ROUTES HERE */}
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/bLing1"/>
                            <Route path="/bLing2"/>
                        </Switch>
                    </main>

                    <footer>
                        <p>bLing react redux template</p>
                    </footer>
                </div>
            </Router>
        )
    }
}
