import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenu.css';

const NavigationMenu = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        const formattedQuery = searchQuery.trim().toLowerCase();
        switch (formattedQuery) {
            case 'business analyst':
                window.location.href = '/JobcardsPageBA';
                break;
            case 'software engineer':
                window.location.href = '/JobcardsPageSE';
                break;
            case 'social media manager':
                window.location.href = '/JobcardsPageSMM';
                break;
            case 'music composer':
                window.location.href = '/JobcardsPageMC';
                break;
            case 'cinematography creative':
                window.location.href = '/JobcardsPageCC';
                break;
            default:
                // Handle other search actions here
                console.log('Searching for:', searchQuery);
                break;
        }
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
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <button className="search-button" onClick={handleSearch}>Search</button>
            </div>
            <ul className="menu-right">
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <a href="#">Logout</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationMenu;






