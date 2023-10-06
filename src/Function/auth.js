import axios from "axios";

export const register = async (value) =>
  await axios.post("http://localhost:8000/register", value);

export const login = async (value) =>
  await axios.post("http://localhost:8000/login", value, {
    withCredentials: true,
  });

export const checkId = async (value) =>
  await axios.post("http://localhost:8000/checkId",value,{
    withCredentials: true,
  });

export const logOut = async (value) =>
  await axios.post("http://localhost:8000/logout",value,{
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
    const res = await axios.get("http://localhost:8000/currentUser", {
      withCredentials: true, 
      params: {
        _t: new Date().getTime(),
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};


