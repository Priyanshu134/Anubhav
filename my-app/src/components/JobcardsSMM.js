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
            job_profile: 'Social Media Manager',
            location: 'Bangalore',
            DOB: '01/01/1990',
            Description: 'Experienced social media manager with expertise in social media strategy and content creation.'
        },
        {
            id: 2,
            name: 'Jane Smith',
            job_profile: 'Social Media Manager',
            location: 'Hyderabad',
            DOB: '05/10/1995',
            Description: 'Certified social media manager specializing in community engagement and brand awareness.'
        },
        {
            id: 3,
            name: 'Michael Johnson',
            job_profile: 'Social Media Manager',
            location: 'Mumbai',
            DOB: '11/15/1988',
            Description: 'Social media manager with experience in social media advertising and campaign management.'
        },
        {
            id: 4,
            name: 'Emily Brown',
            job_profile: 'Social Media Manager',
            location: 'Delhi',
            DOB: '07/20/1992',
            Description: 'Professional social media manager with skills in influencer marketing and analytics.'
        },
        {
            id: 5,
            name: 'David Wilson',
            job_profile: 'Social Media Manager',
            location: 'Chennai',
            DOB: '03/25/1985',
            Description: 'Experienced social media manager specializing in content strategy and social media ROI.'
        },
        {
            id: 6,
            name: 'Sarah Martinez',
            job_profile: 'Social Media Manager',
            location: 'Pune',
            DOB: '09/12/1993',
            Description: 'Certified social media manager with expertise in social media listening and crisis management.'
        },
        {
            id: 7,
            name: 'Kevin Thompson',
            job_profile: 'Social Media Manager',
            location: 'Gurgaon',
            DOB: '02/08/1987',
            Description: 'Professional social media manager specializing in brand storytelling and influencer partnerships.'
        },
        {
            id: 8,
            name: 'Emma Davis',
            job_profile: 'Social Media Manager',
            location: 'Kolkata',
            DOB: '06/30/1991',
            Description: 'Experienced social media manager with skills in content calendar planning and social media metrics.'
        },
        {
            id: 9,
            name: 'Daniel Anderson',
            job_profile: 'Social Media Manager',
            location: 'Bangalore',
            DOB: '04/18/1989',
            Description: 'Certified social media manager with expertise in social media advertising and audience targeting.'
        },
        {
            id: 10,
            name: 'Olivia White',
            job_profile: 'Social Media Manager',
            location: 'Mumbai',
            DOB: '10/05/1986',
            Description: 'Experienced social media manager specializing in social media engagement and user-generated content.'
        },
    ];

    return (
        <div className="jobcards-page">
            <h1 className="jobcards-heading">Social Media Manager Profiles</h1>
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
