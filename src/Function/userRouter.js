import axios from "axios";


  export const getuser = async () => {
    try {
      const res = await axios.get(import.meta.env.VITE_REACT_API_URL+"getUser", {
        withCredentials: true, 
      });
      return res;
    } catch (err) {
      throw err;
    }
  };

  export const updatePassword = async (value) => {
    try {
      const res = await axios.put(import.meta.env.VITE_REACT_API_URL+"updatePassword", value, {
        withCredentials: true,
      });
      return res;
    } catch (err) {
      throw err;
    }
  };
  
  export const updateProfile = async (value) => {
    try {
      const res = await axios.put(import.meta.env.VITE_REACT_API_URL+"updateProfile", value, {
        withCredentials: true,
      });
      return res;
    } catch (err) {
      throw err;
    }
  };

  export const sendOTP = async (value) => {
    try {
      const response = await axios.post(import.meta.env.VITE_REACT_API_URL+"sendOTP", value, {
        withCredentials: true,
      });
      return response.data; 
    } catch (error) {
      throw(err);
    }
  };
  
  export const rePass = async (value) => {
    try {
      const response = await axios.post(import.meta.env.VITE_REACT_API_URL+"rePass", value, {
        withCredentials: true,
      });
      return response.data; 
    } catch (error) {
      throw(err);
    }
  };
  
  export const createImage = async (value) => {
    try {
      const response = await axios.post(import.meta.env.VITE_REACT_API_URL+"createImage", value, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
