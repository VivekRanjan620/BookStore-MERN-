import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from "react-router-dom"
import Courses from './Courses/Courses'

const App = () => {
  return (
    <>
    {/* <Home/>
    <Course/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>

    </Routes>
    </>
  )
}

export default App