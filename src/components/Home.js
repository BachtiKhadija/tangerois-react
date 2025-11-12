import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from './ProductCard';
import Filter from './Filter';

const Home = () => {
  const { state } = useContext(ProductContext);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <Filter />
        </div>
        <div className="col-md-9">
          <div className="row">
            {state.visibleProducts.map(product => (
              <div key={product.id} className="col-md-4 mb-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
