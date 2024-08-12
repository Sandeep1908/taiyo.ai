import React from "react";
import Sidebar from "../components/Sidebar";
 


const Screen: React.FC = () => {
  return(
      <div className="w-full max-w-[1200px] h-[50rem] m-auto bg-gradient-to-r from-cyan-500 to-blue-500"  >

              <Sidebar/>

      </div>
  )
};

export default Screen;
