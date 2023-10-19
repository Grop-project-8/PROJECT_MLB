import { useState } from "react";
import logo from "../../assets/logo/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className=" mt-5 flex justify-between mb-5">
      {/* logo */}
      <div className="lg:w-[20%] md:w-[25%] md:block  hidden">
        <Link to="/">
          <img className="w-[100%]" src={logo} alt="logo" />
        </Link>
      </div>

      {/* toglle menu mobile   */}
      <div className=" md:hidden flex items-center pl-5">
        <button className="p-2 " onClick={toggleMenu}>
          {showMenu ? (
            ''
          ) : (
            <AiOutlineMenu onClick={toggleMenu} />
          )}
        </button>
      </div>

        {/* Mobile Menu */}
      {showMenu && (
        <div className=" md:hidden flex flex-col space-y-4 absolute top-[2%] left-5 bg-white p-4 shadow-md rounded-lg z-50">
          <AiOutlineClose onClick={toggleMenu} /> 
          <a href="" className=" 2xl:text-sm text-xs">Home</a>
          <a href="" className=" 2xl:text-sm text-xs">Activity</a>
          <a href="" className=" 2xl:text-sm text-xs">Article</a>
          <a href="" className=" 2xl:text-sm text-xs">Contact</a>
        </div>
      )}

      {/* Desktop */}
      <div
        className='my-auto hidden md:block'
      >
        <ul className="flex space-x-4  ">
          <li className=" 2xl:text-sm text-xs">
            <Link  to="/">Home</Link>
          </li>
          <li className=" 2xl:text-sm text-xs">
            <Link to="/">Activity</Link>
          </li>
          <li className=" 2xl:text-sm text-xs">
            <a href="">Article</a>
          </li>
          <li className=" 2xl:text-sm text-xs">
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="flex ml-10 px-2">
        <ul className="flex my-auto space-x-4 items-center">
          <li className=" 2xl:text-sm text-xs">
            <Link to="/">Login</Link>
          </li>
          <li className="2xl:text-sm text-xs bg-myGreen px-2 py-2 rounded-[12px] w-[100%]">
            <Link to="/" >
                Sign up 
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
