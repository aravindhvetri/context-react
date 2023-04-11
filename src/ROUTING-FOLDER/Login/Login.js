import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate();

   const goToHome =() =>{
        navigate("/home");
    }

  return (
    <div> 
        <Link to={"/home?id=0604&name=iphone"}>Go To Home</Link>
        <button onClick={() => goToHome()}>Go To Home</button>

        {/* using URL params:*/}
        <Link to={"/profile/0604/iphone"}>Go To Profile</Link>
    </div>
  )
}

export default Login