import React from "react";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/mumbai-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
