import React, { useState } from 'react';
import './Jobcard.css'; // Import the corresponding CSS file
import Chat from './Chat.js'; // Import your Chat component

const Jobcard = ({ name, job_profile, location, Description }) => {
    const [showChat, setShowChat] = useState(false); // State for chat box visibility

    const handleChatToggle = () => {
        setShowChat(!showChat); // Toggle chat box visibility
    };

    return (
        <div className="jobcard-card">
            <div className="jobcard-name">Name: {name}</div>
            <div className="jobcard-jobprofile">{job_profile}</div>
            <div className="jobcard-info">Location: {location}</div>
            <div className="jobcard-info">Description: {Description}</div>
            <div className="jobcard-actions">
                <button className="jobcard-button" onClick={handleChatToggle}>Chat</button>
                {/* Render Chat component when showChat is true */}
                {showChat && <Chat />}
            </div>
        </div>
    );
};

export default Jobcard;

