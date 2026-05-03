// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import Home from "./pages/Home";
// import Signup from "./pages/Signup";
// import SignIn from "./pages/SignIn"; // add signin page

// import "./App.css"; // include global styles

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
          
//           <Route path="/signin" element={<SignIn />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn"; 

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          {/* Routes that share the background */}
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout>
                <Signup />
              </Layout>
            }
          />
          <Route
            path="/signin"
            element={
              <Layout>
                <SignIn />
              </Layout>
            }
          />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
