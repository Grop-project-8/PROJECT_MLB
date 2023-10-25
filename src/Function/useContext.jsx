import { createContext, useState,  } from "react";
import { currentUser } from "./auth";


export const ContextProvider = createContext({});

export const CartContextProvider = ({ children }) => {

  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ContextProvider.Provider value={{ userData,setUserData,isLoggedIn, setIsLoggedIn }}>
      {children}
    </ContextProvider.Provider>
  );
};

