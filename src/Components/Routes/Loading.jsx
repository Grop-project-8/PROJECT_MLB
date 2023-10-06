import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    count === 0 && navigate("/");
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default LoadingToRedirect;
