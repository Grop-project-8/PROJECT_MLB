import { createContext, useState, useEffect } from "react";
import {getuser} from './userRouter'


export const ContextProvider = createContext({});

export const CartContextProvider = ({ children }) => {

  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getuser();
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [success]);


  return (
    <ContextProvider.Provider value={{userData,setUserData,setSuccess,isLoggedIn,setIsLoggedIn }}>
      {children}
    </ContextProvider.Provider>
  );
};

