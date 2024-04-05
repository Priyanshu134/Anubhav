import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './NavigationMenu.css';

const NavigationMenu = () => {
    const [location, setLocation] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const locations = ['Bangalore', 'Hyderabad', 'Gurgaon', 'Mumbai', 'Chennai', 'Pune', 'Delhi', 'Kolkata'];

    const handleLocationChange = (e) => {
        const value = e.target.value;
        setLocation(value);
        setShowSuggestions(value.trim() !== '');
    };

    const handleLocationClick = (value) => {
        setLocation(value);
        setShowSuggestions(false);
    };

    const handleSearch = () => {
        // Handle search action here
        console.log('Searching for:', location);
    };

    return (
        <nav className="navigation-menu">
            <ul className="menu-left">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
            </ul>
            <div className="search-bar-container">
                <input
                    type="text"
                    placeholder="Search jobs"
                    value={location}
                    onChange={handleLocationChange}
                    className="search-input"
                />
                {showSuggestions && (
                    <ul className="suggestions-list">
                        {locations.map((loc, index) => (
                            <li key={index} onClick={() => handleLocationClick(loc)}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                                {loc}
                            </li>
                        ))}
                    </ul>
                )}
                <button className="search-button" onClick={handleSearch}>Search</button>
            </div>
            <ul className="menu-right">
                <li className="settings-icon">
                    <FontAwesomeIcon icon={faCog} />
                    <ul className="settings-dropdown">
                        <li><a href="#">Settings</a></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationMenu;


