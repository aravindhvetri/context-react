import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginForm from './Login-form'
import Forms from './Form-form'
import HomeForm from './Home-form'

const RouterForm = () => {
  return <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginForm/>}></Route>
                <Route path='/form' element={<Forms/>}></Route>
                <Route path='/home' element={<HomeForm/>}></Route>
            </Routes>
         </BrowserRouter>
    
  
}

export default RouterForm