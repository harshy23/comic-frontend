import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
      <footer className="bg-blue-500 text-white py-4 bottom-0">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <Link to="/" className="hover:text-blue-300">Home</Link>
            <Link to="/about" className="hover:text-blue-300">About</Link>
            <Link to="/shop" className="hover:text-blue-300">Shop</Link>
            <Link to="/contact" className="hover:text-blue-300">Contact</Link>
          </div>
          <div className="flex space-x-4 mb-4">
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </Link >
            <Link  to="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </Link >
            <Link  to="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </Link >
          </div>
          <p>&copy; 2024 Shoppi</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;