import React from 'react';
import { ProductProvider } from './context/ProductContext';
import Home from './components/Home';

const App = () => (
  <ProductProvider>
    <Home />
  </ProductProvider>
);

export default App;
