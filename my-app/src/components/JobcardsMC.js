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
            job_profile: 'Music Composer',
            location: 'Bangalore',
            DOB: '01/01/1990',
            Description: 'Experienced music composer with expertise in composing background scores and soundtracks.'
        },
        {
            id: 2,
            name: 'Jane Smith',
            job_profile: 'Music Composer',
            location: 'Hyderabad',
            DOB: '05/10/1995',
            Description: 'Certified music composer specializing in composing music for films and TV shows.'
        },
        {
            id: 3,
            name: 'Michael Johnson',
            job_profile: 'Music Composer',
            location: 'Mumbai',
            DOB: '11/15/1988',
            Description: 'Music composer with experience in composing music for commercials and advertisements.'
        },
        {
            id: 4,
            name: 'Emily Brown',
            job_profile: 'Music Composer',
            location: 'Delhi',
            DOB: '07/20/1992',
            Description: 'Professional music composer with skills in composing music for video games and animations.'
        },
        {
            id: 5,
            name: 'David Wilson',
            job_profile: 'Music Composer',
            location: 'Chennai',
            DOB: '03/25/1985',
            Description: 'Experienced music composer specializing in composing orchestral music and scores.'
        },
        {
            id: 6,
            name: 'Sarah Martinez',
            job_profile: 'Music Composer',
            location: 'Pune',
            DOB: '09/12/1993',
            Description: 'Certified music composer with expertise in composing music for podcasts and audio dramas.'
        },
        {
            id: 7,
            name: 'Kevin Thompson',
            job_profile: 'Music Composer',
            location: 'Gurgaon',
            DOB: '02/08/1987',
            Description: 'Professional music composer specializing in composing jingles and theme songs.'
        },
        {
            id: 8,
            name: 'Emma Davis',
            job_profile: 'Music Composer',
            location: 'Kolkata',
            DOB: '06/30/1991',
            Description: 'Experienced music composer with skills in composing music for documentaries and short films.'
        },
        {
            id: 9,
            name: 'Daniel Anderson',
            job_profile: 'Music Composer',
            location: 'Bangalore',
            DOB: '04/18/1989',
            Description: 'Certified music composer with expertise in composing ambient music and background scores.'
        },
        {
            id: 10,
            name: 'Olivia White',
            job_profile: 'Music Composer',
            location: 'Mumbai',
            DOB: '10/05/1986',
            Description: 'Experienced music composer specializing in composing electronic music and beats.'
        },
    ];

    return (
        <div className="jobcards-page">
            <h1 className="jobcards-heading">Music Composer Profiles</h1>
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
