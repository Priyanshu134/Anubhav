import React from 'react';
import styles from './ProfilePage.module.css'; // Import CSS module

const ProfileInfo = ({ userData, onEditClick }) => {
  return (
    <div className={styles.profileInfo}>
      <img src={userData.photoUrl} alt="Profile" className={styles.profileImage} />
      <div className={styles.profileDetails}>
        <h2>{userData.fullName}</h2>
        <p>Email: {userData.email}</p>
        <p>Phone: {userData.phone}</p>
        <p>Job Description: {userData.jobDescription}</p>
        <p>Date of Birth: {userData.dob}</p>
        <p>City: {userData.city}</p>
        <button className={styles.editButton} onClick={onEditClick}>Edit Profile</button>
        <button className={styles.editButton} >Post Profile</button>
      </div>
    </div>
  );
};

export default ProfileInfo;