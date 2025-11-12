import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';

const Filter = () => {
  const { state, dispatch } = useContext(ProductContext);
  const [priceMin, setPriceMin] = useState(state.minPrice);
  const [priceMax, setPriceMax] = useState(state.maxPrice);

  const handlePriceChange = () => {
    dispatch({ type: "FILTER_PRICE", payload: { min: priceMin, max: priceMax } });
  };

  return (
    <div className="p-3 border rounded mb-4 bg-light">
      <h5>Catégories</h5>
      {state.categories.map(cat => (
        <div key={cat}>
          <input type="radio" name="category" onChange={() => dispatch({ type: "FILTER_CATEGORY", payload: cat })} />
          <label className="ms-2">{cat}</label>
        </div>
      ))}
      
      <h5 className="mt-3">Prix (MAD)</h5>
      <input type="number" value={priceMin} onChange={e => setPriceMin(Number(e.target.value))} /> -
      <input type="number" value={priceMax} onChange={e => setPriceMax(Number(e.target.value))} />
      <button className="btn btn-sm btn-primary ms-2" onClick={handlePriceChange}>Filtrer</button>
    </div>
  );
};

export default Filter;
