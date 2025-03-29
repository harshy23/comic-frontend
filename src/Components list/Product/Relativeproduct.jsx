import React from 'react';
import ProductCard from '../home/Homecard';


const RelatedProducts = (prop) => {
//   const relatedProducts = [
//     // Your product data array as defined above
//   ];
   
const Related = prop.Related
  return (
    <section className="bg-white p-4">
      <h2 className="text-xl font-semibold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;