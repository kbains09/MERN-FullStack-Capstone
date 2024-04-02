import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../../redux/slices/usersSlice';

const Staff = () => {
  const dispatch = useDispatch();
  // Adjusted to select users assuming your state structure has users data
  const users = useSelector((state) => state.users.user);

  useEffect(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  // Ensure users is not null/undefined before mapping]
  // Currently DB table sits empty, so no users will be displayed
  return (
    <div>
      <h2>Our Team</h2>
      <ul>
        {users && users.map((user) => ( 
          <li key={user.id}>{user.name}</li> 
        ))}
      </ul>
    </div>
  );
};

export default Staff;
