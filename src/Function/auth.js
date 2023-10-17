import axios from "axios";

export const register = async (value) =>
  await axios.post(import.meta.env.VITE_REACT_API_URL+"register", value);

export const login = async (value) =>
  await axios.post(import.meta.env.VITE_REACT_API_URL+"login", value, {
    withCredentials: true,
  });

export const checkId = async (value) =>
  await axios.post(import.meta.env.VITE_REACT_API_URL+"checkId",value,{
    withCredentials: true,
  });

export const logOut = async (value) =>
  await axios.post(import.meta.env.VITE_REACT_API_URL+"logout",value,{
    withCredentials: true,
  });


// export const login = async (value) => {
//   try {
//     const response = await axios.post("http://localhost:8000/login", value, {
//       withCredentials: true,
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };


export const currentUser = async () => {
  try {
    const res = await axios.get(import.meta.env.VITE_REACT_API_URL+"currentUser", {
      withCredentials: true, 
    });
    return res;
  } catch (err) {
    throw err;
  }
};



