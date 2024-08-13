import React from "react";
import Screen from "./pages/Screen";
import 'leaflet/dist/leaflet.css';

import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider, RouterProps } from 'react-router-dom';
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
const App:React.FC=()=>{

  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path='/' element={<Screen/>}>
           <Route path='/contacts'  element={<Contact/>}/>
           <Route path='/chatsandmap'  element={<Dashboard/>}/>

       </Route>



    )
  );

  return(
    <div className="w-full h-screen grid place-items-center overflow-hidden"> 
      <RouterProvider router={router} />
    </div>
  )
}

export default App;