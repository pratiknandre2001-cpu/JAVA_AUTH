import React, { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8081/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        throw new Error("Signin failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);

      if (data.role === "ROLE_ADMIN") {
        setMessage("✅ Welcome Admin! You have full access.");
      } else {
        setMessage("✅ Welcome User! Limited access granted.");
      }
    } catch (err) {
      setMessage("❌ Signin failed. Please check your credentials.");
    }
  };

  return (
     <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh", // leaves space below navbar
      }}
    >
      <form onSubmit={handleSubmit} style={{
        background: "#f9f9f9",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        width: "300px",
        color: "#333"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Sign In</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />
        <button type="submit">Sign In</button>
        {message && <p style={{ marginTop: "15px", textAlign: "center" }}>{message}</p>}
      </form>
    </div>
  );
};

export default SignIn;
