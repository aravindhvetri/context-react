import React, {useReducer } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Form from './Form'
import { StateContext } from '../StateContext'
import { initialState, stateReducer } from '../Reducer'

const Router = () => {
    const [state,dispatch] = useReducer(stateReducer, initialState);
  return( 
        <StateContext.Provider value = {{state,dispatch}}>
         <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/form' element={<Form/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
            </Routes>
         </BrowserRouter>
       </StateContext.Provider>
      
  )
    
  
}

export default Router