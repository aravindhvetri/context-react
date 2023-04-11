import React , { useState } from 'react'
import {useNavigate} from 'react-router-dom'


const HomeForm = () => {
  let values = JSON.parse(localStorage.getItem("task"))
  const [display, setDisplay] = useState(values);

  let navigate = useNavigate()
  const formAction = () => {
     navigate('/form')
  } 

  let temp;
  const dltElement = (index) => {
    temp = [...display];
    temp.splice(index,1);
    setDisplay(temp);
    localStorage.setItem("task",JSON.stringify(temp))
  }
  return (
    <div>
       <table className='table'>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Description</th>
          <th>Complete</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
   {/*Table display................................................... */ }

       {display.map((val, index) => {
        return (
          <tr key={index}>
          <td>{index + 1}</td>
          <td>{val.name}</td>
          <td>{val.description}</td>
          <td><input type='checkbox' checked={val.isComplete}></input></td>
          <td><button onClick={() =>  dltElement()}>Dlt</button></td>
          <td><button onClick={() => navigate("/form", {state : [val,index]})}>Edit</button></td>
        </tr>        
          )})}
      </table>
      <button onClick={() => formAction()}>Go to Form</button>
    </div>
  )
}
export default HomeForm