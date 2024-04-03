import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './NavigationMenu.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const NavigationMenu = () => {
    return (
        <nav className="navigation-menu">
            {/* Left section */}
            <ul className="menu-left">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                {/* <li><a href="#">Recruiters</a></li> */}
                {/* <li><a href="#">Companies</a></li> */}
                {/* Add more links as needed */}
            </ul>
            {/* Right section */}
            <ul className="menu-right">
                <li className="settings-icon">
                    <FontAwesomeIcon icon={faCog} />
                    <ul className="settings-dropdown">
                        <li><a href="#">Settings</a></li>
                        <li><Link to="/profile">Profile</Link></li> {/* Link to ProfilePage */}
                        <li><a href="#">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationMenu;





