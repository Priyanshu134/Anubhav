import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './SearchBar.css'; // Import CSS file for styling

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const topLocations = ['Bangalore', 'Hyderabad', 'Gurgaon', 'Mumbai', 'Chennai', 'Pune', 'Delhi', 'Kolkata'];

  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `/api/search?query=${searchQuery}&location=${location}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(false);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    setShowSuggestions(false);
  };

  const handleLocationClick = () => {
    setShowSuggestions(true);
  };

  const handleLocationSelect = (selectedLocation) => {
    setLocation(selectedLocation);
    setShowSuggestions(false);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search for jobs, requests, and more"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        className="search-input"
      />
      <div className="location-container" ref={inputRef}>
        {/* <i className="fas fa-search location-icon"></i> */}
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={handleLocationChange}
          onClick={handleLocationClick} // Show suggestions on click
          className="location-input"
        />
        {showSuggestions && (
          <ul className="suggestions-list">
            {topLocations.map((loc) => (
              <li key={loc} onClick={() => handleLocationSelect(loc)}>
                {loc}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={handleSearch} className="search-button">
        Search
      </button>

      <ul className="search-results">
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;






