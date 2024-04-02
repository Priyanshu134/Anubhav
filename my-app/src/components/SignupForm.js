import React, { useState } from 'react';
import './SignupForm.css';
import dummyProfilePic from './dummy-profile-pic.png'; // Import dummy profile picture
import axios from 'axios';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        gender: 'male',
        dob: '',
        city: '',
        password: '',
        confirmPassword: '',
        profilePhoto: dummyProfilePic, // Set dummy profile photo initially
        employmentStatus: 'non-working', // Default employment status
        jobDescription: '', // Empty job description initially
    });

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState('');
    const [photoModalOpen, setPhotoModalOpen] = useState(false); // State for photo modal

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        if (type === 'date' && name === 'dob') {
            setFormData({ ...formData, [name]: value });
        } else if (type === 'file') {
            setFormData({ ...formData, [name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleShowPassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleShowConfirmPassword = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setPasswordMatchError('Passwords do not match');
            return;
        }
        // Reset password match error if passwords match
        setPasswordMatchError('');

        // Add your form submission logic here
        console.log(formData);
    };

    const handleProfilePhotoClick = () => {
        setPhotoModalOpen(true); // Open photo modal
    };

    const handleUpdateProfilePhoto = (option) => {
        if (option === 'select') {
            document.getElementById('profilePhotoInput').click(); // Trigger file input click
        } else if (option === 'take') {
            // Implement logic to take photo using device camera
            console.log('Take photo functionality');
        } else if (option === 'remove') {
            setFormData({ ...formData, profilePhoto: dummyProfilePic }); // Set profile photo to dummy photo
        }
        // Close the modal after action
        setPhotoModalOpen(false);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const { fullName, email, phone, gender, dob, city, password, employmentStatus, jobDescription } = formData;
    
        // Add your form submission logic here using the variables from formData
        console.log(formData);
    
        // Example: Sending form data using Axios
        try {
            const response = await axios.post('/your-api-endpoint', {
                fullName,
                email,
                phone,
                gender,
                dob,
                city,
                password,
                employmentStatus,
                jobDescription,
            });
            console.log(response.data);
            // Handle success response
        } catch (error) {
            console.error('Error:', error);
            // Handle error response
        }
    };
    

    return (
        <div className="container">
            <h1>Signup</h1>
            {/* Profile photo section */}
            <div className="profile-photo-container" onClick={handleProfilePhotoClick}>
                <img
                    src={formData.profilePhoto}
                    alt="Profile"
                    className="profile-photo"
                />
                <div className="profile-photo-overlay">
                    <span>Click to change photo</span>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                {/* Form fields */}
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
                </div>
                {/* Add dropdown for employment status */}
                <div className="form-group">
                    <label htmlFor="employmentStatus">Employment Status:</label>
                    <select id="employmentStatus" name="employmentStatus" value={formData.employmentStatus} onChange={handleChange} required>
                        <option value="non-working">Non-working</option>
                        <option value="working">Working</option>
                    </select>
                </div>
                {/* Add job description textarea if employment status is 'working' */}
                {formData.employmentStatus === 'working' && (
                    <div className="form-group">
                        <label htmlFor="jobDescription">Job Description:</label>
                        <textarea id="jobDescription" name="jobDescription" value={formData.jobDescription} onChange={handleChange} required />
                    </div>
                )}
                {formData.employmentStatus === 'non-working' && (
                    <div className="form-group">
                        <label htmlFor="jobDescription"> Qualification:</label>
                        <textarea id="jobDescription" name="jobDescription" value={formData.jobDescription} onChange={handleChange} required />
                    </div>
                )}
                {/* Continue with other form fields */}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Set Password:</label>
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        className="show-password-btn"
                        onClick={handleShowPassword}
                    >
                        {passwordVisible ? 'Hide' : 'Show'}
                    </button>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type={confirmPasswordVisible ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        className="show-password-btn"
                        onClick={handleShowConfirmPassword}
                    >
                        {confirmPasswordVisible ? 'Hide' : 'Show'}
                    </button>
                </div>
                {passwordMatchError && (
                    <div className="error">{passwordMatchError}</div>
                )}
                <button type="submit">Sign Up</button>
            </form>
            {/* Profile photo modal */}
            {photoModalOpen && (
                <div className="photo-modal">
                    <button className="close-modal-btn" onClick={() => setPhotoModalOpen(false)}>
                        <span>&#x2715;</span>
                    </button>
                    <div className="modal-content">
                        <img src={formData.profilePhoto} alt="Profile" className="modal-profile-photo" />
                        <div className="modal-options">
                            <button onClick={() => handleUpdateProfilePhoto('select')}>Select Photo</button>
                            <button onClick={() => handleUpdateProfilePhoto('take')}>Take Photo</button>
                            <button onClick={() => handleUpdateProfilePhoto('remove')}>Remove Photo</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignupForm;









