import React , { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { StateContext } from '../StateContext';


const Home = () => {

const {state :{forms} , dispatch} = useContext(StateContext);
console.log(forms);

  let navigate = useNavigate()
  const formAction = () => {
     navigate('/form')
  } 

  const dltElement = (index) => {
    let temp = [...forms];
    temp.splice(index,1);
    dispatch({
      type : "TASK",
      payload : temp 
    })
  }

  const editElement = (val,index) => {
     navigate('/form')
     dispatch({
       type : "EDIT",
       payload : [val, index]
     })
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

       {forms.map((val, index) => {
        return (
          <tr key={index}>
          <td>{index + 1}</td>
          <td>{val.name}</td>
          <td>{val.description}</td>
          <td><input type='checkbox' checked={val.isComplete}></input></td>
          <td><button onClick={() => dltElement(index)}>Dlt</button></td>
          <td><button onClick={() => editElement(val,index)}>Edit</button></td>
        </tr>        
          )})}
      </table>
      <button onClick={() => formAction()}>Go to Form</button>
    </div>
  )
}
export default Home