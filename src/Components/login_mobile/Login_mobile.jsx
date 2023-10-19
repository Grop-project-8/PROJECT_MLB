import React from "react";
import logo_circle from "../../assets/logo_circle/logo_circle.svg";
import pic1 from "../../assets/pic_login_mobile/pic1.svg";

const Login_mobile = () => {
  return (
    <div className="grid justify-center sm:max md:disabled:">
      <div className="">
        <img
          src={pic1}
          className="w-[375px] h-[468px] items-start"
          alt="home"
        />
        <div className="w-full ">
          <img
            src={logo_circle}
            className="rounded-full w-[92px] h-[88px] mx-[auto] "
            alt="logo"
          />
        </div>
      </div>
      <button className="bg-myGreen  text-black  py-2 px-4 rounded self-center">
        Log in
      </button>
      <br />
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Register
      </button>
      <br />
      <div className="mx-[auto]">
        <a href=""> Continune as a guest</a>
      </div>
    </div>
  );
};
export default Login_mobile;
