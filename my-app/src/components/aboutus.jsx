// AboutUsSection.js

import React from 'react';
import './aboutus.css';
import teamMember1Img from './dummy-profile-pic.png'; // Import images for team members
import teamMember2Img from './dummy-profile-pic.png';
import teamMember3Img from './dummy-profile-pic.png';
import teamMember4Img from './dummy-profile-pic.png';
import teamMember5Img from './dummy-profile-pic.png';
import teamMember6Img from './dummy-profile-pic.png';

const AboutUsSection = () => {
  return (
    <section className="about-us-section">
      <div className="container">
        <h2 className="section-heading">About Us</h2>
        <div className="section-content">
          <p>
            Anubhav is a platform that connects individuals who want to experience different professions or work environments with professionals willing to share their expertise and insights.
            Whether you're curious about a particular career path, seeking mentorship, or simply want to broaden your horizons, Anubhav allows you to immerse yourself in various work settings and learn from experienced professionals.
          </p>
          <p>
            Our vision is to empower individuals to explore diverse career paths, gain mentorship, and broaden their horizons through authentic learning experiences. We believe that everyone should have access to opportunities for personal and professional growth, regardless of their background or circumstances.
          </p>
          <p>
            Key features of Anubhav include:
          </p>
          <ul>
            <li>Exploring diverse career paths</li>
            <li>Access to mentorship from experienced professionals</li>
            <li>Opportunities for firsthand learning experiences</li>
          </ul>
          <p>
            In addition to connecting individuals with professionals, Anubhav also provides:
          </p>
          <ul>
            <li>A user-friendly platform for easy navigation and seamless experience</li>
            <li>Secure and private communication channels between users and mentors</li>
            <li>Community forums for networking and sharing insights</li>
          </ul>
          <p>
            Meet the team behind Anubhav:
          </p>
          <div className="team-members">
            <div className="team-member">
              <img src={teamMember1Img} alt="Team Member 1" />
              <h3>Priyanshu</h3>
              <p>Co-Founder & CEO</p>
              
            </div>
            <div className="team-member">
              <img src={teamMember2Img} alt="Team Member 2" />
              <h3>Akshit</h3>
              <p>Co-Founder & CTO</p>
              
            </div>
            <div className="team-member">
              <img src={teamMember3Img} alt="Team Member 3" />
              <h3>Sumit</h3>
              <p>Head of Operations</p>
              
            </div>
            <div className="team-member">
              <img src={teamMember4Img} alt="Team Member 4" />
              <h3>Ansh</h3>
              <p>Marketing Director</p>
              
            </div>
            <div className="team-member">
              <img src={teamMember5Img} alt="Team Member 5" />
              <h3>Sahil</h3>
              <p>Product Manager</p>
              
            </div>
            <div className="team-member">
              <img src={teamMember6Img} alt="Team Member 6" />
              <h3>Varun</h3>
              <p>Customer Success Manager</p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;