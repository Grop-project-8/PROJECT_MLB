import { createContext, useState, useEffect } from "react";
import { currentUser } from "./auth";

export const ContextProvider = createContext({});

export const CartContextProvider = ({ children }) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <ContextProvider.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </ContextProvider.Provider>
  );
};
