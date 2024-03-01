import React, { useState, useEffect, useContext } from 'react';
import { account } from '../appwrite/appwrite';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from Appwrite
    const fetchUserData = async () => {
      try {
        // Replace 'userId' with the actual user ID obtained during sign-up
        const response = await account.get('6b179a5b-1441-45c2-ac9a-ea51048f7c49'); // Replace 'userId' with actual user ID
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Display other user information */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
