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
            job_profile: 'Software Engineer',
            location: 'Bangalore',
            DOB: '01/01/1990',
            Description: 'Experienced software engineer with expertise in JavaScript and React.'
        },
        {
            id: 2,
            name: 'Jane Smith',
            job_profile: 'Software Engineer',
            location: 'Hyderabad',
            DOB: '05/10/1995',
            Description: 'Frontend developer with skills in HTML, CSS, and JavaScript frameworks.'
        },
        {
            id: 3,
            name: 'Michael Johnson',
            job_profile: 'Software Engineer',
            location: 'Mumbai',
            DOB: '11/15/1988',
            Description: 'Full-stack developer with experience in Node.js, Express, and MongoDB.'
        },
        {
            id: 4,
            name: 'Emily Brown',
            job_profile: 'Software Engineer',
            location: 'Delhi',
            DOB: '07/20/1992',
            Description: 'Experienced software engineer specializing in Java and Spring Boot.'
        },
        {
            id: 5,
            name: 'David Wilson',
            job_profile: 'Software Engineer',
            location: 'Chennai',
            DOB: '03/25/1985',
            Description: 'Backend developer with expertise in Python, Django, and PostgreSQL.'
        },
        {
            id: 6,
            name: 'Sarah Martinez',
            job_profile: 'Software Engineer',
            location: 'Pune',
            DOB: '09/12/1993',
            Description: 'Experienced software engineer with skills in PHP, Laravel, and MySQL.'
        },
        {
            id: 7,
            name: 'Kevin Thompson',
            job_profile: 'Software Engineer',
            location: 'Gurgaon',
            DOB: '02/08/1987',
            Description: 'Frontend developer specializing in React.js and Redux.'
        },
        {
            id: 8,
            name: 'Emma Davis',
            job_profile: 'Software Engineer',
            location: 'Kolkata',
            DOB: '06/30/1991',
            Description: 'Full-stack developer with experience in Angular, Node.js, and MongoDB.'
        },
        {
            id: 9,
            name: 'Daniel Anderson',
            job_profile: 'Software Engineer',
            location: 'Bangalore',
            DOB: '04/18/1989',
            Description: 'Experienced software engineer with skills in C#, ASP.NET, and SQL Server.'
        },
        {
            id: 10,
            name: 'Olivia White',
            job_profile: 'Software Engineer',
            location: 'Mumbai',
            DOB: '10/05/1986',
            Description: 'Backend developer specializing in Ruby on Rails and PostgreSQL.'
        },
    ];

    return (
        <div className="jobcards-page">
            <h1 className="jobcards-heading">Software Engineer Profiles</h1>
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
