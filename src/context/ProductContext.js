import React, { createContext, useReducer, useContext, useEffect } from "react";
import { productReducer, initialState } from "./ProductReducer";
import { productsData } from "../data/product"

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  // Charger les produits depuis le fichier data
  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: productsData });
  }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};


