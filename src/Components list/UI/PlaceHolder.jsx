import React from 'react';

function Placeholder() {
  return (
    <div  className="block bg-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gray-300 animate-pulse rounded-t-lg"></div>
      <div className="p-4">
      {/* animate-pulse class is added to these elements to create a pulsing animation effect, simulating a loading state. */}
        <h3 className="text-lg font-semibold h-5 bg-gray-300 animate-pulse rounded-md"></h3>
        <p className="text-gray-500 mt-2 h-3 bg-gray-300 animate-pulse rounded-md"></p>
      </div>
    </div>


  );
}

export default Placeholder;