// src/components/Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleProtectedClick = (path) => {
    if (isLoggedIn) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="bg-blue-600 text-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo + Brand */}
        <Link to="/" className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Prepnest
        </Link>

        {/* Navigation */}
        <nav className="hidden sm:flex space-x-4 md:space-x-6 font-medium">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Home
          </button>

          <button
            onClick={() => handleProtectedClick('/add-experiences')}
            className="px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Add Experience
          </button>

          <button
            onClick={() => handleProtectedClick('/view')}
            className="px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            View Experiences
          </button>

          {!isLoggedIn ? (
            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2 rounded-lg hover:bg-blue-500 transition"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => {
                logout();
                navigate('/login');
              }}
              className="px-4 py-2 rounded-lg hover:bg-red-500 transition"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
