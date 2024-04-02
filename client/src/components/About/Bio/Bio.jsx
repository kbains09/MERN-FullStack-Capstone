import React from 'react';
import useFetchUsers from '../../../hooks/useFetchUsers';
import { useSelector } from 'react-redux'; 

const Bio = () => {
  // Access user data from hook, these are created for future proofing the application. 
  const { users, loading, error } = useFetchUsers();

  // Access user data from Redux store
  const userState = useSelector((state) => state.users);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // The data is fetched from the hook and displayed in the component.
  return (
    <div>
      <h2>Our Team</h2>
      <div className="staff-bios">
        {users.map((user) => (
          <div key={user.id} className="staff-bio">
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bio;
