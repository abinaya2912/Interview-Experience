import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo (Left side) */}
        <h1 className="text-2xl font-bold mr-auto">Prepnest</h1>
        
        {/* Navigation */}
        <nav className="flex space-x-8 font-medium">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/add-experiences" className="hover:text-gray-300">Add Experiences</Link>
          <Link to="/view" className="hover:text-gray-300">View</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
