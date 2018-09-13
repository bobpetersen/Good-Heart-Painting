import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch,} from 'react-router-dom';
import { connect } from 'react-redux';
import About from './components/About/About';
import Admin from './components/Admin/Admin';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Services from './components/Services/Services';

const App = () => (
    <div>
        <Header title="Good Heart"/>
        <Router>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route
                path="/home"
                component={Home}
                />
                <Route
                path="/about"
                component={About}
                />
                <Route
                path="/admin"
                component={Admin}
                />
                <Route
                path="/services"
                component={Services}
                />
                {/* OTHERWISE (no path!) */}
                <Route render={() => <h1>404</h1>} />
            </Switch>
        </Router>
    </div>
);

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(App);