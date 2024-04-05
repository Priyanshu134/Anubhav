import React from 'react';
import './JobProfileBox.css'; // Import the CSS file

const JobBox = ({ profile, employees }) => (
  <div className="job-box">
    <div className="job-profile">{profile}</div>
    <div className="employee-count">{employees} Employees</div>
  </div>
);

const JobProfileBox = () => {
  return (
    <div className="main-box">
      <JobBox profile="Business Analyst" employees={100} />
      <JobBox profile="Software Engineer" employees={150} />
      <JobBox profile="Social Media Manager" employees={75} />
      <JobBox profile="Music Composer" employees={50} />
      <JobBox profile="Cinematography Creative" employees={80} />
      <JobBox profile="Data Scientist" employees={120} />
    </div>
  );
};

export default JobProfileBox;


