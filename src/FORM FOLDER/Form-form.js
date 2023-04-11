import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
let storageVal = [];


const Forms = () => {

  
  let locationState = useLocation()
  let state = locationState.state;
  console.log(state);
  
  const [firstInpVal, setFirstInp] = useState(state ? state[0].name : '');
  const [secondInpVal, setSecondInp] = useState(state ? state[0].description : "");
  const [inputEmpty, setInputEmpty] = useState(false);
  const [checkInput, setCheckInput] = useState(false);

  //input get values....................................

  const sameInput = (e) => {
    localStorage.setItem("task", JSON.stringify([]))
    if (e.target.name == "inp-1") {
      setFirstInp(e.target.value);
    }
    else {
      setSecondInp(e.target.value);
    }
  }

  //check box.............................................

  const checking = () => {
    setCheckInput(!checkInput);
  }

  //submit action.........................................
  const submitHandle = (e) => {

    e.preventDefault();
    
    setInputEmpty(true);

    let a = {
      name: firstInpVal,
      description: secondInpVal,
      isComplete: checkInput
    }

    if(state !== null){
      storageVal[state[1]] = a;

    }
    else{
      storageVal.push(a);
    }
    localStorage.setItem("task" , JSON.stringify(storageVal))
  }

  let nav = useNavigate()
  const formAction = () => {
     nav('/home')
  }

  return (
    <div>
      <form onSubmit={submitHandle}>
        <input name='inp-1' value={firstInpVal} onChange={sameInput}></input>
        {firstInpVal == "" && inputEmpty && <div>Please Fill the box</div>}
        <input name='inp-2' value={secondInpVal} onChange={sameInput}></input>
        {secondInpVal == "" && inputEmpty && <div>Please Fill the second box</div>}
        <input checked={checkInput} onChange={checking} type="checkbox"></input>
        <input type='submit' ></input>
        <button onClick={() => formAction()}>Go To Home</button>
      </form>

      {/* <table className='table'>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Description</th>
          <th>Complete</th>
        </tr> */}
    {/*Table display................................................... */ }

      {/* {storageVal.map((val, index) => {
        return (
          <tr key={index}>
          <td>{index + 1}</td>
          <td>{val.name}</td>
          <td>{val.description}</td>
          <td><input type='checkbox' checked={val.isComplete}></input></td>
        </tr>        
          )})}
      </table> */}

       {/* normal show display........................................... */ }

        {/* <h1>{val.name}</h1>
                     <h1>{val.description}</h1>
                     <h1>{val.isComplete ? "true" : "false"}</h1> */}
    </div>
  )
}

export default Forms
