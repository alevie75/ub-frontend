import React from 'react';
import { Routes, Route} from 'react-router-dom';

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
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/map" element={<UBMap />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/jobs" element={<Jobs />} />
            </Routes>
        );
    }
}

export default UBRoutes;