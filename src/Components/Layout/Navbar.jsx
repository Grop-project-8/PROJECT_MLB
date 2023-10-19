import { useState,useContext,useEffect } from "react";
import logo from "../../assets/logo/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { ContextProvider } from '../../Function/useContext'
import { checkId,logOut} from '../../Function/auth'
import { toast } from "react-toastify";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { isLoggedIn ,setIsLoggedIn } = useContext(ContextProvider);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const idData = await checkId();
        setIsLoggedIn(idData.data.isLoggedIn);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, [setIsLoggedIn]);
  
  
  const handleLogout = async () => {
    try {
      const logout = await logOut();
      toast('Log out')
      setIsLoggedIn(logout.data.isLoggedIn)
    } catch (err) {
      console.error('Error logging out:', err);
    }
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="mt-5 flex justify-between items-center mb-5 px-20">
      {/* logo */}
      <div className=" w-[25%]  lg:block hidden">
        <Link to="/">
          <img className="w-[100%]" src={logo} alt="logo" />
        </Link>
      </div>

      {/* toglle menu mobile   */}
      <div className=" lg:hidden ">
        <button className="p-2 " onClick={toggleMenu}>
          {showMenu ? "" : <AiOutlineMenu onClick={toggleMenu} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className=" flex flex-col space-y-4 absolute top-[2%] left-5 bg-white p-4 shadow-md rounded-lg z-50">
          <AiOutlineClose onClick={toggleMenu} />
          <Link to="/" className=" 2xl:text-sm text-xs">
            Home
          </Link>
          <Link to="/activity" className=" 2xl:text-sm text-xs">
            Activity
          </Link>
          <Link to="/vdoall" className=" 2xl:text-sm text-xs">
            Article
          </Link>
          <Link to="/contact" className=" 2xl:text-sm text-xs">
            Contact
          </Link>
        </div>
      )}

      {/* Desktop */}
      <div className="my-auto hidden lg:block">
        <ul className="flex space-x-4  ">
          <li className="2xl:text-sm text-xs">
            <Link to="/">Home</Link>
          </li>
          <li className="2xl:text-sm text-xs">
            <Link to="/activity">Activity</Link>
          </li>
          <li className="2xl:text-sm text-xs">
            <Link to="/vdoall">Article</Link>
          </li>
          <li className=" 2xl:text-sm text-xs">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="flex ml-10 px-2">
        <ul className="flex my-auto space-x-4 items-center">
          {isLoggedIn ? (
            <div className="space-x-4 ">
              <Space wrap size={16}>
                <Link to="/profile">
                  <Avatar
                    size="large"
                    icon={<UserOutlined />}
                    src={isLoggedIn ? "" : null}
                  />
                </Link>
              </Space>
              <Link className="text-sm" to="/profile">
                Profile
              </Link>

              <Link onClick={handleLogout} className="text-sm" >
                Logout
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <li className=" 2xl:text-sm text-xs">
                <Link to="/login">Login</Link>
              </li>
              <li className="2xl:text-sm text-xs bg-myGreen px-2 py-2 rounded-[12px] w-[100%]">
                <Link to="/sign">Sign up</Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
