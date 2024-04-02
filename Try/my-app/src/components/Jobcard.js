// Jobcard.js

import React from 'react';
import './Jobcard.css'; // Import the corresponding CSS file

const Jobcard = ({ name, location, DOB, Description }) => {
    return (
        <div className="jobcard-card">
            <div className="jobcard-name">Name:{name}</div>
            <div className="jobcard-info"> Location: {location}</div>
            <div className="jobcard-info"> Description:{Description}</div>
            <div className="jobcard-actions">
                <button className="jobcard-button">Chat</button>
                {/* <button className="jobcard-button">View Jobs</button> */}
            </div>
        </div>
    );
};

export default Jobcard;
