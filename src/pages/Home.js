import React from "react";
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import HomeLogoIcon from "../images/house.png";

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>No Mo Sno</h1>
                <div>
                    <Link to="/login">
                        <button className="ub-button"> Login </button>
                    </Link>
                    <Link to="/signup">
                        <button className="ub-button"> Signup </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;