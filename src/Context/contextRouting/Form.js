import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { StateContext } from '../StateContext';
let storageVal = [];


const Form = () => {
  const {state, dispatch} = useContext(StateContext)
  console.log(state);

  // let locationState = useLocation()
  // let state = locationState.state;
  // console.log(state);
  
  const [firstInpVal, setFirstInp] = useState( state.edit ? state.edit[0] ?.name : '');
  const [secondInpVal, setSecondInp] = useState(state.edit ? state.edit[0] ?.description : '');
  const [inputEmpty, setInputEmpty] = useState(false);
  const [checkInput, setCheckInput] = useState(false);

  //input get values....................................

  const sameInput = (e) => {
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
    if(state.edit ?.length > 0){
      storageVal[state.edit[1]] = a
      dispatch({
        type:"EDIT",
        payload : []
      })
    }
    else{
      storageVal.push(a);
    }
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
        <input type='submit' onClick={() => dispatch({type:"TASK", payload:storageVal})} ></input>
        <button onClick={() => formAction()}>Go To Home</button>
      </form>
    </div>
  )
}

export default Form
