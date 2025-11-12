export const initialState = {
  allProducts: [],       // tous les produits
  visibleProducts: [],   // produits affichés après filtrage
  categories: [],        // liste unique des catégories
  minPrice: 0,           // prix minimum
  maxPrice: 0,           // prix maximum
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS": {
      const categories = [...new Set(action.payload.map(p => p.category))];
      const prices = action.payload.map(p => p.price);
      return {
        ...state,
        allProducts: action.payload,
        visibleProducts: action.payload,
        categories,
        minPrice: Math.min(...prices),
        maxPrice: Math.max(...prices),
      };
    }

    case "FILTER_CATEGORY":
      return {
        ...state,
        visibleProducts: state.allProducts.filter(
          (p) => p.category === action.payload
        ),
      };

    case "FILTER_PRICE":
      return {
        ...state,
        visibleProducts: state.allProducts.filter(
          (p) => p.price >= action.payload.min && p.price <= action.payload.max
        ),
      };
    case "RESET_FILTERS":
      return {
        ...state,
        visibleProducts: state.allProducts,
      };

    default:
      return state;
  }
};
