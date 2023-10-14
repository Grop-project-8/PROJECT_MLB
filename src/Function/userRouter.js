import axios from "axios";


export const getuser = async () => {
    try {
      const res = await axios.get("http://localhost:8000/getUser", {
        withCredentials: true, 
      });
      return res;
    } catch (err) {
      throw err;
    }
  };

  export const updatePassword = async (value) => {
    try {
      const res = await axios.put("http://localhost:8000/updatePassword", value, {
        withCredentials: true,
      });
      return res;
    } catch (err) {
      throw err;
    }
  };
  

  export const updateProfile = async (value) => {
    try {
      const res = await axios.put("http://localhost:8000/updateProfile", value, {
        withCredentials: true,
      });
      return res;
    } catch (err) {
      throw err;
    }
  };