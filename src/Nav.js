import './Nav.css';
import { Link } from 'react-router-dom'
import ShovelIcon from './images/Jobs.png'
import ProfileIcon from './images/profile.png'
import MapPic from './images/Map.png'

function Navbar() {
    return (
        <div className="UB_navbar" id="myNavbar">
            <div className="nav-icon-outer" id="jobs">
                <Link to="/jobs">
                        <img className="nav-icon" src={ShovelIcon} alt="Jobs" />
                </Link>
            </div>
            <div className="nav-icon-outer" id="map">
                <Link to="/map">
                        <img className="nav-icon" src={MapPic} alt="Map" />
                </Link>
            </div>
            <div className="nav-icon-outer" id="profile">
                <Link to="/profile">
                        <img className="nav-icon" src={ProfileIcon} alt="Profile" />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;