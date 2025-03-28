import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div >
    <NavBar/>
    <div className='h-full w-full'>
    <Outlet/>
    </div>
    </div>

  
  )
}

export default Body