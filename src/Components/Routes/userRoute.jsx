import React, { useState, useEffect,useContext } from "react";
import { currentUser } from "../../Function/auth";
import LoadingToRedirect from "./Loading";
import { ContextProvider } from '../../Function/useContext'



const UserRoute = ({ children }) => {
  
  const [isLoading, setIsLoading] = useState(true);

  // const { isLoggedIn ,setIsLoggedIn } = useContext(ContextProvider);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await currentUser();
        // console.log(res.data)
        if(res.data.role === "user"){
          setIsLoading(false);
        }else{
          setIsLoading(true)
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [isLoading]);

  if (isLoading) {
    return <LoadingToRedirect />;
  }else{
    return children;
  }

};

export default UserRoute;
