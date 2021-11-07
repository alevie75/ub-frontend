import React from "react";
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>This is the homepage</h1>
                <Link to="/">

                </Link>
            </div>
        );
    }
}

export default Home;