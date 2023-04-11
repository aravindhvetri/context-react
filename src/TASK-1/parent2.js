import React from 'react'
import Child2 from './child2'


let employees = [ { "id": 11, "name":"Abhinav", "salary":75000 }, 
                  { "id": 2131, "name":"Gaurav", "salary":62000 }, 
                  { "id": 3012, "name":"Raj", "salary":32000 }
                ]
  
let getSalary = (data) => {

   let filtName =  employees.filter(e => {
        if(e.salary < data){
            return e;
        }
    })

   filtName.map((values, index) => {

    let names = document.getElementById("name");
    var head = document.createElement("h1");
    names.appendChild(head);
   return head.innerHTML = values.name; 

});

}        

const Parent2 = () => {
  return (
    <div> 
        <Child2 Employee = {employees}  get = {getSalary}/>
        <div id = "name">

        </div>
    </div>
   
  )
}
export default Parent2
























  // let getSalary = (data) =>{
                //  let filtName =  employees.filter(e => {
                //       if(e.salary < data){
                //         //   console.log(e.name);
                //         return e;
                //       }
                //     })
                //     let names = document.getElementById("name");
                //     filtName.map((value, index) => {
                //             var head = document.createElement("h3");
                //             names.appendChild(head)
                //         return  head.innerHTML = value.name;
                //     })
                //   }