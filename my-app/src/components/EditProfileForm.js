// import React, { useState } from 'react';
// import styles from './ProfilePage.module.css'; // Import CSS module

// const EditProfileForm = ({ userData, onCancelEdit, onSubmitEdit }) => {
//   const [editedUserData, setEditedUserData] = useState(userData);
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedUserData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Check if the new password and confirm password match
//     if (editedUserData.password !== confirmPassword) {
//       alert("Passwords don't match!");
//       return;
//     }
//     onSubmitEdit(editedUserData);
//   };

//   return (
//     <form className={styles.formContainer} onSubmit={handleSubmit}>
//       <label htmlFor="fullName">Full Name</label>
//       <input type="text" name="fullName" value={editedUserData.fullName} onChange={handleChange} />

//       <label htmlFor="email">Email</label>
//       <input type="email" name="email" value={editedUserData.email} onChange={handleChange} />

//       <label htmlFor="phone">Phone</label>
//       <input type="text" name="phone" value={editedUserData.phone} onChange={handleChange} />

//       <label htmlFor="jobDescription">Job Description</label>
//       <input type="text" name="jobDescription" value={editedUserData.jobDescription} onChange={handleChange} />

//       <label htmlFor="dob">Date of Birth</label>
//       <input type="date" name="dob" value={editedUserData.dob} onChange={handleChange} />

//       <label htmlFor="city">City</label>
//       <input type="text" name="city" value={editedUserData.city} onChange={handleChange} />

//       <label htmlFor="password">New Password</label>
//       <input type="password" name="password" placeholder="New Password" onChange={handleChange} />

//       <label htmlFor="confirmPassword">Confirm New Password</label>
//       <input type="password" name="confirmPassword" placeholder="Confirm New Password" onChange={handleConfirmPasswordChange} />

//       <button type="submit" className={styles.submitButton}>Submit</button>
//       <button type="button" className={styles.cancelButton} onClick={onCancelEdit}>Cancel</button>
//     </form>
//   );
// };

// export default EditProfileForm;