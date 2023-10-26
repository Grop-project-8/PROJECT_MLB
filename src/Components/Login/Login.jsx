import logo from "../../assets/login/login-logo.svg";
import hero from "../../assets/hero/hero.svg";
import { login } from "../../Function/auth";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { GrFormPrevious } from "react-icons/gr";
import login1 from '../../assets/login/login1.jpg'

function Login() {
  const navigate = useNavigate();
  const goBack = () => {
    window.history.back();
  };

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
          toast.success(res.data.payload.user.username + " Login Success");
          // cookies.set("token", res.data.token, { expires: 3600 });
          roleRedirect(res.data.payload.role);
        } else {
          toast.error("Invalid response format:", res.data);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data);
      });
  };

  return (
    <div className="lg:container flex justify-between md:justify-center h-screen">
      <GrFormPrevious
        onClick={goBack}
        className="lg:text-[60px] text-[40px] m-4"
      />

      <div
        id="left-page"
        className="flex flex-col justify-center text-center items-center w-[100%]"
      >
        {/* logo */}
        <div id="logo" className="flex justify-center">
          <img src={logo} alt="login-logo" loading='lazy' className="w-[75%]" />
        </div>

        <div>
          <h1 className="2xl:text-2xl xl:text-xl lg:text-lg text-sm">Login</h1>
        </div>

        {/* input */}
        <form onSubmit={handleSubmit}>
          <div className="w-[100%]">
            <div className="flex border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                type="text"
                placeholder="username"
                name="username"
                onChange={handleChange}
                className="pl-2 outline-none border-none"
              />
            </div>
            <div className="flex  border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                type="password"
                placeholder="password"
                name="password"
                onChange={handleChange}
                className="pl-2 outline-none border-none"
              />
            </div>
          </div>

          <Link to='/repass'>
            <p className="text-gray-500 text-left">forget password</p>
          </Link>
          <button className="2xl:text-sm text-xs hover:text-[#fff565] bg-[#9ffc41]  hover:scale-105 duration-150 px-2 py-2 mt-4 rounded-[12px] w-[40%] ">
            Login
          </button>
        </form>
      </div>

      {/* imgage */}
      <div id="right-page" className="hidden md:block w-[100%] rounded-xl   ">
        <img
          src={login1}
          alt="login-image"
          className="object-cover w-[100%] h-full object-top md:w-full"
        />
      </div>
    </div>
  );
}

export default Login;
