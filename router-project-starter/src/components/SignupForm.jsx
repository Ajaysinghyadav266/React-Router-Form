
import React, { useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {toast} from "react-hot-toast"
import {  useNavigate } from "react-router-dom";
function SignupForm({setLoggedIn}){
    const navi=useNavigate();
    const [accountType,setAccountType]=useState("student")
    const[showPassword,setshowPassword]=useState(false);
    const[showPassword1,setshowPassword1]=useState(false);
    const[FormData,setFormData]=useState({firstName:"",lastName:"",
        email:"",
    password:"",
      confirmPassword:""})


      function changeHandeler(event){
        
        setFormData(prevData=>{
            return {
                ...prevData,
                [event.target.name]:event.target.value
            }
        })
    }


    function sumbitHandler(event){
        event.preventDefault();

        if(FormData.password!=FormData.confirmPassword){
            toast.error("Password don't Match");
            return;
        }
        const data={...FormData,accountType};
        console.log("sign in form")
        console.log(data);
        setLoggedIn(true);
        toast.success("Account Created");

        navi("/dashboard");
    
        
    
    }
    
return (
    <div>
      {/* Student -Instruductor Tab */}
      <div className="flex  bg-richblack-800 gap-x-1 my-6 rounded-full max-w-max">
            <button 
            className={`${accountType==="student"?"bg-richblack-900 text-richblack-5  " :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=>setAccountType("student")}>Student</button>
            <button 
             className={`${accountType==="instructor"?"bg-richblack-900 text-richblack-5  " :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("instructor")}>Instructor</button>
        </div>
        <form  onSubmit={sumbitHandler}  >

            <div className="flex gap-x-4 mt-4">
            <label className="w-full" >
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]" >First Name<sup className="text-pink-200">*</sup></p>
                <input 
                required
                type="text"
                value={FormData.firstName}
                name="firstName"
                placeholder="Enter First Name"
                className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] "
                onChange={changeHandeler}
                />
            </label>
           < label  className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"  >Last Name<sup className="text-pink-200">*</sup></p>
                <input 
                required
                type="text"
                value={FormData.lastName}
                className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] "
                name="lastName"
                placeholder="Enter Last Name"
                onChange={changeHandeler}
                />
            </label>

             

            </div>
            {/* Email */}
            <label >
                <p className="text-[0.875rem] mt-4 text-richblack-5 mb-1 leading-[1.375rem]">Email<sup className="text-pink-200">*</sup></p>
                <input 
                required
                type="email"
                className=" w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] "
                value={FormData.email}
                name="email"
                placeholder="Enter Email"
                onChange={changeHandeler}
                />
            </label>

           {/* CreatPassword and confirm ppassword */}

           <div className="flex gap-x-4 mt-4">

           <label className="relative w-full" >
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password<sup className="text-pink-200">*</sup></p>
                <input 
                required
                type={showPassword ?("text"):("password")} 
                value={FormData.password}
                className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] "
                name="password"
                placeholder="Enter Password"
                onChange={changeHandeler}
                />

                <span className="absolute right-3 top-[38px] cursor-pointer "onClick={()=>setshowPassword((prev)=>!prev)}>
                    {showPassword ?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>
            <label className="relative w-full" >
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password<sup className="text-pink-200">*</sup></p>
                <input 
                required
                type={showPassword1 ?("text"):("password")} 
                value={FormData.confirmPassword}
                name="confirmPassword"
                className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] "
                placeholder="Confirm Password"
                onChange={changeHandeler}
                />

                <span  className="absolute right-3 top-[38px]  cursor-pointer " onClick={()=>setshowPassword1((prev)=>!prev)}>
                    {showPassword1 ?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>
           </div>

           <button className="bg-yellow-50 w-full rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-5">Create Account</button>

        </form>
    </div>
)
}
export default SignupForm;