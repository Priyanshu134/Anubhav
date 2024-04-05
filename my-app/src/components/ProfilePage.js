// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProfilePage = () => {
//   const [userData, setUserData] = useState({});
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({});

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/profile')
//       .then(response => {
//         setUserData(response.data);
//         setFormData(response.data);
//       })
//       .catch(error => console.error('Error fetching user data:', error));
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleEditProfile = () => {
//     setEditMode(true);
//   };

//   const handleSaveProfile = () => {
//     axios.put('http://localhost:8000/api/profile/update', formData)
//       .then(response => {
//         setUserData(response.data);
//         setEditMode(false);
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       {editMode ? (
//         <form>
//           <label>First Name:</label>
//           <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
//           {/* Other input fields for user data */}
//           <button type="button" onClick={handleSaveProfile}>Save</button>
//         </form>
//       ) : (
//         <div>
//           <p>First Name: {userData.firstName}</p>
//           {/* Display other user data */}
//           <button type="button" onClick={handleEditProfile}>Edit Profile</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = getTokenFromCookie();
        console.log('Token:', token); // Log token value
        const response = await axios.get('http://localhost:8000/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(error);
      }
    };

    fetchUserData();
  }, []);

  const getTokenFromCookie = () => {
    const cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('accessToken='));
    if (cookie) {
      return cookie.split('=')[1];
    } else {
      return null;
    }
  };

  if (error) {
    return <div>Error fetching user data: {error.message}</div>;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">User Profile</h5>
        <p className="card-text">First Name: {userData.firstName}</p>
        {/* <p className="card-text">Last Name: {userData.lastName}</p> */}
        {/* Display other user data as needed */}
      </div>
    </div>
  );
};

export default ProfilePage;



