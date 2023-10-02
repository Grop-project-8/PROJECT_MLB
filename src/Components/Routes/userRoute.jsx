import {React,useContext} from "react";
import LoadingToRedirect from "./Loading";
import {ContextProvider} from '../Function/useContext'

const UserRoute = ({ children }) => {


  const { isLoggedIn  } = useContext(ContextProvider);

  
  if (!isLoggedIn) {
    return <LoadingToRedirect />;
  }

  return children;
};

export default UserRoute;
