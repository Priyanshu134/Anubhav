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
            job_profile: 'Chartered Accountant',
            location: 'Bangalore',
            DOB: '01/01/1990',
            Description: 'Experienced Charted Accountant with expertise in financial auditing and tax compliance.'
        },
        {
            id: 2,
            name: 'Jane Smith',
            job_profile: 'Chartered Accountant',
            location: 'Hyderabad',
            DOB: '05/10/1995',
            Description: 'Certified Charted Accountant specializing in financial analysis and reporting.'
        },
        {
            id: 3,
            name: 'Michael Johnson',
            job_profile: 'Chartered Accountant',
            location: 'Mumbai',
            DOB: '11/15/1988',
            Description: 'Charted Accountant with experience in budget planning and financial management.'
        },
        {
            id: 4,
            name: 'Emily Brown',
            job_profile: 'Chartered Accountant',
            location: 'Delhi',
            DOB: '07/20/1992',
            Description: 'Professional Charted Accountant with skills in risk assessment and compliance.'
        },
        {
            id: 5,
            name: 'David Wilson',
            job_profile: 'Chartered Accountant',
            location: 'Chennai',
            DOB: '03/25/1985',
            Description: 'Experienced Charted Accountant specializing in internal audit and financial control.'
        },
        {
            id: 6,
            name: 'Sarah Martinez',
            job_profile: 'Chartered Accountant',
            location: 'Pune',
            DOB: '09/12/1993',
            Description: 'Certified Charted Accountant with expertise in financial advisory and risk management.'
        },
        {
            id: 7,
            name: 'Kevin Thompson',
            job_profile: 'Chartered Accountant',
            location: 'Gurgaon',
            DOB: '02/08/1987',
            Description: 'Professional Charted Accountant with skills in corporate finance and taxation.'
        },
        {
            id: 8,
            name: 'Emma Davis',
            job_profile: 'Chartered Accountant',
            location: 'Kolkata',
            DOB: '06/30/1991',
            Description: 'Experienced Charted Accountant specializing in financial planning and analysis.'
        },
        {
            id: 9,
            name: 'Daniel Anderson',
            job_profile: 'Chartered Accountant',
            location: 'Bangalore',
            DOB: '04/18/1989',
            Description: 'Certified Charted Accountant with expertise in forensic accounting and audit assurance.'
        },
        {
            id: 10,
            name: 'Olivia White',
            job_profile: 'Chartered Accountant',
            location: 'Mumbai',
            DOB: '10/05/1986',
            Description: 'Experienced Charted Accountant specializing in financial risk management and compliance.'
        },
    ];

    return (
        <div className="jobcards-page">
            <h1 className="jobcards-heading">Charted Accountant Profiles</h1>
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

