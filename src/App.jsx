import { useState } from 'react'
import './App.css'
import Darazz from './assets/component/Darazz'
import Shop from './assets/component/Shop'
import {Routes, Route} from 'react-router-dom'
import LoginPage from './assets/pages/LoginPage'
import SignUp from './assets/pages/SignUp'
import Product from './assets/component/Product'

function App() {

  return (
    <>
      <Darazz/>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<LoginPage/>}/>

        
    <Route path='/' element={
      <>
      <Product/>
      <Shop/>
      </>
    }/>
  
      </Routes>
      
      
     
      
    </>
  )
}

export default App
