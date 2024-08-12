import React from "react";
import Screen from "./pages/Screen";
const App:React.FC=()=>{
  return(
    <div className="w-full h-screen grid place-items-center bg-slate-400"> 
      <Screen/>
    </div>
  )
}

export default App;