 import React from "react";
 import Logo from "../assets/Logo.svg"
 import {Link} from "react-router-dom"
 import {toast} from "react-hot-toast"

 function Navbar(props){

    const isLogeedIn=props.isLoggedIn;
    const setLoggedIn=props.setLoggedIn;

    return (<div className="flex justify-between w-11/12 max-w-[1160px] py-4 mx-auto">
        
        <div className="">
        <Link to="/">
        <img src={Logo} alt="LOGo" width={160} height={32} loading="lazy" />
        </Link>
        </div>

        <nav>


        <ul className="flex gap-x-6 text-richblack-100 ">
        <li>
            <Link to="/">
            <p>Home</p>
            </Link>
        </li>
        <li>
            <Link to="/">
            <p>About</p>
            </Link>
        </li>
        <li>
            <Link to="/">
            <p>Contact</p>
            </Link>
        </li>
     </ul>

        </nav>

    
     {/* Login - signup - logout -dashboard */}
     <div className="flex items-center  gap-x-4">
        {  !isLogeedIn &&
           <Link to="/login">
           <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 ">Log In</button>
                 </Link>
        
        }
      

      { !isLogeedIn &&
       <Link to="/signup">
       <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 " >Sign Up</button>
      
             </Link>

      }

        {  isLogeedIn &&
           <Link to="/">
           <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 " onClick={()=>{
            setLoggedIn(false);
            toast.success("Logged out");

            }}>Log out</button>
                 </Link>

        }


        { isLogeedIn  &&
<Link to="/dashboard">
<button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 ">Dashboard</button>
      </Link>
        }
      
      

     </div>

    </div>)

 }
export default Navbar;
