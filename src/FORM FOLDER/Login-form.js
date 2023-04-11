import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

let userJson = [
  {
    name:"aravindh",
    pass:12345
  },
  {
    name:"selva",
    pass:1234
  },
  {
    name:"kutti",
    pass:123
  },
  {
    name:"hari",
    pass:123456
  }
]
const LoginForm = () => {
const [firstInpVal, setFirstInp] = useState("")
const [secondInpVal, setSecondInp] = useState("")
const[emptyInp, setEmptyInp] = useState(false)
 

let navigate = useNavigate()

const submitHandle = (e) => {
  e.preventDefault();

  setEmptyInp(true);

  let finder = userJson.find((e) =>  e.name == firstInpVal && e.pass == secondInpVal)
  console.log(finder);

  if(finder){
    navigate('/home')
  }
  else{
    setEmptyInp(true);
  }
}

const sameInput = (e) => {
 if (e.target.name == "inp-1") {
   setFirstInp(e.target.value);
 }
 else {
   setSecondInp(e.target.value);
 }
}

  return (
    <div>
      <form onSubmit={submitHandle}>
        <input name='inp-1' type='text' onChange={sameInput}/>
          {firstInpVal == "" && emptyInp && <h4>Please Enter Your Name</h4>}
        <input name='inp-2' type='password' onChange={sameInput}/>
          {secondInpVal == "" && emptyInp && <h4>Please Enter Your Password</h4>}
        <button type='submit'>Submit</button>  
      </form>
       {emptyInp && <h3>Your Name Is Not Registration</h3>}
    </div> 
  )
}

export default LoginForm