import React from 'react';
import ProductCard from './Homecard';

function CardContainer(Prop) {
  const productList = Prop.products;
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productList.map(product =><ProductCard key={product.id} product={product}/>)}
            
      
            
 
        </div>
      </div>
    </section>
  );
}

export default CardContainer;