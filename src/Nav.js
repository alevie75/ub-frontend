import './Nav.css';
import { Link } from 'react-router-dom'
import ShovelIcon from './images/shovel.png'
import ProfileIcon from './images/Profile.png'
import MapPic from './images/Map.png'

function Navbar() {
    return (
        <div className="navbar" id="myNavbar">
            <div className="nav-icon-outer" id="jobs">
                <Link to="/jobs">
                    <button>
                        <img className="nav-icon" src={ShovelIcon} alt="Jobs" />
                    </button>
                </Link>
            </div>
            <div className="nav-icon-outer" id="map">
                <Link to="/map">
                    <button>
                        <img className="nav-icon" src={MapPic} alt="Map" />
                    </button>
                </Link>
            </div>
            <div className="nav-icon-outer" id="profile">
                <Link to="/profile">
                    <button>
                        <img className="nav-icon" src={ProfileIcon} alt="Profile" />
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;