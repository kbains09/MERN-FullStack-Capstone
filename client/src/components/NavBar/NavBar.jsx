import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/slices/usersSlice';
import './NavBar.scss';

const NavBar = () => {
  const user = useSelector(state => state.users.user);
  const isAuthenticated = Boolean(user); // Determines if user is logged in
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());

  };

  return (
  <nav>
    <div className="nav-links">
      <button><Link to="/">Home</Link></button>
      <button><Link to="/shop">Shop</Link></button>
      <button><Link to="/about">About</Link></button>
    </div>
    <Link to="/" className="logo-link">Logo</Link>
    <div className="login-button">
      {isAuthenticated ? (
        <>
          <span>Welcome, {user.username}!</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button><Link to="/login">Login</Link></button>
      )}
    </div>
  </nav>
  );
};

export default NavBar;

