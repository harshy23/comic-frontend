import React from 'react';

function ProductDetailPlaceholder() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-96 bg-gray-200 rounded-lg animate-pulse"></div>
        <div>
          <p className="text-gray-500 mb-2 h-4 bg-gray-200 rounded-md animate-pulse"></p>
          <h1 className="text-2xl font-semibold mb-4 h-6 bg-gray-200 rounded-md animate-pulse"></h1 >
          <p className="text-xl font-bold h-4 bg-gray-200 rounded-md animate-pulse"></p>

          <p className="mt-4 h-16 bg-gray-200 rounded-md animate-pulse"></p>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 h-10 w-24 animate-pulse"></button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPlaceholder;