import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import Login from "./Components/Login/Login.jsx";
import Yoga from "./Pages/videoGellery/5type/yoga.jsx";
import Pilates from "./Pages/videoGellery/5type/pilates.jsx";
import BodyWeight from "./Pages/videoGellery/5type/bodyWeight.jsx";
import Dance from "./Pages/videoGellery/5type/dance.jsx";
import JumpingRope from "./Pages/videoGellery/5type/jumpingRope.jsx";
import FullVideo from "./Pages/videoGellery/FullVideo.jsx";
// import VideoCard from "./Pages/videoGellery/VideoCard.jsx";
// import CustomRoute from "./Pages/videoGellery/customroute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App/>
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
    path: "/sign",
    element: <App />,
  },
  {
    path: "/yoga",
    element: <Yoga />,
  },
  {
    path: "/bodyWeight",
    element: <BodyWeight />,
  },
  {
    path: "/pilates",
    element: <Pilates />,
  },
  {
    path: "/dance",
    element: <Dance />,
  },
  {
    path: "/jumpingrope",
    element: <JumpingRope />,
  },
  {
    path:  "/jumpingrope/:title", 
    element: <FullVideo />
  },
  {
    path:  "/dance/:title", 
    element: <FullVideo />
  },
  {
    path:  "/pilates/:title", 
    element: <FullVideo />
  },
  {
    path:  "/yoga/:title", 
    element: <FullVideo />
  },
  {
    path:  "/bodyweight/:title", 
    element: <FullVideo />
  },
  {
    path: '/Full/:id',
    element: <FullVideo />
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
