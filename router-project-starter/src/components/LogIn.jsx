
import React from "react";
import Template from "./Templates";
import loginImg from "../assets/login.png"
import { useState } from "react";


function LogIn({setLoggedIn}){
    return (<div className="w-full h-full">
        <Template
          title="Welcome Back"
          desc1="Build skills for today, tomorrow, and beyond."
          desc2="Education to future-proof your career."
          image={loginImg}
          formtype="login"
          setLoggedIn={setLoggedIn}
        
        />

    </div>)
}

export default LogIn;