
import React from "react";
import Template from "./Templates";
import signupImg from "../assets/signup.png"

function SignUp({setLoggedIn}){

    return (<div>
  
  <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formtype="signup"
      setLoggedIn={setLoggedIn}
    />
  


    </div>)
}

export default SignUp;