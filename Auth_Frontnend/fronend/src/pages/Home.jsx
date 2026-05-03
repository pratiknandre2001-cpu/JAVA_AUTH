import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup"); // navigates to the signup page
  };

  return (
    <div
      className="page-container"
      style={{
        backgroundImage: "url('/images/mumbai-bg.png')", // replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
       {/* <h1 style={{ color: "white" }}>
  Welcome to My App
</h1> */}
       
       <h1 style={{ color: "white", marginBottom: "20px" }}>
  Welcome to My App
</h1>
       
      <button 
        onClick={handleGetStarted} 
        style={{ marginTop: "62px" }}>
        Get Started
      </button>

    </div>
  );
};

export default Home;
