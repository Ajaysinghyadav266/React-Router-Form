 import React from "react";
   import frame from "../assets/frame.png"
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import {FcGoogle} from "react-icons/fc"


 function Template({title,desc1,desc2,image,formtype,setLoggedIn}){
    return (
    <div className="flex w-11/12 h-full max-w-[1160px] justify-between py-12 mx-auto gap-x-20 gap-y-0" >
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]  ">{title}</h1>
        <p className="text-[1.25rem] leading-[1.625rem] mt-4 flex flex-col">
            <span className="text-richblack-100">{desc1}</span>
            <span className="text-blue-100 italic">{desc2}</span>
        </p>
         {formtype === "signup" ? (<SignupForm setLoggedIn={setLoggedIn}/>) : (<LoginForm setLoggedIn={setLoggedIn}/>)}

           <div className="flex w-full items-center my-4 gap-x-2">
            <div className="h-[1px] bg-richblack-700 w-full">
            </div>
            <span className="text-richblack-700 font-medium leading[1.375rem]">OR</span>
            <div className="h-[1px] bg-richblack-700 w-full"></div>
           </div>

           <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 py-[12px] gap-x-2 mt-6"> 
            <FcGoogle/>
            Sign Up Google</button>

           </div>

           <div className="relative w-11/12 max-w-[450px] ">
            <img src={frame} alt="frame"  loading="lazy" width={558} height={504}/>
            <img className="absolute -top-4 right-4"
            src={image} alt="Students"  width={558} height={504} />


           </div>
       
     
    </div>)
 }

 export default Template;