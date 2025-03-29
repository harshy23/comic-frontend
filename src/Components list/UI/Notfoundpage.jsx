import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="bg-blue-500 h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Page Not Found!</h1>
        <p>The page you tried accessing does not exist.</p>
        <Link to="/" className="mt-6 inline-block bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300">
          Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;