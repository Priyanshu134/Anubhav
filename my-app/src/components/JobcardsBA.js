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
            job_profile: 'Business Analyst',
            location: 'Bangalore',
            DOB: '01/01/1990',
            Description: 'Experienced Business Analyst with expertise in requirement gathering and data analysis.'
        },
        {
            id: 2,
            name: 'Jane Smith',
            job_profile: 'Business Analyst',
            location: 'Hyderabad',
            DOB: '05/10/1995',
            Description: 'Certified Business Analyst specializing in business process optimization and strategy development.'
        },
        {
            id: 3,
            name: 'Michael Johnson',
            job_profile: 'Business Analyst',
            location: 'Mumbai',
            DOB: '11/15/1988',
            Description: 'Business Analyst with experience in market research and competitive analysis.'
        },
        {
            id: 4,
            name: 'Emily Brown',
            job_profile: 'Business Analyst',
            location: 'Delhi',
            DOB: '07/20/1992',
            Description: 'Professional Business Analyst with skills in data modeling and project management.'
        },
        {
            id: 5,
            name: 'David Wilson',
            job_profile: 'Business Analyst',
            location: 'Chennai',
            DOB: '03/25/1985',
            Description: 'Experienced Business Analyst specializing in requirements validation and stakeholder management.'
        },
        {
            id: 6,
            name: 'Sarah Martinez',
            job_profile: 'Business Analyst',
            location: 'Pune',
            DOB: '09/12/1993',
            Description: 'Certified Business Analyst with expertise in process improvement and business intelligence.'
        },
        {
            id: 7,
            name: 'Kevin Thompson',
            job_profile: 'Business Analyst',
            location: 'Gurgaon',
            DOB: '02/08/1987',
            Description: 'Professional Business Analyst with skills in data visualization and reporting.'
        },
        {
            id: 8,
            name: 'Emma Davis',
            job_profile: 'Business Analyst',
            location: 'Kolkata',
            DOB: '06/30/1991',
            Description: 'Experienced Business Analyst specializing in requirements management and IT consulting.'
        },
        {
            id: 9,
            name: 'Daniel Anderson',
            job_profile: 'Business Analyst',
            location: 'Bangalore',
            DOB: '04/18/1989',
            Description: 'Certified Business Analyst with expertise in business process mapping and solution design.'
        },
        {
            id: 10,
            name: 'Olivia White',
            job_profile: 'Business Analyst',
            location: 'Mumbai',
            DOB: '10/05/1986',
            Description: 'Experienced Business Analyst specializing in data-driven decision-making and project planning.'
        },
    ];

    return (
        <div className="jobcards-page">
            <h1 className="jobcards-heading">Business Analyst Profiles</h1>
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
