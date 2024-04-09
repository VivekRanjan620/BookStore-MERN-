import React from 'react'
import Navbar from '../Components/Navbar'
import Course from '../Components/Course'
import Footer from '../Components/Footer'
import list from "../../public/list.json"

const courses = () => {
  console.log(list)
  return (
    <>
    <Navbar/>
   <div className='min-h-screen'>
   <Course/>
   </div>
    <Footer/>
    </>
  )
}

export default courses