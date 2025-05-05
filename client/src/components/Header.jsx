import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Prepnest
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden sm:flex space-x-4 md:space-x-6 font-medium">
          {[
            { to: '/', label: 'Home' },
            { to: '/add-experiences', label: 'Add Experiences' },
            { to: '/view', label: 'View' },
            { to: '/login', label: 'Login' },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="px-4 py-2 rounded-lg hover:bg-blue-500 transform transition duration-300 hover:-translate-y-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
