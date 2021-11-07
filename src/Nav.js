import './Nav.css';
import { Link } from 'react-router-dom'
import HomeLogoIcon from './images/house.png'
import SettingsIcon from './images/settings.png'
import Shovel from './images/shovel.png'

function Navbar() {
    return (
        <div className="navbar" id="myNavbar">
            <div className="nav-icon-outer" id="home">
                <Link to="/">
                    <button>
                        <img className="nav-icon" src={HomeLogoIcon} alt="Home" />
                    </button>
                </Link>
            </div>
            <div className="nav-icon-outer" id="login">
                <Link to="/login">
                    <button>
                        <img className="nav-icon" src={SettingsIcon} alt="Login" />
                    </button>
                </Link>
            </div>
            <div className="nav-icon-outer" id="register">
                <Link to="/signup">
                    <button>
                        <img className="nav-icon" src={Shovel} alt="Sign Up" />
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;