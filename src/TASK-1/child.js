import React from 'react'

function Child(props) {
   let a = props.Books;
   console.log(a);
  return (
    <div>
        {/* <button onClick={() => a.filter(function(names){
            if(names.year < 2014){
               console.log(names.name);
            }
        })
        }>CLICK ME</button>  */}

        {a.map((value, i) => {
            return <div key={i}><h1>{value.name} <span>{value.year}</span> </h1>
                      <button onClick={() => props.get(value.year)}>click me</button>
                   </div>
        })
        }
    </div>
  )

}

export default Child