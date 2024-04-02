import React, { useState, useEffect } from 'react';
import './PopularJobsSection.css';
import axios from 'axios';
const PopularJobsSection = () => {
    const [jobs, setJobs] = useState([]);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [originalPositions, setOriginalPositions] = useState([]);

    useEffect(() => {
        // Simulating sample job data
        const sampleJobs = [
            { id: 1, title: 'Software Engineer' },
            { id: 2, title: 'Data Analyst' },
            { id: 3, title: 'UX Designer' },
            { id: 4, title: 'Marketing Manager' },
            { id: 5, title: 'Product Manager' },
            { id: 6, title: 'Web Developer' },
            { id: 7, title: 'Graphic Designer' },
            { id: 8, title: 'Financial Analyst' },
            { id: 9, title: 'HR Manager' },
            { id: 10, title: 'Sales Executive' },
            { id: 11, title: 'Content Writer' },
            { id: 12, title: 'Customer Support Specialist' }
        ];
        setJobs(sampleJobs);

        // Manually set original positions
        const initialPositions = [
            { id: 1, x: 150, y: 250 },
            { id: 2, x: 690, y: 10 },
            { id: 3, x: 750, y: 150 },
            { id: 4, x: 200, y: 130 },
            { id: 5, x: 569, y: 260 },
            { id: 6, x: 630, y: 78 },
            { id: 7, x: 485, y: 200 },
            { id: 8, x: 525, y: 222 },
            { id: 9, x: 969, y: 333 },
            { id: 10, x: 320, y: 300 },
            { id: 11, x: 830, y: 280 },
            { id: 12, x: 880, y: 300 }
        ];
        setOriginalPositions(initialPositions);
    }, []);

    const handleMouseMove = (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const container = document.querySelector('.popular-jobs-section');
        const containerRect = container.getBoundingClientRect();

        if (
            mouseX >= containerRect.left &&
            mouseX <= containerRect.right &&
            mouseY >= containerRect.top &&
            mouseY <= containerRect.bottom
        ) {
            setCursorPosition({ x: mouseX, y: mouseY });
        } else {
            setCursorPosition({ x: 0, y: 0 });
        }
    };

    return (
        <div className="popular-jobs-section" onMouseMove={handleMouseMove}>
            {/* <h2 className="centered">Popular Jobs</h2> */}
            <div className="job-list">
                {jobs.map((job, index) => {
                    const originalPosition = originalPositions.find((pos) => pos.id === job.id);
                    const distanceX = cursorPosition.x - originalPosition.x;
                    const distanceY = cursorPosition.y - originalPosition.y;
                    const maxDistance = 100; // Increase the maximum movement distance towards the right

                    // Calculate new position with limited movement in all directions
                    const newX = originalPosition.x - Math.min(distanceX, maxDistance);
                    const newY = originalPosition.y - Math.min(distanceY, maxDistance);

                    return (
                        <div
                            key={job.id}
                            className="job-card"
                            style={{
                                transform: `translate(${newX}px, ${newY}px)`, // Corrected interpolation
                                transition: 'transform 1s ease' // Add transition property
                            }}
                        >
                            <p>{job.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PopularJobsSection;



































