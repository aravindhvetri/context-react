import React from 'react'
import Child from './child'

function Parant() {
    let books = [
    {   
        name: "You Are Born to Blossom",
        year: 2011
    },
    {
        name: "Spirit of India",
        year: 2013
    },
    {
        name: "Government for Growth in india",
        year: 2014
    },
    {
        name: "The Family and the Nation",
        year: 2015
    },
    {
        name: "Mission of India",
        year: 2005
    },
    {
        name: "Wings of fire",
        year: 1999
    },
    {
        name: "The Family and the Nation",
        year: 2012
    },
    ]

let getYear = (data) =>{
  books.forEach(e => {
    if(e.year < data){
        console.log(e.name);
    }
  })
}
  return (
    <div>
    {/* <h1>HELLO</h1> */}
    <Child Books = {books} get = {getYear}/>
    </div>
  )
}

export default Parant


 