// JobcardsPage.js

import React from 'react';
import Jobcard from './Jobcard.js'; // Import the Jobcard component
import './JobcardsPage.css'; // Import the corresponding CSS file

const JobcardsPage = () => {
    // Dummy data for job profiles
    const jobProfiles = [
        {
            id: 1,
            name: 'John Doe',
            job_profile: 'Cinematography Creative',
            location: 'Bangalore',
            DOB: '01/01/1990',
            Description: 'Experienced cinematography creative with expertise in visual storytelling and film production.'
        },
        {
            id: 2,
            name: 'Jane Smith',
            job_profile: 'Cinematography Creative',
            location: 'Hyderabad',
            DOB: '05/10/1995',
            Description: 'Certified cinematography creative specializing in camera operation and lighting techniques.'
        },
        {
            id: 3,
            name: 'Michael Johnson',
            job_profile: 'Cinematography Creative',
            location: 'Mumbai',
            DOB: '11/15/1988',
            Description: 'Cinematography creative with experience in video editing and color grading.'
        },
        {
            id: 4,
            name: 'Emily Brown',
            job_profile: 'Cinematography Creative',
            location: 'Delhi',
            DOB: '07/20/1992',
            Description: 'Professional cinematography creative with skills in visual effects and post-production.'
        },
        {
            id: 5,
            name: 'David Wilson',
            job_profile: 'Cinematography Creative',
            location: 'Chennai',
            DOB: '03/25/1985',
            Description: 'Experienced cinematography creative specializing in drone cinematography and aerial shots.'
        },
        {
            id: 6,
            name: 'Sarah Martinez',
            job_profile: 'Cinematography Creative',
            location: 'Pune',
            DOB: '09/12/1993',
            Description: 'Certified cinematography creative with expertise in film directing and screenplay writing.'
        },
        {
            id: 7,
            name: 'Kevin Thompson',
            job_profile: 'Cinematography Creative',
            location: 'Gurgaon',
            DOB: '02/08/1987',
            Description: 'Professional cinematography creative specializing in cinematography equipment and camera techniques.'
        },
        {
            id: 8,
            name: 'Emma Davis',
            job_profile: 'Cinematography Creative',
            location: 'Kolkata',
            DOB: '06/30/1991',
            Description: 'Experienced cinematography creative with skills in film production management and storytelling.'
        },
        {
            id: 9,
            name: 'Daniel Anderson',
            job_profile: 'Cinematography Creative',
            location: 'Bangalore',
            DOB: '04/18/1989',
            Description: 'Certified cinematography creative with expertise in documentary filmmaking and cinematography aesthetics.'
        },
        {
            id: 10,
            name: 'Olivia White',
            job_profile: 'Cinematography Creative',
            location: 'Mumbai',
            DOB: '10/05/1986',
            Description: 'Experienced cinematography creative specializing in music video production and visual effects.'
        },
    ];

    return (
        <div className="jobcards-page">
            <h1 className="jobcards-heading">Cinematography Creative Profiles</h1>
            <div className="jobcards-container">
                {jobProfiles.map(profile => (
                    <Jobcard
                        key={profile.id}
                        name={profile.name}
                        job_profile={profile.job_profile}
                        location={profile.location}
                        DOB={profile.DOB}
                        Description={profile.Description}
                    />
                ))}
            </div>
        </div>
    );
};

export default JobcardsPage;
