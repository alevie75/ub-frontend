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
import Jobs from './pages/Jobs'

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
class UBRoutes extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home  checkLogin={this.props.checkLogin} />} />
                <Route path="/login" element={<Login checkLogin={this.props.checkLogin} />} />
                <Route path="/signup" element={<Register checkLogin={this.props.checkLogin} />} />
                <Route path="/register" element={<Navigate replace to="/signup" />} />
                <Route path="/map" element={<UBMap checkLogin={this.props.checkLogin} />} />
                <Route path="/profile" element={<Profile checkLogin={this.props.checkLogin} />} />
                <Route path="/jobs" element={<Jobs checkLogin={this.props.checkLogin} />} />
            </Routes>
        );
    }
}

export default UBRoutes;