
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link } from "react-router-dom";
import {toast} from "react-hot-toast"

function LoginForm({setLoggedIn}) {
    const navi=useNavigate();

    const[showPassword,setshowPassword]=useState(false);

    const [formData,setformData]= useState({email:"",password:""});

    function changeHandeler(event){
      setformData((prevData)=>{
        return {
            ...prevData,
            [event.target.name]:event.target.value
        }
    }
      )
          
    }
function sumbitHandler(event){
    event.preventDefault();
    setLoggedIn(true);
    toast.success("Logged in")
    navi("/dashboard");

    const data={...formData};
    
    console.log(data);

}


 
    
    return (<div>
        <form onSubmit={sumbitHandler}
       className="flex flex-col w-full gap-y-4 mt-6 " >
            <label className="w-full" >
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address <sup className="text-pink-200">*</sup></p>
                <input  className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] "
                required
                type="email" 
                name="email"
                value={formData.email}
                onChange={changeHandeler}
                placeholder="Enter Email...."
                />
            </label>
            <label className="w-full relative" >
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Password<sup className="text-pink-200">*</sup></p>

                <input 
                className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] "
                

                required
                type={showPassword ?("text"):("password")} 
                name="password"
                value={formData.password}
                onChange={changeHandeler}
                placeholder="Enter Password...."
                />
                <span className="absolute right-3 top-[38px] cursor-pointer " onClick={()=>setshowPassword((prev)=>!prev)}>
                    {showPassword ?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>

                <Link to="#"><p className="text-xs mt-1 text-blue-100 ml-auto max-w-max">Forgot Password</p></Link>
            
            </label>
            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-5">Sign In</button>

        </form>
    </div>)
    }
    export default LoginForm;