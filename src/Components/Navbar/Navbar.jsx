import { useState } from "react";
import logo from "../../assets/logo/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="xl:container mt-5 flex justify-between border border-red-500">
      {/* logo */}
      <div className="lg:w-[auto] md:w-[25%] md:block  hidden">
        <a href="">
          <img className="w-[100%]" src={logo} alt="logo" />
        </a>
      </div>

      {/* toglle menu mobile   */}
      <div className=" md:hidden flex items-center ">
        <button className="p-2 " onClick={toggleMenu}>
          {showMenu ? (
            <AiOutlineClose onClick={toggleMenu} /> 
          ) : (
            <AiOutlineMenu onClick={toggleMenu} />
          )}
        </button>
      </div>

        {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden flex flex-col space-y-4 absolute top-[10%] right-[50%]">
          <a href="">Home</a>
          <a href="">Activity</a>
          <a href="">News</a>
          <a href="">Contact</a>
        </div>
      )}

      {/* Desktop */}
      <div
        className='my-auto hidden md:block'
      >
        <ul className="flex space-x-4  ">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Activity</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>

      <div className="flex ml-10">
        <ul className="flex my-auto space-x-4 items-center">
          <li>
            <a href="">Login</a>
          </li>
          <li className="bg-myGreen px-2 py-2 rounded-[12px] w-[100%]">
            <a href="" >
                Sign up for free
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
