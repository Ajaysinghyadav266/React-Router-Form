import "./App.css";
import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn,setLoggedIn]=useState(false);

  return <div className="w-full  h-full  bg-richblack-900 flex flex-col">
    <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}></Navbar>

    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login"  element={<LogIn setLoggedIn={setLoggedIn}/>}></Route>
      <Route path="/signup"  element={<SignUp setLoggedIn={setLoggedIn}/>}></Route>

     <Route  path="/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn}>
      <Dashboard/>
     </PrivateRoute>} />
      
      </Routes>
  </div>;
}

export default App;
