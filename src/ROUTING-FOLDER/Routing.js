import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import Home from './Home/Home';
import Login from './Login/Login';
import Profile from './Profile/Profile';

const Routing = () => {
  return <BrowserRouter>
             <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/profile/:id/:name" element={<Profile/>}></Route>

                {/*user vanthu navigate pannatha page ku move panna try panna * method use pannalam...Method-1*/}

                {/* <Route path="*" element={<h1> NOT FOUND !</h1>}></Route> */}


                {/*user vanthu navigate pannatha page ku move panna try panna * method use pannalam...Method-2
                Navigate use panni pannalam....*/}

                <Route path="*" element={<Navigate to = {"/home"}></Navigate>}></Route> 

             </Routes>
         </BrowserRouter>;
     
}
export default Routing


//url la params and query params use pannalam:
//params:
//params => (example):   /profile/:id/:name ===> change to browser: /profile/3454/aravindh

//query params:
//query params => (example): straight ah url la pass pannikalam ===> change to browser: /profile?id=3452&\name=aravindh