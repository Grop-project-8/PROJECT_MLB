import { createContext, useState,  } from "react";




export const ContextProvider = createContext({});






export const CartContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  return (
    <ContextProvider.Provider value={{username,setUsername}}>
      {children}
    </ContextProvider.Provider>
  );
};
