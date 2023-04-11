import React from 'react'

const Child2 = (props) => {
    let getParent = props.Employee;
    console.log(getParent);
  return (
    <div>
        {getParent.map((value,index) => {
           return(<div key={index}>
                    <h1>{value.name} : {value.salary} : {value.id}</h1>
                    <button onClick={() => props.get(value.salary)}>Click me</button>
                  </div>)
        })}
    </div>
  )
}

export default Child2


















 {/* {a.map((value, i) => {
            return (<div key={i}><h1>{value.name} <span>{value.salary}</span> : <span>{value.id}</span> </h1>
                      <button onClick={() => props.get(value.salary)}>click me</button>
                   </div>)
        })
        } */}