import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';

/**
 * Import all page components here
 */
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home.js';
import UBMap from './pages/Map';
import Profile from './pages/Profile'
import Jobs from './pages/jobs/Jobs'

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
class UBRoutes extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home  checkLogin={this.props.checkLogin} basePath={this.props.basePath} />} />
                <Route path="/login" element={<Login checkLogin={this.props.checkLogin} basePath={this.props.basePath} />} />
                <Route path="/signup" element={<Register checkLogin={this.props.checkLogin} basePath={this.props.basePath} />} />
                <Route path="/register" element={<Navigate replace to="/signup" />} basePath={this.props.basePath} />
                <Route path="/map" element={<UBMap checkLogin={this.props.checkLogin} basePath={this.props.basePath} />} />
                <Route path="/profile" element={<Profile checkLogin={this.props.checkLogin} basePath={this.props.basePath} />} />
                <Route path="/jobs" element={<Jobs checkLogin={this.props.checkLogin} />} basePath={this.props.basePath} />
            </Routes>
        );
    }
}

export default UBRoutes;