import { useState, useContext, useEffect } from "react";
import logo from "../../assets/logo/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link ,useNavigate} from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Menu, Dropdown } from "antd";
import { ContextProvider } from "../../Function/useContext";
import { checkId, logOut } from "../../Function/auth";
import { toast } from "react-toastify";
import SetForm from "../Userprofile/Setting/Setting";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSetForm, setShowSetForm] = useState(false);
  const navigate = useNavigate();


  const { userData, isLoggedIn, setIsLoggedIn } = useContext(ContextProvider);

  const toggleSetForm = () => {
    setShowSetForm(!showSetForm);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const idData = await checkId();
        setIsLoggedIn(idData.data.isLoggedIn);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [setIsLoggedIn]);

  const handleLogout = async () => {
    try {
      const logout = await logOut();
      toast("Log out");
      setIsLoggedIn(logout.data.isLoggedIn);
      navigate("/");
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const setform = () => {
    setShowSetForm(!showSetForm);
  };


  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="setting" onClick={toggleSetForm}>
        Setting
      </Menu.Item>
      <Menu.Item key="feed">
        <Link to="/diarycard">Feed</Link>
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="container mt-5 flex justify-between items-center mb-5  ">
      {/* logo */}
      <div className="w-[25%] lg:block hidden ">
        <Link to="/">
          <img className="w-[100%]" src={logo} alt="logo" />
        </Link>
      </div>

      {/* toggle menu mobile */}
      <div className="lg:hidden">
        <button className="p-2" onClick={toggleMenu}>
          {showMenu ? "" : <AiOutlineMenu onClick={toggleMenu} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="flex flex-col space-y-4 absolute top-[2%] left-5 bg-white p-4 shadow-md rounded-lg z-50">
          <AiOutlineClose onClick={toggleMenu} />
          <Link to="/" className="2xl:text-sm text-xs">
            Home
          </Link>
          <Link to="/activity" className="2xl:text-sm text-xs">
            Activity
          </Link>
        </div>
      )}

      {/* Desktop */}
      <div className="my-auto hidden lg:block">
        <ul className="flex space-x-4">
          <li className="2xl:text-sm text-xs">
            <Link to="/">Home</Link>
          </li>
          <li className="2xl:text-sm text-xs">
            <Link to="/activity">Activity</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center  ">
        <ul className="flex my-auto space-x-4 items-center">
          {isLoggedIn ? (
            <div className="space-x-4 flex">
              <Dropdown overlay={menu} placement="bottomRight">
                <Avatar
                  className="cursor-pointer"
                  size={50}
                  icon={<UserOutlined />}
                  src={isLoggedIn && userData ? userData.profileImage : null}
                  alt="User Profile"
                />
              </Dropdown>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <li className="2xl:text-sm text-xs">
                <Link to="/login">Login</Link>
              </li>
              <li className="2xl:text-sm text-xs bg-myGreen px-2 py-2 rounded-[12px] w-[100%]">
                <Link to="/sign">Sign up</Link>
              </li>
            </div>
          )}
        </ul>
      </div>
      {showSetForm ? <SetForm setform={setform} /> : null}
    </div>
  );
};

export default Navbar;
