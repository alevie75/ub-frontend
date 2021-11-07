import React from 'react';
import { Routes, Route} from 'react-router-dom';

/**
 * Import all page components here
 */
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home.js'

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
            </Routes>
        );
    }
}

export default UBRoutes;