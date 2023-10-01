import React from "react";
import LoadingToRedirect from "./Loading";
import Cookies from "js-cookie"; 

const UserRoute = ({ children }) => {

  const userToken = Cookies.get("token"); 
  console.log(userToken)
  
  if (!userToken) {
    return <LoadingToRedirect />;
  }

  return children;
};

export default UserRoute;
