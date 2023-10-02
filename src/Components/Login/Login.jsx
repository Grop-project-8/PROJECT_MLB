import logo from "../../assets/login/login-logo.svg";
import hero2 from "../../assets/hero/hero2.svg";
import { login } from "../Function/auth";
import { useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import cookies from "js-cookie"; 
import {ContextProvider } from '../Function/useContext'


function Login() {

  const navigate = useNavigate();
  const { setUsername } = useContext(ContextProvider);

  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const roleRedirect = (userRole) => {
    if (userRole === "user") {
      navigate("/");
    } else if (userRole === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    login(value)
      .then((res) => {
        if (res && res.data && res.data.payload && res.data.payload.user) {
          console.log(res.data.payload)
          toast.success(res.data.payload.user.username + " Login Success");
          // cookies.set("token", res.data.token, { expires: 3600 });
          roleRedirect(res.data.payload.role);
          // setUsername(res.data.payload.user.username)
        } else {
          console.log("Invalid response format:", res.data);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data);
      });
  };

  return (
    <div className="lg:container flex justify-between md:justify-center border border-red-800 m-auto">
      <div id="left-page" className="flex flex-col justify-center w-[100%]">
        <div id="logo" className="flex justify-center mb-6">
          <img src={logo} alt="login-logo" className="" />
        </div>

        <div className="">
          <h1 className="2xl:text-2xl xl:text-xl lg:text-lg text-sm">Login</h1>
        </div>

        {/* input */}
        <form onSubmit={handleSubmit}>
          <div className="w-[80%]">
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                type="text"
                placeholder="username"
                name="username"
                onChange={handleChange}
                className="pl-2 outline-none border-none"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                placeholder="password"
                type="password"
                name="password"
                onChange={handleChange}
                className="pl-2 outline-none border-none"
              />
            </div>
          </div>
          <p className="text-gray-500">forget password</p>
          <button className="2xl:text-sm text-xs bg-myGreen px-2 py-2 mt-4 rounded-[12px] w-[40%] ">
            Login
          </button>
        </form>
      </div>

      {/* imgage */}
      <div
        id="right-page"
        className="hidden md:block w-[100%] border border-red-800"
      >
        <img src={hero2} alt="login-image" className="h-[100%] object-cover" />
      </div>
    </div>
  );
}

export default Login;
