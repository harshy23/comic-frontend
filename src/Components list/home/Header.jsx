import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-500 text-white py-12 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Favorite Store</h1>
        <p className="text-lg mb-8">Discover the latest trends with our modern collection</p>
        <a href="#!" className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300">
          Shop Now
        </a>
      </div>
    </header>
  );
}

export default Header;