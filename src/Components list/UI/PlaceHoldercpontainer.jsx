import React from 'react';
import Placeholder from './PlaceHolder';

function PlaceholderContainer() {
    const placeno = Array.from({ length: 8 }, (_, index) => index);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {placeno.map(placen => <Placeholder key={placen}/>)}
            
      
            
 
        </div>
      </div>
    </section>
  );
}

export default PlaceholderContainer;