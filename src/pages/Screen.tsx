import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
 
import { Outlet,useNavigate } from "react-router-dom";

//importing all the components Sidebar, Contact

const Screen: React.FC = () => {

 
  const navigate=useNavigate()
  
  useEffect(()=>{  navigate('/contacts')},[])
  

 
  return (
    <div className="w-full h-full  flex m-auto bg-gradient-to-r from-cyan-500 to-blue-500">
      <Sidebar />

      <div className="w-full h-full">
          <Outlet/>
      </div>
      
    </div>
  );
};

export default Screen;
