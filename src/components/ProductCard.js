import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card shadow-sm h-100">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-muted mb-2">{product.price} MAD</p>
        </div>
        <button className="btn btn-primary w-100">Afficher</button>
      </div>
    </div>
  );
};

export default ProductCard;
