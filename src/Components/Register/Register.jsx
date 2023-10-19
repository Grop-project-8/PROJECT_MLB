import logo from "../../assets/login/login-logo.svg";
import hero from "../../assets/hero/hero.svg";
import { toast } from "react-toastify";
import { register } from "../../Function/auth";
import { useState } from "react";
import {GrFormPrevious} from 'react-icons/gr'



function Register() {


  const [value, setValue] = useState({
    username:"",
    password:"",
    password1:"",
    email:"",
    weight:"",
    height:"",
  });


  const handleChange = (e)=>{
    const { name, value } = e.target;
    setValue(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, email, weight, height } = value;
    if (value.password !== value.password1) {
      toast.error("Password doesn't match");
    } else if (value.password.length < 6) {
      toast.error("Password should be at least 6 characters long");
    } else {
      const user = {
        username,
        password,
        email,
        weight,
        height,
      };
      register(user)
        .then((res) => {
          toast.success(res.data);
          window.location.href = "/"; // เมื่อลงทะเบียนเสร็จสิ้น กลับไปยังหน้าหลัก
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
    }
  };
  

  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="lg:container lg:flex border-2">
            <GrFormPrevious onClick={goBack} className="lg:text-[60px] text-[40px] m-4"/>

      {/* form mobile */}
      <div className="flex flex-col items-center justify-center h-screen relative w-full">
        <img
          src={logo}
          alt="register-logo"
          className="w-[50%] absolut  top-5 "
        />
        <h1 className="2xl:text-2xl xl:text-xl lg:text-lg text-sm">Register</h1>

        <form className="flex flex-col w-[60%] space-y-4 rounded-lg git">
          <input
            type="text"
            placeholder="username"
            name="username"
            className="border p-3 rounded-lg"
            onChange={handleChange} 
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            className=" border p-3 rounded-lg"
            onChange={handleChange} 
          />
          <input
            type="password"
            placeholder="confirm password"
            name="password1"
            className=" border p-3 rounded-lg"
            onChange={handleChange} 
          />
           <input
            type="email"
            placeholder="E-mail"
            name="email"
            className=" border p-3 rounded-lg"
            onChange={handleChange} 
          />
          <div className="flex justify-between">
            <input
              type="number"
              placeholder="weight"
              name="weight"
              className="w-[45%] p-3 border rounded-lg"
              onChange={handleChange} 
            />
            <input
              type="number"
              placeholder="height"
              name="height"
              onChange={handleChange} 
              className="w-[45%] p-3 border rounded-lg"
            />
          </div>
          <label className="text-center">
            <input
              type="checkbox"
              id="myCheckbox"
              name="checkbox"
              placeholder="checkbox"
              className=" border p-3 rounded-lg"
            />
            <span className="text-[13px] pl-2 font-light">
              accept term of use condition
            </span>
          </label>
          <button onClick={handleSubmit} className="2xl:text-sm text-xs bg-myGreen mx-auto px-2 py-2 mt-5 rounded-[12px] w-[40%] ">
            Sign Up
          </button>
        </form>
      </div>

      {/* img */}
      <div className="hidden lg:inline border w-[100%]">
        <img
          src={hero}
          alt="image-register"
          className="object-cover h-screen  object-top md:w-full"
        />
      </div>
    </div>
  );
}

export default Register;
