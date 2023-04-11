import React, { useState } from 'react'

const Form = () => {
  const [firstInpVal, setFirstInp] = useState("");
  const [secondInpVal, setSecondInp] = useState("");
  const [inputEmpty, setInputEmpty] = useState(false);
  const [checkInput, setCheckInput] = useState(false);
  const [display, setDisplay] = useState([]);

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

  // let a =[{
  //   name:firstInpVal,
  //   description:secondInpVal,
  //   isComplete:checkInput
  //  }];

  const submitHandle = (e) => {
    e.preventDefault();

    setInputEmpty(true);

    setDisplay([{
      name: firstInpVal,
      description: secondInpVal,
      isComplete: checkInput
    }])

    // a.forEach((values) => {
    //   console.log(values.name, values.description, values.isComplete);
    // })
  }
  return (
    <div>
      <form onSubmit={submitHandle}>
        <input name='inp-1' onChange={sameInput}></input>
        {firstInpVal == "" && inputEmpty && <div>Please Fill the box</div>}
        <input name='inp-2' onChange={sameInput}></input>
        {secondInpVal == "" && inputEmpty && <div>Please Fill the second box</div>}
        <input checked={checkInput} onChange={checking} type="checkbox"></input>
        <input type='submit' ></input>
      </form>

      <table className='table'>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Description</th>
          <th>Complete</th>
        </tr>
    {/*Table display................................................... */ }

      {display.map((val, index) => {
        return (
          <tr key={index}>
          <td>{index + 1}</td>
          <td>{val.name}</td>
          <td>{val.description}</td>
          <td>{val.isComplete ? "true" : "false"}</td>
        </tr>        
          )})}
      </table>

       {/* normal show display........................................... */ }

        {/* <h1>{val.name}</h1>
                     <h1>{val.description}</h1>
                     <h1>{val.isComplete ? "true" : "false"}</h1> */}

    </div>
  )
}

export default Form


       