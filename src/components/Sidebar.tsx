import React from "react";

//Sidebar navigation
const Sidebar:React.FC=()=>{
    const navigationItems=['Contacts','Charts and Maps']
    return(
        <div className="w-60 h-full bg-gradient-to-r from-sky-500 to-indigo-500">
                <ul className="h-full flex flex-col justify-center items-center space-y-5">
                    {
                        navigationItems.map((item,id)=>{
                            return(
                                <li 
                                key={id}
                                className="p-3 bg-white"
                                >{item}</li>
                            )
                        })
                    }
                </ul>
        </div>
    )
}


export default Sidebar