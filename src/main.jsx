import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import HomePage from "./Pages/HomePage/HomePage.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import Login from "./Components/Login/Login.jsx";
import Userprofile from "./Components/Userprofile/Userprofile.jsx";
import UserRoute from "./Components/Routes/userRoute.jsx";
import { CartContextProvider } from "./Function/useContext.jsx";
import DiaryCary from "./Components/Diary/DiaryCard.jsx";
import EditForm from './Components/Userprofile/Userform/Userform.jsx'
import Register from "./Components/Register/Register.jsx";
import Forgot_password_mobile from "./Components/login_mobile/Forgot_password_mobile.jsx";
import Resetpass from "./Components/Resetpass/Resetpass.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/activity",
    element: <App />,
  },
  {
    path: "/news",
    element: <App />,
  },
  {
    path: "/contact",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: (
      <UserRoute>
        <Userprofile />
      </UserRoute>
    ),
  },
  {
    path: "/DiaryCary",
    element: <DiaryCary />,
  },
  {
    path: "/sign",
    element: <Register />,
  },
  {
    path:"/forgot",
    element:<Forgot_password_mobile/>
  },
  {
    path:"/repass",
    element:<Resetpass/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);
