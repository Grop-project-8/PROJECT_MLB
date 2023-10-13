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