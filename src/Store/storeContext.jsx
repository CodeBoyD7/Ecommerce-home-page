import { createContext, useState } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const initialState = {
    searchItem: "",
    category: "all",
    price: [],
    color: "all",
    rating: "",
    brands: [],
  };

  const [state, setState] = useState(initialState);

  return (
    <StoreContext.Provider value={{ state, setState }}>
      {children}
    </StoreContext.Provider>
  );
};
